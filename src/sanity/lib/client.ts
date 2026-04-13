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
  const id = lang === 'cy' ? 'aboutpageCy' : 'aboutpage'
  const type = lang === 'cy' ? 'aboutCy' : 'page'

  return client.fetch(
    `*[_type == $type && _id == $id][0]`,
    { type, id }
  )
}

export async function getService(lang: 'en' | 'cy' = 'en') {
  const id = lang === 'cy' ? 'servicepageCy' : 'servicepage'
  const type = lang === 'cy' ? 'serviceCy' : 'service'
  return client.fetch(`*[_type == $type && _id == $id][0]`, { type, id })
}

export async function getPosts(lang: 'en' | 'cy' = 'en') {
  const type = lang === 'cy' ? 'postCy' : 'post'
  return await client.fetch(`
    *[_type == $type] | order(publishedAt desc){
      _id,
      title,
      summary,
      slug,
      author,
      mainImage,
      category,
      publishedAt
    }
  `, { type })
}

export async function getContact(lang: 'en' | 'cy' = 'en') {
  const id = lang === 'cy' ? 'contactpageCy' : 'contactpage'
  const type = lang === 'cy' ? 'contactCy' : 'contact'
  return client.fetch(`*[_type == $type && _id == $id][0]`, { type, id })
}