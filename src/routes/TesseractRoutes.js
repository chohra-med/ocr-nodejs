import {Router as ExpressRouter} from 'express';
import {
    getTextFromImage,
    getTextFromImageWithImageName,
    deleteImageByName,
    getAllImages
} from '../controllers/TesseractController';


export default () => {
    const Router = ExpressRouter();
    Router.get('/',
        getTextFromImage
    );

    Router.get('/all',
        getAllImages);


    Router.get('/name',
        getTextFromImageWithImageName
    );
    Router.delete('/:imageName',
        deleteImageByName
    );


    return Router;
};
