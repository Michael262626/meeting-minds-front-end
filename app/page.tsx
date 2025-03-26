import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MeetingStats } from "@/components/meeting-stats"
import { RecentMeetings } from "@/components/recent-meetings"
import { UpcomingMeetings } from "@/components/upcoming-meetings"
import { CalendarDays, FileText, Mic, Users } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Dashboard() {
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
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Meetings</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="stat-card-value">24</div>
                <p className="stat-card-trend trend-up">+10% from last month</p>
              </CardContent>
              <div className="stat-card-icon">
                <FileText className="h-24 w-24 opacity-10" />
              </div>
            </div>
            <div className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Meeting Hours</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="stat-card-value">42.5</div>
                <p className="stat-card-trend trend-up">+5% from last month</p>
              </CardContent>
              <div className="stat-card-icon">
                <CalendarDays className="h-24 w-24 opacity-10" />
              </div>
            </div>
            <div className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Action Items</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="stat-card-value">86</div>
                <p className="stat-card-trend trend-up">+12% from last month</p>
              </CardContent>
              <div className="stat-card-icon">
                <FileText className="h-24 w-24 opacity-10" />
              </div>
            </div>
            <div className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Participants</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="stat-card-value">38</div>
                <p className="stat-card-trend trend-up">+2% from last month</p>
              </CardContent>
              <div className="stat-card-icon">
                <Users className="h-24 w-24 opacity-10" />
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Meeting Statistics</CardTitle>
                <CardDescription>Your meeting activity and engagement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <MeetingStats />
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Upcoming Meetings</CardTitle>
                <CardDescription>Your scheduled meetings for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingMeetings />
              </CardContent>
            </Card>
          </div>
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Meetings</CardTitle>
              <CardDescription>Your most recent meetings with summaries and action items</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentMeetings />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

