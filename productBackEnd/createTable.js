const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('products.db');

db.serialize( () => {

	let sql = "CREATE TABLE products (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "name text NOT NULL, " +
			  "maker text NOT NULL, " +
			  "date date NOT NULL, " +
			  "type text NOT NULL, " +
			  "description text, " +
			  "kuva text )"; // blob-tietotyyppi jos laitetaan kantaan kuva!

	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Table created!");
	});

	sql = "INSERT INTO `products` (`id`, `name`, `maker`, `date`, `type`, `description`, `kuva`) "+
	" VALUES (1, '3D 144Hz Display', 'Philips', '2020-02', 'Display', 'What a wonderful display! Enjoy the views!', 'pc_image1.png')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row added!");
	});

	sql = "INSERT INTO `products` (`id`, `name`, `maker`, `date`, `type`, `description`, `kuva`) "+
	" VALUES (2, 'Sony LG 244Hz', 'Philips', '2020-12', 'Display, Low-tier', 'Enjoy a fine picture quality with this item!', 'pc_image1.png')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row added!");
    });
    
	sql = "INSERT INTO `products` (`id`, `name`, `maker`, `date`, `type`, `description`, `kuva`) "+
	" VALUES (3, 'Logitech keyboard 299Xu', 'Sony', '2022-09', 'Keyboard', 'Fine typing with this hardware!', 'pc_image1.png')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row added!");
    });
    
    sql = "INSERT INTO `products` (`id`, `name`, `maker`, `date`, `type`, `description`, `kuva`) "+
	" VALUES (4, 'Logitech keyboard 299Xu', 'Sony', '2020-11', 'Keyboard', 'Fine typing with this hardware! Truly!', 'pc_image1.png')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row added!");
    });
    
    sql = "INSERT INTO `products` (`id`, `name`, `maker`, `date`, `type`, `description`, `kuva`) "+
	" VALUES (5, '3D 144Hz Display', 'Philips', '2020-02', 'Display', 'What a wonderful display! Enjoy the views!', 'pc_image1.png')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row added!");
    });

    sql = "INSERT INTO `products` (`id`, `name`, `maker`, `date`, `type`, `description`, `kuva`) "+
	" VALUES (6, '3D 120Hz Display', 'Samsung Ltd.', '2020-05', 'Display', 'What a wonderful display! Truly! Enjoy the views!', 'pc_image1.png')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Row added!");
    });

	db.each("SELECT id, name FROM products", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.name);
	});

	db.close();
});