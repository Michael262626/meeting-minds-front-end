"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Meeting Notifications</h3>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="meeting-reminders">Meeting Reminders</Label>
            <p className="text-sm text-muted-foreground">Receive reminders before scheduled meetings</p>
          </div>
          <Switch id="meeting-reminders" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="reminder-time">Reminder Time</Label>
            <p className="text-sm text-muted-foreground">How long before a meeting to send a reminder</p>
          </div>
          <Select defaultValue="15min">
            <SelectTrigger id="reminder-time" className="w-[180px]">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5min">5 minutes before</SelectItem>
              <SelectItem value="10min">10 minutes before</SelectItem>
              <SelectItem value="15min">15 minutes before</SelectItem>
              <SelectItem value="30min">30 minutes before</SelectItem>
              <SelectItem value="1hour">1 hour before</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="meeting-invites">Meeting Invites</Label>
            <p className="text-sm text-muted-foreground">Receive notifications for new meeting invites</p>
          </div>
          <Switch id="meeting-invites" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="meeting-changes">Meeting Changes</Label>
            <p className="text-sm text-muted-foreground">Receive notifications for meeting updates or cancellations</p>
          </div>
          <Switch id="meeting-changes" defaultChecked />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Action Item Notifications</h3>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="new-action-items">New Action Items</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications when you're assigned a new action item
            </p>
          </div>
          <Switch id="new-action-items" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="action-item-reminders">Action Item Reminders</Label>
            <p className="text-sm text-muted-foreground">Receive reminders for upcoming action item due dates</p>
          </div>
          <Switch id="action-item-reminders" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="reminder-days">Reminder Days</Label>
            <p className="text-sm text-muted-foreground">How many days before due date to send a reminder</p>
          </div>
          <Select defaultValue="1day">
            <SelectTrigger id="reminder-days" className="w-[180px]">
              <SelectValue placeholder="Select days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="same-day">Same day</SelectItem>
              <SelectItem value="1day">1 day before</SelectItem>
              <SelectItem value="2days">2 days before</SelectItem>
              <SelectItem value="3days">3 days before</SelectItem>
              <SelectItem value="1week">1 week before</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="completed-action-items">Completed Action Items</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications when your assigned action items are marked as completed
            </p>
          </div>
          <Switch id="completed-action-items" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Notification Channels</h3>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive notifications via email</p>
          </div>
          <Switch id="email-notifications" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="browser-notifications">Browser Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
          </div>
          <Switch id="browser-notifications" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="slack-notifications">Slack Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive notifications in Slack</p>
          </div>
          <Switch id="slack-notifications" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="mobile-notifications">Mobile Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive notifications on your mobile device</p>
          </div>
          <Switch id="mobile-notifications" />
        </div>
      </div>
    </div>
  )
}

