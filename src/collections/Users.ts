import { CollectionConfig } from 'payload/types'

import React, {JSX} from 'react';

const PermissionsHeader = (): JSX.Element => {
  return React.createElement('h2', { style: { fontSize: '24px', fontWeight: 'bold', margin: '20px 0' } }, 'Permissions');
};

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    read: ({ req: { user } }) => {
      if (user?.role === 'owner') return true;
      return user?.userPermissions?.read 
        ? true 
        : {
            id: {
              equals: user?.id,
            },
          };
    },
    create: ({ req: { user } }) => {
      if (user?.role === 'owner') return true;
      return user?.userPermissions?.create
    },
    update: ({ req: { user } }) => {
      if (user?.role === 'owner') return true;
      return (user?.userPermissions?.update)
    },
    delete: ({ req: { user } }) => {
      if (user?.role === 'owner') return true;
      return (user?.userPermissions?.delete)
    },
  },
  fields: [
  {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Owner',
          value: 'owner',
        },
        {
          label: 'Staff',
          value: 'staff',
        }
      ],
      required: true,
    },
    {
      type: 'collapsible',
      label: 'Users',
      fields: [
        {
          name: 'userPermissions',
          type: 'group',
          fields: [
            {
              name: 'create',
              type: 'checkbox',
              label: 'Create Users',
              defaultValue: false,
            },
            {
              name: 'read',
              type: 'checkbox',
              label: 'View Users',
              defaultValue: false,
            },
            {
              name: 'update',
              type: 'checkbox',
              label: 'Edit Users',
              defaultValue: false,
            },
            {
              name: 'delete',
              type: 'checkbox',
              label: 'Delete Users',
              defaultValue: false,
            }
          ],
        },
      ],
    },
    {
      name: 'permissions_ui',
      type: 'ui',
      admin: {
        components: {
          Field: () => PermissionsHeader(),
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
