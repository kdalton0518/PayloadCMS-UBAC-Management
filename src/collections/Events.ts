import { CollectionConfig } from 'payload/types'

const Events: CollectionConfig = {
  slug: 'events',
  access: {
    read: ({ req: { user } }) => {
      return user?.eventPermissions?.read || false
    },
    create: ({ req: { user } }) => {
      return user?.eventPermissions?.create || false
    },
    update: ({ req: { user } }) => {
      return user?.eventPermissions?.update || false
    },
    delete: ({ req: { user } }) => {
      return user?.eventPermissions?.delete || false
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    // Add more fields as needed
  ],
}

export default Events
