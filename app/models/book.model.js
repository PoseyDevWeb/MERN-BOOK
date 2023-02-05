module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    nameAuthor: { type: String, required: true },
    price: { type: Number, required: true },
    ISBN: { type: String, required: true },
    pageNumber: { type: Number, required: true },
    categorie: { type: String, required: true },
    stok: { type: Number, required: true },
    pubDate: { type: Date, required: true },
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Book = mongoose.model("book", schema);
  return Book;
};
