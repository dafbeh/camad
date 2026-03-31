import { defineField, defineType } from 'sanity'

export const aboutTypeCy = defineType({
  name: 'aboutCy',
  title: 'Page Content',
  type: 'document',

  fieldsets: [
    { name: 'header1', title: 'Section 1' },
    { name: 'header2', title: 'Section 2' },
    { name: 'header3', title: 'Section 3' },
    { name: 'header4', title: 'Section 4' },
    { name: 'header5', title: 'Section 5' },
  ],

  fields: [
    // Section 1
    defineField({
      name: 'label1',
      title: 'label',
      type: 'string',
      fieldset: 'header1',
    }),
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
      title: 'Subheader Paragraph 1',
      type: 'text',
      rows: 3,
      fieldset: 'header2',
    }),
    defineField({
      name: 'subheader3',
      title: 'Subheader Paragraph 2',
      type: 'text',
      rows: 4,
      fieldset: 'header2',
    }),
    defineField({
      name: 'header2Image',
      title: 'Header Image',
      type: 'image',
      fieldset: 'header2',
      options: { hotspot: true },
      description: 'Upload a square image (1:1 ratio recommended)',
    }),

    // Section 3
    defineField({
      name: 'label2',
      title: 'label',
      type: 'string',
      fieldset: 'header3',
    }),
    defineField({
      name: 'header3',
      title: 'Header',
      type: 'string',
      fieldset: 'header3',
    }),
    defineField({
      name: 'subheader4',
      title: 'Subheader',
      type: 'text',
      rows: 4,
      fieldset: 'header3',
    }),

    defineField({
      name: 'cards1',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
      fieldset: 'header3',
      validation: (Rule) => Rule.min(3).max(3),
    }),

    // Section 4
    defineField({
      name: 'label3',
      title: 'label',
      type: 'string',
      fieldset: 'header4',
    }),
    defineField({
      name: 'header4',
      title: 'Header',
      type: 'string',
      fieldset: 'header4',
    }),
    defineField({
      name: 'subheader5',
      title: 'Subheader Paragraph 1',
      type: 'text',
      rows: 3,
      fieldset: 'header4',
    }),
    defineField({
      name: 'subheader6',
      title: 'Subheader Paragraph 2',
      type: 'text',
      rows: 4,
      fieldset: 'header4',
    }),
    defineField({
      name: 'header4Image',
      title: 'Header Image',
      type: 'image',
      fieldset: 'header4',
      options: { hotspot: true },
      description: 'Upload a square image (1:1 ratio recommended)',
    }),

    // Section 5
    defineField({
      name: 'header5',
      title: 'Header',
      type: 'string',
      fieldset: 'header5',
    }),
    defineField({
      name: 'subheader7',
      title: 'Subheader',
      type: 'text',
      rows: 2,
      fieldset: 'header5',
    }),

    defineField({
      name: 'cards2',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
      fieldset: 'header5',
      validation: (Rule) => Rule.min(4).max(4),
    }),
  ],
})