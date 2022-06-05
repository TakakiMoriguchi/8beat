import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: '8beat' || "",
  apiKey: process.env.API_KEY || "",
})