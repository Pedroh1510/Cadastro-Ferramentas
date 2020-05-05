import { celebrate, Joi, Segments } from 'celebrate'

export default {
  store: celebrate({
    [Segments.BODY]: Joi.object({
      title: Joi.string().required(),
      link: Joi.string().uri().required(),
      description: Joi.string().required(),
      tags: Joi.array().required()
    })
  })
}
