import type { models } from "./constants"

export type ModelId = (typeof models)[number]["id"]
