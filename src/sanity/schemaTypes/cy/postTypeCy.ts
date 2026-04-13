// studio/schemaTypes/postType.ts
import { defineField, defineType } from 'sanity'

export const postTypeCy = defineType({
  name: 'postCy',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'string',
      description: '1 sentance summary',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      description: 'Unique name for the link (use "-" for spaces)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      description: 'such as "EVENT" or "PROJECT"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})