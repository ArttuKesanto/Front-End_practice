const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('henkilot.db');

db.serialize( () => {
/* Jos kantaan talletetan kuva
  let sql = "CREATE TABLE Henkilo (" +
	   "id integer PRIMARY KEY NOT NULL, " +
	   "nimi text NOT NULL, " +
	   "email text NOT NULL, " +
	   "kuva blob )";
*/

// Kun kantaan talletetaan vain kuvan nimi
  let sql = "CREATE TABLE Henkilo (" +
   "id integer PRIMARY KEY NOT NULL, " +
   "nimi text NOT NULL, " +
   "email text NOT NULL, " +
   "kuva text)";

  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulu tehtiin");
  })

  sql = "INSERT INTO `henkilo` (`id`, `nimi`, `email`, `kuva`) "+
  " VALUES (1, 'Matti', 'matti@joku.com', null)";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql = "INSERT INTO `henkilo` (`id`, `nimi`, `email`, `kuva`) "+
  " VALUES (2, 'Maija', 'maija@joku.com', null)";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });
})

db.each("SELECT id, nimi FROM henkilo", (err, row) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(row.id + ", " + row.nimi);

});

db.close();
