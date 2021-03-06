'use strict'

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
	{
		provider: String, // The provider with which the user authenticated (facebook, twitter, etc.).
		providerId: String, // A unique identifier for the user, as generated by the service provider.
		providerPictureUrl: String, // the profile picture
		displayName: String, // The name of this user, suitable for display.
		firstName: String,
		lastName: String,
		email: String,
		phone: String,
	},
	{
		timestamps: true, // createdAt and updatedAt are automatically added
	},
)

UserSchema.methods.getDisplayName = function getDisplayName() {
	if (this.displayName) {
		return this.displayName
	} else {
		return '${this.firstName} ${this.lastName}'
	}
}

// create model using the schema
const UserModel = mongoose.model('Users', UserSchema)

// make available
module.exports = UserModel
