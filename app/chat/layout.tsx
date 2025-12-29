import { Suspense } from "react"

export default function Layout({ children }: LayoutProps<"/chat">) {
  return <Suspense>{children}</Suspense>
}
