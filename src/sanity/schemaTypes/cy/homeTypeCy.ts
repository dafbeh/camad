import { defineField, defineType } from 'sanity'

export const homeTypeCy = defineType({
  name: 'homeCy',
  title: 'Page Content',
  type: 'document',

  fieldsets: [
    { name: 'header1', title: 'Section 1' },
    { name: 'header2', title: 'Section 2' },
    { name: 'header3', title: 'Section 3' },
    { name: 'card1', title: 'Card 1' },
    { name: 'card2', title: 'Card2' },
    { name: 'card3', title: 'Card3' },
  ],

  fields: [
    defineField({
      name: 'label',
      title: 'label',
      type: 'string',
    }),
    
    // Section 1
    defineField({
      name: 'header1',
      title: 'Title',
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
      name: 'button1',
      title: 'Button 1',
      type: 'string',
      fieldset: 'header2',
    }),
    defineField({
      name: 'button2',
      title: 'Button 2',
      type: 'string',
      fieldset: 'header2',
    }),

    defineField({
      name: 'card1H',
      title: 'Card 1 Header',
      type: 'string',
      fieldset: 'card1',
    }),
    defineField({
      name: 'card1B',
      title: 'Card1 Body',
      type: 'string',
      fieldset: 'card1',
    }),

    defineField({
      name: 'card2H',
      title: 'Card 2 Header',
      type: 'string',
      fieldset: 'card2',
    }),
    defineField({
      name: 'card2B',
      title: 'Card2 Body',
      type: 'string',
      fieldset: 'card2',
    }),

    defineField({
      name: 'card3H',
      title: 'Card 3 Header',
      type: 'string',
      fieldset: 'card3',
    }),
    defineField({
      name: 'card3B',
      title: 'Card3 Body',
      type: 'string',
      fieldset: 'card3',
    }),
  ],
})