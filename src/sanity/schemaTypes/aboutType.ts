import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'page',
  title: 'Page Content',
  type: 'document',

  fieldsets: [
    { name: 'header1', title: 'Section 1' },
    { name: 'header2', title: 'Section 2' },
    { name: 'header3', title: 'Section 3' },
  ],

  fields: [
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
      rows: 3,
      fieldset: 'header3',
    }),
  ],
})