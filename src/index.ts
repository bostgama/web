// import { Collection } from './models/Collection';
// import { User, UserProps } from './models/User';

import { User } from './models/User';
import { UserEdit } from './Views/UserEdit';
import { UserForm } from './Views/UserForm';

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

const user = User.buildUser({ name: 'Name', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
