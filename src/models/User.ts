import { AxiosResponse } from 'axios';
import { Attribute } from './Attribute';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rooUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rooUrl);
  public attributes: Attribute<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attribute<UserProps>(attrs);
  }

  // on(eventName: string, callback: Callback): void {
  //   this.events.on(eventName, callback);
  // }

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
    d;
  }

  get get() {
    return this.attributes.get;
  }
  set(update: UserProps) {
    this.attributes.set(update);
    this.events.trigger('change');
  }
  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
