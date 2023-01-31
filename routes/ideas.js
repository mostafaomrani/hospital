const contentTypeParser = require('content-type-parser');
const express = require('express')
const { ideaCheckValidator } = require('../validators/Idea-Validator');
const Idea = require('../models/idea')
const basicAuth = require('../middlewares/basic-auth')
const nextify = require('../lib/nextify')
const validate = require('../validators')

const ideasRouter = express.Router()

ideasRouter.get(
  '/',
  nextify(async (req, res) => {
    const ideas = await Idea.query()
    res.json({ data: ideas });
  })
);

// ideasRouter.get(
//   '/:id',
//   validate.params({
//     id: 'number|convert',
//   }),
//   nextify(async (req, res) => {
//     const id = req.params.id;
//     const idea = await Idea.query().findById(id)
//     if (idea == null) {
//       return res.status(404).json({
//         message: 'idea Not Found',
//       });
//     }
//     res.json({ data: idea });
//   })
// );
ideasRouter.get("/form", (req, res) => {
  res.render("./form.ejs");
});






/** POST Method By fastest-validator */
ideasRouter.post(
  '/',
  validate.body({
    title: 'title|optional',
    keyWords: 'keyWords|optional',
    challenge: 'challenge|optional',
    description: 'description|optional',
    timeAndPlace: 'timeAndPlace|optional',
    result: 'result|optional',
    recommendation: 'recommendation|optional',
  }),
  nextify(async (req, res) => {
    const ideaInfo = req.body;
    const validate = ideaCheckValidator(ideaInfo);
    const contentType = contentTypeParser(req.headers['content-type']);
    const typeOfContent = contentType?.subtype || '';

    if (validate === true) {
      await Idea.query().insert(ideaInfo)
      if (typeOfContent === 'json') {
        res.status(200).json({
          message: 'New idea added',
        });
      } else {
        res.redirect('/dashboard');
      }
    } else {
      console.log(validate);
      if (typeOfContent === 'json') {
        res.status(400).json(validate);
      } else {
        res.render('dashboard');
      }
    }
  })
);

/** DELETE Method */
ideasRouter.get(
  '/del/:id',
  nextify(async (req, res) => {
    const id = req.params.id;
    const idea = await Idea.query().findById(id)
    console.log("IDEA="+idea)
    if (idea == null) {
      return res.status(404).json({
        message: 'idea Not Found',
      });
    } else {
      await Idea.query().deleteById(id)
      res.redirect('/dashboard');
    }
  })
);

/** PATCH Method */
ideasRouter.get(
  '/edit/:id',
  basicAuth,
  nextify(async (req, res) => {
    const id = req.params.id;
    const patch = req.body;
    const idea = await Idea.query().findById(id)
res.render
    if (idea == null) {
      return res.status(404).json({
        message: 'PATCH Not Found',
      });
    } else {
      await Idea.query().findById(id).patch(patch)
      res.status(204).end();
    }
  })
);
ideasRouter.patch(
  '/:id',
  basicAuth,
  nextify(async (req, res) => {
    const id = req.params.id;
    const patch = req.body;
    const idea = await Idea.query().findById(id)

    if (idea == null) {
      return res.status(404).json({
        message: 'PATCH Not Found',
      });
    } else {
      await Idea.query().findById(id).patch(patch)
      res.status(204).end();
    }
  })
);

module.exports = ideasRouter
