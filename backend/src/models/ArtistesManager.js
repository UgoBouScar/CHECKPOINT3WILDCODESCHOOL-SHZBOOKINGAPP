const AbstractManager = require("./AbstractManager");

class ArtistesManager extends AbstractManager {
  constructor() {
    super({ table: "artistes" });
  }

  find(id) {
    return this.database.query(
      `select a.*, s.nom as nom_style from  ${this.table} as a join styles as s on a.style_id = s.id where a.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  insert(artistes) {
    return this.database.query(
      `insert into ${this.table} (nom, image, biographie, url) values (?, ?, ?, ?)`,
      [artistes.nom, artistes.image, artistes.biographie, artistes.url]
    );
  }

  update(artistes) {
    return this.database.query(
      `update ${this.table} set nom = ?, image = ?, biographie = ?, url = ? where id = ?`,
      [
        artistes.nom,
        artistes.image,
        artistes.biographie,
        artistes.url,
        artistes.id,
      ]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = ArtistesManager;
