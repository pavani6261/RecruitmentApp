var express = require("express");
var router = express.Router();
var details = require("../db");
// var sql = require("mssql");
var sql = require("msnodesqlv8");
var bodyParser = require('body-parser');
const { json } = require("body-parser");
var app = express();

var jsonParser = bodyParser.json()

// router.post("/", jsonParser, (req, res) => {

//     if(req.body != undefined){
//         const canName = req.body.canName;
//         const canPhone = req.body.canPhone;
//         const canEmail = req.body.canEmail;
//         const canExperience = req.body.canExperience;
//         const message = req.body.message;
//         const Resume = req.body.Resume;
//         const skills =req.body.skills;

//         console.log(skills);

  
//         if(skills.length==1)
//         {
//             const {skillId, compId} = skills[0];

//             function getData() {
//                 // Create connection instance
//                 var conn = new sql.ConnectionPool(details.config);
            
//                 conn
//                   .connect()
//                   // Successfull connection
//                   .then(function () {
//                     // Create request instance, passing in connection instance
//                     var req = new sql.Request(conn);
            
//                     // Call mssql's query method passing in params
//                     req
//                       .query(
//                         `INSERT INTO Candidate values('${canName}',${canPhone},'${canEmail}',${canExperience},'${message}','${Resume}',${compId},${skillId})`
//                       )
//                       .then(function (recordset) {
//                         console.log(recordset);
//                         const{recordset: data} = recordset;
//                         const jData = {data};
//                          res.send(jData);
//                         conn.close();
//                       })
//                       // Handle sql statement execution errors
//                       .catch(function (err) {
//                         console.log(err);
//                         res.send(err);
//                         conn.close();
//                       });
//                   })
//                   // Handle connection errors
//                   .catch(function (err) {
//                     console.log(err);
//                     res.send(err);
//                     conn.close();
//                   });
//               }
            
//               getData();
//         }
//         if(skills.length==2)
//         {
//             const {skillId: sId1, compId: cId1} = skills[0];
//             const {skillId: sId2, compId: cId2} = skills[1];
            
//             function getData() {
//                 // Create connection instance
//                 var conn = new sql.ConnectionPool(details.config);
            
//                 conn
//                   .connect()
//                   // Successfull connection
//                   .then(function () {
//                     // Create request instance, passing in connection instance
//                     var req = new sql.Request(conn);
            
//                     // Call mssql's query method passing in params
//                     req
//                       .query(
//                         `INSERT INTO Candidate values('${canName}',${canPhone},'${canEmail}',${canExperience},'${message}','${Resume}',${cId1},${sId1})`,
//                         `INSERT INTO Candidate values('${canName}',${canPhone},'${canEmail}',${canExperience},'${message}','${Resume}',${cId2},${sId2})`
//                       )
//                       .then(function (recordset) {
//                         console.log(recordset);
//                         const{recordset: data} = recordset;
//                         const jData = {data};
//                          res.send(jData);
//                         conn.close();
//                       })
//                       // Handle sql statement execution errors
//                       .catch(function (err) {
//                         console.log(err);
//                         res.send(err);
//                         conn.close();
//                       });
//                   })
//                   // Handle connection errors
//                   .catch(function (err) {
//                     console.log(err);
//                     res.send(err);
//                     conn.close();
//                   });
//               }
            
//               getData();
//         }
//         if(skills.length==3)
//         {
//             const {skillId: sId1, compId: cId1} = skills[0];
//             const {skillId: sId2, compId2: cId2} = skills[1];
//             const {skillId3: sId3, compId3: cId3} = skills[2];

//             function getData() {
//                 // Create connection instance
//                 var conn = new sql.ConnectionPool(details.config);
            
//                 conn
//                   .connect()
//                   // Successfull connection
//                   .then(function () {
//                     // Create request instance, passing in connection instance
//                     var req = new sql.Request(conn);
            
//                     // Call mssql's query method passing in params
//                     req
//                       .query(
//                         `INSERT INTO Candidate values('${canName}',${canPhone},'${canEmail}',${canExperience},'${message}','${Resume}',${cId1},${sId1})`,
//                         `INSERT INTO Candidate values('${canName}',${canPhone},'${canEmail}',${canExperience},'${message}','${Resume}',${cId2},${sId2})`,
//                         `INSERT INTO Candidate values('${canName}',${canPhone},'${canEmail}',${canExperience},'${message}','${Resume}',${cId3},${sId3})`
//                       )
//                       .then(function (recordset) {
//                         console.log(recordset);
//                         const{recordset: data} = recordset;
//                         const jData = {data};
//                          res.send(jData);
//                         conn.close();
//                       })
//                       // Handle sql statement execution errors
//                       .catch(function (err) {
//                         console.log(err);
//                         res.send(err);
//                         conn.close();
//                       });
//                   })
//                   // Handle connection errors
//                   .catch(function (err) {
//                     console.log(err);
//                     res.send(err);
//                     conn.close();
//                   });
//               }
            
//               getData();

//         }
        
//     }else{
//         res.send("Error");
//     }
//   });


// router.post("/", jsonParser, (req, res)=>{
  
// })

//   router.get("/", (req, res) => {
//     // res.send("Home Page of qaManager");
//     function getData() {
//      // Create connection instance
//      var conn = new sql.ConnectionPool(details.config);
    
//      conn.connect()
//      // Successfull connection
//      .then(function () {
    
//        // Create request instance, passing in connection instance
//        var req = new sql.Request(conn);
    
//        // Call mssql's query method passing in params
//        req.query(`SELECT canName FROM Candidate WHERE canEmail='${canEmail}'`)
//        .then(function (recordset) {
//          console.log(recordset);
//          const {recordset: data} = recordset;
//          res.status(200).json(data);
//          conn.close();
//        })
//        // Handle sql statement execution errors
//        .catch(function (err) {
//          console.log(err);
//          conn.close();
//        })
    
//      })
//      // Handle connection errors
//      .catch(function (err) {
//        console.log(err);
//        conn.close();
//      });
//     }
    
//     getData();
//    });


router.post("/saveData", jsonParser, (req, res)=>{
  if(req.body != undefined){
    const emailId = req.body.emailId;
    const name = req.body.name;
    const phone = req.body.phone;
    const experience = req.body.experience;
    const skills = req.body.skills;
    async function getData()
    {
      await sql.open(details.connectionString, async (err, conn)=>{
      await  conn.query( `INSERT INTO Candidates (canName,canPhone,canExperience,EmailId) values( '${name}','${phone}','${experience}','${emailId}')`,(err)=>{
          if(err){
            // console.log(dat);
            // const result = { };
            res.send(err);
          }
          if(conn){
          conn.query(`SELECT canId from Candidates where canName= '${name}' and canPhone= '${phone}'and canExperience='${experience}' and
          EmailId = '${emailId}' `,(err,data)=> {
            if(data){
              const [{canId}]=data
              console.log(canId);
              for(let item of skills)
              {
                // console.log(item)
                conn.query(`INSERT into Candidateskills (cmpId,skillId,canId) values ('${item.cmpId}','${item.skillId}', '${canId}')`,(err)=>{
                  if(err){
                    // console.log(err);
                    res.send(err);
                  }
                  else{
                    var success = {
                      status: "Success",
                      message: `Profile created successfully for ${canId}`
                    }
                    res.status(200).json(success);
                  }
                })
              }
            }
          } );
        }
          // res.send("success");
          if(err){
            console.log(err);
            res.send(err);
          }
        })
        if(err){
          console.log(err);
          res.send(err);
        }
      })
    }
    getData();
  }
})


router.post("/candidateSkill",jsonParser, (req, res)=>{
  var result=[];
  // var query = "SELECT * FROM Complexity";
const emailId=req.body.emailId;
  async function getCandidateSkillsandAssessment()
  {
    await sql.open(details.connectionString, async (err, conn)=>{
    await  conn.query(`select * from Candidates  where EmailId='${emailId}'`,(err, data)=>{
        if(data.length!=0){
          var canId=data[0].canId;
          sql.open(details.connectionString, async (err, conn)=>{
            await  conn.query(`select * from CandidateSkills  where canId=${canId}`,(err, val)=>{
              if(val){
                data[0].skills=val;
                  // const record={data};
                  // res.status(200).json(record);
              }
              if(err){
                res.send(err);
              }
            })
            })
            sql.open(details.connectionString, async (err, conn)=>{
              await  conn.query(`select * from Assessment where canId=${canId}`,(err,details )=>{
                if(details){
                  var flag=0;
                  for(let i=0;i<details.length;i++){
                    if(details[i].assessmentstatus ==='Open'){
                      flag=1;
                    }
                  }
                  if(flag==0){
                    data[0].assessmentsStatus='closed';
                  }
                  else{
                    data[0].assessmentsStatus='notClosed';
                  }
                  data[0].assessments=details;
                    setTimeout(()=>{
                      res.status(200).json({data});
                      conn.close();
                    },2000)
                }
                if(err){
                  res.send(err);
                }
              })
              })
        }
      else{
        const result={
            "status":"not found",
            "message":"no record found"
          }
          res.send(result);
      }
        if(err){
          console.log(err);
          res.send(err);
        }
      })
      if(err){
        console.log(err);
        res.send(err);
      }
    })
  }
  getCandidateSkillsandAssessment();
});

router.post("/filterEmail", jsonParser, (req, res) => {
  if (req.body != undefined) {
    const emailId = req.body.emailId;
    async function getProfileEmail() {
      const emailquery=`select * from Candidates where EmailId='${emailId}'`
     await sql.query(details.connectionString,emailquery, (data,err)=>{
        if(data){
          const candidate={data};
          res.status(200).json(candidate);
        }
        if(err){
          res.send(err);
        }
     })
    }
    getProfileEmail();
  }
});

router.post("/updateCandidateStatus", jsonParser, (req, res) => {
  const data = req.body.data; //array structure
  const skills = data[0].skills;
  const canId = data[0].canId;
  console.log(canId)
  async function getData() {
    await sql.open(details.connectionString, async (err, conn) => {
      await conn.query(`update Candidates set canExperience=${data[0].canExperience},Candidatestatus='${data[0].Candidatestatus}'`, async (err, data) => {
        if (data) {
          console.log(data);
          for (let i = 0; i < skills.length; i++) {
            await sql.open(details.connectionString, async (err, conn) => {
              await conn.query(`insert into CandidateSkills(cmpId,skillId,canId) values(${skills[i].cmpId},${skills[i].skillId},
                ${canId})`, (err, value) => {
                if (value) {
                  const result = {
                    "status": "success",
                    "Message": "candidate data updated successfully "
                  };
                  console.log(result);
                  res.status(200).json(result);
                }
                if (err) {
                  res.send(err);
                }
              })
              if (err) {
                res.send(err);
              }
            })
          }
        }
        if (err) {
          console.log(err);
          res.send(err);
        }
      })
      if (err) {
        console.log(err);
        res.send(err);
      }
    })
  }
  getData();
});
  module.exports = router;
