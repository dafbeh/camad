import { type SchemaTypeDefinition } from 'sanity'

import { homeType } from './homeType'
import { aboutType } from './aboutType'
import { serviceType } from './serviceType'
import { cardType } from './cardType'
import { postType } from './postType'
import { teamType } from './teamType'
import { contactType } from './contactType'
import { sponsorType } from './sponsorType'

import { homeTypeCy } from './cy/homeTypeCy'
import { aboutTypeCy } from './cy/aboutTypeCy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutType, serviceType, cardType, postType, teamType, contactType, sponsorType, homeType,
    homeTypeCy, aboutTypeCy
  ],
}
