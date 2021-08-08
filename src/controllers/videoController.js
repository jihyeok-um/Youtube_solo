import Video from "../models/Video";

export const home = async (req, res) => {
    try{
        const videos = await Video.find({});
        return res.render("home", { pageTitle: "Home", videos });
    }
    catch(error){
        return res.render("ERROR", error);
    }
}
export const watch = async (req, res) =>  {
    const { id }  = req.params;
    const video = await Video.findById(id);
    if (video) {
        return res.render("watch", {pageTitle: video.title, video});
    }
    return res.render("404", {pageTitle: "Video not found."});
}
export const getEdit = async (req, res) => {
    const { id }  = req.params;
    const video = await Video.findById(id);
    if (!video) {
        return res.render("404", {pageTitle: "Video not found."});
    }
    return res.render("edit", {pageTitle: `Editing`, video});
}
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req, res) => {
    return res.render("upload");
}
export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try{
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(",").map((word) => `#${word}`),
        });
        return res.redirect('/');
    }
    catch (error) {
        return res.render("upload", {pageTitle: "Upload Video", errorMessage: error._message});
    }
}