const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
        {
            allContentfulProject
            (filter: {isClickable: {eq: true}}) {
                edges {
                  node {
                    slug
                  }
                }
              }
        }`).then((result) => {
      result.data.allContentfulProject.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/templates/project.js'),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });
};
