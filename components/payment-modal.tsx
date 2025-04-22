"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useBooking } from "@/context/booking-context"

export function PaymentModal() {
  const { selectedBooking, paymentModalOpen, closePaymentModal } = useBooking()

  if (!selectedBooking) return null

  return (
    <Dialog open={paymentModalOpen} onOpenChange={closePaymentModal}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="p-6 border-r">
            <DialogHeader>
              <DialogTitle>Payment details</DialogTitle>
              <DialogDescription>Here is your payment details.</DialogDescription>
            </DialogHeader>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-md">
                  <img
                    src={selectedBooking.service.image || "/placeholder.svg?height=80&width=80"}
                    alt={selectedBooking.service.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{selectedBooking.service.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedBooking.service.location}</p>
                  <p className="mt-1 font-semibold">{selectedBooking.service.price}</p>
                  <p className="text-sm text-muted-foreground">{selectedBooking.service.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Name</span>
                  <span className="text-sm font-medium">{selectedBooking.userDetails.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">User no</span>
                  <span className="text-sm font-medium">{selectedBooking.userDetails.userNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Booking no</span>
                  <span className="text-sm font-medium">{selectedBooking.bookingNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Booking date</span>
                  <span className="text-sm font-medium">{selectedBooking.bookingDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Order total</span>
                  <span className="text-sm font-medium">{selectedBooking.orderDetails.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Telephone</span>
                  <span className="text-sm font-medium">{selectedBooking.userDetails.telephone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Status</span>
                  <span className="text-sm font-medium">{selectedBooking.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm align-top">Billing address</span>
                  <span className="text-sm font-medium text-right">{selectedBooking.userDetails.billingAddress}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-6">Order summary</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Payment method</h4>
                <RadioGroup defaultValue="khalti" className="space-y-3">
                  <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="khalti" id="khalti" />
                      <Label htmlFor="khalti" className="font-normal">
                        Khalti
                      </Label>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-[#4b4efc] text-white">K</div>
                  </div>
                  <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="esewa" id="esewa" />
                      <Label htmlFor="esewa" className="font-normal">
                        eSewa
                      </Label>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-[#0f973d] text-white">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fonepay" id="fonepay" />
                      <Label htmlFor="fonepay" className="font-normal">
                        FonePay
                      </Label>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-white border">
                      <span className="text-[10px] font-bold text-red-500">F</span>
                      <span className="text-[10px] font-bold">pay</span>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex justify-between">
                  <span className="text-sm">Order amount</span>
                  <span className="text-sm font-medium">{selectedBooking.orderDetails.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">VAT%</span>
                  <span className="text-sm font-medium">{selectedBooking.orderDetails.vat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total amount</span>
                  <span className="text-sm font-medium">{selectedBooking.orderDetails.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Discount</span>
                  <span className="text-sm font-medium">{selectedBooking.orderDetails.discount}</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90">Make payment</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
