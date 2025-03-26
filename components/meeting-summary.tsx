import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MeetingSummary({ meetingId }: { meetingId: string }) {
  // In a real app, we would fetch the meeting summary based on the ID

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Key Points</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc pl-5 space-y-2">
            <li>User research shows 78% of enterprise customers want better analytics capabilities</li>
            <li>Analytics dashboard confirmed as top priority for Q2</li>
            <li>Mobile app improvements will continue in parallel</li>
            <li>Notification system redesign will be postponed to accommodate priority features</li>
            <li>Development of analytics features can leverage existing data pipeline work</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Decisions Made</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc pl-5 space-y-2">
            <li>Analytics dashboard prioritized as the main Q2 deliverable</li>
            <li>Engineering team will balance resources between analytics and mobile improvements</li>
            <li>Notification system redesign deprioritized based on user research</li>
            <li>Product roadmap document will be updated to reflect these changes</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Discussion Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">User Research Insights</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Sarah presented findings from recent user research, highlighting strong demand for improved analytics
                capabilities among enterprise customers.
              </p>
            </div>

            <div>
              <h4 className="font-medium">Resource Allocation</h4>
              <p className="text-sm text-muted-foreground mt-1">
                The team discussed how to balance resources between the analytics dashboard and ongoing mobile app
                improvements, deciding both could proceed with adjusted timelines.
              </p>
            </div>

            <div>
              <h4 className="font-medium">Technical Considerations</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Emma noted that previous work on data pipelines would accelerate development of new analytics features,
                providing a technical advantage for this priority.
              </p>
            </div>

            <div>
              <h4 className="font-medium">Feature Prioritization</h4>
              <p className="text-sm text-muted-foreground mt-1">
                The team agreed to postpone the notification system redesign to focus on higher-priority features based
                on user feedback and business goals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

