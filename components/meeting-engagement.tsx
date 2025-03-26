"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function MeetingEngagement({ meetingId }: { meetingId: string }) {
  // Sample data for engagement metrics
  const sentimentData = [
    { name: "Positive", value: 65, color: "#4ade80" },
    { name: "Neutral", value: 25, color: "#94a3b8" },
    { name: "Negative", value: 10, color: "#f87171" },
  ]

  // Sample data for participation by speaker
  const participationData = [
    { name: "Alex Johnson", speaking: 35, questions: 5 },
    { name: "Sarah Miller", speaking: 25, questions: 3 },
    { name: "David Chen", speaking: 15, questions: 2 },
    { name: "Emma Wilson", speaking: 20, questions: 4 },
  ]

  // Sample data for engagement over time
  const engagementTimeData = [
    { time: "0:00", engagement: 60 },
    { time: "0:15", engagement: 75 },
    { time: "0:30", engagement: 85 },
    { time: "0:45", engagement: 70 },
    { time: "1:00", engagement: 80 },
  ]

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Overall Sentiment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Engagement Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="engagement" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Participation by Speaker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {participationData.map((participant) => (
              <div key={participant.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">{getInitials(participant.name)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{participant.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{participant.speaking}% speaking time</span>
                </div>
                <Progress value={participant.speaking} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Asked {participant.questions} questions</span>
                  <span>Responded to {Math.floor(Math.random() * 5) + 1} questions</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-green-500">•</span>
              <span>Overall positive sentiment throughout the meeting (65%)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>Highest engagement occurred around the 30-minute mark</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">•</span>
              <span>Alex Johnson and Sarah Miller dominated the conversation (60% combined)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-500">•</span>
              <span>Emma Wilson asked the most questions relative to speaking time</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Consider encouraging more balanced participation in future meetings</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

