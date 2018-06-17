var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

module.exports.getGenres = function(callback, limit){
	Genre.find(callback).limit(limit);
}

module.exports.getGenreById = function(id, callback, limit){
	Genre.find(id,callback);
}

module.exports.addGenre = function(genre, callback){
	Genre.create(genre, callback);
}

module.exports.updateGenre = function(id, genre, options, callback){
	var query = {_id: id};
	var update = {
		name: genre.name
	};
	Genre.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteGenre = function(id, callback){
	var query = {_id: id};
	Genre.remove(query, callback);
}
