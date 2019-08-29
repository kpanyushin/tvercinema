module.exports = {
  port: process.env.PORT,
  defaultLocale: 'en',
  remoteApiUrl: 'https://tvercinema.herokuapp.com',
  baseUrl: '/api/v1',
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Tvercinema',
    titleTemplate: 'Tvercinema - %s',
    meta: [
      {
        name: 'description',
        content: 'Cinema tickets booking application',
      },
    ],
  },
};
