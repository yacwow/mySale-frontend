import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  dva: {
    // immer: true,
  },
  access: {},
  clientLoader: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '',
  },
  // plugins: ['@/plungin.js'],
  proxy: {
    '/api': {
      target: 'http://localhost:8080/',
      changeOrigin: true,
    },
  },
  links: [{ rel: 'icon', href: '/img/favicon.jpg' }],
  routes: [
    {
      name: '人気新作週間ランキング',
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '模拟支付',
      path: '/fakePayment',
      component: './FakePayment',
    },
    {
      name: '人気新作週間ランキング',
      path: '/repayment/:id',
      component: './Repayment',
    },
    {
      name: '人気新作週間ランキング',
      path: '/bestseller',
      component: './BestSeller',
    },
    {
      name: '首页',
      path: '/notification',
      component: './MembershipNotification',
    },
    {
      name: '最最最主要的页面',
      path: '/main/:id',
      component: './SalesPage',
    },
    {
      name: '人気新作週間ランキング',
      path: '/generalSale/:id/*',
      component: './GeneralSale',
    },
    {
      name: '【期間限定】二点目半額アイテム',
      path: '/secondHalfPrice',
      component: './SecondHalfPrice',
    },
    {
      name: '人気新作週間ランキング',
      path: '/dailyNew',
      component: './DailyNew',
    },
    {
      name: '用户',
      path: '/account',

      routes: [
        { path: '/account/dashboard', component: './Account' },
        {
          path: '/account/favoriteProduct',
          component: '@/pages/Account/FavoriteProduct',
        },
        {
          path: '/account/invoiceComp/:id',
          component: '@/pages/Account/InvoiceComp',
        },
        { path: '/account/pointer', component: '@/pages/Account/Pointer' },
        {
          path: '/account/shoppingHistory',
          component: '@/pages/Account/ShoppingHistory',
        },
        {
          path: '/account/userAddress',
          component: '@/pages/Account/UserAddress',
        },
        {
          path: '/account/userGetPointerMethod',
          component: '@/pages/Account/UserGetPointerMethod',
        },
        { path: '/account/userInfo', component: '@/pages/Account/UserInfo' },
      ],
    },
    {
      name: '人気新作週間ランキング',
      path: '/companyIntroduce',
      component: './CompanyIntroduce',
    },
    {
      name: '人気新作週間ランキング',
      path: '/discount',
      component: './Discount',
    },

    {
      name: '人気新作週間ランキング',
      path: '/wearMatch',
      component: './WearMatch',
    },
    {
      name: ' 数量＆期間限定のタイムセール,人気商品,激安通販∣',
      path: '/timeSeller',
      component: './TimeSeller',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
    },
    {
      name: '购物车',
      path: '/cart',
      component: './Cart',
    },
    {
      name: '密码恢复',
      path: '/account/passwordRecovery',
      component: './PasswordRecovery',
    },
    {
      name: '密码恢复',
      path: '/account/reset',
      component: './PasswordRecovery/Reset',
    },
    {
      name: 'checkout',
      path: '/checkout',
      component: './Checkout',
    },
    {
      name: 'updateAddress',
      path: '/updateOrAddAddress/*',
      component: './UpdateOrAddAddress',
    },
    {
      name: 'test',
      path: '/test/:id/*',
      component: './Test',
    },
    { path: '/*', component: '@/pages/404' },
  ],
  npmClient: 'yarn',
});
