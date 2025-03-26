"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SentimentAnalytics() {
  // Sample data for overall sentiment
  const sentimentData = [
    { name: "Positive", value: 65, color: "#4ade80" },
    { name: "Neutral", value: 25, color: "#94a3b8" },
    { name: "Negative", value: 10, color: "#f87171" },
  ]

  // Sample data for sentiment over time
  const sentimentTimeData = [
    { month: "Jan", positive: 60, neutral: 30, negative: 10 },
    { month: "Feb", positive: 65, neutral: 25, negative: 10 },
    { month: "Mar", positive: 70, neutral: 20, negative: 10 },
    { month: "Apr", positive: 68, neutral: 22, negative: 10 },
    { month: "May", positive: 72, neutral: 20, negative: 8 },
    { month: "Jun", positive: 75, neutral: 18, negative: 7 },
    { month: "Jul", positive: 78, neutral: 16, negative: 6 },
    { month: "Aug", positive: 80, neutral: 15, negative: 5 },
    { month: "Sep", positive: 76, neutral: 18, negative: 6 },
    { month: "Oct", positive: 74, neutral: 20, negative: 6 },
    { month: "Nov", positive: 72, neutral: 22, negative: 6 },
    { month: "Dec", positive: 70, neutral: 24, negative: 6 },
  ]

  // Sample data for sentiment by meeting type
  const sentimentTypeData = [
    { type: "Team Standup", positive: 82, neutral: 15, negative: 3 },
    { type: "Product Planning", positive: 68, neutral: 22, negative: 10 },
    { type: "Client Meeting", positive: 75, neutral: 18, negative: 7 },
    { type: "Design Review", positive: 70, neutral: 25, negative: 5 },
    { type: "Sprint Planning", positive: 65, neutral: 28, negative: 7 },
    { type: "Retrospective", positive: 60, neutral: 25, negative: 15 },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Overall Sentiment</CardTitle>
            <CardDescription>Distribution of sentiment across all meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Sentiment Insights</CardTitle>
            <CardDescription>Key insights about meeting sentiment</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-green-500">•</span>
                <span>Overall positive sentiment has increased by 15% over the past 6 months</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Team standups have the highest positive sentiment (82%)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span>Meetings with fewer than 5 participants show 12% higher positive sentiment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-500">•</span>
                <span>Meetings under 30 minutes have 8% higher positive sentiment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Retrospective meetings show the highest negative sentiment (15%)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500">•</span>
                <span>Morning meetings (9-11 AM) show 10% higher positive sentiment than afternoon meetings</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="time">
        <TabsList>
          <TabsTrigger value="time">Sentiment Over Time</TabsTrigger>
          <TabsTrigger value="type">Sentiment by Meeting Type</TabsTrigger>
        </TabsList>

        <TabsContent value="time" className="pt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={sentimentTimeData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="positive" stackId="1" stroke="#4ade80" fill="#4ade80" />
                    <Area type="monotone" dataKey="neutral" stackId="1" stroke="#94a3b8" fill="#94a3b8" />
                    <Area type="monotone" dataKey="negative" stackId="1" stroke="#f87171" fill="#f87171" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="type" className="pt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={sentimentTypeData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="positive" stackId="a" fill="#4ade80" />
                    <Bar dataKey="neutral" stackId="a" fill="#94a3b8" />
                    <Bar dataKey="negative" stackId="a" fill="#f87171" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

