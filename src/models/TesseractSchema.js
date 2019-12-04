import mongoose, {Schema} from 'mongoose';
// import validator from 'validator';


const TesseractSchema = new Schema({

    imageName: {
        type: String,
        required: true,
        unique: true,
    },
    text: {
        type: String,
    },

});

export default mongoose.model('Tesseract', TesseractSchema);
