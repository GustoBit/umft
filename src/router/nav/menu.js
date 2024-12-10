export const mainMenu = [
  {
    path: '',
    name: 'landing',
    component: () => import('@/components/landingPage/landingPage.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: 'partners',
    name: 'partners',
    component: () => import('@/components/partners/partnersPage.vue'),
    meta: {
      title: 'Partners',
    },
  },
  {
    path: 'admission',
    name: 'admission',
    component: () => import('@/components/admissionsUmft/admissionPage.vue'),
    meta: {
      title: 'Admission',
    },
  },
  {
    path: 'about',
    name: 'about',
    component: () => import('@/components/aboutUmft/aboutPage.vue'),
    meta: {
      title: 'About',
    },
  },
  {
    path: 'program-details',
    name: 'program-details',
    component: () => import('@/components/programDetail/programDetailPage.vue'),
    meta: {
      title: 'Program - Detail',
    },
  },
  {
    path: 'news',
    name: 'news',
    component: () => import('@/components/newsUmft/newsUmftPage.vue'),
    meta: {
      title: 'News',
    },
  },
  {
    path: 'campus-life',
    name: 'campus-life',
    component: () => import('@/components/campus/campusPage.vue'),
    meta: {
      title: 'Campus - Life',
    },
  },
  {
    path: 'news-event',
    name: 'news-event',
    component: () => import('@/components/newsEvent/newsEventPage.vue'),
    meta: {
      title: 'News - Event',
    },
  },
]
