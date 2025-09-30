import React, { useState, useEffect } from 'react'
import MatchHistoryService from '../services/matchHistoryService'
import './ApiStatus.css'

interface ApiStatusProps {
  className?: string
}

const ApiStatus: React.FC<ApiStatusProps> = ({ className = '' }) => {
  const [apiStatus, setApiStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking')
  const [lastCheck, setLastCheck] = useState<Date | null>(null)
  const service = MatchHistoryService.getInstance()

  // Data ważności API key
  const apiExpiryDate = new Date('2025-10-01T23:25:00+02:00') // 1 października 2025, 23:25 (czas lokalny)
  const currentDate = new Date()
  const isExpired = currentDate > apiExpiryDate
  const timeUntilExpiry = apiExpiryDate.getTime() - currentDate.getTime()
  const hoursUntilExpiry = Math.floor(timeUntilExpiry / (1000 * 60 * 60))
  const minutesUntilExpiry = Math.floor((timeUntilExpiry % (1000 * 60 * 60)) / (1000 * 60))

  useEffect(() => {
    checkApiStatus()
    // Sprawdzaj status co 5 minut
    const interval = setInterval(checkApiStatus, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const checkApiStatus = async () => {
    setApiStatus('checking')
    try {
      // Sprawdź czy service używa prawdziwego API
      if (!service.isUsingRealAPI()) {
        setApiStatus('disconnected')
        setLastCheck(new Date())
        return
      }

      // Spróbuj wykonać test request (sprawdź przykładowego gracza)
      await service.getSummonerByRiotId('test', 'EUNE')
      setApiStatus('connected')
    } catch (error) {
      // Sprawdź typ błędu
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      if (errorMessage.includes('401') || errorMessage.includes('403') || errorMessage.includes('Nieprawidłowy klucz')) {
        setApiStatus('disconnected')
      } else if (errorMessage.includes('404') || errorMessage.includes('nie został znaleziony')) {
        // 404 oznacza że API działa, ale gracz nie istnieje - to OK
        setApiStatus('connected')
      } else {
        setApiStatus('disconnected')
      }
    } finally {
      setLastCheck(new Date())
    }
  }

  const getStatusInfo = () => {
    if (isExpired) {
      return {
        icon: '🔴',
        text: 'API Key wygasł',
        detail: `Wygasł: ${apiExpiryDate.toLocaleDateString('pl-PL')} o ${apiExpiryDate.toLocaleTimeString('pl-PL')}`,
        className: 'status-expired'
      }
    }

    switch (apiStatus) {
      case 'checking':
        return {
          icon: '🔄',
          text: 'Sprawdzanie połączenia...',
          detail: 'Testowanie Riot API',
          className: 'status-checking'
        }
      case 'connected':
        return {
          icon: '🟢',
          text: 'API Połączone',
          detail: `Wygasa za: ${hoursUntilExpiry}h ${minutesUntilExpiry}m`,
          className: 'status-connected'
        }
      case 'disconnected':
        return {
          icon: '🔴',
          text: 'API Niepołączone',
          detail: 'Sprawdź klucz API lub połączenie',
          className: 'status-disconnected'
        }
    }
  }

  const status = getStatusInfo()

  return (
    <div className={`api-status ${status.className} ${className}`}>
      <div className="api-status-main">
        <span className="api-status-icon">{status.icon}</span>
        <div className="api-status-info">
          <div className="api-status-text">{status.text}</div>
          <div className="api-status-detail">{status.detail}</div>
        </div>
        <button 
          className="api-refresh-btn"
          onClick={checkApiStatus}
          disabled={apiStatus === 'checking'}
          title="Odśwież status"
        >
          🔄
        </button>
      </div>
      
      {lastCheck && (
        <div className="api-last-check">
          Ostatnie sprawdzenie: {lastCheck.toLocaleTimeString('pl-PL')}
        </div>
      )}
      
      <div className="api-expiry-info">
        <div className="api-expiry-date">
          <strong>Ważność klucza:</strong> 1 października 2025, 23:25
        </div>
        {!isExpired && timeUntilExpiry < 24 * 60 * 60 * 1000 && (
          <div className="api-expiry-warning">
            ⚠️ Klucz wygasa w ciągu 24 godzin!
          </div>
        )}
      </div>
    </div>
  )
}

export default ApiStatus