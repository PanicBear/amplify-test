import { withApiSession, withHandler } from '@libs/server';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      req.session.destroy();
      return res.json({ ok: true });
  }
}

export default withApiSession(withHandler({ methods: ['POST'], handler, isPrivate: false }));
