const express = require("express");
const router = express.Router();
const path = require("path");

const { run } = require("../db/db");
const uploadFolder = "uploadimage";
router.get("/studentsdashboard", function (req, res) {
  /* try {
       if (
         req.session.user.isAuthenticated ||
         req.session.user.account_type == "Applicant"
       ) {
         res.redirect("log_in");
         return;
       }
     } catch {
       res.redirect("log_in");
       return;
     }
   */
  console.log(req.session.user);
  res.render("students/studentdashboard", {
    logged_in: req.session.user.isAuthenticated,
  });
});
router.get("/student_management", function (req, res) {
  /* try {
        if (
          req.session.user.isAuthenticated ||
          req.session.user.account_type == "Applicant"
        ) {
          res.redirect("log_in");
          return;
        }
      } catch {
        res.redirect("log_in");
        return;
      }
    */
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
  /* try {
        if (
          req.session.user.isAuthenticated ||
          req.session.user.account_type == "Applicant"
        ) {
          res.redirect("log_in");
          return;
        }
      } catch {
        res.redirect("log_in");
        return;
      }
    */
  console.log(req.session.user);
  res.render("students/classroom", {
    logged_in: req.session.user.isAuthenticated,
  });
});

router.get("/chatbot", function (req, res) {
  /* try {
        if (
          req.session.user.isAuthenticated ||
          req.session.user.account_type == "Applicant"
        ) {
          res.redirect("log_in");
          return;
        }
      } catch {
        res.redirect("log_in");
        return;
      }
    */
  console.log(req.session.user);
  res.render("students/chatbot", {
    logged_in: req.session.user.isAuthenticated,
  });
});
router.get("/libraryStudent", async function (req, res) {
  /* try {
        if (
          req.session.user.isAuthenticated ||
          req.session.user.account_type == "Applicant"
        ) {
          res.redirect("log_in");
          return;
        }
      } catch {
        res.redirect("log_in");
        return;
      }
    */
      const data= await run(`select * from BOOKS`);
      console.log(data);
      console.log(req.session.user);
      res.render("students/libraryStudent", {
        logged_in: req.session.user.isAuthenticated,books_info:data.data
      });
    });
    router.get("/resourceclass1",async function (req, res) {
      /* try {
         if (
           req.session.user.isAuthenticated ||
           req.session.user.account_type == "Applicant"
         ) {
           res.redirect("log_in");
           return;
         }
       } catch {
         res.redirect("log_in");
         return;
       }
     */
       const data= await run(`select * from RESOURCES`);
       console.log(data);
       console.log(req.session.user);
       res.render("students/resourceclass1", {
         logged_in: req.session.user.isAuthenticated,resources_info:data.data
       });
     });
     router.get("/registration", function (req, res) {
      /* try {
            if (
              req.session.user.isAuthenticated ||
              req.session.user.account_type == "Applicant"
            ) {
              res.redirect("log_in");
              return;
            }
          } catch {
            res.redirect("log_in");
            return;
          }
        */
      console.log(req.session.user);
      res.render("students/registration", {
        logged_in: req.session.user.isAuthenticated,
      });
    });
    module.exports = router;
