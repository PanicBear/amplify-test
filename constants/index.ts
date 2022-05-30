export const API_URL = 'https://ie9kqvt959.execute-api.ap-northeast-2.amazonaws.com/dev';

export const NAV_DATA: Array<{
  title: { name: string; baseUrl: string };
  detail?: { name: string; url: string }[];
}> = [
  {
    title: {
      name: 'Main',
      baseUrl: '/main',
    },
  },
  {
    title: {
      name: 'User',
      baseUrl: '/user',
    },
    detail: [
      { name: 'Individual', url: '/' },
      { name: 'Company', url: '/company' },
      { name: 'Companies under review', url: '/company/review' },
    ],
  },
  {
    title: {
      name: 'Resume',
      baseUrl: '/resume',
    },
  },
  {
    title: {
      name: 'Job Ads',
      baseUrl: '/job',
    },
    detail: [
      { name: 'All', url: '/' },
      { name: 'Under Review', url: '/review' },
    ],
  },
  {
    title: {
      name: 'Paid Service List',
      baseUrl: '/paid',
    },
    detail: [
      { name: 'All', url: '/' },
      { name: 'Refund Management', url: '/refund' },
    ],
  },
  {
    title: {
      name: 'User Activity',
      baseUrl: '/activity',
    },
    detail: [
      { name: 'Activity', url: '/' },
      { name: 'Job Counseling', url: '/counseling' },
    ],
  },
  {
    title: {
      name: 'Event & Notice',
      baseUrl: '/notice',
    },
  },
  {
    title: {
      name: 'Q&A',
      baseUrl: '/qna',
    },
  },
  {
    title: {
      name: 'Banner & ads',
      baseUrl: '/banner',
    },
  },
  {
    title: {
      name: 'Setting',
      baseUrl: '/setting',
    },
  },
];
