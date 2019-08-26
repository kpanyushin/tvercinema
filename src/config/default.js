module.exports = {
  port: process.env.PORT,
  defaultLocale: 'en',
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
