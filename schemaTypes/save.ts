import {defineField} from 'sanity'

export default {
  name: 'save',
  title: 'Save',
  type: 'document',
  fields: [
    defineField({
      name: 'postedBy',
      type: 'postedBy',
    }),
    defineField({
      name: 'userId',
      type: 'string',
    }),
  ],
}
