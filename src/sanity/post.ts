import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        defineArrayMember({
          type: "block", 
        }),
        defineArrayMember({
          type: "image", 
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: "reference",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "commentsCount",
      type: "number",
      title: "Comments Count",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "readingTime",
      type: "number",
      title: "Reading Time (in minutes)",
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "publishedDate",
      type: "datetime",
      title: "Published Date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "updatedDate",
      type: "datetime",
      title: "Updated Date",
    }),

    
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Lunch", value: "Lunch" },
          { title: "Breakfast", value: "Breakfast" },
          { title: "Beverages", value: "Beverages" },
          { title: "Vegetarian", value: "Vegetarian" },
          { title: "Snacks", value: "Snacks" },
          { title: "Quick Meals", value: "Quick Meals" },
          { title: "Healthy Food", value: "Healthy Food" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
