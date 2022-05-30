import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '../../../libs/server/withHandler';
import { withApiSession } from '../../../libs/server/withSsrSession';

declare module 'iron-session' {
  interface IronSessionData {
    user?: { idToken: string };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return res.json({ ok: true, msg: 'dummy post api' });
  }
}

export default withHandler({ methods: ['POST'], handler, isPrivate: false });