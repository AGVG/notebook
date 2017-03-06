const mongoose = require('mongoose');
const Artist   = require('../models/artist')

const genreSchema = new mongoose.Schema({
  Alt-Rock      : [{ type: Schema.ObjectId, ref: "Artist"}],
  Ambient       : [{ type: Schema.ObjectId, ref: "Artist"}],
  Baroque       : [{ type: Schema.ObjectId, ref: "Artist"}],
  Black-Metal   : [{ type: Schema.ObjectId, ref: "Artist"}],
  Blues         : [{ type: Schema.ObjectId, ref: "Artist"}],
  Classical     : [{ type: Schema.ObjectId, ref: "Artist"}],
  Country       : [{ type: Schema.ObjectId, ref: "Artist"}],
  Disco         : [{ type: Schema.ObjectId, ref: "Artist"}],
  Dub           : [{ type: Schema.ObjectId, ref: "Artist"}],
  Dubstep       : [{ type: Schema.ObjectId, ref: "Artist"}],
  Drum-And-Bass : [{ type: Schema.ObjectId, ref: "Artist"}],
  EDM           : [{ type: Schema.ObjectId, ref: "Artist"}],
  Electronica   : [{ type: Schema.ObjectId, ref: "Artist"}],
  Folk          : [{ type: Schema.ObjectId, ref: "Artist"}],
  Funk          : [{ type: Schema.ObjectId, ref: "Artist"}],
  Gospel        : [{ type: Schema.ObjectId, ref: "Artist"}],
  Grime         : [{ type: Schema.ObjectId, ref: "Artist"}],
  Grunge        : [{ type: Schema.ObjectId, ref: "Artist"}],
  Harcore       : [{ type: Schema.ObjectId, ref: "Artist"}],
  Heavy-Metal   : [{ type: Schema.ObjectId, ref: "Artist"}],
  Hip-hop       : [{ type: Schema.ObjectId, ref: "Artist"}],
  House         : [{ type: Schema.ObjectId, ref: "Artist"}],
  Indie         : [{ type: Schema.ObjectId, ref: "Artist"}],
  Instrumental  : [{ type: Schema.ObjectId, ref: "Artist"}],
  Jazz          : [{ type: Schema.ObjectId, ref: "Artist"}],
  Melody        : [{ type: Schema.ObjectId, ref: "Artist"}],
  Metalcore     : [{ type: Schema.ObjectId, ref: "Artist"}],
  New-Wave      : [{ type: Schema.ObjectId, ref: "Artist"}],
  Opera         : [{ type: Schema.ObjectId, ref: "Artist"}],
  Orchestra     : [{ type: Schema.ObjectId, ref: "Artist"}],
  Pop           : [{ type: Schema.ObjectId, ref: "Artist"}],
  Progressive   : [{ type: Schema.ObjectId, ref: "Artist"}],
  Punk-Rock     : [{ type: Schema.ObjectId, ref: "Artist"}],
  Rap           : [{ type: Schema.ObjectId, ref: "Artist"}],
  Reggae        : [{ type: Schema.ObjectId, ref: "Artist"}],
  Reggaeton     : [{ type: Schema.ObjectId, ref: "Artist"}],
  Rock          : [{ type: Schema.ObjectId, ref: "Artist"}],
  Rockatbilly   : [{ type: Schema.ObjectId, ref: "Artist"}],
  Shoegazing    : [{ type: Schema.ObjectId, ref: "Artist"}],
  Ska           : [{ type: Schema.ObjectId, ref: "Artist"}],
  Soul          : [{ type: Schema.ObjectId, ref: "Artist"}],
  Techno        : [{ type: Schema.ObjectId, ref: "Artist"}],
  Trance        : [{ type: Schema.ObjectId, ref: "Artist"}],
  Trap          : [{ type: Schema.ObjectId, ref: "Artist"}],
  Orchestra     : [{ type: Schema.ObjectId, ref: "Artist"}],
  World         : [{ type: Schema.ObjectId, ref: "Artist"}]
});

module.exports = mongoose.model('genre', genreSchema);
