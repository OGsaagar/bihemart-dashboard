import { ReferralSection } from "@/components/referral-section"

export default function ReferralPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Referral</h1>
        <p className="text-sm text-muted-foreground">Here you have access to your referrals and links to refer.</p>
      </div>
      <ReferralSection />
    </div>
  )
}
