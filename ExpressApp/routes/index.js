
/*
 * GET home page.
 */

exports.index = function (req, res) {
	res.render('index', { title: 'ejs' });
};

exports.about = function (req, res) {
	res.render('about', { title: 'ejs' });
};

exports.contact = function (req, res) {
	res.render('contact', { title: 'ejs' });
};
