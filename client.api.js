module.exports = async function (waw) {
	waw.crud('projectclient', {
		get: {
			enure: waw.role('admin seller manager developer designer agent', waw.add_projects),
			query: req => {
				return {
					project: {
						$in: req.session.projectIds
					}
				}
			}
		}
	});
};
