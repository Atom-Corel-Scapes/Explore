import { uploadModel } from "../Schema/UploadSchema.js";

export const home = (req, res) => {
  const { page , limit} = req.query;
  console.log(req.query);
  uploadModel
    .find((err, data) => {
      console.log(page+1)
      if (err) {
        console.log(err);
      } else {
        return res.send({
          status: 200,
          message: "places found",
          data
        });
      }
    })
    .limit(limit * 1)
    .skip((page) * limit);
};
