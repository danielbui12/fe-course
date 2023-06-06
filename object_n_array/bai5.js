//Sắp xếp các nhân viên có cùng phòng ban vào với nhau xong đó in ra (phòng ban là division)
//Kêt quả mong muốn :
/* 
{
  id : 1,
  name : "Divsion 1",
  employee: [
    {
      name: "Nguyễn Văn A",
      posision: "developer",
      division: 1,
    },
    {
      name: "Nguyễn Văn C",
      posision: "tester",
      division: 1,
    }
  ]
}
*/
var employees = [
  {
    name: "Nguyễn Văn A",
    posision: "developer",
    division: 1,
  },
  {
    name: "Nguyễn Văn B",
    posision: "comtor",
    division: 2,
  },
  {
    name: "Nguyễn Văn C",
    posision: "tester",
    division: 1,
  },
  {
    name: "Nguyễn Văn D",
    posision: "tester",
    division: 3,
  },
];

var divisions = [
  {
    id: 1,
    name: "Division 1"
  },
  {
    id: 2,
    name: "Division 2"
  },
  {
    id: 3,
    name: "Division 3"
  },
];


/**
 * Tạo 1 vòng loop trong division
 * Từ id của division => lọc ra employees có `employees.division` = `division.id`
 * Gán property `employee` bằng kết quả vừa lọc ở trên
 */

for (var _division of divisions) {
  var employee = employees.filter(function (_employee) {
    return _employee.division === _division.id
  })

  _division.employee = employee
}

console.log(JSON.stringify(divisions));





