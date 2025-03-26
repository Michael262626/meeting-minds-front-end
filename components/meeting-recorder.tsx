"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mic, Pause, Play, StopCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { startRecording, stopRecording, transcribeSpeech } from "@/lib/meeting-service"

export function MeetingRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [meetingTitle, setMeetingTitle] = useState("")
  const [audioLevel, setAudioLevel] = useState(0)

  // In a real app, we would use a timer to update the recording time
  // and analyze audio levels from the microphone input

  const handleStartRecording = async () => {
    try {
      await startRecording()
      setIsRecording(true)

      // Simulate audio level changes
      const audioLevelInterval = setInterval(() => {
        setAudioLevel(Math.random() * 100)
      }, 200)

      // Simulate recording time updates
      const timeInterval = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)

      // Store intervals for cleanup
      ;(window as any).audioLevelInterval = audioLevelInterval
      ;(window as any).timeInterval = timeInterval
    } catch (error) {
      console.error("Failed to start recording:", error)
    }
  }

  const handleStopRecording = async () => {
    try {
      const audioBlob = await stopRecording()
      setIsRecording(false)
      setIsPaused(false)

      // Clear intervals
      clearInterval((window as any).audioLevelInterval)
      clearInterval((window as any).timeInterval)

      // Reset state
      setAudioLevel(0)

      // In a real app, we would send the audio for transcription
      // and redirect to the meeting summary page
      const transcript = await transcribeSpeech(audioBlob)
      console.log("Transcript:", transcript)

      // For demo purposes, we'll just reset the recording time after a delay
      setTimeout(() => {
        setRecordingTime(0)
      }, 1000)
    } catch (error) {
      console.error("Failed to stop recording:", error)
    }
  }

  const handlePauseRecording = () => {
    setIsPaused(!isPaused)
    // In a real app, we would pause/resume the recording
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="meeting-title-record">Meeting Title</Label>
        <Input
          id="meeting-title-record"
          placeholder="Quick Team Sync"
          value={meetingTitle}
          onChange={(e) => setMeetingTitle(e.target.value)}
          disabled={isRecording}
        />
      </div>

      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-4xl font-mono">{formatTime(recordingTime)}</div>

            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs">
                <span>Audio Level</span>
                <span>{Math.round(audioLevel)}%</span>
              </div>
              <Progress value={audioLevel} className="h-2" />
            </div>

            <div className="flex gap-4 mt-4">
              {!isRecording ? (
                <Button onClick={handleStartRecording} className="bg-red-500 hover:bg-red-600 text-white" size="lg">
                  <Mic className="mr-2 h-5 w-5" />
                  Start Recording
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handlePauseRecording}
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-full"
                  >
                    {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                  </Button>
                  <Button
                    onClick={handleStopRecording}
                    variant="destructive"
                    size="icon"
                    className="h-12 w-12 rounded-full"
                  >
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
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-muted-foreground">
        <p>
          This will record audio from your microphone, transcribe it in real-time, and generate a summary with action
          items.
        </p>
      </div>
    </div>
  )
}

