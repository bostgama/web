// import { UserProps } from './User';

export class Attribute<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// const attribute = new Attribute<UserProps>({
//     name: 'jose',
//     id: 2,
//     age:4 });

// const name = attribute.get('id');
// const age = attribute.get('id');
