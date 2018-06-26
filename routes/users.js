var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');
var env = require('dotenv').config();
var moment = require('moment');
moment().format();

const VACATION_ID = 8690434;
const HOLIDAY_ID = 8690392;
const TRAINING_ID = 8690424;


const AUTH = {
  'Authorization': `Bearer ${process.env.AUTHORIZATION}`
};
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('Requires a name parameter');
});
*/
var findUser = {
  url: `https://rest.tsheets.com/api/v1/users`,
  headers: AUTH
}

let findId = (Jbody, name) => {
  return _.find(Jbody, (value, key) => value.email === `${name}@consultwithcase.com`).id;
}

let totalDurationHours = (Tbody) => {
  let hours = {
    work: 0,
    vacation: 0,
    training: 0,
    holiday: 0
  };
  _.each(Tbody, (value, key) => {
    if (value.jobcode_id === VACATION_ID) {
      hours.vacation += value.duration / 3600;
    } else if (value.jobcode_id === TRAINING_ID) {
      hours.training += value.duration / 3600;
    } else if (value.jobcode_id === HOLIDAY_ID) {
      hours.holiday += value.duration / 3600;
    } else {
      hours.work += value.duration / 3600;
    }
  })
  return hours;
}



router.get('/:name', (req, res, next) => {
  request(findUser, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let Jbody = JSON.parse(body).results.users
      let name = req.params.name;
      let uid = findId(Jbody, name)
      console.log(uid)
      //let dateStart = moment().format("YYYY-MM-01");
      //let dayEnd = moment(dateStart, "YYYY-MM-DD").daysInMonth();
      //let dateEnd = moment().format(`YYYY-MM-${dayEnd}`);
      let findTime = {
        //url: `https://rest.tsheets.com/api/v1/timesheets?start_date=${dateStart}&end_date=${dateEnd}&user_ids=${uid}`,
        url: `https://rest.tsheets.com/api/v1/timesheets?start_date=01/01/2018&end_date=12/31/2018&user_ids=${uid}`,
        headers: AUTH
      }
      request(findTime, (error, response, body) => {
        let TBody = JSON.parse(body).results.timesheets;
        console.log(TBody);
        let hours = totalDurationHours(TBody);
        console.log(hours);
      })
      console.log(`${dateStart} is the start date, ${dateEnd} is the last day in the month`);
    } else {
      console.log(error)
    }
  });
});
module.exports = router;