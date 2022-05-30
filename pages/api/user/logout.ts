import { amplifySignOut } from '@nitric/amplify-secure-js';
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
      req.session.destroy();
      await amplifySignOut();
      return res.json({ ok: true });
  }
}

export default withHandler({ methods: ['POST'], handler, isPrivate: false });
