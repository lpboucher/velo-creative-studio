const path = require('path');
const languages = require('./src/data/languages');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const locales = languages.langs;

  locales.forEach((locale) => {
    const prefix = locale;
    createPage({
      path: `/${prefix}`,
      component: path.resolve('./src/templates/index.js'),
      context: { locale },
    });
  });

  Promise.all(locales.map((locale) => {
    graphql(`
        {
          about: contentfulAbout(node_locale: { eq: "${locale}" }) {
            node_locale
          }
          contact: contentfulAbout(node_locale: { eq: "${locale}" }) {
            node_locale
          }
          portfolio: contentfulAbout(node_locale: { eq: "${locale}" }) {
            node_locale
          }
          services: contentfulAbout(node_locale: { eq: "${locale}" }) {
            node_locale
          }
          projects: allContentfulProject(filter: {node_locale: { eq: "${locale}" } }) {
            edges {
              node {
                slug
                node_locale
              }
            }
          }
        }
      `).then((result) => {
      ['about', 'contact', 'portfolio', 'services'].forEach((template) => {
        const page = result.data[template];
        const prefix = page.node_locale;
        createPage({
          path: `/${prefix}/${template}`,
          component: path.resolve(`./src/templates/${template}.js`),
          context: { locale: page.node_locale },
        });
      });

      result.data.projects.edges.forEach((item) => {
        const prefix = item.node.node_locale;
        const p = `/${prefix}/portfolio/${item.node.slug}`;
        createPage({
          path: p,
          component: path.resolve('./src/templates/project.js'),
          context: {
            slug: item.node.slug,
            locale: item.node.node_locale,
          },
        });
      });
    });
  }));
};
