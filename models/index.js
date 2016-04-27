module.exports = function() {
	return {
		LoginPage:require('./login')(),
    DashboardPage:require('./dashboard')(),
    ProfilePage:require('./users')(),
    NotFoundPage:require('./not_found')()
	};
};
