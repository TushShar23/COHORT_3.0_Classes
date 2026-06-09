//Given a list of users filter out users that are legal

interface User {
    First_name: string,
    Last_name: string,
    age: number
}

const UserList: User[] = [
  {
    First_name: "Tushar",
    Last_name: "Sharma",
    age: 22,
  },
  {
    First_name: "Naman",
    Last_name: "Sharma",
    age: 20,
  },
  {
    First_name: "Rohit",
    Last_name: "Beniwal",
    age: 17,
  },
  {
    First_name: "Shubham",
    Last_name: "Garg",
    age: 18,
  },
  {
    First_name: "Shruti",
    Last_name: "Bhatia",
    age: 19,
  },
  {
    First_name: "Divya",
    Last_name: "Arora",
    age: 18,
  },
  {
    First_name: "Simran",
    Last_name: "Chauhan",
    age: 16,
  },
];


let Legal_User: User[] = UserList.filter((item)=>{
    if(item.age > 18){
        return item
    }
})

// Filter is used to filter the items and this case uses the filter method
console.log(Legal_User)