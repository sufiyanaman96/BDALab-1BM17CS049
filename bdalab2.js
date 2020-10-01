use Company
db
db.createCollection("Employee")
db.createCollection("Department")
db.Employee.insert({_id:1,EmpName:"Sufiyan",Age:"30",Experience:"5",Position:"Developer",Package:"10lpa"})
db.Employee.insert({_id:2,EmpName:"Aman",Age:"20",Experience:"1",Position:"AssociateDeveloper",Package:"8lpa"})
db.Employee.insert({_id:3,EmpName:"Laxman",Age:"32",Experience:"8",Position:"SeniorDeveloper",Package:"14lpa"})
db.Employee.update({_id:4,EmpName:"Shrai",Age:"25",Experience:"3",Position:"Developer"},{$set:{Package:"7.6lpa"}},{upsert:true})
db.Employee.update({_id:5,EmpName:"Shrai",Age:"25",Experience:"3",Position:"Developer"},{$set:{Package:"7.6lpa"}},{upsert:false})
db.Employee.save({EmpName:"Jayanth",Age:"25",Experience:"2",Position:"Intern"})
db.Department.insert({_id:1,DepNo:"1001",DepName:"Developing",NoofEmps:"50",Head:"Nakul",Revenue:"100lpa"})
db.Department.insert({_id:2,DepNo:"1011",DepName:"Testing",NoofEmps:"30",Head:"Mehta",Revenue:"70lpa"})
db.Department.insert({_id:3,DepNo:"101",DepName:"HR",NoofEmps:"10",Head:"Priyanka",Revenue:"50lpa"})
db.Department.update({_id:4,DepNo:"1005",DepName:"Manufacturing",NoofEmps:"145",Head:"Shetty"},{$set:{Revenue:"950lpa"}},{upsert:true})
db.Department.update({_id:5,DepNo:"1005",DepName:"Manufacturing",NoofEmps:"145",Head:"Shetty"},{$set:{Revenue:"950lpa"}},{upsert:false})
db.Department.save({DepNo:"11",DepName:"ExpImp",NoofEmps:"95",Head:"Avantika"})
db.Employee.update({_id:3},{$set:{YearofJoin:"2017"}})
db.Employee.update({_id:3},{$unset:{YearofJoin:"2017"}})
db.Employee.find({EmpName:/^A/}).pretty()
db.Employee.find({Age:{$gt:'30'}}).pretty()
db.Department.find({DepNo:{$gte:'1001',$lte:'1005'}},{DepNo:1,Head:1})
db.Employee.find()
db.Department.find().pretty()