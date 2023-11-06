
const routes = [
  {
    path: '/Gargi',component: () => import('layouts/MainLayout.vue'),

    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/Gargi/tohome', component: () => import('src/pages/homePage.vue') },
      { path: '/Gargi/toeducation', component: () => import('src/pages/educationPage.vue') },
      { path: '/Gargi/tointerests', component: () => import('src/pages/interestsPage.vue') },
      { path: '/Gargi/toskills', component: () => import('src/pages/skillsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
