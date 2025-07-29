"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Server,
  Shield,
  Zap,
  BarChart3,
  Settings,
  Bell,
  RefreshCw,
  Filter,
  Download,
  Eye,
  ArrowUp,
  ArrowDown,
  Minus,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Timer,
  Target,
  Cpu,
  HardDrive,
  Network,
  Database
} from 'lucide-react'
import { ITSMCharts, ITSMMetrics } from '@/components/itsm-charts'

export default function ITSMDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }

  const metrics = [
    {
      title: "SLA Compliance",
      value: "99.97%",
      change: "+0.3%",
      trend: "up",
      icon: Target,
      description: "Service Level Agreement adherence",
      target: 99.5,
      current: 99.97
    },
    {
      title: "Mean Resolution Time",
      value: "1.8h",
      change: "-12%",
      trend: "down",
      icon: Timer,
      description: "Average time to resolve incidents",
      target: 2.0,
      current: 1.8
    },
    {
      title: "Active Incidents",
      value: "23",
      change: "-5%",
      trend: "down",
      icon: AlertCircle,
      description: "Currently open incidents",
      target: 30,
      current: 23
    },
    {
      title: "AI Accuracy",
      value: "96.4%",
      change: "+2.1%",
      trend: "up",
      icon: Zap,
      description: "AI-powered resolution accuracy",
      target: 95.0,
      current: 96.4
    }
  ]

  const systemHealth = [
    { name: "CPU Usage", value: 68, status: "healthy", icon: Cpu },
    { name: "Memory", value: 74, status: "warning", icon: HardDrive },
    { name: "Network", value: 92, status: "healthy", icon: Network },
    { name: "Database", value: 45, status: "healthy", icon: Database }
  ]

  const recentIncidents = [
    {
      id: "INC-2024-0847",
      title: "Exchange Server Performance Degradation",
      description: "Email server experiencing high latency and connection timeouts",
      priority: "P1",
      status: "In Progress",
      assignee: {
        name: "Sarah Chen",
        avatar: "",
        initials: "SC"
      },
      reporter: "John Smith",
      category: "Infrastructure",
      time: "2 min ago",
      severity: "critical",
      sla: "2h remaining",
      progress: 65
    },
    {
      id: "INC-2024-0848",
      title: "VPN Connection Intermittent Failures",
      description: "Multiple users reporting VPN disconnections during peak hours",
      priority: "P2",
      status: "Assigned",
      assignee: {
        name: "Mike Rodriguez",
        avatar: "",
        initials: "MR"
      },
      reporter: "IT Helpdesk",
      category: "Network",
      time: "15 min ago",
      severity: "warning",
      sla: "4h remaining",
      progress: 25
    },
    {
      id: "INC-2024-0849",
      title: "Printer Network Configuration",
      description: "Floor 3 printers unable to connect to network after maintenance",
      priority: "P3",
      status: "Resolved",
      assignee: {
        name: "AI Assistant",
        avatar: "",
        initials: "AI"
      },
      reporter: "Facilities Team",
      category: "Hardware",
      time: "1 hour ago",
      severity: "success",
      sla: "Completed",
      progress: 100
    }
  ]

  const skillMatching = [
    {
      ticket: "INC-2024-0847",
      engineer: {
        name: "Sarah Chen",
        avatar: "",
        initials: "SC",
        department: "Infrastructure Team"
      },
      match: 98,
      confidence: "High",
      skills: ["Exchange Server", "Performance Tuning", "Windows Server", "SQL Database"],
      availability: "Available",
      workload: 75
    },
    {
      ticket: "INC-2024-0848",
      engineer: {
        name: "Mike Rodriguez",
        avatar: "",
        initials: "MR",
        department: "Network Security"
      },
      match: 94,
      confidence: "High",
      skills: ["Network Security", "VPN", "Cisco", "Firewall"],
      availability: "Available",
      workload: 60
    },
    {
      ticket: "INC-2024-0849",
      engineer: {
        name: "AI Assistant",
        avatar: "",
        initials: "AI",
        department: "Automated Systems"
      },
      match: 89,
      confidence: "Medium",
      skills: ["Hardware Setup", "Network Config", "Automated Resolution"],
      availability: "Always Available",
      workload: 30
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-6 space-y-6">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></div>
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 opacity-75"></div>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  AKRIN ITSM Console
                </h1>
                <p className="text-sm text-muted-foreground">Real-time IT Service Management</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge variant="default" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></div>
                LIVE
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Zap className="w-3 h-3 mr-1" />
                AI POWERED
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={refreshing}
              className="gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </Button>
          </div>
        </motion.div>

        {/* Enhanced KPI Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <metric.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">{metric.value}</CardTitle>
                        <CardDescription className="text-xs">{metric.title}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant={metric.trend === 'up' ? 'default' : 'secondary'}
                      className={`gap-1 ${
                        metric.trend === 'up'
                          ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                          : 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                      }`}
                    >
                      {metric.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      {metric.change}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Target: {metric.target}{metric.title.includes('%') ? '%' : metric.title.includes('h') ? 'h' : ''}</span>
                      <span>{((metric.current / metric.target) * 100).toFixed(1)}%</span>
                    </div>
                    <Progress
                      value={(metric.current / metric.target) * 100}
                      className="h-2"
                    />
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* System Health Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                System Health
              </CardTitle>
              <CardDescription>Real-time infrastructure monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {systemHealth.map((system, index) => (
                  <div key={system.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <system.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{system.name}</span>
                      </div>
                      <Badge
                        variant={system.status === 'healthy' ? 'default' : 'destructive'}
                        className={`text-xs ${
                          system.status === 'healthy'
                            ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-600 border-amber-500/20'
                        }`}
                      >
                        {system.value}%
                      </Badge>
                    </div>
                    <Progress
                      value={system.value}
                      className={`h-2 ${
                        system.status === 'warning' ? '[&>div]:bg-amber-500' : '[&>div]:bg-emerald-500'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* System Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Alert className="border-amber-500/20 bg-amber-500/10">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <strong>Memory Usage Alert:</strong> Server cluster experiencing elevated memory usage (74%).
              Monitoring for potential performance impact.
            </AlertDescription>
          </Alert>
        </motion.div>

        {/* Main Dashboard Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="overview" className="gap-2">
                <Eye className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="incidents" className="gap-2">
                <AlertTriangle className="w-4 h-4" />
                Incidents
              </TabsTrigger>
              <TabsTrigger value="analytics" className="gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="team" className="gap-2">
                <Users className="w-4 h-4" />
                Team
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* AI Skill Matching */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      AI Skill Matching
                    </CardTitle>
                    <CardDescription>Intelligent engineer assignment based on expertise</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skillMatching.slice(0, 3).map((match, index) => (
                      <motion.div
                        key={match.ticket}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        className="p-4 rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={match.engineer.avatar} />
                              <AvatarFallback className="text-xs">{match.engineer.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{match.engineer.name}</p>
                              <p className="text-xs text-muted-foreground">{match.engineer.department}</p>
                            </div>
                          </div>
                          <Badge
                            variant={match.match > 95 ? 'default' : 'secondary'}
                            className={match.match > 95 ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' : ''}
                          >
                            {match.match}% match
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Ticket: {match.ticket}</span>
                            <span className={`font-medium ${
                              match.availability === 'Available' ? 'text-emerald-600' : 'text-amber-600'
                            }`}>
                              {match.availability}
                            </span>
                          </div>

                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Workload</span>
                            <span>{match.workload}%</span>
                          </div>
                          <Progress value={match.workload} className="h-1.5" />

                          <div className="flex flex-wrap gap-1 mt-2">
                            {match.skills.slice(0, 3).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs px-2 py-0.5">
                                {skill}
                              </Badge>
                            ))}
                            {match.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs px-2 py-0.5">
                                +{match.skills.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Incidents Overview */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      Recent Incidents
                    </CardTitle>
                    <CardDescription>Latest incidents requiring attention</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentIncidents.slice(0, 3).map((incident, index) => (
                      <motion.div
                        key={incident.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        className="p-4 rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${
                              incident.severity === 'critical' ? 'bg-red-500' :
                              incident.severity === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'
                            }`}></div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-sm">{incident.id}</span>
                                <Badge
                                  variant={incident.priority === 'P1' ? 'destructive' : 'secondary'}
                                  className="text-xs"
                                >
                                  {incident.priority}
                                </Badge>
                              </div>
                              <h4 className="text-sm font-medium">{incident.title}</h4>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{incident.time}</span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{incident.progress}%</span>
                          </div>
                          <Progress value={incident.progress} className="h-1.5" />

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={incident.assignee.avatar} />
                                <AvatarFallback className="text-xs">{incident.assignee.initials}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-muted-foreground">{incident.assignee.name}</span>
                            </div>
                            <Badge
                              variant={incident.status === 'Resolved' ? 'default' : 'secondary'}
                              className={`text-xs ${
                                incident.status === 'Resolved'
                                  ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                                  : incident.status === 'In Progress'
                                  ? 'bg-amber-500/10 text-amber-600 border-amber-500/20'
                                  : ''
                              }`}
                            >
                              {incident.status}
                            </Badge>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Incidents Tab */}
            <TabsContent value="incidents" className="space-y-6">
              <div className="space-y-4">
                {recentIncidents.map((incident, index) => (
                  <Card key={incident.id} className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${
                            incident.severity === 'critical' ? 'bg-red-500' :
                            incident.severity === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}></div>
                          <div>
                            <CardTitle className="text-lg">{incident.title}</CardTitle>
                            <CardDescription>{incident.description}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={incident.priority === 'P1' ? 'destructive' : 'secondary'}>
                            {incident.priority}
                          </Badge>
                          <Badge variant="outline">{incident.category}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={incident.assignee.avatar} />
                              <AvatarFallback>{incident.assignee.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{incident.assignee.name}</p>
                              <p className="text-xs text-muted-foreground">Assignee</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{incident.progress}%</span>
                          </div>
                          <Progress value={incident.progress} className="h-2" />
                          <p className="text-xs text-muted-foreground">SLA: {incident.sla}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">{incident.status}</p>
                            <p className="text-xs text-muted-foreground">{incident.time}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <ITSMCharts />
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillMatching.map((member, index) => (
                  <Card key={member.engineer.name} className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={member.engineer.avatar} />
                          <AvatarFallback>{member.engineer.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{member.engineer.name}</CardTitle>
                          <CardDescription>{member.engineer.department}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Workload</span>
                          <span className="font-medium">{member.workload}%</span>
                        </div>
                        <Progress value={member.workload} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Skills</p>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={member.availability === 'Available' ? 'default' : 'secondary'}
                          className={member.availability === 'Available' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' : ''}
                        >
                          {member.availability}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Users className="w-4 h-4 mr-2" />
                          Assign
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
