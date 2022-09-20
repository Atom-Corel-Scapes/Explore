import { uploadModel } from "../Schema/UploadSchema.js";


export const postData = (req, res) => {
    const cardId = req.query;

    const postDetails = uploadModel.find({ cardId: cardId.cardId }, (err, cardData) => {
        if (cardData) {
            const tag = cardData;
            const findTag = uploadModel.find({ placeTag: cardData[0].placeTag }, (err, tagData) => {
                if(err){
                    return res.send(err);
                }else{
                 if (tagData) {
                     const suggestions = tagData;
                     return res.status(200).send(suggestions);
                } 
            else {
                    return res.status(400).send(err);
                }
            }
            
            })



        }


    })


}

