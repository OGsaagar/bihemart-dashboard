import { BookingTable } from "@/components/booking-table"

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome to your dashboard</p>
      </div>
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Total Bookings</span>
            <span className="text-xs text-muted-foreground">+12.5%</span>
          </div>
          <div className="mt-2 text-2xl font-bold">142</div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Pending</span>
            <span className="text-xs text-muted-foreground">+5.2%</span>
          </div>
          <div className="mt-2 text-2xl font-bold">36</div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Completed</span>
            <span className="text-xs text-muted-foreground">+8.4%</span>
          </div>
          <div className="mt-2 text-2xl font-bold">98</div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Cancelled</span>
            <span className="text-xs text-muted-foreground">-2.3%</span>
          </div>
          <div className="mt-2 text-2xl font-bold">8</div>
        </div>
      </div> */}
      <div>
        <h2 className="text-lg font-medium mb-4">Recent Bookings</h2>
        <BookingTable />
      </div>
    </div>
  )
}
