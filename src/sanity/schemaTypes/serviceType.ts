import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Page Content',
  type: 'document',

  fieldsets: [
    { name: 'header1', title: 'Hero' },
    { name: 'header2', title: 'Transport Services' },
    { name: 'header3', title: 'Health & Wellbeing' },
    { name: 'header4', title: 'Community Support Services' },
  ],

  fields: [
    // Section 1
    defineField({
      name: 'header1',
      title: 'Header',
      type: 'string',
      fieldset: 'header1',
    }),
    defineField({
      name: 'subheader1',
      title: 'Subheader',
      type: 'text',
      rows: 2,
      fieldset: 'header1',
    }),

    // Section 2
    defineField({
      name: 'header2',
      title: 'Header',
      type: 'string',
      fieldset: 'header2',
    }),
    defineField({
      name: 'subheader2',
      title: 'Subheader',
      type: 'text',
      rows: 2,
      fieldset: 'header2',
    }),
    defineField({
      name: 'cards1',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
      fieldset: 'header2',
      validation: (Rule) => Rule.min(2).max(2),
    }),

    // Section 3
    defineField({
      name: 'header3',
      title: 'Header',
      type: 'string',
      fieldset: 'header3',
    }),
    defineField({
      name: 'subheader3',
      title: 'Subheader',
      type: 'text',
      rows: 2,
      fieldset: 'header3',
    }),
    defineField({
      name: 'cards2',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
      fieldset: 'header3',
      validation: (Rule) => Rule.min(3).max(3),
    }),

    // Section 4
    defineField({
      name: 'header4',
      title: 'Header',
      type: 'string',
      fieldset: 'header4',
    }),
    defineField({
      name: 'subheader4',
      title: 'Subheader',
      type: 'text',
      rows: 2,
      fieldset: 'header4',
    }),

    defineField({
      name: 'cards3',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
      fieldset: 'header4',
      validation: (Rule) => Rule.min(3).max(3),
    }),
  ],
})