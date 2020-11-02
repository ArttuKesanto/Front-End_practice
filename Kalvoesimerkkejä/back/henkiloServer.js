const express = require('express');
const app = express();
var helmet = require('helmet');
app.use(helmet());

app.use(express.json());
express.urlencoded({limit: '5mb', extended: true});

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('henkilot.db');

// back kuuntelee porttia 8080
app.listen(8080, () => {
    console.log('Nodesada toimii localhost:8080');
});

// Reititys on pelkkä / esim. localhost:8080/
app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Toimii' })
});

// Reititys on /henkilo/all esim. localhost:8080/henkilo/all
app.get('/henkilo/all', (req, res, next) => {
	db.all("SELECT * FROM henkilo", (error, results) => {
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

app.get('/henkilo/one/:id', (req, res, next) => {
    let id = req.params.id;
    db.get('SELECT * FROM henkilo where id=?', [id], (error, result) => {
        if (error) throw error;

        if (typeof(result) == 'undefined')  {
          return res.status(200).send({});
        }
/* Jos kuva olisi talletettu kantaan
		    if (result.kuva != null) {
		      result.kuva = result.kuva.toString('base64');
		    }
*/
        return res.status(200).json(result);
    });
});


// Kuvan lataaminen palvelimen hakemistoon
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
app.post('/henkilo/add', upload.single('kuva'),  (req, res, next) => {
   // Lomakkeelta tulleet tiedot
    let tap = req.body;
    let kuva = null;

    // Jos tuli tiedosto, otetaan sen nimi kantaan laittamista varten
    if (req.file) {
      kuva = req.file.originalname;
    }

    db.run('INSERT INTO henkilo (nimi, email, kuva) VALUES (?, ?, ?)', [tap.nimi, tap.email, kuva], function (error, result) {
        if (error) throw error;

        return res.status(200).json({count: this.changes});
    })
})

app.get('/download/:nimi', (req, res, next) => {
  var file = './uploads/' + req.params.nimi;
  res.download(file);
});

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

app.get('/henkilo/delete/:id', (req, res, next) => {
    // Otetaan parametrina tulleen henkilon id
    let id = req.params.id;

    // Kuvan poistamienen puuttuu ratkaisusta
    db.run('DELETE FROM henkilo WHERE id = ?', [id],  function (error, result) {
        if (error) throw error;

        return res.status(200).json( {count: this.changes} );
    });

});

// Jos mikään aiempi reititys on sopinut, silloin suoritetaan tämä
app.get('*', (req, res, next) => {
    return res.status(404).send({ error: true, message: 'Ei pyydettyä palvelua' })
});
