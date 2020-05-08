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
  }
}
