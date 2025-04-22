import { BookingTable } from "@/components/booking-table"

export default function MyBookingsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">My Bookings</h1>
        <p className="text-sm text-muted-foreground">Your personal booking history</p>
      </div>
      <BookingTable />
    </div>
  )
}
