module.exports = async function(waw) {
	waw.add_projects = async (req, res, next) => {
		if (!req.session.projectIds) {
			const projects = await waw.Project.find({
				modefators: req.user._id
			}).select('_id');
			req.session.projectIds = projects.map(p => p._id)
		}

		next();
	}
};
