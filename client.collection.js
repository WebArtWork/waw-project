module.exports = (waw) => {
	const Schema = waw.mongoose.Schema({
		name: String,
		description: String,
		project: { type: waw.mongoose.Schema.Types.ObjectId, ref: 'Project' }
	});

	Schema.methods.create = function (obj) {
		this.name = obj.name;
		this.description = obj.description;
		this.project = obj.project;
	}

	return waw.Projectclient = waw.mongoose.model('Projectclient', Schema);
}
