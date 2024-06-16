import mongoose, { Schema } from 'mongoose';

// Define the schema for an application
const applySchema = new Schema(
    {
        userId: { 
            type: Schema.Types.ObjectId, 
            ref: "User", // Reference to the User model
            required: true
        },
        products: [{ 
            type: Schema.Types.ObjectId, 
            ref: "Product", // Reference to the Product model
            required: true 
        }]
    }
);

// Create a model named "Apply" using applySchema
const Apply = mongoose.model('Apply', applySchema);

export default Apply;
