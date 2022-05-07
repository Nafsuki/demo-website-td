import type { NextApiRequest, NextApiResponse } from 'next'

const { interfacesData } = require('./data.json')

type Data = {
  name: string
  path: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(interfacesData)
}
