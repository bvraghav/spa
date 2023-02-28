export default [
  {
    path: '/',
    name: 'root',
    component: () => import('@/views/BaseLayout.vue'),
    children: [
      {
        path: '',
        name: 'root-home',
        components: {
          default: () => import('@/views/HomePage.vue'),
          header: () => import('@/views/BaseHeader.vue'),
          sidebar: () => import('@/views/BaseSidebar.vue'),
          footer: () => import('@/views/BaseFooter.vue'),
        },
      }
    ]
  },
]
