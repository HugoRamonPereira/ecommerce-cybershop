import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skry8WxDS7WfysteopJsBQpeAObAGMU72Y7n3awXZVAv9Ke6sSRQ1mhsB7oKbAgMPXgWD82KI6uUaR7QysOeRSqGj4RgHGSp1wM0svuoYlWN6ITQwT0bHroMPXezuIrwmqC6gaO9IIt9pWTrUZZ5DkLXMxxIGQKr3YQSiiTm2imJ5LUGzhw1"
})
