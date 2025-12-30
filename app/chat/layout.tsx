import { Suspense } from "react"

export default function Layout({ children }: LayoutProps<"/chat">) {
  return (
    <div className="mx-auto flex h-dvh w-full flex-col p-1 sm:w-xl md:w-2xl lg:w-4xl xl:w-6xl 2xl:w-7xl">
      <Suspense>{children}</Suspense>
    </div>
  )
}
