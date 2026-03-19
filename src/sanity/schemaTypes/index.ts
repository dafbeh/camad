import { type SchemaTypeDefinition } from 'sanity'

import {aboutType} from './aboutType'
import {serviceType} from './serviceType'
import {cardType} from './cardType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutType, serviceType, cardType],
}
