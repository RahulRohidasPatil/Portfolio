import { google } from "@ai-sdk/google"
import { convertToModelMessages, streamText, type UIMessage } from "ai"

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: google("gemini-3-pro-preview"),
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
