"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "lucide-react"

// Sample action items data
const actionItemsData = [
  {
    id: "1",
    task: "Update the product roadmap document with Q2 priorities",
    assignee: "Alex Johnson",
    dueDate: "Mar 7, 2025",
    status: "pending",
    completed: false,
  },
  {
    id: "2",
    task: "Share detailed user research findings with the engineering team",
    assignee: "Sarah Miller",
    dueDate: "Mar 6, 2025",
    status: "pending",
    completed: false,
  },
  {
    id: "3",
    task: "Create technical specifications for the analytics dashboard",
    assignee: "David Chen",
    dueDate: "Mar 12, 2025",
    status: "pending",
    completed: false,
  },
  {
    id: "4",
    task: "Prepare resource allocation plan for Q2 projects",
    assignee: "Alex Johnson",
    dueDate: "Mar 10, 2025",
    status: "pending",
    completed: false,
  },
  {
    id: "5",
    task: "Schedule design review for mobile app improvements",
    assignee: "Emma Wilson",
    dueDate: "Mar 8, 2025",
    status: "pending",
    completed: false,
  },
]

export function MeetingActionItems({ meetingId }: { meetingId: string }) {
  const [actionItems, setActionItems] = useState(actionItemsData)

  const handleToggleComplete = (id: string) => {
    setActionItems(actionItems.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Action Items ({actionItems.length})</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button size="sm">Add Item</Button>
        </div>
      </div>

      <div className="space-y-3">
        {actionItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-4 rounded-lg border p-4 ${item.completed ? "bg-muted/50" : ""}`}
          >
            <Checkbox
              id={`action-${item.id}`}
              checked={item.completed}
              onCheckedChange={() => handleToggleComplete(item.id)}
              className="mt-1"
            />
            <div className="flex-1 space-y-1">
              <label
                htmlFor={`action-${item.id}`}
                className={`font-medium ${item.completed ? "line-through text-muted-foreground" : ""}`}
              >
                {item.task}
              </label>
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center">
                  <Avatar className="h-5 w-5 mr-1">
                    <AvatarFallback className="text-[10px]">{getInitials(item.assignee)}</AvatarFallback>
                  </Avatar>
                  <span className="text-muted-foreground">{item.assignee}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-1 h-3.5 w-3.5" />
                  Due {item.dueDate}
                </div>
              </div>
            </div>
            <Badge variant={item.completed ? "outline" : "secondary"}>{item.completed ? "Completed" : "Pending"}</Badge>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button variant="outline">Sync with Task Manager</Button>
      </div>
    </div>
  )
}

