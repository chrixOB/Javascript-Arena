// Lets work with some json files!!!

let MyEmployees = [
    {
        "name":"Chris",
        "gender": "male",
        "isProgrammer": true,
        "Role": "frontend developer",
        "Work-mode": "remote",
        "age": 25,
        "other roles":null
     },
     {
         "name":"Edwin",
         "gender": "male",
         "isProgrammer": true,
         "Role": "Senior Frontend Engineer",
         "Work-mode": "onsite",
         "age": 29,
         "other roles": ["UI/UX Designer","Data analyst"]
      },
      {
         "name":"Sally",
         "gender": "female",
         "isProgrammer": false,
         "Role": "UX Designer",
         "Work-mode": ["remote","onsite"],
         "age": 28,
         "other roles":["HOD","Network Admin"]
      },{
         "name":"Randy",
         "gender": "male",
         "isProgrammer": true,
         "Role": "backend developer",
         "Work-mode": "remote",
         "age": 31,
         "other roles": null
      }
    ]

    console.log(MyEmployees);