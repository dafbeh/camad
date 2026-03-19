import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function getAbout() {
  return client.fetch(`*[_type == "page" && _id == "aboutpage"][0]`)
}

export async function getService() {
  return client.fetch(`*[_type == "page" && _id == "servicepage"][0]`)
}