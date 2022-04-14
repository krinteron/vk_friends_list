import Ajv from 'ajv';
const ajv = new Ajv();

const schema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    photo_100: { type: 'string' },
  },
  required: ['id', 'photo_100', 'first_name', 'last_name'],
  additionalProperties: true,
};

export default ajv.compile(schema);
