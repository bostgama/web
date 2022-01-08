import { AxiosResponse } from 'axios';
import { Attribute } from './Attribute';
import { Eventing } from './Eventing';
import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rooUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: any): User {
    return new User(
      new Attribute<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rooUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rooUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
