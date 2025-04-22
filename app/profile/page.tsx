import { ProfileForm } from "@/components/profile-form"

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
        <p className="text-sm text-muted-foreground">Manage your personal information</p>
      </div>
      <ProfileForm />
    </div>
  )
}
