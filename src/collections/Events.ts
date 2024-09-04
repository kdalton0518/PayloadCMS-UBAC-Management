import { CollectionConfig } from 'payload/types'

const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: ({ req: { user } }) => {
      return user.eventPermissions.create
    },
    read: ({ req: { user } }) => {
      return user.eventPermissions.read
    },
    update: ({ req: { user } }) => {
      return user.eventPermissions.update
    },
    delete: ({ req: { user } }) => {
      return user.eventPermissions.delete
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

export default Events
