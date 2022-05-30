import { withApiSession, withHandler } from '@libs/server';
import { apiFetcher } from '@utils/common';
import { NextApiRequest, NextApiResponse } from 'next';

declare module 'iron-session' {
  interface IronSessionData {
    user?: { idToken: string };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.session.user?.idToken;

  switch (req.method) {
    case 'GET':
      const data = await apiFetcher({
        method: req.method,
        url: '/job/1',
        token,
      });

      return data.code ? res.status(data.code).json({ ok: true, data }) : res.json({ ok: true, data });
  }
}

export default withApiSession(withHandler({ methods: ['GET'], handler, isPrivate: false }));
