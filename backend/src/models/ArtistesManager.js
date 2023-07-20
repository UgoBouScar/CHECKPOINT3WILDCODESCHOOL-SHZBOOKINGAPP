const AbstractManager = require("./AbstractManager");

class artistesManager extends AbstractManager {
  constructor() {
    super({ table: "artistes" });
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
