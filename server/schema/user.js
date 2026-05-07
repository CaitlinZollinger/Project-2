// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userschema = new Schema({
	// Simple declaration of datatype that will be used:
	name: {
        type: String,
        required: true,
        unique: true
    },
	// You can add specifics to each one too that help with validation, like making something required, or unique
	age: {
    	type: Number,
    	required: true
	}
});

// Turn the schema you created into a "Model".
// mongoose.model("ModelNameSingular", modelSchema);
// "ModelNameSingular" will automatically be pluralized for you,
//and that pluralized version of the model name will also
//become the name of the MongoDB collection.

module.exports = mongoose.model("usermodel", userschema);