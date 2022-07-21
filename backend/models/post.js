// Importation de Mongoose
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { //-- l'identifiant MongoDB unique de l'utilisateur qui a créé le post
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: { //-- l'URL de l'image à téléchargée par l'utilisateur
    type: String,
    required: true
  },
  likes: { //-- nombre d'utilisateurs qui aiment (= likent) le post
    type: Number,
    required: true
  },
  usersLiked: { //-- tableau des identifiants des utilisateurs qui ont aimé (= liked) le post
    type: ["String <userId>"],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  isLiked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('post', postSchema);