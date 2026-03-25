import { defineField, defineType } from 'sanity'

export const sponsorType = defineType({
  name: 'sponsorType',
  title: 'Sponsor',
  type: 'object',
  fields: [
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload a square image (1:1 ratio recommended)',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    })
  ],
})