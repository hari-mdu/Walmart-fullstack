import mongoose, {Schema} from 'mongoose';

const applySchema = new Schema(
    {
        userId : { type: Schema.Types.ObjectId, ref:"User", required: true},
        products : [{ type: Schema.Types.ObjectId, ref:"Product", required: true}]
    }
)

const Apply = mongoose.model('Apply', applySchema);

export default Apply;