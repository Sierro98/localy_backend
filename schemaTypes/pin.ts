import {defineField} from 'sanity'

export default {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'about',
      type: 'string',
    }),
    defineField({
      name: 'destination',
      type: 'url',
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'userId',
      type: 'string',
    }),
    defineField({
      name: 'postedBy',
      type: 'postedBy',
    }),
    defineField({
      name: 'save',
      type: 'array',
      of: [{type: 'save'}],
    }),
    defineField({
      name: 'comments',
      type: 'array',
      of: [{type: 'comment'}],
    }),
  ],
}
