using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace AngularCRUD.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee  
        public ActionResult Index()
        {
           
            return View();
        }
        public ActionResult signin()
        {
            return View();
        }
        [HttpPost]
        public ActionResult signin(login l)
        {
            DB09TMS170_1718Entities Obj2 = new DB09TMS170_1718Entities();
            var v = Obj2.logins.Where(x => x.username == l.username &&  x.pwd == l.pwd).FirstOrDefault();
            if (v != null)
            {
                return RedirectToAction("Index");

            }
            return View("login");

        }


        /// <summary>  
        ///   
        /// Get All Employee  
        /// </summary>  
        /// <returns></returns>  
        public JsonResult Get_AllEmployee()
        {
            using (DB09TMS170_1718Entities Obj = new DB09TMS170_1718Entities())
            {
                List<cust_reg> Emp = Obj.cust_reg.ToList();
                return Json(Emp, JsonRequestBehavior.AllowGet);
            }
        }
        /// <summary>  
        /// Get Employee With Id  
        /// </summary>  
        /// <param name="Id"></param>  
        /// <returns></returns>  
        public JsonResult Get_EmployeeById(string Id)
        {
            using (DB09TMS170_1718Entities Obj = new DB09TMS170_1718Entities())
            {
                int EmpId = int.Parse(Id);
                return Json(Obj.cust_reg.Find(EmpId), JsonRequestBehavior.AllowGet);
            }
        }
        /// <summary>  
        /// Insert New Employee  
        /// </summary>  
        /// <param name="Employe"></param>  
        /// <returns></returns>  
        public string Insert_Employee(cust_reg Employe)
        {
            if (Employe != null)
            {
                using (DB09TMS170_1718Entities Obj = new DB09TMS170_1718Entities())
                {
                    Obj.cust_reg.Add(Employe);
                    Obj.SaveChanges();
                    return "Employee Added Successfully";
                }
            }
            else
            {
                return "Employee Not Inserted! Try Again";
            }
        }
        /// <summary>  
        /// Delete Employee Information  
        /// </summary>  
        /// <param name="Emp"></param>  
        /// <returns></returns>  
        public string Delete_Employee(cust_reg Emp)
        {
            if (Emp != null)
            {
                using (DB09TMS170_1718Entities Obj = new DB09TMS170_1718Entities())
                {
                    var Emp_ = Obj.Entry(Emp);
                    if (Emp_.State == System.Data.Entity.EntityState.Detached)
                    {
                        Obj.cust_reg.Attach(Emp);
                        Obj.cust_reg.Remove(Emp);
                    }
                    Obj.SaveChanges();
                    return "Employee Deleted Successfully";
                }
            }
            else
            {
                return "Employee Not Deleted! Try Again";
            }
        }
        /// <summary>  
        /// Update Employee Information  
        /// </summary>  
        /// <param name="Emp"></param>  
        /// <returns></returns>  
        public string Update_Employee(cust_reg Emp)
        {
            if (Emp != null)
            {
                using (DB09TMS170_1718Entities Obj = new DB09TMS170_1718Entities())
                {
                    var Emp_ = Obj.Entry(Emp);
                    cust_reg EmpObj = Obj.cust_reg.Where(x => x.subid == Emp.subid).FirstOrDefault();
                    EmpObj.name = Emp.name;
                    EmpObj.dob = Emp.dob;
                    EmpObj.contact_num = Emp.contact_num;
                    EmpObj.stat = Emp.stat;
                    EmpObj.city = Emp.city;
                    EmpObj.addr1 = Emp.addr1;
                    EmpObj.addr2 = Emp.addr2;
                    EmpObj.pincode = Emp.pincode;
                    //EmpObj.acc_id = Emp.acc_id;
                    //EmpObj.balance = Emp.balance;
                    //EmpObj.statu = Emp.statu;
                    //EmpObj.update_d = Emp.update_d;
                    //EmpObj.pwd = Emp.pwd;
                    //EmpObj.rol = Emp.rol;

                    Obj.SaveChanges();
                    return "Employee Updated Successfully";
                }
            }
            else
            {
                return "Employee Not Updated! Try Again";
            }
        }
    }
}
