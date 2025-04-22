import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Facebook, Gift, Instagram, Linkedin, Send, TextIcon as Telegram, Twitter, Users } from "lucide-react"

export function ReferralSection() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center rounded-lg p-6 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Gift className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-medium">Invite your friends</h3>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg p-6 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-medium">They register on Bihemart</h3>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg p-6 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Gift className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-medium">Your earn rewards</h3>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <Input placeholder="Enter email address" className="flex-1" />
          <Button className="gap-2 bg-secondary hover:bg-secondary/90">
            <Send className="h-4 w-4" />
            Send invite
          </Button>
        </div>

        <div className="pt-6">
          <h3 className="mb-4 text-center text-sm font-medium">More ways to invite your friends</h3>
          <div className="flex items-center justify-between rounded-md border p-3">
            <Input
              readOnly
              value="https://www.bihemart.com/vendor/eeshamakeovers"
              className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
            />
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="pt-4">
          <p className="mb-4 text-center text-sm">Share to</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <Facebook className="h-5 w-5 text-[#1877f2]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <Twitter className="h-5 w-5 text-black" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <Linkedin className="h-5 w-5 text-[#0a66c2]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
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
                className="h-5 w-5 text-green-500"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <Telegram className="h-5 w-5 text-blue-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
