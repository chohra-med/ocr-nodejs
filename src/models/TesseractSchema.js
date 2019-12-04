import mongoose, {Schema} from 'mongoose';


//The schema of Tesseract needed for this test
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
