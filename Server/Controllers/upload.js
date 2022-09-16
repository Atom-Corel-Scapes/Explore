//  doubt in 29th line amd different file format of images



import multer from "multer";
import { uploadModel } from "../Schema/UploadSchema.js";

// storage 
const storage = multer.diskStorage({
    destination: 'uploadImage',
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
});

// single upload 

const upload = multer({
    storage: storage
}).single('images');

export const uploadData = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            // res.send("there is an when uploading data");
            console.log(err);
        }
        else {
            // const addImage = new uploadModel(req.body); 
            const addImage = new uploadModel({
                placeName: req.body.placeName,
                placeTag: req.body.placeTag,
                placeDescription: req.body.placeDescription,
                placeImage: {
                    data: req.file.filename
                    // contentType: "image/png",
                }
            })
            addImage.save((err, data) => {
                if (err) {
                    res.send(err);
                }
                res.status(200).send({
                    message: "uploaded sucessfully  ",
                    data: data,
                });
            })

        }
    })
};