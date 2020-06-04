module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const topicRoutes = require("../routes/topics");
    const advertisementsRoutes = require("../routes/advertisements");
    const postRoutes = require("../routes/posts");


    app.use(staticRoutes);
    app.use(topicRoutes);
    app.use(advertisementsRoutes);
    app.use(postRoutes);
  }
}