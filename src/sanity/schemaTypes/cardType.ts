import { defineField, defineType } from 'sanity'

export const cardType = defineType({
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Main Icon',
      type: 'string',
      description: 'Icons from https://lucide.dev/icons/'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', type: 'string' },
            { name: 'text', type: 'string' },
          ]
        }
      ]
    }),
  ],
})