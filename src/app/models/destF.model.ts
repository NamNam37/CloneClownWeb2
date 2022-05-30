import { Configs } from './configs.model';

export class DestF {
  public id: number = 0;
  public configID: number = 0;
  public path: string = "";
  public type: string = "";
  public login: string = "";
  public password: string = "";
  public hostname: string = "";
  public port: number = 21;
  public config: Configs = new Configs();
}