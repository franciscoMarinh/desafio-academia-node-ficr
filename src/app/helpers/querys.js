exports.githubQuery = `
query { 
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
}
`