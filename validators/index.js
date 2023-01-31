const FastestValidator = require("fastest-validator");
const v = new FastestValidator();

v.alias("personId", {
  type: "number",
  convert: true,
  trim: true,
  min: 100,
  max: 999,
  positive: true,
  integer: true,
  messages: {
    number: "درج کد الزامی می باشد",
    numberMin: "برای کد حداقل 3 رقم وارد کنید",
    numberMax: "برای کد حداکثر 3 رقم وارد کنید",
  },
});

v.alias("firstName", {
  type: "string",
  trim: true,
  min: 3,
  max: 30,
  messages: {
    string: "درج نام الزامی می باشد",
    stringMin: "برای نام حداقل 3 حرف وارد کنید",
    stringMax: "برای نام حداکثر 30 حرف وارد کنید",
  },
});

v.alias("lastName", {
  type: "string",
  trim: true,
  min: 3,
  max: 30,
  messages: {
    string: "درج نام خانوادگی الزامی می باشد",
    stringMin: "برای نام خانوادگی حداقل 3 حرف وارد کنید",
    stringMax: "برای نام خانوادگی حداکثر 30 حرف وارد کنید",
  },
});

v.alias("age", {
  type: "number",
  convert: true,
  trim: true,
  positive: true,
  integer: true,
  min: 6,
  max: 90,
  messages: {
    number: "درج سن الزامی می باشد",
    numberMin: "حداقل سن 6 سال می باشد",
    numberMax: "حداکثر سن 90 سال می باشد",
  },
});

v.alias("isMale", {
  type: "boolean",
  convert: true,
  trim: true,
  messages: {
    boolean: "درج جنسیت الزامی می باشد",
  },
});

v.alias("meliCode", {
  type: "string",
  trim: true,
  length: 10,
  messages: {
    string: "درج کد ملی الزامی می باشد",
    stringLength: "تعداد رقم کدملی 10 می باشد ",
    stringMin: "برای کد ملی حداقل 10 رقم وارد کنید",
    stringMax: "برای کد ملی حداکثر 10 رقم وارد کنید",
  },
});

v.alias("mobile", {
  type: "string",
  trim: true,
  min: 11,
  max: 11,
  messages: {
    required: "درج مـــوبایل الزامی می باشد",
    string: "درج موبایل الزامی می باشد",
    stringMin: "برای موبایل حداقل 11 رقم وارد کنید",
    stringMax: "برای موبایل حداکثر 11 رقم وارد کنید",
  },
});
v.alias("title", {
  type: "string",
  trim: true,
  min: 3,
  max: 30000,
  messages: {
    string: "درج نام ابتکار تجربه الزامی می باشد",
    stringMin: "برای نام ابتکار تجربه حداقل 3 حرف وارد کنید",
    stringMax: "برای نام ابتکار تجربه حداکثر 30000 حرف وارد کنید",
  },
});
v.alias("keyWords", {
  type: "string",
  trim: true,
  min: 3,
  max: 30000,
  messages: {
    string: "درج کلمات کلیدی الزامی می باشد",
    stringMin: "برای کلمات کلیدی حداقل 3 حرف وارد کنید",
    stringMax: "برای کلمات کلیدی حداکثر 30000 حرف وارد کنید",
  },
});
v.alias("challenge", {
  type: "string",
  trim: true,
  min: 3,
  max: 30000,
  messages: {
    string: "درج چالشها الزامی می باشد",
    stringMin: "برای چالشها  حداقل 3 حرف وارد کنید",
    stringMax: "برای چالشها حداکثر 30000 حرف وارد کنید",
  },
});
v.alias("description", {
  type: "string",
  trim: true,
  min: 3,
  max: 30000,
  messages: {
    string: "درج شرح ابتکار و تجربه الزامی می باشد",
    stringMin: "برای شرح ابتکار و تجربه  حداقل 3 حرف وارد کنید",
    stringMax: "برای شرح ابتکار و تجربه حداکثر 30000 حرف وارد کنید",
  },
});
v.alias("timeAndPlace", {
  type: "string",
  trim: true,
  min: 3,
  max: 30000,
  messages: {
    string: "درج زمان و محل تجربه الزامی می باشد",
    stringMin: "برای زمان و محل تجربه حداقل 3 حرف وارد کنید",
    stringMax: "برای زمان و محل تجربه حداکثر 30000 حرف وارد کنید",
  },
});
v.alias("result", {
  type: "string",
  trim: true,
  min: 3,
  max: 30000,
  messages: {
    string: "درج نتایج و آثار الزامی می باشد",
    stringMin: "برای نتایج و آثار حداقل 3 حرف وارد کنید",
    stringMax: "برای نتایج و آثار حداکثر 30000 حرف وارد کنید",
  },
});
v.alias("recommendation", {
  type: "string",
  trim: true,
  min: 3,
  max: 30000,
  messages: {
    string: "درج درس آموخته ها و توصیه ها الزامی می باشد",
    stringMin: "برای درس آموخته ها و توصیه ها حداقل 3 حرف وارد کنید",
    stringMax: "برای درس آموخته ها و توصیه ها حداکثر 30000 حرف وارد کنید",
  },
});
function middleware(check, prop, req, res, next) {
  const result = check(req[prop]);

  if (result === true) {
    return next();
  }

  // TODO: include error messages in details
  res.status(400).json({ message: "Bad Request" });
}

function validate(prop, schema) {
  console.log(arguments);
  const check = v.compile(schema);
  return middleware.bind(null, check, prop);
}

module.exports = {
  body: validate.bind(null, "body"),
  params: validate.bind(null, "params"),
  query: validate.bind(null, "query"),
};
