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
    { name: 'header5', title: 'Local Support' },
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
      name: 'header2Image',
      title: 'Header Image',
      type: 'image',
      fieldset: 'header2',
      options: { hotspot: true },
      description: 'Upload a square image (1:1 ratio recommended)',
    }),
    defineField({
      name: 'cards1',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
      fieldset: 'header2',
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
      name: 'header3Image',
      title: 'Header Image',
      type: 'image',
      fieldset: 'header3',
      options: { hotspot: true },
      description: 'Upload a square image (1:1 ratio recommended)',
    }),
    defineField({
      name: 'cards2',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
      fieldset: 'header3',
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
    }),

    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      description: 'List of eligibility for Meals on Wheels',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // Section 5
    defineField({
      name: 'header5',
      title: 'Header',
      type: 'string',
      fieldset: 'header5',
    }),
    defineField({
      name: 'subheader5',
      title: 'Subheader',
      type: 'text',
      rows: 2,
      fieldset: 'header5',
    }),

    defineField({
      name: 'cards4',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image' },
            { name: 'name', type: 'string' },
            { name: 'about', type: 'text', rows: 3 },
            { name: 'details', type: 'array', of: [{ type: 'object', fields: [{ name: 'icon', type: 'string' }, { name: 'text', type: 'string' }, { name: 'isLink', type: 'boolean' }] }] },
          ]
        }
      ],
      fieldset: 'header5',
    }),
  ],
})