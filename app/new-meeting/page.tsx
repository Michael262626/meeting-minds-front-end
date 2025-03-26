import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, Link2 } from "lucide-react"
import Link from "next/link"
import { MeetingRecorder } from "@/components/meeting-recorder"

export default function NewMeeting() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-xl font-bold">New Meeting</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="mx-auto max-w-3xl">
          <Tabs defaultValue="create">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="create">Create Meeting</TabsTrigger>
              <TabsTrigger value="join">Join Meeting</TabsTrigger>
              <TabsTrigger value="record">Record Only</TabsTrigger>
            </TabsList>
            <TabsContent value="create" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create a New Meeting</CardTitle>
                  <CardDescription>Set up a new meeting and invite participants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="meeting-title">Meeting Title</Label>
                    <Input id="meeting-title" placeholder="Weekly Team Sync" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meeting-description">Description (Optional)</Label>
                    <Textarea id="meeting-description" placeholder="Discuss project progress and upcoming milestones" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="meeting-date">Date</Label>
                      <div className="relative">
                        <Input id="meeting-date" type="date" />
                        <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meeting-time">Time</Label>
                      <Input id="meeting-time" type="time" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meeting-platform">Platform</Label>
                    <Select>
                      <SelectTrigger id="meeting-platform">
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zoom">Zoom</SelectItem>
                        <SelectItem value="teams">Microsoft Teams</SelectItem>
                        <SelectItem value="meet">Google Meet</SelectItem>
                        <SelectItem value="webex">Cisco Webex</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="participants">Participants</Label>
                    <Input id="participants" placeholder="Enter email addresses separated by commas" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Create Meeting</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="join" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Join an Existing Meeting</CardTitle>
                  <CardDescription>Connect to an ongoing meeting to record and transcribe</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="meeting-link">Meeting Link</Label>
                    <div className="relative">
                      <Input id="meeting-link" placeholder="https://zoom.us/j/123456789" />
                      <Link2 className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meeting-platform-join">Platform</Label>
                    <Select>
                      <SelectTrigger id="meeting-platform-join">
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zoom">Zoom</SelectItem>
                        <SelectItem value="teams">Microsoft Teams</SelectItem>
                        <SelectItem value="meet">Google Meet</SelectItem>
                        <SelectItem value="webex">Cisco Webex</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meeting-name">Meeting Name (Optional)</Label>
                    <Input id="meeting-name" placeholder="Product Design Review" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Join Meeting</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="record" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Record Meeting Only</CardTitle>
                  <CardDescription>Record, transcribe, and analyze without scheduling</CardDescription>
                </CardHeader>
                <CardContent>
                  <MeetingRecorder />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

