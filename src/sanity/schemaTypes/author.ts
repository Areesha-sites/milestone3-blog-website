import { defineType, defineField } from "sanity";
export const author = defineType ({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "AuthorName"
    }),
  ]
})