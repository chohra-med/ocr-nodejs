import Tesseract from '../models/TesseractSchema';
import tesseract from "node-tesseract-ocr";

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
};
//Function to get text from Image
export const getTextFromImage = (req, res, next) => {

    let imageName = 'image';
    tesseract.recognize(process.cwd() + '/src/images/'+imageName + '.png', config)
        .then(text => {
            console.log("Result:", text);
            let newTesseract = new Tesseract({
                imageName: imageName,
                text: text,
            });
            newTesseract.save().then(result => {
                res.json(result);
            }).catch(e => next(e));
        })
        .catch(e => {
            next(e)
        });
};
//To get all the images
export const getAllImages = (req, res, next) => {
    Tesseract.find().then(images => {
        res.json(images);
    }).catch(e => next(e));

};

//We send in request body the name of the image
export const getTextFromImageWithImageName = (req, res, next) => {
    let {
        imageName
    } = req.body;
    if (imageName) {
        tesseract.recognize(__dirname +'../images/'+ imageName + '.png', config)
            .then(text => {
                console.log("Result:", text);
                let newTesseract = new Tesseract({
                    imageName: imageName,
                    text: text,
                });
                newTesseract.save().then(result => {
                    res.json(result);
                }).catch(e => next(e));
            })
            .catch(e => {
                next(e)
            });

    } else {
        res.status(404).send('no image found');
    }
};

//delete an image by name
export const deleteImageByName = (req, res, next) => {
    let {
        imageName
    } = req.params;
    if (imageName) {
        Tesseract.findOneAndDelete({imageName: imageName}).then(deletedImage => {
            res.json(deletedImage);
        }).catch(e => next(e));
    } else {
        res.status(404).send('no image found');
    }
};

