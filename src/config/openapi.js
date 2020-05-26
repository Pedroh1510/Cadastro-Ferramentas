const documentation = {
  openapi: '3.0.1',
  info: {
    title: 'CRUD Ferramentas',
    description: 'Cadastro, listagem, filtro e remoção de ferramentas',
    version: '0.1',
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Servidor local',
    },
    {
      url: 'https://cadastro-ferramentas.herokuapp.com/',
      description: 'Servidor de produção',
    },
  ],
  paths: {
    '/tools': {
      get: {
        tags: ['Lista Ferramentas'],
        summary: 'Lista Ferramentas',
        description: 'Listagem de ferramentas cadastradas',
        parameters: [
          {
            name: 'tag',
            in: 'query',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
            },
            example: 'node',
          },
        ],
        responses: {
          '200': {
            description: 'Lista as ferramentas cadastradas',
            content: {
              'application/json; charset=utf-8': {
                schema: {
                  type: 'string',
                },
                examples: {
                  '0': {
                    value: [
                      {
                        tags: [
                          'node',
                          'organizing',
                          'webapps',
                          'domain',
                          'developer',
                          'https',
                          'proxy',
                        ],
                        _id: '5ebffcb5b463630033ca6c78',
                        title: 'hotel',
                        link: 'https://github.com/typicode/hotel',
                        description:
                          'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
                      },
                      {
                        tags: ['python'],
                        _id: '5ebffda8b463630033ca6c79',
                        title: 'hotel',
                        link: 'https://github.com/typicode/hotel',
                        description: 'Local app manager.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['Cadastro ferramenta'],
        summary: 'Cadastra ferramenta',
        description: 'Realiza o cadastro de ferramentas',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/body',
              },
              examples: {
                '0': {
                  value:
                    '{\r\n\t"title": "hotel",\r\n\t"link": "https://github.com/typicode/hotel",\r\n\t"description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",\r\n\t"tags": [\r\n\t\t"node",\r\n\t\t"organizing",\r\n\t\t"webapps",\r\n\t\t"domain",\r\n\t\t"developer",\r\n\t\t"https",\r\n\t\t"proxy"\r\n\t]\r\n}',
                },
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Descrição da ferramenta cadastrada',
            content: {
              'application/json; charset=utf-8': {
                schema: {
                  type: 'string',
                },
                examples: {
                  '0': {
                    value: [
                      {
                        tags: [
                          'node',
                          'organizing',
                          'webapps',
                          'domain',
                          'developer',
                          'https',
                          'proxy',
                        ],
                        _id: '5eccff139e879d34f4e294a1',
                        title: 'hotel',
                        link: 'https://github.com/typicode/hotel',
                        description:
                          'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
      },
    },
    '/tools/{toolId}': {
      delete: {
        tags: ['Deleta ferramenta'],
        summary: 'Deleta ferramenta com base no Id',
        description:
          'Realiza a remoção do cadastro da ferramenta com base no Id',
        parameters: [
          {
            name: 'toolId',
            in: 'path',
            description: 'Id da ferramenta',
            required: true,
            style: 'simple',
            explode: false,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '204': {
            description: 'Ferramenta removida',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      body: {
        type: 'object',
        properties: {
          link: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
          tags: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },
}

export default documentation
