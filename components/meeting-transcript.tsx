"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Sample transcript data
const transcriptData = [
  {
    id: "1",
    speaker: "Alex Johnson",
    time: "00:00:15",
    text: "Good morning everyone. Let's get started with our product roadmap planning session for Q2.",
  },
  {
    id: "2",
    speaker: "Sarah Miller",
    time: "00:00:32",
    text: "Before we dive in, I'd like to share some insights from our user research that might influence our priorities.",
  },
  {
    id: "3",
    speaker: "Alex Johnson",
    time: "00:01:05",
    text: "That would be great, Sarah. Let's start with that and then move on to the feature prioritization.",
  },
  {
    id: "4",
    speaker: "Sarah Miller",
    time: "00:01:20",
    text: "Our research shows that users are particularly interested in better analytics capabilities. About 78% of our enterprise customers have requested more detailed reporting features.",
  },
  {
    id: "5",
    speaker: "David Chen",
    time: "00:02:10",
    text: "That aligns with what we've been hearing from the sales team as well. The analytics dashboard should definitely be a priority for Q2.",
  },
  {
    id: "6",
    speaker: "Emma Wilson",
    time: "00:02:45",
    text: "From a technical perspective, we can build on the data pipeline work we did last quarter. That should accelerate the development of these new analytics features.",
  },
  {
    id: "7",
    speaker: "Alex Johnson",
    time: "00:03:20",
    text: "Great point, Emma. Let's make the analytics dashboard our top priority for Q2. David, can your team handle this while still working on the mobile app improvements?",
  },
  {
    id: "8",
    speaker: "David Chen",
    time: "00:03:45",
    text: "We'll need to adjust some timelines, but I think we can manage both. The mobile improvements are mostly in the design phase right now.",
  },
  {
    id: "9",
    speaker: "Sarah Miller",
    time: "00:04:15",
    text: "I suggest we push back the notification system redesign to make room for these priorities. Based on our research, it's less critical for users right now.",
  },
  {
    id: "10",
    speaker: "Alex Johnson",
    time: "00:04:40",
    text: "That makes sense. Let's finalize this plan and I'll update the roadmap document after the meeting.",
  },
]

export function MeetingTranscript({ meetingId }: { meetingId: string }) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter transcript based on search query
  const filteredTranscript = transcriptData.filter(
    (item) =>
      item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.speaker.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search transcript..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredTranscript.map((item) => (
          <div key={item.id} className="flex gap-4">
            <Avatar className="h-8 w-8 mt-0.5">
              <AvatarFallback>{getInitials(item.speaker)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.speaker}</span>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  )
}

