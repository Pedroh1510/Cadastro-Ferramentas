import Tool from '../models/Tools'

export default {
  async index (req, res) {
    try {
      const tools = await Tool.find()

      tools.map(tool => {
        tool.__v = undefined
      })

      res.status(200).send(tools)
    } catch (err) {
      res.status(500).send({ message: 'Erro' })
    }
  },
  async store (req, res) {
    try {
      const { title, link, description, tags } = req.body

      const tool = await Tool.create({ title, link, description, tags })

      tool.__v = undefined

      res.status(201).send(tool)
    } catch (err) {
      res.status(500).send({ message: 'Erro' })
    }
  }
}
