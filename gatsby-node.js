const path = require("path");
const toPath = require("./src/lib/helpers").toPath;

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions;

  const topicTemplate = path.resolve("src/templates/topic-page.js");
  const subtopicTemplate = path.resolve("src/templates/subtopic-page.js");

  return graphql(`
    {
      allTopicDescriptionsJson {
        edges {
          node {
            name
            description
            path
          }
        }
      }
      allSubtopicDescriptionsJson {
        edges {
          node {
            description
            name
            path
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allTopicDescriptionsJson.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: topicTemplate,
        context: {
          path: node.path
        }
      })
    });
    res.data.allSubtopicDescriptionsJson.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: subtopicTemplate,
        context: {
          path: node.path
        }
      });
    })
  })
}