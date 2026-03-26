import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.document()
            .schemaType('home')
            .documentId('homespage')
        ),
      S.listItem()
        .title('About Page')
        .child(
          S.document()
            .schemaType('about')
            .documentId('aboutpage')
        ),
      S.listItem()
        .title('Service Page')
        .child(
          S.document()
            .schemaType('service')
            .documentId('servicepage')
        ),
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')
        ),
      S.listItem()
        .title('Contact Page')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contactpage')
        ),

      S.divider(),

    ])