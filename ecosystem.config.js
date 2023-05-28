module.exports = {
  apps : [{
    name   : "app1",
    script : "./app.js"
  }],
  deploy: {
    dev: {
      user: "deploy",
      host: [
        "66.42.55.233" // Hostname or Server IP Address
      ],
      ref: "origin/develop",
      repo: "git@gitlab.com:luckytech/diviner-frontend-game.git",
      path: "/home/diviner/dev/frontend-game",
      "post-setup": "yarn install; yarn build;",
      "post-deploy": "yarn install; yarn build;",
      ssh_options: [
        "StrictHostKeyChecking=no",
        "PasswordAuthentication=no"
      ]
    }
  }
}
