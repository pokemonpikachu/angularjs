
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    debugger;
    $scope.InsertData = function () {
        var Action = document.getElementById("btnSave").getAttribute("value");
        if (Action == "Submit") {
            $scope.Employe = {};
            $scope.Employe.name = $scope.Empname;
            $scope.Employe.dob = $scope.Empdob;
            $scope.Employe.contact_num = $scope.Empcontact;
            $scope.Employe.stat = $scope.Empstate;
            $scope.Employe.city = $scope.Empcity;
            $scope.Employe.addr1 = $scope.Empaddr1;
            $scope.Employe.addr2 = $scope.Empaddr2;
            $scope.Employe.pincode = $scope.Emppincode;
            $scope.Employe.balance = 0;
            $scope.Employe.statu = "active";
            //$scope.Employe.update_d = DateTime.Now;
            $scope.Employe.update_d = new Date(), 'MM/dd/yy';
            $scope.Employe.rol = "Account Holder";
            $http({
                method: "post",
                url: "http://localhost:51178/Employee/Insert_Employee",
                datatype: "json",
                data: JSON.stringify($scope.Employe)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData();
                $scope.Empname = "";
                $scope.Empdob = "";
                $scope.Empcontact = "";
                $scope.Empstate = "";
                $scope.Empcity = "";
                $scope.Empaddr1 = "";
                $scope.Empaddr2 = "";
                $scope.Emppincode = "";

            })
        } else {
            $scope.Employe = {};
            $scope.Employe.name = $scope.Empname;
            $scope.Employe.dob = $scope.Empdob;
            $scope.Employe.contact_num = $scope.Empcontact;
            $scope.Employe.stat = $scope.Empstate;
            $scope.Employe.city = $scope.Empcity;
            $scope.Employe.addr1 = $scope.Empaddr1;
            $scope.Employe.addr2 = $scope.Empaddr2;
            $scope.Employe.pincode = $scope.Emppincode;
            $scope.Employe.balance = 0;
            $scope.Employe.statu = "active";
            //$scope.Employe.update_d = DateTime.Now;
            $scope.Employe.update_d = new Date(), 'MM/dd/yy';
            $scope.Employe.rol = "Account Holder";
            $scope.Employe.subid = document.getElementById("EmpID_").value;
            $http({
                method: "post",
                url: "http://localhost:51178/Employee/Update_Employee",
                datatype: "json",
                data: JSON.stringify($scope.Employe)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData();
                $scope.Empname = "";
                $scope.Empdob = "";
                $scope.Empcontact = "";
                $scope.Empstate = "";
                $scope.Empcity = "";
                $scope.Empaddr1 = "";
                $scope.Empaddr2 = "";
                $scope.Emppincode = "";
                document.getElementById("btnSave").setAttribute("value", "Submit");
                document.getElementById("btnSave").style.backgroundColor = "cornflowerblue";
                document.getElementById("spn").innerHTML = "Add New Employee";
            })
        }
    }
    $scope.GetAllData = function () {
        $http({
            method: "get",
            url: "http://localhost:51178/Employee/Get_AllEmployee"
        }).then(function (response) {
            $scope.employee = response.data;
        }, function () {
            alert("Error Occur");
        })
    };
    $scope.DeleteEmp = function (Emp) {
        $http({
            method: "post",
            url: "http://localhost:51178/Employee/Delete_Employee",
            datatype: "json",
            data: JSON.stringify(Emp)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData();
        })
    };
    $scope.UpdateEmp = function (Emp) {
        document.getElementById("EmpID_").value = Emp.subid;
        $scope.Empname=Emp.name;
        $scope.Empdob = Emp.dob;
        $scope.Empcontact = Emp.contact_num;
        $scope.Empstate = Emp.stat;
        $scope.Empcity = Emp.city;
        $scope.Empaddr1 = Emp.addr1;
        $scope.Empaddr2 = Emp.addr2;
        $scope.Emppincode = Emp.pincode;
       
        document.getElementById("btnSave").setAttribute("value", "Update");
        document.getElementById("btnSave").style.backgroundColor = "Yellow";
        document.getElementById("spn").innerHTML = "Update Employee Information";
    }
})
