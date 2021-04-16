const morgan = require("morgan");
const mysql = require("mysql");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes");
var usersRouter = require("./routes/users");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
const db = mysql.createConnection({
  host: "localhost", //your ip address
  user: "root", //write your mysql user here
  password: "0000", //write your mysql password here
  database: "dbms", //your database name
});
db.connect((err) => {
  if (err) throw err;
  console.log("mysql connected");
});
var app = express();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
//DON'T EDIT THE PART ABOVE THIS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//perso
//PATIENT TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<<<<<<< HEAD
app.get('/patient/:id',(req,res)=>{
  console.log("fetching user with id: "+ req.params.id)
  let patientid=parseInt(req.params.id)
  let sql="Select * from patient where pid = ?"
  let array=[]
  db.query(sql,[patientid],(err,rows,fields)=>{
    if(err)
    {
      console.log("Failed to query for the patient: "+err)
      res.sendStatus(500)
      res.end()
      return
    } 
    console.log("patient route")
    res.json(rows[0])
  })
})

app.get('/patientdoctor/:id',(req,res)=>{
  console.log("fetching user with id: "+ req.params.id)
  let patientid=parseInt(req.params.id)
  let sql="Select doctor.first_name,doctor.last_name from patient,doctor where patient.pid = ? and doctor.did=patient.did"
  db.query(sql,[patientid],(err,rows,fields)=>{
    if(err)
    {
      console.log("Failed to query for the patient: "+err)
      res.sendStatus(500)
      res.end()
      return
    } 
    console.log("I think we fetched patient's doctor successfully")
    res.json(rows[0])
  })
})

app.get('/patienticu/:id',(req,res)=>{
  console.log("fetching user with id: "+ req.params.id)
  let patientid=parseInt(req.params.id)
  let sql="Select icu.hospital_name from patient,icu where patient.pid = ? and icu.icuid=patient.icuid"
  db.query(sql,[patientid],(err,rows,fields)=>{
    if(err)
    {
      console.log("Failed to query for the patient: "+err)
      res.sendStatus(500)
      res.end()
      return
    } 
    console.log("I think we fetched patient's doctor successfully")
    res.json(rows[0])
  })
})


app.delete('/patient/:id',(req,res)=>{
  console.log("fetching user with id: "+ req.params.id)
  let patientid=parseInt(req.params.id)

  let sql="delete from patientphone where pid = ?"
  db.query(sql,[patientid],(err,rows,fields)=>{
    if(err)
    {
      console.log("Failed to query for the patient: "+err)
      res.sendStatus(500)
      res.end()
      return
    } 
    console.log("I think we deleted the patient phone number successfully")
    res.json(rows[0])
  })
  sql="delete from donateorgans where patientid = ?"
  db.query(sql,[patientid],(err,rows,fields)=>{
    if(err)
    {
      console.log("Failed to query for the patient: "+err)
      res.sendStatus(500)
      res.end()
      return
    } 
    console.log("HELLO")
    res.json(rows[0])
  })

  sql="delete from receiveorgans where patientid = ?"
  db.query(sql,[patientid],(err,rows,fields)=>{
    if(err)
    {
      console.log("Failed to query for the patient: "+err)
      res.sendStatus(500)
      res.end()
      return
    } 
    console.log("HELLO")
    res.json(rows[0])
  })

  sql="delete from patient where pid = ?"
  db.query(sql,[patientid],(err,rows,fields)=>{
    if(err)
    {
      console.log("Failed to query for the patient: "+err)
      res.sendStatus(500)
      res.end()
      return
    } 
    console.log("HELLO")
    res.json(rows[0])
  })

  

})

app.get('/patient',(req,res)=>{
  let sql="Select * from patient"
  db.query(sql,(err,rows,fields)=>{
    if(err)
    {
      console.log("Failed to query for the patients: "+err)
      res.sendStatus(500)
      res.end()
      return
    }
    console.log("patient route all")
    res.json(rows)
  })
})

app.post("/patient", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const pid = req.body.pid;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const time_of_death = req.body.time_of_death;
  const agreement = req.body.agreement;
  const braindead = 0;
  const icuid = req.body.icuid;
  const did = req.body.did;
  const password = req.body.password;
  const pulse = req.body.pid.pulse;
  const temp = req.body.temp;
  const blood_pressure_dis = req.body.blood_pressure_dis;
  const blood_pressure_sys = req.body.blood_pressure_sys;
  const comorbidity_status = req.body.comorbidity_status;
  const breathing_rate = req.body.breathing_rate;
  const blood_group = req.body.blood_group;
  const gender = req.body.gender;
  const admission_date = req.body.admission_date;
  const city = req.body.city;
  const state = req.body.state;
  const pincode = req.body.pincode;
  const street = req.body.street;
  const house_number = req.body.house_number;
  const reasons = req.body.reasons;
  const dob = req.body.dob;
  let sql =
    "INSERT INTO patient values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      pid,
      first_name,
      last_name,
      time_of_death,
      agreement,
      braindead,
      icuid,
      did,
      password,
      pulse,
      temp,
      blood_pressure_dis,
      blood_pressure_sys,
      comorbidity_status,
      breathing_rate,
      blood_group,
      gender,
      admission_date,
      city,
      state,
      pincode,
      street,
      house_number,
      reasons,
      dob,
    ],
    (err, rows, fields) => {
      if (err) {
        console.log("Failed to post for the patient: " + err);
        res.sendStatus(500);
        res.end();
        return;
      }
      console.log("I think we posted patient successfully");
    }
  );
  console.log(req.body.dob);
  res.status(200).send("Created patient");
});

app.post("/patientphone", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const phone_no = req.body.phone_no;
  const pid = req.body.pid;
  let sql = "INSERT INTO patientphone values(?,?)";
  db.query(sql, [phone_no, pid], (err, rows, fields) => {
    if (err) {
      console.log("Failed to post for the patient phone number: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we posted patient phone number successfully");
  });
  console.log(req.body.dob);
  res.status(200).send("Created patient Phone number");
});

//DOCTOR TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/doctor/:id", (req, res) => {
  console.log("fetching doctor with id: " + req.params.id);
  let doctorid = parseInt(req.params.id);
  let sql = "Select * from doctor where did = ?";
  db.query(sql, [doctorid], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the doctor: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched doctors successfully");
    res.json(rows[0]);
  });
});

app.get("/doctordepartment/:id", (req, res) => {
  console.log("fetching user with id: " + req.params.id);
  let doctorid = parseInt(req.params.id);
  let sql =
    "Select department.dept_name from doctor,department where doctor.did = ? and department.dept_id=doctor.dept_id";
  db.query(sql, [doctorid], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the doctor: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched doctor's doctor successfully");
    res.json(rows[0]);
  });
});

app.delete("/doctor/:id", (req, res) => {
  console.log("fetching doctor with id: " + req.params.id);
  let doctorid = parseInt(req.params.id);
  let sql = "delete from doctor where did = ?";
  db.query(sql, [doctorid], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the doctor: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we deleted the doctor successfully");
    res.json(rows[0]);
  });
});

app.get("/doctor", (req, res) => {
  let sql = "Select * from doctor";
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the doctor: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched doctors successfully");
    res.json(rows);
  });
});
app.post("/doctor", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const did = req.body.did;
  const post = req.body.post;
  const dob = req.body.dob;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const gender = req.body.gender;
  const dept_id = req.body.dept_id;
  const password = req.body.password;
  let sql = "INSERT INTO doctor values(?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [did, post, dob, first_name, last_name, gender, dept_id, password],
    (err, rows, fields) => {
      if (err) {
        console.log("Failed to post for the doctor: " + err);
        res.sendStatus(500);
        res.end();
        return;
      }
      console.log("I think we posted doctor successfully");
    }
  );
  console.log(req.body.dob);
  res.status(200).send("Created doctor");
});

//ICU TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/icu/:id", (req, res) => {
  console.log("fetching icu with id: " + req.params.id);
  let icuid = parseInt(req.params.id);
  let sql = "Select * from icu where icuid = ?";
  db.query(sql, [icuid], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the icu: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched icus successfully");
    res.json(rows[0]);
  });
});
app.get("/icu", (req, res) => {
  let sql = "Select * from icu";
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the icu: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched icus successfully");
    res.json(rows);
  });
});

app.post("/icu", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const icuid = req.body.icuid;
  const hospital_name = req.body.hospital_name;
  const capacity = req.body.capacity;
  const icu_type = req.body.icu_type;
  const registration_no = req.body.registration_no;
  const city = req.body.city;
  const state = req.body.state;
  const pincode = req.body.pincode;
  const street = req.body.street;
  const house_number = req.body.house_number;

  let sql = "INSERT INTO icu values(?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      icuid,
      hospital_name,
      capacity,
      icu_type,
      registration_no,
      city,
      state,
      pincode,
      street,
      house_number,
    ],
    (err, rows, fields) => {
      if (err) {
        console.log("Failed to post for the icu: " + err);
        res.sendStatus(500);
        res.end();
        return;
      }
      console.log("I think we posted icu successfully");
    }
  );
  console.log(req.body.dob);
  res.status(200).send("Created icu");
});
//ORGAN TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/organ/:id", (req, res) => {
  console.log("fetching organ with id: " + req.params.id);
  let organid = parseInt(req.params.id);
  let sql = "Select * from organ where organid = ?";
  db.query(sql, [organid], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the organs: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched organs successfully");
    res.json(rows[0]);
  });
});

app.get("/organ", (req, res) => {
  let sql = "Select * from organ";
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the organs: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched organs successfully");
    res.json(rows);
  });
});

app.post("/organ", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const organid = req.body.organid;
  const quantity = req.body.quantity;
  const organ_name = req.body.organ_name;

  let sql = "INSERT INTO organ values(?,?,?)";
  db.query(sql, [organid, quantity, organ_name], (err, rows, fields) => {
    if (err) {
      console.log("Failed to post for the organ: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we posted organ successfully");
  });

  //console.log(req.body.organid)
  res.status(200).send("Created organ");
});
//receive  organs table
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/receiveorgans", (req, res) => {
  let sql = "Select * from receiveorgans";
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the receiveorgans: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched receiveorgans successfully");
    res.json(rows);
  });
});

app.post("/receiveorgans", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const organid = req.body.organid;
  const patientid = req.body.patientid;
  let sql = "INSERT INTO receiveorgans values(?,?)";
  db.query(sql, [patientid, organid], (err, rows, fields) => {
    if (err) {
      console.log("Failed to post for the receiveorgans: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we posted receiveorgans successfully");
  });

  //console.log(req.body.organid)
  res.status(200).send("Created organ");
});

//organdonate table
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//donate

app.get("/donateorgans", (req, res) => {
  let sql = "Select * from donateorgans";
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the donateorgans: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched donateorgans successfully");
    res.json(rows);
  });
});

app.post("/donateorgans", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const organid = req.body.organid;
  const patientid = req.body.patientid;
  let sql = "INSERT INTO donateorgans values(?,?)";
  db.query(sql, [patientid, organid], (err, rows, fields) => {
    if (err) {
      console.log("Failed to post for the donateorgans: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we posted donateorgans successfully");
  });

  sql = "UPDATE organ set quantity =quantity+1 where organid=?";
  db.query(sql, [organid], (err, rows, fields) => {
    if (err) {
      console.log("Failed to post for the organ: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we posted organ successfully");
  });
  //console.log(req.body.organid)
  res.status(200).send("Created organ");
});

//DEPARTMENT TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/department/:id", (req, res) => {
  console.log("fetching department with id: " + req.params.id);
  let dept_id = parseInt(req.params.id);
  let sql = "Select * from department where dept_id = ?";
  db.query(sql, [dept_id], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the department: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched departments successfully");
    res.json(rows[0]);
  });
});

app.get("/department", (req, res) => {
  let sql = "Select * from department";
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for the department: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched departments successfully");
    res.json(rows);
  });
});

app.post("/department", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const dept_id = req.body.dept_id;
  const dept_name = req.body.dept_name;
  const capacity = req.body.capacity;

  let sql = "INSERT INTO department values(?,?,?)";
  db.query(sql, [dept_id, dept_name, capacity], (err, rows, fields) => {
    if (err) {
      console.log("Failed to post for the department: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we posted department successfully");
  });
  console.log(req.body.dob);
  res.status(200).send("Created department");
});
//Donation entries route=>
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/receive_entries/:organid/:pincode',(req,res)=>{
  console.log("fetching department with orgnaid: "+ req.params.organid)
  let organid=parseInt(req.params.organid)
  let pincode=parseInt(req.params.pincode)
  let sql="select patient.first_name, patient.pid,patientphone.phone_no, icu.hospital_name from donateorgans, icu, patient,patientphone where patient.icuid=icu.icuid and patientphone.pid=patient.pid and patient.pid=donateorgans.patientid and donateorgans.organid=? and icu.pincode=?"
  db.query(sql,[organid,pincode],(err,rows,fields)=>{
    if(err)
    {
      console.log("Failed to query  "+err)
      res.sendStatus(500)
      res.end()
      return
    } 
    console.log("I think we fetched")
    res.json(rows)
    })
  
})



//LOGIN Patient
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/login_patient',urlencodedParser,(req,res)=>{
  if(!req.body) return res.sendStatus(400)
  const pid=req.body.pid;
  const password= req.body.password;
  console.log(pid)
  console.log(password)
  let sql="select * from patient where pid=? and password=?"
  db.query(sql,[pid,password],(err,rows,fields)=> {
      if(err)
      {
        console.log("Failed: "+err)
        res.sendStatus(500)
        res.end()
        return
      }

     if(rows.length>0)
      {
        console.log("the number of rows are greater than 0")
      }
      else
      {
        res.send({messgae: 0});
      } 
      
    })
})

//LOGIN Doctor
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/login_doctor',urlencodedParser,(req,res)=>{
  if(!req.body) return res.sendStatus(400)
  const did=req.body.did;
  const password= req.body.password;
  console.log(did)
  console.log(password)
  let sql="select * from doctor where did=? and password=?"
  db.query(sql,[did,password],(err,rows,fields)=> {
      if(err)
      {
        console.log("Failed: "+err)
        res.sendStatus(500)
        res.end()
        return
      }
 
     if(rows.length>0)
      {
        console.log("the number of rows are greater than 0")
      }
      else
      {
        res.send({messgae: 0});
      } 
      
    })
})

//DON'T EDIT THE PART WRITTEN BELOW
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
port = process.env.PORT || 5000;
// this
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
