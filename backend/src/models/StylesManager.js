const AbstractManager = require("./AbstractManager");

class StyleManager extends AbstractManager {
  constructor() {
    super({ table: "styles" });
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  insert(style) {
    return this.database.query(`insert into ${this.table} (nom) values (?)`, [
      style.nom,
    ]);
  }

  update(style) {
    return this.database.query(
      `update ${this.table} set nom = ? where id = ?`,
      [style.nom, style.id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = StyleManager;
