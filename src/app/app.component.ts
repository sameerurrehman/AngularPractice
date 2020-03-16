import { from } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from './newservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewserviceService]
})
export class AppComponent {
  title = 'myangapp';
  empfirstname:string='Sameer';
  emplastname:string='Rehman';

  text:string;

//two way binding
Data:string='sameer';
data1:string='Safi';
// two way end

//pipes
employees:any[]=[
  {
    code:'emp001',name:'Sameer',dob:'6/8/1997'
  },
  {
    code:'emp002',name:'Safi',dob:'24/10/1997'
  },
  {
    code:'emp003',name:'Hussam',dob:'9/5/1995'
  },
  {
    code:'emp004',name:'Ali',dob:'16/3/1999'
  },
  {
    code:'emp005',name:'Areeb',dob:'12/4/1994'
  }
]

//parameterized pipe
dob = new Date ();
year = new Date ('1997-08-06');
salary:number=20000;

name:string='sameer';
position:string='web developer';
work:string='web developer';
mynumber:number=0.1246;

  isvalid: boolean = true;
  changevalue(valid) {
    this.isvalid = valid;
  }
  iswrite: boolean = true;
  changewrite(write) {
    this.iswrite = write;
  }

  // checkvalue: boolean = true;
  // check(check) {
  //   this.checkvalue = check;
  // }

   public choose='';                     
  setvalue(drp)
  {
    this.choose=drp.target.value;
  }
  // choose:any='';
// setvalue(drp:any)
// {
//   this.choose=drp.target.value;
// }

Students:any[]=[
  {
    'name' : 'sameer' 
  },
  {
    'name' : 'safi' 
  },
  {
    'name' : 'fasail' 
  },
  {
    'name' : 'ali' 
  },
  {
    'name' : 'moiz' 
  },
  {
    'name' : 'ahad' 
  }
  
];
//constructor k andar private k bad use karna hai(private _newservice:NewserviceService
employee:any[];     
constructor(private router:Router){
  this.employee=[
    {
      employeeid:1,
      name:'sameer',
      gender:'male',
      age:23,
      department:'SQA'
    },
    {
      employeeid:2,
      name:'safi',
      gender:'male',
      age:22,
      department:'Developer'
    },
    {
      employeeid:3,
      name:'rafay',
      gender:'male',
      age:23,
      department:'degsiner'
    },
    {
      employeeid:4,
      name:'saad',
      gender:'male',
      age:24,
      department:'CMS developer'
    }
  ];
 }
// ngOnInit(){
//   this.text=this._newservice.display();
// }
//daynamic router
student(){
  this.router.navigate(['/student']);
}
//function getmoreemployee
getmoreemployee():void{
  this.employee=[
    {
      employeeid:1,
      name:'sameer',
      gender:'male',
      age:23,
      department:'SQA'
    },
    {
      employeeid:2,
      name:'safi',
      gender:'male',
      age:22,
      department:'Developer'
    },
    {
      employeeid:3,
      name:'rafay',
      gender:'male',
      age:23,
      department:'degsiner'
    },
    {
      employeeid:4,
      name:'saad',
      gender:'male',
      age:24,
      department:'CMS developer'
    },
    {
      employeeid:5,
      name:'faisal',
      gender:'male',
      age:24,
      department:'Full stuck'
    }
  ];
}
trackbyemployeeid(index:number, employee:any):string{
  return employee.employeeid;
}

Countrydetails:any[]=[
  {
    'country': 'pakistan',
    'people':[
      {
        "name":"sameer"
      },
      {
        "name":"Ali"
      },
      {
        "name":"safi"
      }
    ]
  },
  {
    'country': 'china',
    'people' :[
      {
        "name":"Maaz"
      },
      {
        "name":"faisal"
      },
      {
        "name":"saad"
      }
    ]
  },
];

people:any[]=[
  {
    "name":"sameer",
    "country":"pakistan"
  },
  {
    "name":"safi",
    "country":"dubai"
  },
  {
    "name":"owais",
    "country":"canada"
  },
  {
    "name":"laraib",
    "country":"iran"
  },
  {
    "name":"Maaz",
    "country":"pakistan"
  },
];
getcolor(country){
  switch(country){
    case "pakistan":
    return "green";
    case "dubai":
      return "blue";
    case "canada":
      return "red";
    case "iran":
      return "gray";
  }
}

// dynamic attribute
cols:number=3;
bdr:number=5;

}

// event binding
// showdata(){
//   console.log('welcome');
// }









