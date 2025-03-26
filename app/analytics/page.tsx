import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Download, Mic, Users } from "lucide-react"
import Link from "next/link"
import { MeetingTrends } from "@/components/meeting-trends"
import { ParticipationAnalytics } from "@/components/participation-analytics"
import { SentimentAnalytics } from "@/components/sentiment-analytics"
import { ActionItemsAnalytics } from "@/components/action-items-analytics"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-pattern-grid">
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
            <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
            <div className="flex items-center gap-2">
              <Select defaultValue="30days">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                  <SelectItem value="90days">Last 90 Days</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Meetings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="stat-card-value">42</div>
                <p className="stat-card-trend trend-up">+15% from previous period</p>
              </CardContent>
              <div className="stat-card-icon">
                <Calendar className="h-24 w-24 opacity-10" />
              </div>
            </div>
            <div className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Meeting Hours</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="stat-card-value">68.5</div>
                <p className="stat-card-trend trend-up">+8% from previous period</p>
              </CardContent>
              <div className="stat-card-icon">
                <Calendar className="h-24 w-24 opacity-10" />
              </div>
            </div>
            <div className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg. Participants</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="stat-card-value">6.2</div>
                <p className="stat-card-trend trend-up">+2% from previous period</p>
              </CardContent>
              <div className="stat-card-icon">
                <Users className="h-24 w-24 opacity-10" />
              </div>
            </div>
            <div className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg. Sentiment</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="stat-card-value">72%</div>
                <p className="stat-card-trend trend-up">+5% from previous period</p>
              </CardContent>
              <div className="stat-card-icon">
                <Calendar className="h-24 w-24 opacity-10" />
              </div>
            </div>
          </div>

          <Tabs defaultValue="trends">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="trends">Meeting Trends</TabsTrigger>
              <TabsTrigger value="participation">Participation</TabsTrigger>
              <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
              <TabsTrigger value="action-items">Action Items</TabsTrigger>
            </TabsList>
            <TabsContent value="trends" className="mt-6">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Meeting Trends</CardTitle>
                  <CardDescription>
                    Analysis of meeting frequency, duration, and participation over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MeetingTrends />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="participation" className="mt-6">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Participation Analytics</CardTitle>
                  <CardDescription>Analysis of participant engagement and contribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ParticipationAnalytics />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sentiment" className="mt-6">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Sentiment Analytics</CardTitle>
                  <CardDescription>Analysis of meeting sentiment and emotional tone</CardDescription>
                </CardHeader>
                <CardContent>
                  <SentimentAnalytics />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="action-items" className="mt-6">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Action Items Analytics</CardTitle>
                  <CardDescription>Analysis of action item creation, assignment, and completion</CardDescription>
                </CardHeader>
                <CardContent>
                  <ActionItemsAnalytics />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

