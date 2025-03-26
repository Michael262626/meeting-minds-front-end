"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mic, Pause, Play, StopCircle, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Mock data for speakers and transcriptions
const SPEAKERS = [
  { id: "1", name: "Alex Johnson", color: "bg-blue-500" },
  { id: "2", name: "Sarah Miller", color: "bg-purple-500" },
  { id: "3", name: "David Chen", color: "bg-green-500" },
  { id: "4", name: "Emma Wilson", color: "bg-amber-500" },
]

// Mock transcription data
const MOCK_TRANSCRIPTIONS = [
  {
    id: "1",
    speakerId: "1",
    text: "I think we should focus on improving the user onboarding experience. Our analytics show a 15% drop-off rate during the first-time setup.",
    timestamp: "00:00:15",
    keyPoints: ["15% drop-off rate during onboarding", "Need to improve first-time setup"],
  },
  {
    id: "2",
    speakerId: "2",
    text: "That's a good point. We've also received feedback from the customer success team that users are confused by the dashboard layout. We should consider simplifying it.",
    timestamp: "00:00:32",
    keyPoints: ["Customer feedback indicates dashboard confusion", "Consider simplifying layout"],
  },
  {
    id: "3",
    speakerId: "3",
    text: "I agree with both points. From a technical perspective, we can implement a guided tour feature that walks users through the main features. This could address both the onboarding issue and help with dashboard navigation.",
    timestamp: "00:01:05",
    keyPoints: ["Implement guided tour feature", "Address onboarding and navigation issues"],
  },
  {
    id: "4",
    speakerId: "4",
    text: "That sounds like a good approach. I can work with the design team to create mockups for the guided tour. We should also consider A/B testing different dashboard layouts to see which performs better with new users.",
    timestamp: "00:01:28",
    keyPoints: ["Create mockups for guided tour", "A/B test different dashboard layouts"],
  },
]

export function SpeechToText() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioLevel, setAudioLevel] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [transcriptions, setTranscriptions] = useState<typeof MOCK_TRANSCRIPTIONS>([])
  const [recognizedSpeakers, setRecognizedSpeakers] = useState<typeof SPEAKERS>([])
  const [error, setError] = useState<string | null>(null)

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const audioLevelRef = useRef<NodeJS.Timeout | null>(null)

  // Function to start recording
  const startRecording = () => {
    try {
      setIsRecording(true)
      setIsPaused(false)
      setError(null)

      // Simulate audio level changes
      audioLevelRef.current = setInterval(() => {
        setAudioLevel(Math.random() * 100)
      }, 200)

      // Simulate recording time updates
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)

      // Simulate speaker recognition after a short delay
      setTimeout(() => {
        setRecognizedSpeakers(SPEAKERS.slice(0, 2))
      }, 3000)

      // Add more speakers as recording continues
      setTimeout(() => {
        setRecognizedSpeakers(SPEAKERS)
      }, 8000)
    } catch (err) {
      setError("Failed to start recording. Please check your microphone permissions.")
      setIsRecording(false)
    }
  }

  // Function to stop recording
  const stopRecording = () => {
    setIsRecording(false)
    setIsPaused(false)
    setIsProcessing(true)

    // Clear intervals
    if (timerRef.current) clearInterval(timerRef.current)
    if (audioLevelRef.current) clearInterval(audioLevelRef.current)

    // Reset audio level
    setAudioLevel(0)

    // Simulate processing delay
    setTimeout(() => {
      setTranscriptions(MOCK_TRANSCRIPTIONS)
      setIsProcessing(false)
    }, 3000)
  }

  // Function to pause/resume recording
  const togglePause = () => {
    setIsPaused(!isPaused)

    if (isPaused) {
      // Resume
      audioLevelRef.current = setInterval(() => {
        setAudioLevel(Math.random() * 100)
      }, 200)

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    } else {
      // Pause
      if (timerRef.current) clearInterval(timerRef.current)
      if (audioLevelRef.current) clearInterval(audioLevelRef.current)
      setAudioLevel(0)
    }
  }

  // Format time for display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }

  // Clean up intervals on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (audioLevelRef.current) clearInterval(audioLevelRef.current)
    }
  }, [])

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30 border-0 shadow-md overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-gray-700 dark:from-slate-300 dark:to-gray-300">
            Speech to Text
          </CardTitle>
          <CardDescription>Record your meeting to automatically transcribe and summarize key points</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
            <div className="text-4xl font-mono font-bold text-primary">{formatTime(recordingTime)}</div>

            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs">
                <span>Audio Level</span>
                <span>{Math.round(audioLevel)}%</span>
              </div>
              <Progress value={audioLevel} className="h-2" />
            </div>

            <div className="flex gap-4 mt-4">
              {!isRecording ? (
                <Button
                  onClick={startRecording}
                  className="bg-red-500 hover:bg-red-600 text-white"
                  size="lg"
                  disabled={isProcessing}
                >
                  <Mic className="mr-2 h-5 w-5" />
                  Start Recording
                </Button>
              ) : (
                <>
                  <Button onClick={togglePause} variant="outline" size="icon" className="h-12 w-12 rounded-full">
                    {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                  </Button>
                  <Button onClick={stopRecording} variant="destructive" size="icon" className="h-12 w-12 rounded-full">
                    <StopCircle className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>

            {isRecording && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                {isPaused ? "Recording paused" : "Recording in progress"}
              </div>
            )}

            {isProcessing && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing audio and generating transcription...
              </div>
            )}
          </div>

          {isRecording && recognizedSpeakers.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Recognized Speakers:</h3>
              <div className="flex flex-wrap gap-2">
                {recognizedSpeakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="flex items-center gap-1.5 bg-white dark:bg-black/20 px-3 py-1.5 rounded-full shadow-sm"
                  >
                    <Avatar className={`h-6 w-6 ${speaker.color}`}>
                      <AvatarFallback className="text-[10px] text-white">{getInitials(speaker.name)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{speaker.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {transcriptions.length > 0 && (
            <div className="space-y-4 mt-6">
              <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-gray-700 dark:from-slate-300 dark:to-gray-300">
                Transcription & Key Points
              </h3>

              <div className="space-y-6">
                {transcriptions.map((item) => {
                  const speaker = SPEAKERS.find((s) => s.id === item.speakerId)

                  return (
                    <div key={item.id} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Avatar className={`h-8 w-8 ${speaker?.color}`}>
                          <AvatarFallback className="text-white">
                            {speaker ? getInitials(speaker.name) : "?"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{speaker?.name || "Unknown"}</span>
                            <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm ml-10">{item.text}</p>

                      <div className="ml-10 mt-2">
                        <span className="text-xs font-medium text-primary">Key Points:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {item.keyPoints.map((point, idx) => (
                            <Badge key={idx} variant="outline" className="bg-primary/5 text-xs">
                              {point}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

