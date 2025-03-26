import { Button } from "@/components/ui/button"
import { Mic } from "lucide-react"
import Link from "next/link"
import { SpeechToText } from "@/components/speech-to-text"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SpeechToTextPage() {
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
            <ThemeToggle />
            <Button variant="default" asChild>
              <Link href="/new-meeting">New Meeting</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tight">Speech to Text</h2>
          <p className="text-muted-foreground">
            Record your meeting to automatically transcribe and extract key points from each speaker.
          </p>

          <SpeechToText />
        </div>
      </main>
    </div>
  )
}

