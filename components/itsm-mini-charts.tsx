"use client"

import React from 'react'

// Mini Chart Components for MacBook Dashboard
export const MiniAreaChart = ({ data, color = 'blue', height = 20 }: {
  data: number[]
  color?: string
  height?: number
}) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = ((max - value) / range) * height
    return `${x},${y}`
  }).join(' ')

  const pathData = `M 0,${height} L ${points} L 100,${height} Z`

  return (
    <div className="relative" style={{ height: `${height}px` }}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 100 ${height}`}
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={`var(--${color}-400)`} stopOpacity="0.8" />
            <stop offset="100%" stopColor={`var(--${color}-400)`} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d={pathData}
          fill={`url(#gradient-${color})`}
          className={`stroke-${color}-400`}
          strokeWidth="0.5"
        />
        <polyline
          points={points}
          fill="none"
          className={`stroke-${color}-400`}
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export const MiniBarChart = ({ data, color = 'emerald', height = 16 }: {
  data: number[]
  color?: string
  height?: number
}) => {
  const max = Math.max(...data)

  return (
    <div className="flex items-end gap-0.5" style={{ height: `${height}px` }}>
      {data.map((value, index) => (
        <div
          key={index}
          className={`bg-${color}-400 rounded-t-sm transition-all duration-300 flex-1 min-w-0`}
          style={{ height: `${(value / max) * height}px` }}
        />
      ))}
    </div>
  )
}

export const MiniDonutChart = ({ percentage, color = 'blue', size = 16 }: {
  percentage: number
  color?: string
  size?: number
}) => {
  const radius = (size - 2) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-white/20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className={`text-${color}-400 transition-all duration-500`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-[6px] font-bold text-${color}-400`}>
          {percentage}
        </span>
      </div>
    </div>
  )
}

export const MiniSparkline = ({ data, color = 'purple', width = 40, height = 12 }: {
  data: number[]
  color?: string
  width?: number
  height?: number
}) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width
    const y = ((max - value) / range) * height
    return `${x},${y}`
  }).join(' ')

  return (
    <svg width={width} height={height} className="inline-block">
      <polyline
        points={points}
        fill="none"
        className={`stroke-${color}-400`}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Highlight last point */}
      {data.length > 0 && (
        <circle
          cx={(data.length - 1) / (data.length - 1) * width}
          cy={((max - data[data.length - 1]) / range) * height}
          r="1"
          className={`fill-${color}-400`}
        />
      )}
    </svg>
  )
}

export const MiniHeatmap = ({ data, colors = ['emerald', 'amber', 'red'] }: {
  data: number[][]
  colors?: string[]
}) => {
  const max = Math.max(...data.flat())
  
  return (
    <div className="grid grid-cols-7 gap-0.5">
      {data.flat().map((value, index) => {
        const intensity = value / max
        const colorIndex = Math.floor(intensity * (colors.length - 1))
        const color = colors[colorIndex] || colors[0]
        
        return (
          <div
            key={index}
            className={`w-1 h-1 rounded-sm bg-${color}-400 transition-all duration-200`}
            style={{ opacity: 0.3 + intensity * 0.7 }}
          />
        )
      })}
    </div>
  )
}

export const MiniGauge = ({ value, max = 100, color = 'blue', size = 20 }: {
  value: number
  max?: number
  color?: string
  size?: number
}) => {
  const percentage = (value / max) * 100
  const angle = (percentage / 100) * 180 - 90

  return (
    <div className="relative" style={{ width: `${size}px`, height: `${size / 2}px` }}>
      <svg
        width={size}
        height={size / 2}
        className="absolute inset-0"
      >
        <path
          d={`M 2 ${size / 2 - 2} A ${size / 2 - 2} ${size / 2 - 2} 0 0 1 ${size - 2} ${size / 2 - 2}`}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-white/20"
        />
        <path
          d={`M 2 ${size / 2 - 2} A ${size / 2 - 2} ${size / 2 - 2} 0 0 1 ${size - 2} ${size / 2 - 2}`}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray={`${(percentage / 100) * Math.PI * (size / 2 - 2)} ${Math.PI * (size / 2 - 2)}`}
          className={`text-${color}-400 transition-all duration-500`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-end justify-center pb-0.5">
        <span className={`text-[5px] font-bold text-${color}-400`}>
          {value}
        </span>
      </div>
    </div>
  )
}

// Real-time data simulation
export const useRealTimeData = (initialData: number[], updateInterval = 2000) => {
  const [data, setData] = React.useState(initialData)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1)]
        const lastValue = prevData[prevData.length - 1]
        const variation = (Math.random() - 0.5) * 10
        const newValue = Math.max(0, Math.min(100, lastValue + variation))
        newData.push(newValue)
        return newData
      })
    }, updateInterval)

    return () => clearInterval(interval)
  }, [updateInterval])

  return data
}

// Sample data generators
export const generateSampleData = {
  trend: (length: number = 10) => 
    Array.from({ length }, (_, i) => 50 + Math.sin(i * 0.5) * 20 + Math.random() * 10),
  
  performance: (length: number = 7) =>
    Array.from({ length }, () => 70 + Math.random() * 25),
  
  heatmap: (weeks: number = 4, days: number = 7) =>
    Array.from({ length: weeks }, () =>
      Array.from({ length: days }, () => Math.floor(Math.random() * 100))
    ),
  
  gauge: () => 60 + Math.random() * 35
}
