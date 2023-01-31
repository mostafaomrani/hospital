const Validator = require('fastest-validator');

const v = new Validator();

const schema = {
  personId: {
    type: 'number',
    convert: true,
    trim: true,
    min: 100,
    max: 999,
    positive: true,
    integer: true,
    messages: {
      number: 'درج کد الزامی می باشد',
      numberMin: 'برای کد حداقل 3 رقم وارد کنید',
      numberMax: 'برای کد حداکثر 3 رقم وارد کنید',
    },
  },
  firstName: {
    type: 'string',
    trim: true,
    min: 3,
    max: 30,
    messages: {
      string: 'درج نام الزامی می باشد',
      stringMin: 'برای نام حداقل 3 حرف وارد کنید',
      stringMax: 'برای نام حداکثر 30 حرف وارد کنید',
    },
  },
  lastName: {
    type: 'string',
    trim: true,
    min: 3,
    max: 30,
    messages: {
      string: 'درج نام خانوادگی الزامی می باشد',
      stringMin: 'برای نام خانوادگی حداقل 3 حرف وارد کنید',
      stringMax: 'برای نام خانوادگی حداکثر 30 حرف وارد کنید',
    },
  },
  age: {
    type: 'number',
    convert: true,
    trim: true,
    positive: true,
    integer: true,
    min: 6,
    max: 90,
    messages: {
      number: 'درج سن الزامی می باشد',
      numberMin: 'حداقل سن 6 سال می باشد',
      numberMax: 'حداکثر سن 90 سال می باشد',
    },
  },
  isMale: {
    type: 'boolean',
    convert: true,
    trim: true,
    messages: {
      boolean: 'درج جنسیت الزامی می باشد',
    },
  },
  meliCode: {
    type: 'string',
    trim: true,
    length: 10,
    messages: {
      string: 'درج کد ملی الزامی می باشد',
      stringLength: 'تعداد رقم کدملی 10 می باشد ',
      stringMin: 'برای کد ملی حداقل 10 رقم وارد کنید',
      stringMax: 'برای کد ملی حداکثر 10 رقم وارد کنید',
    },
  },
  mobile: {
    type: 'string',
    trim: true,
    min: 11,
    max: 11,
    messages: {
      required: 'درج مـــوبایل الزامی می باشد',
      string: 'درج موبایل الزامی می باشد',
      stringMin: 'برای موبایل حداقل 11 رقم وارد کنید',
      stringMax: 'برای موبایل حداکثر 11 رقم وارد کنید',
    },
  },
};

const ideaCheckValidator = v.compile(schema);
module.exports = { ideaCheckValidator };
