"use client"

import type React from "react"

import { useState } from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { PaymentModal } from "@/components/payment-modal"
import { BookingProvider } from "@/context/booking-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <BookingProvider>
            <div className="flex h-screen bg-muted/30">
              <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
              <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
                <PaymentModal />
              </div>
            </div>
          </BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
