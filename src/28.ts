type GrosseryCart = {
  fruits?: { name: string; quantity: number }[];
  vegetables?: { name: string; quantity: number }[];
};

const cart: GrosseryCart = {};

cart.fruits!.push({name:"mango", quantity:20});
