// interface IPet {
//   name: string,
//   lastTimeArrived?: Date
// }

// interface IContact {
//   name: string;
//   phone?: string; // optional property
//   email: string;
//   pet?: IPet
// }

// interface IContactAdapter {
//   getContact: () => IContact[]
// }

// const myContact: IContact = {
//   name: "Tung",
//   // phone: "098775432",
//   email: "asdasdsad",
//   pet: {
//     name: "Dog"
//   }
// }

// function getPetName(user: IContact): IPet["name"] {
//   return user.pet.name
// } 

// function getLastTimeArrived(user: IContact): string {
//   // optional chaining
//   return user.pet.lastTimeArrived?.toISOString() || "No data"
// }

// console.log(getLastTimeArrived(myContact))

// const arr = [1, 2, 43, 5]

// console.log(arr?.[1] ? arr[1] : 'No data')

// console.log(0 ?? 1)


// interface IButton {
//   label: string;
//   onClick: () => void
// }

// interface IIconButton extends IButton {
//   icon: string
// }

// const iconButton: IIconButton = {
//   label: "Submit",
//   icon: 'Loading',
//   onClick: function() {
//     console.log(this.label, this.icon)
//   },
// }



// iconButton.onClick();

// class ContactApp implements IContactAdapter {
//   constructor() {}

//   getContact() {
//     const contact: IContact[] = [
//       { name: 'A', email: 'a' },
//       { name: 'B', email: 'b' },
//       { name: 'C', email: 'c' },
//     ]

//     return contact
//   };
// }

// // 1 constructor -> 2. render (chưa qua xử lý gì) -> 3. các xử lý khác -> 3. re-render
// class MyContactApp {
//   constructor(readonly params: ContactApp) { }
  
//   render() {
//     const contract: IContact[] = this.params.getContact();
//     console.table(contract)
//   }
// }

// const appInstance = new ContactApp();
// const app = new MyContactApp(appInstance);
// app.render();

// merge interface
interface IContact {
  name: string;
  phone: string;
}

// interface IContactV1 extends IContact {
//   email: string;
//   age: number;
// }

// interface IContactV2 extends IContact {
//   fax: string;
// }


// function notifyToUser(user: IContactV1 | IContactV2) {
//   if ('email' in user) {
//     user = user as IContactV1
//   }
// }

class ContactV1 implements IContact {
  name: string;
  phone: string;
  email: string;

  constructor (name: string, phone: string, email: string) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

class ContactV2 implements IContact {
  name: string;
  phone: string;
  fax: string;

  constructor (name: string, phone: string, fax: string) {
    this.name = name;
    this.phone = phone;
    this.fax = fax;
  }
}

// more strict
function notifyToUser(user: ContactV1 | ContactV2) {
  if (user instanceof ContactV1) {
    user = user as ContactV1
  } else {

  }
}

