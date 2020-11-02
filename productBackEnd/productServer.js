const express = require('express');
const app = express();
var helmet = require('helmet');
app.use(helmet());

app.use(express.json());
express.urlencoded({limit: '5mb', extended: true});

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('products.db');

// back kuuntelee porttia 8080, can change this later.
app.listen(8080, () => {
    console.log('Node works at localhost:8080');
});

// Reititys on pelkkä / esim. localhost:8080/, directly to here.
app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Works!' })
});

// Reititys on /products/all esim. localhost:8080/henkilo/all, model.
app.get('/products/all', (req, res, next) => {
	db.all("SELECT * FROM products", (error, results) => {
    if (error) throw error;

/* Jos kuvia olisi useita
		for (var i = 0; i < results.length; i++) {
			if (results[i].kuva != null) {
				results[i].kuva = results[i].kuva.toString('base64');
			}
		}
*/
    return res.status(200).json(results);
  });
});

app.get('/products/one/:id', (req, res, next) => {
    let id = req.params.id;
    db.get('SELECT * FROM products where id = ?', [id], (error, result) => {
        if (error) throw error;

        if (typeof(result) == 'undefined')  {
          return res.status(200).send({});
        }
/* Jos kuva olisi talletettu kantaan, remember this!
		    if (result.kuva != null) {
		      result.kuva = result.kuva.toString('base64');
		    }
*/
        return res.status(200).json(result);
    });
});


// Kuvan lataaminen palvelimen hakemistoon, uploading pictures to a folder.
const multer = require('multer');

const storage = multer.diskStorage({
  destination:  (req, file, callback) => {
    callback(null, './uploads')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

// Kuva lisätään hakemistoon
// Ensin tehdään upload ja sitten vasta tämä
app.post('/products/add', upload.single('kuva'),  (req, res, next) => { // USE THIS to update?
   // Lomakkeelta tulleet tiedot
    let tap = req.body;
    let kuva = null;

    // Jos tuli tiedosto, otetaan sen nimi kantaan laittamista varten
    if (req.file) {
      kuva = req.file.originalname; // Build time-thingie for name changing!
    }

    console.log(tap) // Check if the parameters match.
    db.run('INSERT INTO products (name, maker, date, type, description, kuva) VALUES (?, ?, ?, ?, ?, ?)', 
    [tap.name, tap.maker, tap.date, tap.type, tap.description, kuva], function (error, result) { // Lomakekenttien nimet.
        if (error) throw error;

        return res.status(200).json( {count: this.changes} ); // Counting if changes were made to rows.
    })
})

app.post('/products/edit', upload.single('kuva'),  (req, res, next) => { // USE THIS to update? How?
  // Lomakkeelta tulleet tiedot
   let tap = req.body;
   let kuva = null;

   // Jos tuli tiedosto, otetaan sen nimi kantaan laittamista varten
   if (req.file) {
     kuva = req.file.originalname; // Build time-thingie for name changing!
   }

   console.log(tap) // Check if the parameters match.
   db.run('UPDATE products SET name = ?, maker = ?, date = ?, type = ?, description = ?, kuva = ? WHERE id = ?', 
   [tap.name, tap.maker, tap.date, tap.type, tap.description, kuva, tap.id], function (error, result) { // Lomakekenttien nimet.
       if (error) throw error;

       return res.status(200).json( {count: this.changes} ); // Counting if changes were made to rows.
   })
})

app.get('/download/:nimi', (req, res, next) => { // Would continue to 'next' declared operation.
  let file = './uploads/' + req.params.nimi;
  res.download(file);
});


//Update-komennolla tuodaan se muutos.

/*
Kun kuva lisätään kantaan
app.post('/henkilo/add', (req, res, next) => {
    let tap = req.body;

    let kuva = null;
	  if (tap.kuva != null) {
      kuva = Buffer.from(tap.kuva, 'base64');
	  }

    db.run("INSERT INTO henkilo (nimi, email, kuva) VALUES (?, ?, ?)", [tap.nimi, tap.email, tap.kuva], function (error, result, fields) {
        if (error) throw error;

        return res.status(200);
    });
});
*/

app.get('/products/delete/:id', (req, res, next) => {
    // Otetaan parametrina tulleen tuotteen id
    let id = req.params.id;

    // Kuvan poistamienen puuttuu ratkaisusta
    db.run('DELETE FROM products WHERE id = ?', [id],  function (error, result) {
        if (error) throw error;

        return res.status(200).json( {count: this.changes} );
    });

});

// Jos mikään aiempi reititys on sopinut, silloin suoritetaan tämä
app.get('*', (req, res, next) => {
    return res.status(404).send({ error: true, message: 'No requested service available.' }) // If none of the above routings...
});