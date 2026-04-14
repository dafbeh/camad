import { defineField, defineType } from 'sanity'

export const contactTypeCy = defineType({
  name: 'contactCy',
  title: 'Page Content',
  type: 'document',

  fieldsets: [
    { name: 'header1', title: 'Hero' },
    { name: 'header2', title: 'Section 2' },
    { name: 'header3', title: 'Section 3' },
    { name: 'header4', title: 'Section 4' },
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
      title: 'Subheader',
      type: 'text',
      rows: 2,
      fieldset: 'header2',
    }),
    defineField({
      name: 'ourOffice',
      title: 'Our Office',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'header2',
      validation: (Rule) => Rule.min(3).max(4),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      fieldset: 'header2',
    }),
    defineField({
      name: 'emails',
      title: 'Emails',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'email', type: 'string' },
            { name: 'description', type: 'string' },
          ]
        }
      ],
      fieldset: 'header2'
    }),
    defineField({
      name: 'openinghours',
      title: 'Opening Hours',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'header2',
      validation: (Rule) => Rule.min(1).max(3),
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
      name: 'subheader3',
      title: 'Subheader',
      type: 'text',
      rows: 2,
      fieldset: 'header3',
    }),
    defineField({
      name: 'team',
      title: 'Team Member',
      type: 'array',
      of: [{ type: 'teamType' }],
      fieldset: 'header3',
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
      name: 'subheader4',
      title: 'Subheader',
      type: 'text',
      rows: 3,
      fieldset: 'header4',
    }),
    defineField({
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [{ type: 'sponsorType' }],
      fieldset: 'header4',
    }),
    defineField({
      name: 'footer',
      title: 'Footer Text',
      type: 'text',
      rows: 2,
      fieldset: 'header4',
    }),
  ],
})