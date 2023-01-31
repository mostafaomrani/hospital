const contentTypeParser = require('content-type-parser');
const express = require('express')
const { checkValidator } = require('../validators/person-validator');
const PersonDao = require('../dao/person');
const Person = require('../models/person')
const basicAuth = require('../middlewares/basic-auth')
const nextify = require('../lib/nextify')
const validate = require('../validators')

const peopleRouter = express.Router()

peopleRouter.get(
  '/',
  basicAuth,
  nextify(async (req, res) => {
    const people = await Person.query()
    res.json({ data: people });
  })
);

peopleRouter.get(
  '/:id',
  basicAuth,
  validate.params({
    id: 'number|convert',
  }),
  nextify(async (req, res) => {
    const id = req.params.id;
    const person = await Person.query().findById(id)
    if (person == null) {
      return res.status(404).json({
        message: 'Person Not Found',
      });
    }
    res.json({ data: person });
  })
);

/** POST Method By fastest-validator */
peopleRouter.post(
  '/',
  basicAuth,
  validate.body({
    personId: 'number|convert',
    firstName: 'firstName|optional',
    lastName: 'lastName|optional',
    age: 'age|optional',
    isMale:'isMale|optional',
    meliCode:'meliCode|optional',
    mobile:'mobile|optional'
  }),
  nextify(async (req, res) => {
    const personInfo = req.body;
    const validate = checkValidator(personInfo);
    const contentType = contentTypeParser(req.headers['content-type']);
    const typeOfContent = contentType?.subtype || '';

    if (validate === true) {
      await Person.query().insert(personInfo)
      if (typeOfContent === 'json') {
        res.status(200).json({
          message: 'New person added',
        });
      } else {
        res.redirect('/');
      }
    } else {
      console.log(validate);
      if (typeOfContent === 'json') {
        res.status(400).json(validate);
      } else {
        res.render('index', { path: '/', errors: validate });
      }
    }
  })
);

/** DELETE Method */
peopleRouter.delete(
  '/:id',
  basicAuth,
  nextify(async (req, res) => {
    const id = req.params.id;
    const person = await Person.query().findById(id)
    if (person == null) {
      return res.status(404).json({
        message: 'Person Not Found',
      });
    } else {
      await Person.query().deleteById(id)
      res.status(204).end();
    }
  })
);

/** PATCH Method */
peopleRouter.patch(
  '/:id',
  basicAuth,
  nextify(async (req, res) => {
    const id = req.params.id;
    const patch = req.body;
    const person = await Person.query().findById(id)

    if (person == null) {
      return res.status(404).json({
        message: 'PATCH Not Found',
      });
    } else {
      await Person.query().findById(id).patch(patch)
      res.status(204).end();
    }
  })
);

module.exports = peopleRouter
