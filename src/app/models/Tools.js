import mongo from '../../database'

const tag = {
  type: String,
  required: true
}

const ToolSchema = new mongo.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [tag]
})

const Tool = mongo.model('Tool', ToolSchema)

export default Tool
