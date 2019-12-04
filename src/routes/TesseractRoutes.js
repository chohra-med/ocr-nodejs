import {Router as ExpressRouter} from 'express';
import {
    getTextFromImage,
    getTextFromImageWithImageName,
    deleteImageByName,
    getAllImages
} from '../controllers/TesseractController';


export default () => {
    const Router = ExpressRouter();
    //test the image
    Router.get('/',
        getTextFromImage
    );

    //see all the images and data tha we have
    Router.get('/all',
        getAllImages);

    // get text by sending the imageName in body
    Router.get('/name',
        getTextFromImageWithImageName
    );
    //delete an image by imageName
    Router.delete('/',
        deleteImageByName
    );


    return Router;
};
