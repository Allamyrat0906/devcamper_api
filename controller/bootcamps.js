//@desc     Get all bootcamps
//@route    GET/api/v1/bootcamps
//@acsess   Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucsess: true, msg: "Show all bootcamp" });
};

//@desc     Get single bootcamps
//@route    GET/api/v1/bootcamps
//@acsess   Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucsess: true, msg: `show bootcamp ${req.params.id}` });
};

//@desc     Create new  bootcamps
//@route    POST/ api/v1/bootcamps/:id
//@acsess   Public

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ sucsess: true, msg: "Creaye new bootcamp" });
};

//@desc     Update bootcamps
//@route    PUT/api/v1/bootcamps
//@acsess   Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucsess: true, msg: `Update bootcamp ${req.params.id}` });
};

//@desc     Delete bootcamps
//@route    Delete/api/v1/bootcamps
//@acsess   Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucsess: true, msg: `Delete bootcamp ${req.params.id}` });
};
