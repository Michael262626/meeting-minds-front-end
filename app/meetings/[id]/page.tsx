import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MeetingTranscript } from "@/components/meeting-transcript"
import { MeetingSummary } from "@/components/meeting-summary"
import { MeetingActionItems } from "@/components/meeting-action-items"
import { MeetingEngagement } from "@/components/meeting-engagement"
import { ArrowLeft, Calendar, Clock, Download, Share2, Users } from "lucide-react"
import Link from "next/link"

export default function MeetingDetails({ params }: { params: { id: string } }) {
  // In a real app, we would fetch meeting data based on the ID
  const meetingData = {
    id: params.id,
    title: "Product Roadmap Planning",
    date: "March 5, 2025",
    duration: "1h 15m",
    participants: 8,
    summary:
      "The team discussed Q2 product roadmap priorities, focusing on the new analytics dashboard and mobile app improvements. Key decisions were made about resource allocation and timeline adjustments for the upcoming release.",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/meetings">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-xl font-bold">{meetingData.title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {meetingData.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {meetingData.duration}
              </div>
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                {meetingData.participants} participants
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Meeting Summary</CardTitle>
              <CardDescription>AI-generated summary of key points discussed</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{meetingData.summary}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="transcript">
            <TabsList>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="summary">Detailed Summary</TabsTrigger>
              <TabsTrigger value="action-items">Action Items</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
            </TabsList>
            <TabsContent value="transcript" className="mt-4">
              <MeetingTranscript meetingId={params.id} />
            </TabsContent>
            <TabsContent value="summary" className="mt-4">
              <MeetingSummary meetingId={params.id} />
            </TabsContent>
            <TabsContent value="action-items" className="mt-4">
              <MeetingActionItems meetingId={params.id} />
            </TabsContent>
            <TabsContent value="engagement" className="mt-4">
              <MeetingEngagement meetingId={params.id} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

