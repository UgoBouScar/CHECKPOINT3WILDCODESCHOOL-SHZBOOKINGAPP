const AbstractManager = require("./AbstractManager");

class artistesManager extends AbstractManager {
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
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      artistes.title,
    ]);
  }

  update(artistes) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [artistes.title, artistes.id]
    );
  }
}

module.exports = artistesManager;
