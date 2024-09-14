import {defineField} from 'sanity'

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'string',
    }),
  ],
}
