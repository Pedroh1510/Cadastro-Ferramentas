import { ITool } from '@/models/Tool'
import faker from 'faker'

export const fakerTool = ():ITool => ({
  title: faker.random.words(5),
  link: faker.internet.url(),
  description: faker.random.words(20),
  tags: faker.random.words(20).split(' ')
})
