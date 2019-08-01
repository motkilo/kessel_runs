const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/kessel_run_db"
);

const runSeed = [
  {
    'id': 1,
    'name': 'Sun Run',
    'start_city': 'Washington D.C.',
    'finish_city': 'Miami',
    'coordinates_start': [38.841836, -77.085421],
    'coordinates_finish': [25.811266, -80.129746],
    date: new Date(Date.now())
  },
  {
    'id': 2,
    'name': 'Tequila Run',
    'start_city':'Washington D.C.',
    'end_city':'San Francisco',
    'coordinates_start': [38.841836, -77.085421],
    'coordinates_finish': [37.780078, -122.482843],
    date: new Date(Date.now())
  },
  {
    'id': 3,
    'name': 'LA Taco Run',
    'start_city':'Washington D.C.',
    'end_city': 'Los Angelas',
    'coordinates_start': [38.841836, -77.085421],
    'coordinates_finish': [43.055240, -118.208356],
    date: new Date(Date.now())
  },
  {
    'id': 4,
    'name': 'Cocaine Run',
    'start_city':'Los Angelas',
    'end_city':'Miami',
    'coordinates_start': [43.055240, -118.208356],
    'coordinates_finish': [25.811266, -80.129746],
    date: new Date(Date.now())
  },
  {
    'id': 5,
    'name': 'Grunge Run',
    'start_city':'Miami',
    'end_city':'Seattle',
    'coordinates_start': [25.811266, -80.129746],
    'coordinates_finish': [47.620589, -122.348827],
    date: new Date(Date.now())
  }
];

db.Run
  .remove({})
  .then(() => db.Run.collection.insertMany(runSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })

  .catch(err => {
    console.error(err);
    process.exit(1);
  });