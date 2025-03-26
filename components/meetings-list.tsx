import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText, MoreHorizontal, Users, Video } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample data for meetings
const allMeetings = [
  {
    id: "1",
    title: "Product Roadmap Planning",
    date: "Mar 5, 2025",
    time: "10:00 AM",
    duration: "1h 15m",
    platform: "Zoom",
    status: "completed",
    participants: 8,
    hasRecording: true,
    hasTranscript: true,
  },
  {
    id: "2",
    title: "Marketing Campaign Review",
    date: "Mar 3, 2025",
    time: "2:30 PM",
    duration: "45m",
    platform: "Microsoft Teams",
    status: "completed",
    participants: 5,
    hasRecording: true,
    hasTranscript: true,
  },
  {
    id: "3",
    title: "Engineering Sprint Planning",
    date: "Mar 1, 2025",
    time: "9:00 AM",
    duration: "1h 30m",
    platform: "Zoom",
    status: "completed",
    participants: 12,
    hasRecording: true,
    hasTranscript: true,
  },
  {
    id: "4",
    title: "Weekly Team Standup",
    date: "Mar 8, 2025",
    time: "9:30 AM",
    duration: "30m",
    platform: "Zoom",
    status: "upcoming",
    participants: 8,
    hasRecording: false,
    hasTranscript: false,
  },
  {
    id: "5",
    title: "Client Presentation",
    date: "Mar 9, 2025",
    time: "11:00 AM",
    duration: "1h",
    platform: "Microsoft Teams",
    status: "upcoming",
    participants: 6,
    hasRecording: false,
    hasTranscript: false,
  },
  {
    id: "6",
    title: "Design Review",
    date: "Mar 10, 2025",
    time: "2:00 PM",
    duration: "45m",
    platform: "Google Meet",
    status: "upcoming",
    participants: 4,
    hasRecording: false,
    hasTranscript: false,
  },
  {
    id: "7",
    title: "Quarterly Planning",
    date: "Mar 12, 2025",
    time: "10:00 AM",
    duration: "2h",
    platform: "Zoom",
    status: "upcoming",
    participants: 15,
    hasRecording: false,
    hasTranscript: false,
  },
  {
    id: "8",
    title: "Quick Team Sync",
    date: "Feb 28, 2025",
    time: "3:00 PM",
    duration: "15m",
    platform: "recorded-only",
    status: "completed",
    participants: 3,
    hasRecording: true,
    hasTranscript: true,
  },
]

export function MeetingsList({ filter = "all" }: { filter?: "all" | "upcoming" | "past" | "recorded" }) {
  // Filter meetings based on the selected filter
  const filteredMeetings = allMeetings.filter((meeting) => {
    if (filter === "all") return true
    if (filter === "upcoming") return meeting.status === "upcoming"
    if (filter === "past") return meeting.status === "completed"
    if (filter === "recorded") return meeting.hasRecording
    return true
  })

  return (
    <div className="space-y-4">
      {filteredMeetings.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No meetings found</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {filter === "upcoming"
              ? "You don't have any upcoming meetings scheduled."
              : filter === "past"
                ? "You don't have any past meetings."
                : filter === "recorded"
                  ? "You don't have any recorded meetings."
                  : "You don't have any meetings."}
          </p>
          <Button className="mt-4" asChild>
            <Link href="/new-meeting">Schedule a Meeting</Link>
          </Button>
        </div>
      ) : (
        filteredMeetings.map((meeting) => (
          <div
            key={meeting.id}
            className="flex flex-col space-y-2 rounded-lg border p-4 md:flex-row md:items-center md:justify-between md:space-y-0"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{meeting.title}</h3>
                {meeting.status === "upcoming" && <Badge>Upcoming</Badge>}
                {meeting.hasRecording && <Badge variant="outline">Recorded</Badge>}
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
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  {meeting.participants} participants
                </div>
                {meeting.platform !== "recorded-only" && (
                  <div className="flex items-center">
                    <Video className="mr-1 h-4 w-4" />
                    {meeting.platform}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 self-end md:self-center">
              {meeting.status === "upcoming" ? (
                <Button variant="default" size="sm">
                  <Video className="mr-2 h-4 w-4" />
                  Join
                </Button>
              ) : (
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/meetings/${meeting.id}`}>
                    <FileText className="mr-2 h-4 w-4" />
                    View Details
                  </Link>
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {meeting.status === "upcoming" && (
                    <>
                      <DropdownMenuItem>Edit Meeting</DropdownMenuItem>
                      <DropdownMenuItem>Copy Invitation</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Cancel Meeting</DropdownMenuItem>
                    </>
                  )}
                  {meeting.status === "completed" && (
                    <>
                      <DropdownMenuItem>Download Transcript</DropdownMenuItem>
                      <DropdownMenuItem>Download Recording</DropdownMenuItem>
                      <DropdownMenuItem>Share Summary</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete Meeting</DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

