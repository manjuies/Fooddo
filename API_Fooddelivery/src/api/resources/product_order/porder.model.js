import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
     
name:{
    type:String,
    required :true
},
UserId:{
    ref:'User',
    type:Schema.Types.ObjectId,
    required:true
},
OrderId:{
    ref:'Order',
    type:Schema.Types.ObjectId,
    required:true
},
ProductId:{
    ref:'MenuItem',
    type:Schema.Types.ObjectId,
    required:true
},
restroId:{
    ref:'vendor',
    type:Schema.Types.ObjectId,
    required:true
},
Productname:{
    type:String
},
Quantity:{
    type:Number
},
Total:{
    type:Number
},
created_dt:{
    type:Date,
    default:Date.now
},
isActive:{
    type:Boolean,
    default:true
}
},{collection : 'Product_order'});
OrderSchema.plugin(mongoosePaginate);
export default new mongoose.model('POrder',OrderSchema);