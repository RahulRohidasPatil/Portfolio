import { ModeToggle } from "@/components/mode-toggle"
import SignOutButton from "@/components/sign-out-button"

export default function Layout({ children }: LayoutProps<"/chat">) {
  return (
    <div className="flex h-dvh flex-col gap-1 p-1">
      <header className="space-x-1 text-center">
        <ModeToggle />
        <SignOutButton />
      </header>
      <div className="container mx-auto flex flex-1 flex-col gap-1 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
