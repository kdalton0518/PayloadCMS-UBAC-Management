import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: ({ req: { user } }) => {
      return user?.pagePermissions?.read || false;
    },
    create: ({ req: { user } }) => {
      return user?.pagePermissions?.create || false;
    },
    update: ({ req: { user } }) => {
      return user?.pagePermissions?.update || false;
    },
    delete: ({ req: { user } }) => {
      return user?.pagePermissions?.delete || false;
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },

    {
      name: 'published',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    }
  ],
}

export default Pages
