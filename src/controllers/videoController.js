export const trending = (req, res) => res.render("home", {pageTitle: "home"});
export const see = (req, res) => res.render("watch", {pageTitle: "watch"});
export const edit = (req, res) => res.render("edit", {pageTitle: "edit"});
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");