"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export function MeetingTrends() {
  // Sample data for meeting trends
  const monthlyData = [
    { month: "Jan", meetings: 12, hours: 18, participants: 45 },
    { month: "Feb", meetings: 16, hours: 24, participants: 52 },
    { month: "Mar", meetings: 14, hours: 22, participants: 48 },
    { month: "Apr", meetings: 18, hours: 28, participants: 56 },
    { month: "May", meetings: 20, hours: 32, participants: 62 },
    { month: "Jun", meetings: 22, hours: 36, participants: 68 },
    { month: "Jul", meetings: 18, hours: 30, participants: 58 },
    { month: "Aug", meetings: 24, hours: 40, participants: 72 },
    { month: "Sep", meetings: 28, hours: 46, participants: 84 },
    { month: "Oct", meetings: 32, hours: 52, participants: 96 },
    { month: "Nov", meetings: 36, hours: 58, participants: 108 },
    { month: "Dec", meetings: 30, hours: 48, participants: 90 },
  ]

  // Sample data for meeting duration distribution
  const durationData = [
    { duration: "0-15m", count: 24 },
    { duration: "15-30m", count: 38 },
    { duration: "30-45m", count: 32 },
    { duration: "45-60m", count: 28 },
    { duration: "60-90m", count: 18 },
    { duration: "90+m", count: 12 },
  ]

  // Sample data for meeting platform distribution
  const platformData = [
    { platform: "Zoom", count: 68 },
    { platform: "Teams", count: 42 },
    { platform: "Meet", count: 36 },
    { platform: "Webex", count: 18 },
    { platform: "Other", count: 8 },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="monthly">
        <TabsList className="bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <TabsTrigger value="monthly" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Monthly Trends
          </TabsTrigger>
          <TabsTrigger value="duration" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Duration Distribution
          </TabsTrigger>
          <TabsTrigger value="platform" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
            Platform Usage
          </TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="pt-4">
          <Card className="bg-gradient-to-br from-purple-50/80 to-indigo-50/80 dark:from-purple-950/30 dark:to-indigo-950/30 border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-300 dark:to-indigo-300">
                  Monthly Meeting Trends
                </h3>
                <p className="text-sm text-muted-foreground">Meetings, hours, and participants over the past year</p>
              </div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 10,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="month" tick={{ fontWeight: 500 }} />
                    <YAxis yAxisId="left" tick={{ fontWeight: 500 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontWeight: 500 }} />
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
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="meetings"
                      stroke="#8884d8"
                      strokeWidth={3}
                      dot={{ r: 4, strokeWidth: 0 }}
                      activeDot={{ r: 8, strokeWidth: 0, className: "animate-pulse" }}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="hours"
                      stroke="#82ca9d"
                      strokeWidth={3}
                      dot={{ r: 4, strokeWidth: 0 }}
                      activeDot={{ r: 8, strokeWidth: 0, className: "animate-pulse" }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="participants"
                      stroke="#ffc658"
                      strokeWidth={3}
                      dot={{ r: 4, strokeWidth: 0 }}
                      activeDot={{ r: 8, strokeWidth: 0, className: "animate-pulse" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="duration" className="pt-4">
          <Card className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-700 dark:from-blue-300 dark:to-cyan-300">
                  Meeting Duration Distribution
                </h3>
                <p className="text-sm text-muted-foreground">Breakdown of meetings by duration</p>
              </div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={durationData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 10,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorDuration" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="duration" tick={{ fontWeight: 500 }} />
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
                      dataKey="count"
                      fill="url(#colorDuration)"
                      radius={[8, 8, 0, 0]}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="platform" className="pt-4">
          <Card className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 dark:from-green-950/30 dark:to-emerald-950/30 border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-700 dark:from-green-300 dark:to-emerald-300">
                  Platform Usage
                </h3>
                <p className="text-sm text-muted-foreground">Distribution of meetings across platforms</p>
              </div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={platformData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 10,
                    }}
                    layout="vertical"
                  >
                    <defs>
                      <linearGradient id="colorPlatform" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis type="number" tick={{ fontWeight: 500 }} />
                    <YAxis dataKey="platform" type="category" tick={{ fontWeight: 500 }} />
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
                      dataKey="count"
                      fill="url(#colorPlatform)"
                      radius={[0, 8, 8, 0]}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Summary Insights */}
      <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/30 dark:to-slate-950/30 border-0 shadow-md">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-slate-700 dark:from-gray-300 dark:to-slate-300">
            Trend Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Meeting Frequency</h4>
              <p className="text-sm">
                Meeting frequency has increased by <span className="font-medium">25%</span> over the past year, with
                peak activity in November.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Duration Efficiency</h4>
              <p className="text-sm">
                Most meetings (58%) are kept under 45 minutes, showing improved time management.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Platform Preference</h4>
              <p className="text-sm">Zoom remains the preferred platform (39%), followed by Microsoft Teams (24%).</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Participation Growth</h4>
              <p className="text-sm">
                Average participant count has grown by <span className="font-medium">15%</span> year-over-year.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

