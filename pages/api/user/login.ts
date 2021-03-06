import { withApiSession, withHandler } from '@libs/server';
import { NextApiRequest, NextApiResponse } from 'next';

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
      return res.json({ ok: true });
  }
}

export default withApiSession(withHandler({ methods: ['POST'], handler, isPrivate: false }));
