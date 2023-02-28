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
        props: false,           // there're no props in
                                // this view
      },
      // ----------------------------------------------
      // Insert path here to create a sub-route that
      // follows the same layout as BaseLayout.vue
      // ----------------------------------------------
    ]
  },
  // ----------------------------------------------
  // Insert path here to create a route (and its
  // sub-routes) that demand a bespoke layout.
  // ----------------------------------------------
]
