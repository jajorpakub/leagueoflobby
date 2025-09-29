import React, { useState, useEffect } from 'react'
import ItemService, { Item } from '../services/itemService'
import './Items.css'

interface TooltipState {
  visible: boolean
  x: number
  y: number
  item: Item | null
}

const Items: React.FC = () => {
  const [allItems, setAllItems] = useState<Item[]>([])
  const [filteredItems, setFilteredItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [itemService] = useState(() => ItemService.getInstance())
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, x: 0, y: 0, item: null })
  const [filtersExpanded, setFiltersExpanded] = useState(false)
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set())
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [showSR, setShowSR] = useState(true)
  const [showARAM, setShowARAM] = useState(true)
  const [showArena, setShowArena] = useState(true)
  const [showOther, setShowOther] = useState(false)
  const [showHidden, setShowHidden] = useState(false)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'rarity'>('price')

  // Available tags for filtering
  const itemTags = [
    'Damage', 'CriticalStrike', 'AttackSpeed', 'OnHit', 'ArmorPenetration',
    'SpellDamage', 'Mana', 'ManaRegen', 'SpellVamp', 'MagicPenetration',
    'Health', 'HealthRegen', 'Armor', 'SpellBlock', 'Slow',
    'Boots', 'Trinket', 'Consumable', 'Active', 'Stealth',
    'Vision', 'NonbootsMovement', 'Tenacity', 'GoldPer', 'Jungle'
  ]

  // Load items from API
  useEffect(() => {
    const loadItems = async () => {
      try {
        setLoading(true)
        const items = await itemService.getAllItems()
        setAllItems(items)
        setError(null)
      } catch (err) {
        setError('Błąd podczas ładowania itemów. Sprawdź połączenie z internetem.')
        console.error('Error loading items:', err)
      } finally {
        setLoading(false)
      }
    }

    loadItems()
  }, [itemService])

  // Filter items based on current filters
  useEffect(() => {
    let filtered = itemService.getItemsByGameMode(showSR, showARAM, showArena, showOther)

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.plaintext.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by tags
    if (selectedTags.size > 0) {
      filtered = filtered.filter(item =>
        item.tags.some(tag => selectedTags.has(tag))
      )
    }

    // Filter by price
    filtered = filtered.filter(item =>
      item.gold.total >= priceRange.min && item.gold.total <= priceRange.max
    )

    // Remove items that shouldn't be shown
    if (!showHidden) {
      filtered = filtered.filter(item => 
        item.gold.purchasable !== false &&
        !item.hideFromAll &&
        item.inStore !== false &&
        item.name !== ''
      )
    } else {
      // Only filter out items with empty names when showing hidden items
      filtered = filtered.filter(item => item.name !== '')
    }

    // Sort items
    filtered = sortItems(filtered)

    setFilteredItems(filtered)
  }, [itemService, allItems, searchTerm, selectedTags, showSR, showARAM, showArena, showOther, showHidden, priceRange, sortBy])

  const toggleTag = (tag: string) => {
    const newTags = new Set(selectedTags)
    if (selectedTags.has(tag)) {
      newTags.delete(tag)
    } else {
      newTags.add(tag)
    }
    setSelectedTags(newTags)
  }

  const toggleCategoryCollapse = (category: string) => {
    const newCollapsed = new Set(collapsedCategories)
    if (collapsedCategories.has(category)) {
      newCollapsed.delete(category)
    } else {
      newCollapsed.add(category)
    }
    setCollapsedCategories(newCollapsed)
  }

  const handleMouseEnter = (event: React.MouseEvent, item: Item) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setTooltip({
      visible: true,
      x: rect.right + 10,
      y: rect.top,
      item
    })
  }

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, item: null })
  }

  const getItemRarity = (item: Item): string => {
    if (item.gold.total >= 3000) return 'legendary'
    if (item.gold.total >= 1000) return 'epic'
    return 'basic'
  }

  const getRarityName = (rarity: string): string => {
    switch (rarity) {
      case 'legendary': return 'Legendarne'
      case 'epic': return 'Pryzmatyczne'
      case 'basic': return 'Zwykłe'
      default: return 'Zwykłe'
    }
  }

  const sortItems = (items: Item[]): Item[] => {
    return [...items].sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return b.gold.total - a.gold.total
        case 'name':
          return a.name.localeCompare(b.name)
        case 'rarity':
          const rarityOrder = { 'legendary': 3, 'epic': 2, 'basic': 1 }
          const aRarity = getItemRarity(a) as keyof typeof rarityOrder
          const bRarity = getItemRarity(b) as keyof typeof rarityOrder
          return rarityOrder[bRarity] - rarityOrder[aRarity]
        default:
          return 0
      }
    })
  }

  if (loading) {
    return (
      <div className="items">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Ładowanie itemów z Riot Games Data Dragon API...</p>
          <p>Pobieranie najnowszych danych...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="items">
        <div className="error-container">
          <h3>❌ Błąd ładowania</h3>
          <p>{error}</p>
          <p>Spróbuj odświeżyć stronę lub sprawdź połączenie z internetem.</p>
          <button onClick={() => window.location.reload()}>🔄 Spróbuj ponownie</button>
        </div>
      </div>
    )
  }

  return (
    <div className="items">
      <div className="items-header">
        <h1>🛡️ Wszystkie Itemy</h1>
        <p>Aktualnie dostępnych: <strong>{allItems.length}</strong> itemów z oficjalnego Riot Games API</p>
        <p className="api-info">📡 Dane pobrane na żywo z Data Dragon API</p>
      </div>

      <div className="items-controls">
        <div className="controls-header" onClick={() => setFiltersExpanded(!filtersExpanded)}>
          <h3>� Filtry i wyszukiwanie</h3>
          <button className="expand-button">
            {filtersExpanded ? '🔼 Zwiń filtry' : '🔽 Rozwiń filtry'}
          </button>
        </div>
        
        <div className="controls-quick">
          <input
            type="text"
            placeholder="Szukaj itemów..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input-compact"
          />
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as 'price' | 'name' | 'rarity')}
            className="sort-select"
          >
            <option value="price">Sortuj: Cena ↓</option>
            <option value="name">Sortuj: Nazwa A-Z</option>
            <option value="rarity">Sortuj: Rzadkość</option>
          </select>
        </div>

        {filtersExpanded && (
          <div className="items-filters">
            <div className="filter-row">
              <div className="filter-section-compact">
                <h4>🗺️ Tryby gry</h4>
                <div className="checkbox-group-compact">
                  <label className={`checkbox-label-compact ${showSR ? 'active' : ''}`}>
                    <input
                      type="checkbox"
                      checked={showSR}
                      onChange={(e) => setShowSR(e.target.checked)}
                    />
                    Summoner's Rift
                  </label>
                  <label className={`checkbox-label-compact ${showARAM ? 'active' : ''}`}>
                    <input
                      type="checkbox"
                      checked={showARAM}
                      onChange={(e) => setShowARAM(e.target.checked)}
                    />
                    ARAM
                  </label>
                  <label className={`checkbox-label-compact ${showArena ? 'active' : ''}`}>
                    <input
                      type="checkbox"
                      checked={showArena}
                      onChange={(e) => setShowArena(e.target.checked)}
                    />
                    Arena
                  </label>
                  <label className={`checkbox-label-compact ${showOther ? 'active' : ''}`}>
                    <input
                      type="checkbox"
                      checked={showOther}
                      onChange={(e) => setShowOther(e.target.checked)}
                    />
                    Specjalne
                  </label>
                  <label className={`checkbox-label-compact ${showHidden ? 'active' : ''}`}>
                    <input
                      type="checkbox"
                      checked={showHidden}
                      onChange={(e) => setShowHidden(e.target.checked)}
                    />
                    Ukryte itemy
                  </label>
                </div>
              </div>

              <div className="filter-section-compact">
                <h4>💰 Cena</h4>
                <div className="price-range-compact">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) }))}
                  />
                  <span>{priceRange.min}g</span>
                  <span> - </span>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
                  />
                  <span>{priceRange.max}g</span>
                </div>
              </div>
            </div>

            <div className="filter-section-compact">
              <h4>🏷️ Kategorie</h4>
              <div className="tags-grid-compact">
                {itemTags.map(tag => (
                  <button
                    key={tag}
                    className={`tag-button-compact ${selectedTags.has(tag) ? 'active' : ''}`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="items-results">
        <p>Pokazano {filteredItems.length} z {allItems.length} itemów</p>
        {!showHidden && (
          <p className="hidden-items-info">
            💡 Ukryto {allItems.length - filteredItems.length} itemów (jungle itemy, eventy, itp.). 
            Zaznacz "Ukryte itemy" aby je zobaczyć.
          </p>
        )}
        
        {/* Group items by rarity */}
        {['legendary', 'epic', 'basic'].map(rarity => {
          const itemsInCategory = filteredItems.filter(item => getItemRarity(item) === rarity)
          if (itemsInCategory.length === 0) return null
          const isCollapsed = collapsedCategories.has(rarity)
          
          return (
            <div key={rarity} className={`rarity-section ${rarity}`}>
              <h3 
                className="rarity-header clickable" 
                onClick={() => toggleCategoryCollapse(rarity)}
              >
                <span className="collapse-icon">{isCollapsed ? '🔽' : '🔼'}</span>
                {getRarityName(rarity)} ({itemsInCategory.length})
              </h3>
              {!isCollapsed && (
                <div className="items-grid">
                  {itemsInCategory.map(item => (
                    <div
                      key={item.id}
                      className={`item-card ${getItemRarity(item)}`}
                      onMouseEnter={(e) => handleMouseEnter(e, item)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="item-image-container">
                        <img
                          src={itemService.getItemImageUrl(item)}
                          alt={item.name}
                          className="item-image"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const container = target.parentElement;
                            if (container) {
                              container.innerHTML = `<div class="item-fallback">${item.name.charAt(0)}</div>`;
                            }
                          }}
                        />
                      </div>
                      <div className="item-info">
                        <h4 className="item-name">{item.name}</h4>
                        <p className="item-price">{item.gold.total}g</p>
                        <div className="item-tags">
                          {item.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="item-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {tooltip.visible && tooltip.item && (
        <div
          className="item-tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            position: 'fixed',
            zIndex: 1000
          }}
        >
          <div className="tooltip-header">
            <img
              src={itemService.getItemImageUrl(tooltip.item)}
              alt={tooltip.item.name}
              className="tooltip-image"
            />
            <div>
              <h4>{tooltip.item.name}</h4>
              <p className="tooltip-price">{tooltip.item.gold.total}g</p>
            </div>
          </div>
          
          <div className="tooltip-description">
            <p>{tooltip.item.plaintext}</p>
            {itemService.cleanDescription(tooltip.item.description) && (
              <div
                className="tooltip-effects"
                dangerouslySetInnerHTML={{
                  __html: tooltip.item.description
                }}
              />
            )}
          </div>

          <div className="tooltip-stats">
            {itemService.formatStats(tooltip.item.stats).map((stat, index) => (
              <div key={index} className="stat-line">
                {stat}
              </div>
            ))}
          </div>

          {tooltip.item.from && tooltip.item.from.length > 0 && (
            <div className="tooltip-build">
              <h5>Buduje się z:</h5>
              <div className="build-components">
                {itemService.getBuildPath(tooltip.item.id).map(component => (
                  <div key={component.id} className="build-component">
                    <img
                      src={itemService.getItemImageUrl(component)}
                      alt={component.name}
                      className="component-image"
                    />
                    <span>{component.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tooltip.item.into && tooltip.item.into.length > 0 && (
            <div className="tooltip-builds-into">
              <h5>Buduje się w:</h5>
              <div className="builds-into-components">
                {itemService.getBuildsInto(tooltip.item.id).map(upgrade => (
                  <div key={upgrade.id} className="build-component">
                    <img
                      src={itemService.getItemImageUrl(upgrade)}
                      alt={upgrade.name}
                      className="component-image"
                    />
                    <span>{upgrade.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Items