'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(__dirname));

const kitties = [{
  id: 1,
  name: 'meowser',
  image: 'http://dreamatico.com/data_images/kitten/kitten-5.jpg'
}, {
  id: 2,
  name: 'sammeow',
  image: 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg'
}, {
  id: 3,
  name: 'meowian',
  image: 'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg'
}, {
  id: 4,
  name: 'yoomeow',
  image: 'http://www.critterbabies.com/wp-content/gallery/kittens/cats-animals-kittens-background-us.jpg'
}, {
  id: 5,
  name: 'dameow',
  image: 'http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/10-kitten-cuteness-1.jpg'
}];

app.get('/api/kitties', function (req, res) {
  res.json(kitties.map(({id, name}) => ({id, name})));
});

app.get('/api/kitties/:id', function (req, res) {
  const aKitty = kitties.find(p => p.id === Number(req.params.id));
  if (!aKitty) res.status(404).end();
  else res.json(aKitty);
});

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});

