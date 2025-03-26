"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ActionItemsAnalytics() {
  // Sample data for action item status
  const statusData = [
    { name: "Completed", value: 68, color: "#4ade80" },
    { name: "In Progress", value: 22, color: "#3b82f6" },
    { name: "Overdue", value: 10, color: "#f87171" },
  ]

  // Sample data for action items by assignee
  const assigneeData = [
    { name: "Alex Johnson", assigned: 24, completed: 18 },
    { name: "Sarah Miller", assigned: 18, completed: 15 },
    { name: "David Chen", assigned: 16, completed: 12 },
    { name: "Emma Wilson", assigned: 14, completed: 8 },
    { name: "Michael Brown", assigned: 12, completed: 9 },
  ]

  // Sample data for action items by department
  const departmentData = [
    { department: "Product", count: 32 },
    { department: "Engineering", count: 28 },
    { department: "Design", count: 18 },
    { department: "Marketing", count: 14 },
    { department: "Sales", count: 8 },
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
            <CardTitle className="text-base">Action Item Status</CardTitle>
            <CardDescription>Current status of all action items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {statusData.map((entry, index) => (
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
            <CardTitle className="text-base">Action Items by Department</CardTitle>
            <CardDescription>Distribution of action items across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={departmentData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Action Items by Assignee</CardTitle>
          <CardDescription>Action items assigned and completed by team members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {assigneeData.map((assignee) => (
              <div key={assignee.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{getInitials(assignee.name)}</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">{assignee.name}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {assignee.completed}/{assignee.assigned} completed (
                    {Math.round((assignee.completed / assignee.assigned) * 100)}%)
                  </div>
                </div>
                <Progress value={(assignee.completed / assignee.assigned) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{assignee.assigned - assignee.completed} items remaining</span>
                  <span>Average completion time: {Math.round(Math.random() * 3) + 2} days</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Action Item Insights</CardTitle>
          <CardDescription>Key insights about action items</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-green-500">•</span>
              <span>Average of 4.2 action items created per meeting</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>68% of action items are completed on time</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-500">•</span>
              <span>Product team has the highest action item completion rate (82%)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500">•</span>
              <span>Average time to complete an action item: 3.5 days</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>10% of action items become overdue (not completed by due date)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-500">•</span>
              <span>Sprint planning meetings generate the most action items (avg. 6.8)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal-500">•</span>
              <span>Action items with explicit assignees are 45% more likely to be completed</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

