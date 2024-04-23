interface UserContactInfo {
  name: string;
  email: string;
}

function printContactInfo(info: UserContactInfo): void {
  console.log(info);
  console.log(info.email);
}

const person: UserContactInfo = {
  name: "John Doe",
  email: "JohnDoe@gmail.com",
};

printContactInfo(person);

const person4: UserContactInfo = {
  name: "Humura",
  email: "humura53@gmail.com",
  // password: "humura@123!", // Remove the password property
};

printContactInfo(person4);
