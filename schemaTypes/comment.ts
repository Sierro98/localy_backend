import {defineField} from 'sanity'

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'postedBy',
      type: 'postedBy',
    }),
    defineField({
      name: 'comment',
      type: 'string',
    }),
  ],
}
