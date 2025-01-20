import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'topHeader',
  title: 'Top Header',
  type: 'document',
  fields: [
    defineField({
      name: 'bgClass',
      title: 'Background Class',
      type: 'string',
      description: 'CSS class for the background color of the top header section.',
      initialValue: 'bg-[#252B42]',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'array',
      of: [
        defineField({
          name: 'contactItem',
          title: 'Contact Item',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
            }),
          ],
        }),
      ],
      description: 'Array of contact info items like phone and email.',
    }),
    defineField({
      name: 'freeShippingText',
      title: 'Free Shipping Text',
      type: 'string',
      description: 'Text for the free shipping offer.',
      initialValue: 'Free shipping over PKR 5000+',
    }),
  ],
})
