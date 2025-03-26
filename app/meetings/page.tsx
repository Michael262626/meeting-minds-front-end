import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Mic, Plus, Search } from "lucide-react"
import Link from "next/link"
import { MeetingsList } from "@/components/meetings-list"
import { ThemeToggle } from "@/components/theme-toggle"

export default function MeetingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-pattern-dots">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Mic className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">MeetingMind</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/meetings">Meetings</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/analytics">Analytics</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/settings">Settings</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/speech-to-text">Speech to Text</Link>
            </Button>
            <ThemeToggle />
            <Button variant="default" asChild>
              <Link href="/new-meeting">New Meeting</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Meetings</h2>
            <Button asChild>
              <Link href="/new-meeting">
                <Plus className="mr-2 h-4 w-4" />
                New Meeting
              </Link>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search meetings..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Platforms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="zoom">Zoom</SelectItem>
                  <SelectItem value="teams">Microsoft Teams</SelectItem>
                  <SelectItem value="meet">Google Meet</SelectItem>
                  <SelectItem value="webex">Cisco Webex</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Meetings</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="recorded">Recorded Only</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <MeetingsList filter="all" />
            </TabsContent>
            <TabsContent value="upcoming" className="mt-4">
              <MeetingsList filter="upcoming" />
            </TabsContent>
            <TabsContent value="past" className="mt-4">
              <MeetingsList filter="past" />
            </TabsContent>
            <TabsContent value="recorded" className="mt-4">
              <MeetingsList filter="recorded" />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

