import { type SchemaTypeDefinition } from 'sanity';
import product from './product';
import footer from './footer';
import topheader from './topheader';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, footer, topheader] as SchemaTypeDefinition[], // Add explicit typing if necessary
};
