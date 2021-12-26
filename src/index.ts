import { User } from './models/User';
// user.set({ name: 'jose' });
// user.set({ age: 12213 });

// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 4000);

// user.save();

// import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//   name: 'nyname',
//   age: 20,
// });

// axios.get('http://localhost:3000/users/1');

// import { User } from "./models/User";

// const user = new User({ name: "myname", age: 20 });

// // user.set({ name: "newname" });

// // console.log(user.get("name"));
// // console.log(user.get("age"));

// user.on("change", () => {
//   console.log("change1");
// });
// user.on("change", () => {
//   console.log("change2");
// });
// user.on("save", () => {
//   console.log("save was trigger");
// });

// user.trigger("change");
// user.trigger("save");

// user.events.on('change', () => {
//   console.log('change!');
// });

// user.events.trigger('change');

const user = new User({ id: 1, name: 'newer name', age: 0 });
// user.on('change', () => {
//   console.log('user was changed');
// });

// console.log(user.get('name'));

user.on('save', () => {
  console.log(user);
});

// user.set({ name: 'test test' });

user.save();
