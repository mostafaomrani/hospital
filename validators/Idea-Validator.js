const Validator = require('fastest-validator');

const v = new Validator();

const schema = {

  title: {
    type: 'string',
    trim: true,
    min: 3,
    max: 30000,
    messages: {
      string: 'درج نام ابتکار تجربه الزامی می باشد',
      stringMin: 'برای نام ابتکار تجربه حداقل 3 حرف وارد کنید',
      stringMax: 'برای نام ابتکار تجربه حداکثر 30000 حرف وارد کنید',
    },
  },
  keyWords: {
    type: 'string',
    trim: true,
    min: 3,
    max: 30000,
    messages: {
      string: 'درج کلمات کلیدی الزامی می باشد',
      stringMin: 'برای کلمات کلیدی حداقل 3 حرف وارد کنید',
      stringMax: 'برای کلمات کلیدی حداکثر 30000 حرف وارد کنید',
    },
  },
  challenge: {
    type: 'string',
    trim: true,
    min: 3,
    max: 30000,
    messages: {
      string: 'درج چالشها الزامی می باشد',
      stringMin: 'برای چالشها  حداقل 3 حرف وارد کنید',
      stringMax: 'برای چالشها حداکثر 30000 حرف وارد کنید',
    },
  },
  description: {
    type: 'string',
    trim: true,
    min: 3,
    max: 30000,
    messages: {
      string: 'درج شرح ابتکار و تجربه الزامی می باشد',
      stringMin: 'برای شرح ابتکار و تجربه  حداقل 3 حرف وارد کنید',
      stringMax: 'برای شرح ابتکار و تجربه حداکثر 30000 حرف وارد کنید',
    },
  },
  timeAndPlace: {
    type: 'string',
    trim: true,
    min: 3,
    max: 30000,
    messages: {
      string: 'درج زمان و محل تجربه الزامی می باشد',
      stringMin: 'برای زمان و محل تجربه حداقل 3 حرف وارد کنید',
      stringMax: 'برای زمان و محل تجربه حداکثر 30000 حرف وارد کنید',
    },
  },
  result: {
    type: 'string',
    trim: true,
    min: 3,
    max: 30000,
    messages: {
      string: 'درج نتایج و آثار الزامی می باشد',
      stringMin: 'برای نتایج و آثار حداقل 3 حرف وارد کنید',
      stringMax: 'برای نتایج و آثار حداکثر 30000 حرف وارد کنید',
    },
  },
  recommendation: {
    type: 'string',
    trim: true,
    min: 3,
    max: 30000,
    messages: {
      string: 'درج درس آموخته ها و توصیه ها الزامی می باشد',
      stringMin: 'برای درس آموخته ها و توصیه ها حداقل 3 حرف وارد کنید',
      stringMax: 'برای درس آموخته ها و توصیه ها حداکثر 30000 حرف وارد کنید',
    },
  },

};

const ideaCheckValidator = v.compile(schema);
module.exports = { ideaCheckValidator };
