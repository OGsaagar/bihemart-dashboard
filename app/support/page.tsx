import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SupportPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Support</h1>
        <p className="text-sm text-muted-foreground">Get help with your account or bookings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Fill out the form below to get in touch with our support team.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="issue-type">Issue Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="account">Account Issues</SelectItem>
                  <SelectItem value="booking">Booking Problems</SelectItem>
                  <SelectItem value="payment">Payment Issues</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Brief description of your issue" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Please describe your issue in detail" rows={5} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-secondary hover:bg-secondary/90">Submit Request</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">How do I cancel a booking?</h3>
              <p className="text-sm text-muted-foreground">
                You can cancel a booking by going to My Bookings, finding the booking you want to cancel, and clicking
                the Cancel button.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">How do I update my payment information?</h3>
              <p className="text-sm text-muted-foreground">
                You can update your payment information in your Profile settings under the Payment Methods section.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">What is the refund policy?</h3>
              <p className="text-sm text-muted-foreground">
                Refunds are processed within 5-7 business days after a cancellation is approved.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">How do I contact a service provider?</h3>
              <p className="text-sm text-muted-foreground">
                You can contact a service provider through the messaging system available in your booking details.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
