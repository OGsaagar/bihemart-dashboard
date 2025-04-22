import { User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-muted/30 px-6">
      <div className="text-sm text-muted-foreground">25th February, 2025 11:07am</div>
      <Button variant="ghost" size="icon" className="rounded-full">
        <User className="h-5 w-5" />
        <span className="sr-only">User menu</span>
        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-green-500"></span>
      </Button>
    </header>
  )
}
