"use client"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, TrendingUp, Users, Clock, CheckSquare, BarChart3 } from "lucide-react"

export function MeetingStats() {
  // Sample data for meeting statistics
  const meetingData = [
    { month: "Jan", meetings: 4, hours: 6, actionItems: 12 },
    { month: "Feb", meetings: 6, hours: 10, actionItems: 18 },
    { month: "Mar", meetings: 8, hours: 15, actionItems: 24 },
    { month: "Apr", meetings: 10, hours: 18, actionItems: 30 },
    { month: "May", meetings: 12, hours: 22, actionItems: 36 },
    { month: "Jun", meetings: 8, hours: 16, actionItems: 28 },
    { month: "Jul", meetings: 10, hours: 20, actionItems: 32 },
  ]

  // Sample data for engagement metrics
  const engagementData = [
    { month: "Jan", positive: 65, neutral: 25, negative: 10 },
    { month: "Feb", positive: 70, neutral: 20, negative: 10 },
    { month: "Mar", positive: 60, neutral: 30, negative: 10 },
    { month: "Apr", positive: 75, neutral: 15, negative: 10 },
    { month: "May", positive: 80, neutral: 15, negative: 5 },
    { month: "Jun", positive: 75, neutral: 20, negative: 5 },
    { month: "Jul", positive: 85, neutral: 10, negative: 5 },
  ]

  // Calculate summary statistics
  const totalMeetings = meetingData.reduce((sum, item) => sum + item.meetings, 0)
  const totalHours = meetingData.reduce((sum, item) => sum + item.hours, 0)
  const totalActionItems = meetingData.reduce((sum, item) => sum + item.actionItems, 0)
  const avgPositiveSentiment = Math.round(
    engagementData.reduce((sum, item) => sum + item.positive, 0) / engagementData.length,
  )

  return (
    <div className="space-y-8">
      {/* Summary Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
              <BarChart3 className="h-full w-full text-purple-500" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-300">Total Meetings</h3>
              <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 text-xs px-2 py-1 rounded-full flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15%
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                {totalMeetings}
              </span>
              <span className="ml-2 text-sm text-muted-foreground">meetings</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
              <Clock className="h-full w-full text-blue-500" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Total Hours</h3>
              <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8%
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                {totalHours}
              </span>
              <span className="ml-2 text-sm text-muted-foreground">hours</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
              <CheckSquare className="h-full w-full text-green-500" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-green-700 dark:text-green-300">Action Items</h3>
              <span className="bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 text-xs px-2 py-1 rounded-full flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12%
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                {totalActionItems}
              </span>
              <span className="ml-2 text-sm text-muted-foreground">tasks</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
              <Users className="h-full w-full text-amber-500" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-amber-700 dark:text-amber-300">Avg. Sentiment</h3>
              <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-300 text-xs px-2 py-1 rounded-full flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5%
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
                {avgPositiveSentiment}%
              </span>
              <span className="ml-2 text-sm text-muted-foreground">positive</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meeting Activity Chart */}
      <div className="chart-container h-[300px] bg-gradient-to-br from-violet-50/80 to-indigo-50/80 dark:from-violet-950/30 dark:to-indigo-950/30 backdrop-blur-sm rounded-xl border border-indigo-100 dark:border-indigo-900/50 shadow-md">
        <div className="px-4 pt-4">
          <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-300 dark:to-indigo-300">
            Meeting Activity
          </h3>
          <p className="text-sm text-muted-foreground">Meetings, hours, and action items over time</p>
        </div>
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart
            data={meetingData}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorMeetings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorActionItems" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffc658" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
            <XAxis dataKey="month" tick={{ fontWeight: 500 }} />
            <YAxis tick={{ fontWeight: 500 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                border: "none",
                fontWeight: 500,
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: "10px",
                fontWeight: 500,
              }}
            />
            <Area
              type="monotone"
              dataKey="meetings"
              stackId="1"
              stroke="#8884d8"
              fill="url(#colorMeetings)"
              activeDot={{ r: 8, strokeWidth: 0, className: "animate-pulse" }}
            />
            <Area
              type="monotone"
              dataKey="hours"
              stackId="2"
              stroke="#82ca9d"
              fill="url(#colorHours)"
              activeDot={{ r: 8, strokeWidth: 0, className: "animate-pulse" }}
            />
            <Area
              type="monotone"
              dataKey="actionItems"
              stackId="3"
              stroke="#ffc658"
              fill="url(#colorActionItems)"
              activeDot={{ r: 8, strokeWidth: 0, className: "animate-pulse" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Sentiment Analysis Chart */}
      <div className="chart-container h-[300px] bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/30 dark:to-cyan-950/30 backdrop-blur-sm rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-md">
        <div className="px-4 pt-4">
          <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-700 dark:from-blue-300 dark:to-cyan-300">
            Sentiment Analysis
          </h3>
          <p className="text-sm text-muted-foreground">Positive, neutral, and negative sentiment over time</p>
        </div>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart
            data={engagementData}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorNeutral" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f87171" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f87171" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
            <XAxis dataKey="month" tick={{ fontWeight: 500 }} />
            <YAxis tick={{ fontWeight: 500 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                border: "none",
                fontWeight: 500,
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: "10px",
                fontWeight: 500,
              }}
            />
            <Bar
              dataKey="positive"
              stackId="a"
              fill="url(#colorPositive)"
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
            <Bar
              dataKey="neutral"
              stackId="a"
              fill="url(#colorNeutral)"
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
            <Bar
              dataKey="negative"
              stackId="a"
              fill="url(#colorNegative)"
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Key Insights */}
      <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/30 dark:to-slate-950/30 border-0 shadow-md">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-slate-700 dark:from-gray-300 dark:to-slate-300">
            Key Insights
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ArrowUpRight className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                Meeting frequency has <span className="font-semibold">increased by 15%</span> over the past quarter
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                Average meeting duration has <span className="font-semibold">decreased by 10%</span>, indicating
                improved efficiency
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                Action item completion rate is at <span className="font-semibold">78%</span>, up from 65% last quarter
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                Positive sentiment has <span className="font-semibold">increased consistently</span> over the past 6
                months
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

