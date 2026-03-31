import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function getHome(lang: 'en' | 'cy' = 'en') {
  const type = lang === 'cy' ? 'homeCy' : 'home'
  return client.fetch(`*[_type == $type][0]`, { type })
}

export async function getAbout(lang: 'en' | 'cy' = 'en') {
  if (lang === 'cy') {
    return client.fetch(
      `*[_type == "aboutCy" && _id == "aboutpageCy"][0]`
    )
  }

  return client.fetch(
    `*[_type == "about" && _id == "aboutpage"][0]`
  )
}

export async function getService() {
  return client.fetch(`*[_type == "service" && _id == "servicepage"][0]`)
}

export async function getPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      summary,
      slug,
      author,
      mainImage,
      category,
      publishedAt
    }
  `)
}

export async function getContact() {
  return client.fetch(`*[_type == "contact" && _id == "contactpage"][0]`)
}