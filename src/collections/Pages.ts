import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: ({ req: { user } }) => {
      return user.pagePermissions.create
    },
    read: ({ req: { user } }) => {
      return user.pagePermissions.read
    },
    update: ({ req: { user } }) => {
      return user.pagePermissions.update
    },
    delete: ({ req: { user } }) => {
      return user.pagePermissions.delete
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // Add more fields as needed
  ],
}

export default Pages
