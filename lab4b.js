array
use arr
db.createCollection("Country")
db.Country.insert({_id:1,Cities:["Bangalore","Chennai"]})
db.Country.insert({_id:2,Cities:["Hyderabad","Mumbai","Delhi"]})
db.Country.insert({_id:3,Cities:["rajamundry","jamshedpur","Jodhpur"]})
db.Country.find()
db.Country.update({_id:1},{$push:{population:{Bangalore:30,Chennai:45}}})
db.Country.find()
db.Country.update({_id:3},{$pop:{Cities:1}})
db.Country.find()
db.Country.update({Cities:"Hyderabad"},{$pull:{Cities:'Hyderabad'}})
db.Country.find()
db.Country.update({_id:1},{$set:{'Cities.2':'Srinagar'}})
db.Country.update({_id:2},{$addToSet:{Cities:"Trichi"}})
db.Country.find()