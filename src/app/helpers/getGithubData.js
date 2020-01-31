const { github } = require("../services/axios");

module.exports = async () => {
  const query = `query { 
    viewer {
        login
        avatarUrl
        email
        bio
        company
        url
        location
        repositories(privacy: PUBLIC, first: 100, orderBy: {field: NAME, direction: ASC}) {
          nodes {
            name
            url
            diskUsage
          }
        }
      }
  }`;

  const dataGithub = await github(query, "post");

  const filtedNodes = dataGithub.repositories.nodes
    .sort((a, b) => {
      if (a.diskUsage < b.diskUsage) return 1;
      if (a.diskUsage > b.diskUsage) return -1;
      return 0;
    })
    .splice(0, 3);

  return {
    ...dataGithub,
    repositories: filtedNodes
  };
};
