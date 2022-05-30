import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '../../../libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return res.json({ ok: true, msg: 'dummy api' });
  }
}

export default withHandler({ methods: ['GET'], handler, isPrivate: false });
