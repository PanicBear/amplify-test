import { withApiSession } from 'libs/server/withSsrSession';
import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '../../../libs/server/withHandler';

declare module 'iron-session' {
  interface IronSessionData {
    user?: { idToken: string };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      await req.session.destroy();
      return res.json({ ok: true });
  }
}

export default withApiSession(withHandler({ methods: ['POST'], handler, isPrivate: false }));
