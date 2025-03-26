import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video } from "lucide-react"

// Sample data for upcoming meetings
const upcomingMeetings = [
  {
    id: "4",
    title: "Weekly Team Standup",
    date: "Mar 8, 2025",
    time: "9:30 AM",
    duration: "30m",
    platform: "Zoom",
    participants: [
      { id: "1", name: "Alex Johnson" },
      { id: "2", name: "Sarah Miller" },
      { id: "3", name: "David Chen" },
      { id: "4", name: "Emma Wilson" },
      { id: "5", name: "Michael Brown" },
    ],
  },
  {
    id: "5",
    title: "Client Presentation",
    date: "Mar 9, 2025",
    time: "11:00 AM",
    duration: "1h",
    platform: "Microsoft Teams",
    participants: [
      { id: "1", name: "Alex Johnson" },
      { id: "2", name: "Sarah Miller" },
      { id: "6", name: "Jessica Lee" },
      { id: "10", name: "Robert Kim" },
    ],
  },
  {
    id: "6",
    title: "Design Review",
    date: "Mar 10, 2025",
    time: "2:00 PM",
    duration: "45m",
    platform: "Google Meet",
    participants: [
      { id: "3", name: "David Chen" },
      { id: "4", name: "Emma Wilson" },
      { id: "8", name: "Olivia Garcia" },
    ],
  },
  {
    id: "7",
    title: "Quarterly Planning",
    date: "Mar 12, 2025",
    time: "10:00 AM",
    duration: "2h",
    platform: "Zoom",
    participants: [
      { id: "1", name: "Alex Johnson" },
      { id: "2", name: "Sarah Miller" },
      { id: "3", name: "David Chen" },
      { id: "5", name: "Michael Brown" },
      { id: "6", name: "Jessica Lee" },
      { id: "7", name: "Ryan Taylor" },
    ],
  },
]

export function UpcomingMeetings() {
  return (
    <div className="space-y-4">
      {upcomingMeetings.map((meeting) => (
        <div key={meeting.id} className="flex items-start justify-between rounded-lg border p-4">
          <div className="space-y-1">
            <h3 className="font-medium">{meeting.title}</h3>
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
            <div className="flex -space-x-2 pt-2">
              {meeting.participants.slice(0, 3).map((participant) => (
                <Avatar key={participant.id} className="h-6 w-6 border-2 border-background">
                  <AvatarFallback className="text-[10px]">
                    {participant.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
              {meeting.participants.length > 3 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px]">
                  +{meeting.participants.length - 3}
                </div>
              )}
            </div>
          </div>
          <Button variant="outline" size="sm" className="h-8">
            <Video className="mr-2 h-3 w-3" />
            Join
          </Button>
        </div>
      ))}
    </div>
  )
}

