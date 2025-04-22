"use client"

import { useState } from "react"
import { Check, Copy, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useBooking } from "@/context/booking-context"
import type { Booking } from "@/types/booking"

// Generate more sample data for pagination
const generateBookings = (count: number): Booking[] => {
  const baseBookings: Booking[] = [
    {
      id: 1,
      idNumber: "124",
      contactInfo: {
        name: "Orlando Eunice",
        code: "137123",
        initials: "OR",
      },
      bookingNo: "15289439383446",
      bookingDate: "Jan 17th, 2025 03:23pm",
      paymentMethod: "Khalti",
      amount: "18,000",
      status: "Pending",
      service: {
        name: "Makeup by Eesha",
        location: "Mysorelto Mandya And Banglore)",
        price: "$1,000",
        description: "Bridal makeup",
        image: "/placeholder.svg?height=80&width=80",
      },
      userDetails: {
        name: "Orlando Eunice",
        userNo: "312348",
        telephone: "23712389236",
        billingAddress: "45 Thamel Road, Kathmandu, Nepal, PO Box 12345.",
      },
      orderDetails: {
        amount: "NPR 12,000",
        vat: "NPR200",
        total: "NPR 12,200",
        discount: "NPR 1,000",
      },
    },
    {
      id: 2,
      idNumber: "126",
      contactInfo: {
        name: "Ganiyy Abraham",
        code: "137123",
        initials: "GA",
      },
      bookingNo: "15289439383446",
      bookingDate: "Jan 17th, 2025 03:23pm",
      paymentMethod: "eSewa",
      amount: "12,000",
      status: "Successful",
      service: {
        name: "Hair Styling",
        location: "Thamel, Kathmandu",
        price: "$800",
        description: "Premium hair styling",
        image: "/placeholder.svg?height=80&width=80",
      },
      userDetails: {
        name: "Ganiyy Abraham",
        userNo: "312349",
        telephone: "23712389237",
        billingAddress: "32 Durbar Marg, Kathmandu, Nepal, PO Box 54321.",
      },
      orderDetails: {
        amount: "NPR 9,600",
        vat: "NPR192",
        total: "NPR 9,792",
        discount: "NPR 800",
      },
    },
    {
      id: 3,
      idNumber: "345",
      contactInfo: {
        name: "David John",
        code: "137123",
        initials: "DJ",
      },
      bookingNo: "15289439383446",
      bookingDate: "Jan 17th, 2025 03:23pm",
      paymentMethod: "FonePay",
      amount: "3,000",
      status: "Cancel",
      service: {
        name: "Facial Treatment",
        location: "Patan, Lalitpur",
        price: "$250",
        description: "Deep cleansing facial",
        image: "/placeholder.svg?height=80&width=80",
      },
      userDetails: {
        name: "David John",
        userNo: "312350",
        telephone: "23712389238",
        billingAddress: "15 Jhamsikhel, Lalitpur, Nepal, PO Box 98765.",
      },
      orderDetails: {
        amount: "NPR 3,000",
        vat: "NPR60",
        total: "NPR 3,060",
        discount: "NPR 250",
      },
    },
  ]

  if (count <= 3) return baseBookings.slice(0, count)

  const result = [...baseBookings]

  // Generate additional bookings
  for (let i = 4; i <= count; i++) {
    const status = i % 3 === 0 ? "Pending" : i % 3 === 1 ? "Successful" : "Cancel"
    const paymentMethod = i % 3 === 0 ? "Khalti" : i % 3 === 1 ? "eSewa" : "FonePay"

    result.push({
      id: i,
      idNumber: `${100 + i}`,
      contactInfo: {
        name: `Customer ${i}`,
        code: `${130000 + i}`,
        initials: `C${i}`,
      },
      bookingNo: `1528943938${i}446`,
      bookingDate: "Jan 20th, 2025 04:30pm",
      paymentMethod,
      amount: `${i * 1000}`,
      status,
      service: {
        name: `Service ${i}`,
        location: "Kathmandu, Nepal",
        price: `$${i * 100}`,
        description: `Service description ${i}`,
        image: "/placeholder.svg?height=80&width=80",
      },
      userDetails: {
        name: `Customer ${i}`,
        userNo: `${310000 + i}`,
        telephone: `${23712380000 + i}`,
        billingAddress: `Address ${i}, Kathmandu, Nepal`,
      },
      orderDetails: {
        amount: `NPR ${i * 1000}`,
        vat: `NPR${i * 20}`,
        total: `NPR ${i * 1020}`,
        discount: `NPR ${i * 100}`,
      },
    })
  }

  return result
}

export const allBookings = generateBookings(15)

export function BookingTable() {
  const { openPaymentModal } = useBooking()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const itemsPerPage = 3

  // Filter bookings based on search term
  const filteredBookings = allBookings.filter(
    (booking) =>
      booking.contactInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.bookingNo.includes(searchTerm) ||
      booking.idNumber.includes(searchTerm),
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedBookings = filteredBookings.slice(startIndex, startIndex + itemsPerPage)

  // Generate page numbers for pagination
  const pageNumbers = []
  const maxPageButtons = 5

  if (totalPages <= maxPageButtons) {
    // Show all page numbers
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    // Show limited page numbers with ellipsis
    if (currentPage <= 3) {
      // Near the start
      for (let i = 1; i <= 3; i++) {
        pageNumbers.push(i)
      }
      pageNumbers.push("ellipsis")
      pageNumbers.push(totalPages)
    } else if (currentPage >= totalPages - 2) {
      // Near the end
      pageNumbers.push(1)
      pageNumbers.push("ellipsis")
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Middle
      pageNumbers.push(1)
      pageNumbers.push("ellipsis")
      pageNumbers.push(currentPage - 1)
      pageNumbers.push(currentPage)
      pageNumbers.push(currentPage + 1)
      pageNumbers.push("ellipsis")
      pageNumbers.push(totalPages)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="relative flex-1">
          <Input
            placeholder="Search"
            className="pl-10 pr-4"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1) // Reset to first page on search
            }}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-muted-foreground"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">S/N</TableHead>
              <TableHead className="w-12">ID</TableHead>
              <TableHead>Contact info</TableHead>
              <TableHead>Booking no</TableHead>
              <TableHead>Booking date</TableHead>
              <TableHead>Payment method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Payment status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedBookings.length > 0 ? (
              paginatedBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.idNumber}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary text-white">
                        {booking.contactInfo.initials}
                      </div>
                      <div>
                        <div className="font-medium">{booking.contactInfo.name}</div>
                        <div className="text-sm text-muted-foreground">{booking.contactInfo.code}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{booking.bookingNo}</TableCell>
                  <TableCell>{booking.bookingDate}</TableCell>
                  <TableCell>
                    {booking.paymentMethod === "Khalti" && (
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-[#4b4efc] text-white">K</div>
                    )}
                    {booking.paymentMethod === "eSewa" && (
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-[#0f973d] text-white">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                    {booking.paymentMethod === "FonePay" && (
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-white border">
                        <span className="text-xs font-bold text-red-500">F</span>
                        <span className="text-xs font-bold">pay</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{booking.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        booking.status === "Successful"
                          ? "success"
                          : booking.status === "Pending"
                            ? "outline"
                            : "destructive"
                      }
                      className={booking.status === "Pending" ? "border-amber-500 text-amber-500" : ""}
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {booking.status === "Successful" ? (
                      <Button variant="outline" size="sm" className="h-8">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="h-8" onClick={() => openPaymentModal(booking)}>
                        <Copy className="mr-2 h-4 w-4" />
                        Make payment
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {filteredBookings.length > 0 && (
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {pageNumbers.map((pageNumber, index) =>
              pageNumber === "ellipsis" ? (
                <span key={`ellipsis-${index}`} className="mx-1">
                  ...
                </span>
              ) : (
                <Button
                  key={`page-${pageNumber}`}
                  variant={currentPage === pageNumber ? "secondary" : "outline"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(Number(pageNumber))}
                >
                  {pageNumber}
                </Button>
              ),
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </div>
      )}
    </div>
  )
}
