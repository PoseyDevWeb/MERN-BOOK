module.exports.BookErrors = (err) => {
  let errors = {
    title: "",
    nameAuthor: "",
    price: "",
    ISBN: "",
    pageNumber: "",
    categorie: "",
    stok: "",
    pubDate: "",
  };

  /*if (err.message.includes("pseudo"))
      errors.pseudo = "Pseudo incorrect ou déjà pris";*/

  if (err.message.includes("title")) errors.title = "Champ Obligatoire";

  if (err.message.includes("nameAuthor"))
    errors.nameAuthor = "Champ Obligatoire";

  if (err.message.includes("price")) errors.price = "Champ Obligatoire";
  if (err.message.includes("ISBN")) errors.ISBN = "Champ Obligatoire";
  if (err.message.includes("pageNumber"))
    errors.pageNumber = "Champ Obligatoire";
  if (err.message.includes("categorie")) errors.categorie = "Champ Obligatoire";
  if (err.message.includes("stok")) errors.stok = "Champ Obligatoire";
  if (err.message.includes("pubDate")) errors.pubDate = "Champ Obligatoire";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minimum";

  /*if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
      errors.pseudo = "Ce pseudo est déjà pris";*/

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("title"))
    errors.title = "Ce titre est déjà enregistré";

  return errors;
};

module.exports.IdErrors = (err) => {
  let errors = { _id: "" };

  if (err.message.includes("_id")) errors._id = " Id Incorrect";

  return errors;
};
