export interface Booking {
  id: number
  idNumber: string
  contactInfo: {
    name: string
    code: string
    initials: string
  }
  bookingNo: string
  bookingDate: string
  paymentMethod: string
  amount: string
  status: string
  service: {
    name: string
    location: string
    price: string
    description: string
    image?: string
  }
  userDetails: {
    name: string
    userNo: string
    telephone: string
    billingAddress: string
  }
  orderDetails: {
    amount: string
    vat: string
    total: string
    discount: string
  }
}
