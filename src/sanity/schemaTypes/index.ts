import { type SchemaTypeDefinition } from 'sanity'
import {post} from "../../sanity/post"
import { author } from './author'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author],
}
