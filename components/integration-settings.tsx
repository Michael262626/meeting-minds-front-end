"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Calendar, CheckCircle, Clock, FileText, Link2, Trello, Video, XCircle } from "lucide-react"

export function IntegrationSettings() {
  // Sample integration data
  const [integrations, setIntegrations] = useState([
    {
      id: "zoom",
      name: "Zoom",
      icon: Video,
      description: "Record and transcribe Zoom meetings",
      connected: true,
      lastSync: "2 hours ago",
    },
    {
      id: "teams",
      name: "Microsoft Teams",
      icon: Video,
      description: "Record and transcribe Teams meetings",
      connected: true,
      lastSync: "1 day ago",
    },
    {
      id: "google-meet",
      name: "Google Meet",
      icon: Video,
      description: "Record and transcribe Google Meet meetings",
      connected: false,
      lastSync: null,
    },
    {
      id: "google-calendar",
      name: "Google Calendar",
      icon: Calendar,
      description: "Sync meetings with Google Calendar",
      connected: true,
      lastSync: "3 hours ago",
    },
    {
      id: "outlook",
      name: "Outlook Calendar",
      icon: Calendar,
      description: "Sync meetings with Outlook Calendar",
      connected: false,
      lastSync: null,
    },
    {
      id: "slack",
      name: "Slack",
      icon: Link2,
      description: "Share meeting summaries and action items in Slack",
      connected: true,
      lastSync: "5 hours ago",
    },
    {
      id: "trello",
      name: "Trello",
      icon: Trello,
      description: "Create Trello cards from action items",
      connected: false,
      lastSync: null,
    },
    {
      id: "asana",
      name: "Asana",
      icon: FileText,
      description: "Create Asana tasks from action items",
      connected: true,
      lastSync: "1 day ago",
    },
  ])

  const toggleConnection = (id: string) => {
    setIntegrations(
      integrations.map((integration) =>
        integration.id === id
          ? { ...integration, connected: !integration.connected, lastSync: integration.connected ? null : "Just now" }
          : integration,
      ),
    )
  }

  return (
    <div className="space-y-6">
      {integrations.map((integration) => (
        <div key={integration.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
              <integration.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{integration.name}</h3>
                {integration.connected ? (
                  <span className="flex items-center text-xs text-green-500">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Connected
                  </span>
                ) : (
                  <span className="flex items-center text-xs text-muted-foreground">
                    <XCircle className="mr-1 h-3 w-3" />
                    Not Connected
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{integration.description}</p>
              {integration.connected && integration.lastSync && (
                <p className="mt-1 text-xs text-muted-foreground flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  Last synced: {integration.lastSync}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={integration.connected} onCheckedChange={() => toggleConnection(integration.id)} />
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

