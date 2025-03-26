"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ParticipationAnalytics() {
  // Sample data for top participants
  const topParticipants = [
    { name: "Alex Johnson", meetings: 32, speakingTime: 420, questions: 45 },
    { name: "Sarah Miller", meetings: 28, speakingTime: 380, questions: 38 },
    { name: "David Chen", meetings: 26, speakingTime: 340, questions: 32 },
    { name: "Emma Wilson", meetings: 24, speakingTime: 310, questions: 36 },
    { name: "Michael Brown", meetings: 22, speakingTime: 290, questions: 28 },
  ]

  // Sample data for participation metrics
  const participationData = [
    { name: "Alex J.", speaking: 28, listening: 72 },
    { name: "Sarah M.", speaking: 24, listening: 76 },
    { name: "David C.", speaking: 18, listening: 82 },
    { name: "Emma W.", speaking: 22, listening: 78 },
    { name: "Michael B.", speaking: 16, listening: 84 },
    { name: "Jessica L.", speaking: 14, listening: 86 },
    { name: "Ryan T.", speaking: 12, listening: 88 },
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
            <CardTitle className="text-base">Speaking vs. Listening Time</CardTitle>
            <CardDescription>Distribution of speaking and listening time across participants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={participationData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="speaking" stackId="a" fill="#8884d8" />
                  <Bar dataKey="listening" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Participation Insights</CardTitle>
            <CardDescription>Key insights about meeting participation</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Average of 6.2 participants per meeting</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">•</span>
                <span>22% of participants actively contribute to discussions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span>Top 3 participants account for 58% of total speaking time</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-500">•</span>
                <span>Product team members are most active in meetings</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>15% of participants never speak during meetings</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-500">•</span>
                <span>Average of 3.5 questions asked per meeting</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-500">•</span>
                <span>Meetings with 4-6 participants have the highest engagement</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Top Participants</CardTitle>
          <CardDescription>Most active meeting participants by speaking time and questions asked</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {topParticipants.map((participant) => (
              <div key={participant.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{getInitials(participant.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{participant.name}</div>
                      <div className="text-xs text-muted-foreground">{participant.meetings} meetings attended</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {Math.floor(participant.speakingTime / 60)}h {participant.speakingTime % 60}m speaking time
                  </div>
                </div>
                <Progress value={participant.speakingTime / 6} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{participant.questions} questions asked</span>
                  <span>{Math.round(participant.speakingTime / participant.meetings)} min avg. per meeting</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

