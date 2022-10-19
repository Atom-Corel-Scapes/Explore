import multer from "multer";
import { uploadModel } from "../Schema/UploadSchema.js";

// storage
const storage = multer.diskStorage({
  destination: "uploadImage",
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

// single upload

const upload = multer({
  storage: storage,
}).single("images");

export const uploadData = (req, res) => {
  // console.log(req.body);
  upload(req, res, (err) => {
    console.log(req.body);
    console.log(req.file);
    if (err) {
      // console.log("hi");
      return res.send(err);
      // console.log(err);
    } else {
      // const addImage = new uploadModel(req.body);
      const addImage = new uploadModel({
        placeName: req.body.placeName,
        placeTag: req.body.placeTag,
        placeDescription: req.body.placeDescription,
        placeImage: {
          data: req.file.filename,
          contentType: "image/jpg",
        },
        cardId: Math.floor(1000 + Math.random() * 9000)
      });
      // console.log(addImage);
      addImage.save((err, data) => {
        if (err) {
          res.send(err);
        }
        res.status(200).send({message: "Article uploaded sucessfully!!!"});
      });
    }
  });
};
