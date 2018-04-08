import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    title : {
        type: String,
        required: true
    },
    qty: {
        type: Number
    }
});

export default  mongoose.model('product', ProductSchema);