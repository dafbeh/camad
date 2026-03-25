import { type SchemaTypeDefinition } from 'sanity'

import {aboutType} from './aboutType'
import {serviceType} from './serviceType'
import {cardType} from './cardType'
import {postType} from './postType'
import {teamType} from './teamType'
import {contactType} from './contactType'
import {sponsorType} from './sponsorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutType, serviceType, cardType, postType, teamType, contactType, sponsorType],
}
