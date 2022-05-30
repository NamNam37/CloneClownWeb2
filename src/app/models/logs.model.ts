import { Users } from './users.model';
import { Configs } from './configs.model';

export class Logs {
  public id: number = 0;
  public userID: number = 0;
  public configID: number = 0;
  public status: boolean = false;
  public details: number = 0;
  public date: Date = new Date();
  public alreadySent: boolean = false;
  public user: Users = new Users();
  public config: Configs = new Configs();
}