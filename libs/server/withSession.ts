import { NextApiHandler } from 'next';
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';

declare module 'iron-session' {
  interface IronSessionData {
    user?: { idToken: string };
  }
}

const cookieOption = {
  cookieName: 'lahatjob',
  password: process.env.COOKIE_PASSWORD!,
};

export function withApiSession(handlerFn: NextApiHandler<any>) {
  return withIronSessionApiRoute(handlerFn, cookieOption);
}

export function withSsrSession(handler: any) {
  return withIronSessionSsr(handler, cookieOption);
}
