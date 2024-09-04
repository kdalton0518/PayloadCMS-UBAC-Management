import { CollectionConfig } from 'payload/types'
const React = require('react')

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'labelField',
      type: 'ui',
      admin: {
        components: {
          Field: () => (
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>
                Permissions
              </h2>
        
          )
        }
      }
    },
    {
      type: 'collapsible',
      label: 'Pages',
      fields: [
        {
          name: 'pagePermissions',
          type: 'group',
          fields: [
            {
              name: 'create',
              type: 'checkbox',
              label: 'Create',
            },
            {
              name: 'read',
              type: 'checkbox',
              label: 'Read',
            },
            {
              name: 'update',
              type: 'checkbox',
              label: 'Update',
            },
            {
              name: 'delete',
              type: 'checkbox',
              label: 'Delete',
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Events',
      fields: [
        {
          name: 'eventPermissions',
          type: 'group',
          fields: [
            {
              name: 'create',
              type: 'checkbox',
              label: 'Create',
            },
            {
              name: 'read',
              type: 'checkbox',
              label: 'Read',
            },
            {
              name: 'update',
              type: 'checkbox',
              label: 'Update',
            },
            {
              name: 'delete',
              type: 'checkbox',
              label: 'Delete',
            },
          ],
        },
      ],
    },
  ],
}

export default Users;
