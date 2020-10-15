use Database
db
db.createCollection("Asgn2")
db.Asgn2.aggregate([
    { $group : { _id: null, sum: {$sum:"$children"} } }
])
db.Asgn2.aggregate([
    { $group : { _id: "Avg of Age", avg: {$avg:"$age"} } }
])