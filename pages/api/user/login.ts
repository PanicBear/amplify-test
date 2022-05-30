import { sendAuthStorage } from '@nitric/amplify-secure-js';
import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '../../../libs/server/withHandler';

declare module 'iron-session' {
  interface IronSessionData {
    user?: { idToken: string };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { idToken } = req.body;
  switch (req.method) {
    case 'POST':
      if (!idToken) return res.status(401).json({ ok: false, msg: 'no idToken' });

      req.session.user = {
        idToken,
      };
      await req.session.save();
      await sendAuthStorage();
      return res.json({ ok: true });
  }
}

export default withHandler({ methods: ['POST'], handler, isPrivate: false });
