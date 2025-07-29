"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts'
import { TrendingUp, TrendingDown, Activity, Clock } from 'lucide-react'

const ticketVolumeData = [
  { month: 'Jan', tickets: 1200, resolved: 1150 },
  { month: 'Feb', tickets: 1100, resolved: 1080 },
  { month: 'Mar', tickets: 1300, resolved: 1250 },
  { month: 'Apr', tickets: 950, resolved: 940 },
  { month: 'May', tickets: 1050, resolved: 1030 },
  { month: 'Jun', tickets: 900, resolved: 890 }
]

const slaPerformanceData = [
  { week: 'W1', sla: 99.2 },
  { week: 'W2', sla: 99.8 },
  { week: 'W3', sla: 98.9 },
  { week: 'W4', sla: 99.7 },
  { week: 'W5', sla: 99.9 },
  { week: 'W6', sla: 99.5 }
]

const priorityDistribution = [
  { name: 'P1 - Critical', value: 5, color: '#ef4444' },
  { name: 'P2 - High', value: 15, color: '#f97316' },
  { name: 'P3 - Medium', value: 45, color: '#eab308' },
  { name: 'P4 - Low', value: 35, color: '#22c55e' }
]

const resolutionTimeData = [
  { category: 'Hardware', avgTime: 2.5 },
  { category: 'Software', avgTime: 1.8 },
  { category: 'Network', avgTime: 3.2 },
  { category: 'Security', avgTime: 4.1 },
  { category: 'Access', avgTime: 0.9 }
]

const chartConfig = {
  tickets: {
    label: "Total Tickets",
    color: "hsl(var(--primary))",
  },
  resolved: {
    label: "Resolved",
    color: "hsl(142 76% 36%)",
  },
  sla: {
    label: "SLA Performance",
    color: "hsl(142 76% 36%)",
  },
}

export function ITSMCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Ticket Volume Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Ticket Volume Trend
            </CardTitle>
            <CardDescription>Monthly ticket volume and resolution rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <AreaChart data={ticketVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="tickets"
                  stackId="1"
                  stroke="var(--color-tickets)"
                  fill="var(--color-tickets)"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="resolved"
                  stackId="2"
                  stroke="var(--color-resolved)"
                  fill="var(--color-resolved)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* SLA Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              SLA Performance
            </CardTitle>
            <CardDescription>Weekly service level agreement compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <LineChart data={slaPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[98, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="sla"
                  stroke="var(--color-sla)"
                  strokeWidth={3}
                  dot={{ fill: 'var(--color-sla)', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Priority Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Priority Distribution
            </CardTitle>
            <CardDescription>Incident priority breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <PieChart>
                <Pie
                  data={priorityDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {priorityDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {priorityDistribution.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-muted-foreground">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Resolution Time by Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              Resolution Time by Category
            </CardTitle>
            <CardDescription>Average resolution time in hours</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <BarChart data={resolutionTimeData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="category" type="category" width={80} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="avgTime"
                  fill="hsl(var(--primary))"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export function ITSMMetrics() {
  const metrics = [
    {
      title: "Active Incidents",
      value: "23",
      change: "-12%",
      trend: "down",
      icon: Activity,
      description: "Currently open incidents"
    },
    {
      title: "MTTR",
      value: "1.8h",
      change: "-15%",
      trend: "down",
      icon: Clock,
      description: "Mean time to resolution"
    },
    {
      title: "First Call Resolution",
      value: "87%",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
      description: "Resolved on first contact"
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      icon: TrendingUp,
      description: "Average satisfaction rating"
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className="w-5 h-5 text-muted-foreground" />
                <Badge
                  variant={metric.trend === 'up' ? 'default' : 'secondary'}
                  className={`text-xs ${
                    metric.trend === 'up'
                      ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                      : 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                  }`}
                >
                  {metric.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  {metric.change}
                </Badge>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">{metric.title}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
