export default {
    name: "footer",
    type: "document",
    title: "Footer",
    fields: [
      {
        name: "topBgColor",
        type: "string",
        title: "Top Background Color",
        description: "Background color for the top section of the footer",
        initialValue: "bg-textgrayOne",
      },
      {
        name: "bottomBgColor",
        type: "string",
        title: "Bottom Background Color",
        description: "Background color for the bottom section of the footer",
        initialValue: "bg-darkgray",
      },
      {
        name: "brandName",
        type: "string",
        title: "Brand Name",
        description: "Name of the brand displayed in the footer",
        initialValue: "AuraBox",
      },
      {
        name: "sections",
        type: "array",
        title: "Footer Sections",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "title",
                type: "string",
                title: "Section Title",
              },
              {
                name: "links",
                type: "array",
                title: "Links",
                of: [
                  {
                    type: "object",
                    fields: [
                      {
                        name: "label",
                        type: "string",
                        title: "Label",
                      },
                      {
                        name: "url",
                        type: "url",
                        title: "URL",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "subscribeForm",
        type: "object",
        title: "Subscribe Form",
        fields: [
          {
            name: "placeholder",
            type: "string",
            title: "Input Placeholder",
            initialValue: "Your Email",
          },
          {
            name: "buttonText",
            type: "string",
            title: "Button Text",
            initialValue: "Subscribe",
          },
          {
            name: "description",
            type: "string",
            title: "Description",
            initialValue: "Lore imp sum dolor Amit",
          },
        ],
      },
      {
        name: "footerNote",
        type: "string",
        title: "Footer Note",
        description: "Text displayed at the very bottom of the footer",
        initialValue: "Made With Love By UMAR ALI. All Right Reserved",
      },
    ],
  };