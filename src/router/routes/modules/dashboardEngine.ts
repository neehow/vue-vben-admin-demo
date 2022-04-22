import type { AppRouteModule } from '/@/router/types';

import { LAYOUT_PAGE } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboardEngine: AppRouteModule = {
  path: '/dashboardEngine',
  name: 'DashboardEngine',
  component: LAYOUT_PAGE,
  redirect: '/dashboardEngine/edit',
  meta: {
    orderNo: 10,
    icon: 'ion:home',
    title: t('routes.dashboardEngine.dashboardEngine'),
  },
  children: [
    {
      path: 'edit',
      name: 'Edit',
      component: () => import('/@/views/dashboardEngine/edit/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboardEngine.edit'),
      },
    },
  ],
};

export default dashboardEngine;
