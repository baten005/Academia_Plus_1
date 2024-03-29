const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require('fs');
const upload=require("../multer/multer")
const { run } = require("../db/db");
router.get("/studentsdashboard", function (req, res) {
   try {
       if (
         req.session.user.isAuthenticated ||
         req.session.user.account_type == "student"
       ) {
         res.render("students/studentsdashboard", {
    logged_in: req.session.user.isAuthenticated,
  });
         return;
       }
     } catch {
       res.redirect("log_in");
       return;
     }
   
  console.log(req.session.user);
  res.render("students/studentsdashboard", {
    logged_in: req.session.user.isAuthenticated,
  });
});
router.get("/student_management", function (req, res) {
   try {
        if (
          req.session.user.isAuthenticated ||
          req.session.user.account_type == "student"
        ) {
          res.redirect("log_in");
          return;
        }
      } catch {
        res.redirect("log_in");
        return;
      }
  
  console.log(req.session.user);
  res.render("admin_control/student_management", {
    logged_in: req.session.user.isAuthenticated,
  });
});
router.get("/loginadtc", function (req, res) {
  try {
    if (req.session.user.isAuthenticated) {
      res.render("loginadtc", { logged_in: req.session.user.isAuthenticated });
    } else {
      res.render("loginadtc", { logged_in: false });
    }
  } catch {
    res.render("loginadtc", { logged_in: false });
  }
});
router.get("/classroom", function (req, res) {
  try {
        if (
          req.session.user.isAuthenticated ||
          req.session.user.account_type == "student"
        ) {
          res.render("students/classroom", {
            logged_in: req.session.user.isAuthenticated,
          });
          return;
        }
      } catch {
        res.redirect("log_in");
        return;
      }
    
  console.log(req.session.user);
  res.render("students/classroom", {
    logged_in: req.session.user.isAuthenticated,
  });
});

router.get("/chatbot", function (req, res) {
   try {
        if (
          req.session.user.isAuthenticated ||
          req.session.user.account_type == "student"
        ) {
          res.render("students/chatbot", {
            logged_in: req.session.user.isAuthenticated,
          });
          return;
        }
      } catch {
        res.redirect("log_in");
        return;
      }
    
  console.log(req.session.user);
  res.render("students/chatbot", {
    logged_in: req.session.user.isAuthenticated,
  });
});
router.get("/libraryStudent", async function (req, res) {
   try {
        if (
          req.session.user.isAuthenticated == false &&
          (req.session.user.account_type != "student" ||
          req.session.user.account_type != "teacher")
        ) {
          res.redirect("log_in");
          return;
        }
      } 
      catch(e) { console.log(e)
        res.redirect("log_in");
        return;
      }
    
      const data= await run(`select * from BOOKS`);
      console.log(data);
      console.log(req.session.user);
      res.render("students/libraryStudent", {
        logged_in: req.session.user.isAuthenticated,books_info:data.data
      });
    });
    router.get("/resourceclass1",async function (req, res) {
      const userId = req.session.user.id; 

      const userClass = await run(`select CLASS from STUDENTS where id= '${userId}'`);
      console.log(userClass.data)
      const userClass1 = userClass.data[0];
      const gline = await run(
        `SELECT * FROM "ACADEMIA_PLUS_NEW"."RESOURCES" WHERE CLASS ='${userClass1[0]}'`
      );
      
  console.log(userClass1);
      console.log(gline.data);
  
        if (gline.success) {
          try {
            res.render("students/resourceclass1", {
              userClass: userClass,
              gline: gline.data,
              db_stat1: gline.success,
              logged_in: req.session.user.isAuthenticated,
            });
          } catch {
            res.render("students/resourceclass1", {
              userClass: userClass,
              gline: gline.data,
              db_stat1: gline.success,
              logged_in: false,
            });
          }
        } else {
          try {
            res.render("students/resourceclass1", {
              userClass: userClass,
              gline: gline.data,
              db_stat1: gline.success,
              logged_in: req.session.user.isAuthenticated,
            });
          } catch {
            res.render("students/resourceclass1", {
              userClass: userClass,
              gline: gline.data,
              db_stat1: gline.success,
              logged_in: false,
            });
          }
        }
     });
     router.get("/registration", function (req, res) {
      try {
            if (
              req.session.user.isAuthenticated ||
              req.session.user.account_type == "student"
            ) {
              res.redirect("log_in");
              return;
            }
          } catch {
            res.redirect("log_in");
            return;
          }
        
      console.log(req.session.user);
      res.render("students/registration", {
        logged_in: req.session.user.isAuthenticated,
      });
    });
    router.get("/overviewclass", async function (req, res) {
      const userId = req.session.user.id; 

    const userClass = await run(`select CLASS from STUDENTS where id= '${userId}'`);

    const gline = await run(
      `SELECT OVERVIEW FROM "ACADEMIA_PLUS_NEW"."COURSEOVERVIEW" WHERE CLASS = '${userClass.data[0]}'`
    );
    const userClass1 = userClass.data[0];
console.log(userClass1);
    console.log(gline.data);

      if (gline.success) {
        try {
          res.render("students/overviewclass", {
            userClass: userClass,
            gline: gline.data,
            db_stat1: gline.success,
            logged_in: req.session.user.isAuthenticated,
          });
        } catch {
          res.render("students/overviewclass", {
            userClass: userClass,
            gline: gline.data,
            db_stat1: gline.success,
            logged_in: false,
          });
        }
      } else {
        try {
          res.render("students/overviewclass", {
            userClass: userClass,
            gline: gline.data,
            db_stat1: gline.success,
            logged_in: req.session.user.isAuthenticated,
          });
        } catch {
          res.render("students/overviewclass", {
            userClass: userClass,
            gline: gline.data,
            db_stat1: gline.success,
            logged_in: false,
          });
        }
      }
    });

    router.get("/assignmentclass", async function (req, res) {
      const det= await run(`select TURNIN,ASSIGNMENT_ID from SUB_ASSIGNMENTS where ID=:s_id order by ASSIGNMENT_ID ASC`,{
        s_id:req.session.user.id,
      })
      console.log(det.data)
      const userId = req.session.user.id; 

    const userClass = await run(`select CLASS from STUDENTS where id= '${userId}'`);
      const gline = await run(
        `SELECT * FROM "ACADEMIA_PLUS_NEW"."ASSIGNMENTS" WHERE CLASS = 'class1'`
      );
      
       try{
        if(req.session.user.isAuthenticated==false||req.session.user.account_type!='student'){
    
          res.redirect('log_in')
          return
        }
    
       }catch{
        res.redirect('log_in')
        return
       }
          res.render("students/assignmentclass", {
            gline: gline.data,
            db_stat2: gline.success,
            logged_in: req.session.user.isAuthenticated,
            det:det.data
          });
        
    });
    router.post("/download_books", async function(req, res) {
      try {
          
          const bookName = req.body.book_name;
          
          const filePath = path.join(__dirname, '..', 'uploadimage', bookName);

          console.log(filePath)
  
          if (fs.existsSync(filePath)) {
  
              res.setHeader('Content-disposition', `attachment; filename=${bookName}`);
              res.setHeader('Content-type', 'application/pdf'); 
  
              const fileStream = fs.createReadStream(filePath);

              fileStream.pipe(res);
          } else {
              res.status(404).send('File not found');
          }
      } catch (error) {
          console.error('Error downloading book:', error);
          res.status(500).send('Internal Server Error');
      }
  });
    router.post("/submit_assignment", upload.single("fileUpload"), async function (req, res) {
      const data = req.body;
      const image_name = req.file.filename;
      console.log(image_name)
    const student_id =req.session.user.id;
    console.log(student_id)
    const class_stu=await run(`select CLASS from STUDENTS where ID=:student`,{student:student_id})
      console.log(data,image_name,class_stu.data[0][0])
const det =await run(`insert into SUB_ASSIGNMENTS (ID,UPLOADED_FILE,TURNIN,CLASS,ASSIGNMENT_ID) values(
  :student_id, :file_name, :tin, :class, :aid  
)`, {
  student_id:student_id,
  file_name:image_name,
  tin:"0",
  class:class_stu.data[0][0],
  aid:data.assignmentId
})
    });
router.post("/turnIn",async function(req,res){
const det=req.body
console.log(det)
const response = await run(`UPDATE SUB_ASSIGNMENTS SET TURNIN = :1 WHERE ASSIGNMENT_ID = :2 AND ID = :3`, {
  1: det.turnIn,
  2: det.assignmentId,
  3: req.session.user.id,
});
})
router.get("/calendar", async function (req, res) {
  const calendar = await run(`select ID,CALENDAR_FILE,CALENDAR_TITTLE,PUBLICATION_DATE from CALENDAR`);
  console.log(calendar);

  res.render("students/calendar", { calendar_info: calendar.data });
});
router.post("/download_calendar", async function(req, res) {
  try {
      
      const bookName = req.body.notice_file_name;
      
      const filePath = path.join(__dirname, '..', 'uploadimage', bookName);

      console.log(filePath)

      if (fs.existsSync(filePath)) {

          res.setHeader('Content-disposition', `attachment; filename=${bookName}`);
          res.setHeader('Content-type', 'application/pdf'); 

          const fileStream = fs.createReadStream(filePath);

          fileStream.pipe(res);
      } else {
          res.status(404).send('File not found');
      }
  } catch (error) {
      console.error('Error downloading book:', error);
      res.status(500).send('Internal Server Error');
  }
});

    module.exports = router;
