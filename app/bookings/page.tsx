import { BookingTable } from "@/components/booking-table"

export default function BookingsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Bookings</h1>
        <p className="text-sm text-muted-foreground">All your booking history</p>
      </div>
      <BookingTable />
    </div>
  )
}
