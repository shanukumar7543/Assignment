let Connection = require("../model/model");
const {userValidate}=require("../Validattion")

let getdata = async (req, res) => {
  try {
    const data = "SELECT * FROM user";
    await Connection.query(data, (err, result) => {
      if (err) {
        return err.sqlMessage;
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.send(err.sqlMessage);
  }
};

let post = async (req, res) => {
  try {
    let data1 = [req.body];
    // const {error} = userValidate(req.body)
    // console.log("::::: Error ::",error);
    // if(error){
    //   throw createError(err.details[0].message)
    // }

    const query1 = "INSERT INTO user set ? ";
    await Connection.query(query1, data1, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage);
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.send(err.sqlMessage);
  }
};

let update = async (req, res) => {
  try {
    let data2 = [req.body, req.params.user_id];
    query2 = "UPDATE user SET ? WHERE user_id = ? ";
    await Connection.query(query2, data2, (err, result) => {
      if (err) {
        return res.send({error : err.sqlMessage});

      }
      res.send(result);
    });
  } catch (err) {
    res.send({err: err.sqlMessage});
  }
};



module.exports = { getdata, post, update };
