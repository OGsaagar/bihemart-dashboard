"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import type { Booking } from "@/types/booking"

interface BookingContextType {
  selectedBooking: Booking | null
  paymentModalOpen: boolean
  openPaymentModal: (booking: Booking) => void
  closePaymentModal: () => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)

  const openPaymentModal = (booking: Booking) => {
    setSelectedBooking(booking)
    setPaymentModalOpen(true)
  }

  const closePaymentModal = () => {
    setPaymentModalOpen(false)
  }

  return (
    <BookingContext.Provider
      value={{
        selectedBooking,
        paymentModalOpen,
        openPaymentModal,
        closePaymentModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider")
  }
  return context
}
