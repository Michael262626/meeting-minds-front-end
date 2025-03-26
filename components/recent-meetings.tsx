import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText } from "lucide-react"
import Link from "next/link"

// Sample data for recent meetings
const recentMeetings = [
  {
    id: "1",
    title: "Product Roadmap Planning",
    date: "Mar 5, 2025",
    time: "10:00 AM",
    duration: "1h 15m",
    summary:
      "Discussed Q2 product roadmap priorities, focusing on the new analytics dashboard and mobile app improvements.",
    actionItems: 5,
    participants: [
      { id: "1", name: "Alex Johnson", image: null },
      { id: "2", name: "Sarah Miller", image: null },
      { id: "3", name: "David Chen", image: null },
      { id: "4", name: "Emma Wilson", image: null },
    ],
  },
  {
    id: "2",
    title: "Marketing Campaign Review",
    date: "Mar 3, 2025",
    time: "2:30 PM",
    duration: "45m",
    summary:
      "Reviewed performance of Q1 marketing campaigns and discussed strategy adjustments for upcoming product launch.",
    actionItems: 3,
    participants: [
      { id: "2", name: "Sarah Miller", image: null },
      { id: "5", name: "Michael Brown", image: null },
      { id: "6", name: "Jessica Lee", image: null },
    ],
  },
  {
    id: "3",
    title: "Engineering Sprint Planning",
    date: "Mar 1, 2025",
    time: "9:00 AM",
    duration: "1h 30m",
    summary: "Planned tasks for the upcoming two-week sprint, prioritizing bug fixes and new feature development.",
    actionItems: 8,
    participants: [
      { id: "1", name: "Alex Johnson", image: null },
      { id: "3", name: "David Chen", image: null },
      { id: "7", name: "Ryan Taylor", image: null },
      { id: "8", name: "Olivia Garcia", image: null },
      { id: "9", name: "James Wilson", image: null },
    ],
  },
]

export function RecentMeetings() {
  return (
    <div className="space-y-4">
      {recentMeetings.map((meeting) => (
        <div
          key={meeting.id}
          className="flex flex-col space-y-2 rounded-lg border p-4 md:flex-row md:items-start md:justify-between md:space-y-0"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{meeting.title}</h3>
              <Badge variant="outline" className="ml-2">
                {meeting.actionItems} action items
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {meeting.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {meeting.time} ({meeting.duration})
              </div>
            </div>
            <p className="text-sm">{meeting.summary}</p>
            <div className="flex -space-x-2">
              {meeting.participants.slice(0, 4).map((participant) => (
                <Avatar key={participant.id} className="h-8 w-8 border-2 border-background">
                  <AvatarFallback>
                    {participant.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
              {meeting.participants.length > 4 && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
                  +{meeting.participants.length - 4}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 self-end md:self-center">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/meetings/${meeting.id}`}>
                <FileText className="mr-2 h-4 w-4" />
                View Details
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

