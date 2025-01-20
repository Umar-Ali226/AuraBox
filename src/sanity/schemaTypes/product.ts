//SANITY SCHEMA product.js

import { Rule } from '@sanity/types'

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
          name: 'title',
          validation: (rule : Rule) => rule.required(),
          title: 'Product Name',
          type: 'string',
          description: 'Name of product'
        },
        {
          name: 'description',
          validation: (rule : Rule ) => rule.required(),
          title: 'Description',
          type: 'text',
          description: 'Description Of Produt'
        },
        {
          name: 'price',
          validation: (rule : Rule) => rule.required(),
          title: 'Price',
          type: 'number',
          description: 'Price of product'
        },
        {
          name: "productImage",
          type: "image",
          validation: (rule: Rule) => rule.required(),
          title: "Product Image"
      },
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{type: 'string'}]
        },
        {
          name:"dicountPercentage",
          type:"number",
          title:"Discount Percentage",
      },
        {
          name: 'isNew',
          type: 'boolean',
          title: 'New Badge',  
        },  {
          name: 'category',
          type: 'string',
          title: 'Category',
          options: {
            list: [
              { title: 'Decoration', value: 'decoration' },
              { title: 'Sofa & Chair', value: 'sofa & chair' },
              { title: 'Bed', value: 'bed' },
              // Add more categories as needed
            ],
          },
          validation: (rule: Rule) => rule.required(), // Ensures this field is required
        },
        {
          name: 'popularity',
          type: 'string',
          title: 'Popularity',
          options: {
            list: [
              { title: 'High', value: 'high' },
              { title: 'Medium', value: 'medium' },
              { title: 'Low', value: 'low' },
            ],
          },
          validation: (rule : Rule) => rule.required(), // Ensures this field is required
        },
    ]
};