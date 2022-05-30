import { Configs } from './configs.model';

export class SourceF {
  public id: number = 0;
  public configID: number = 0;
  public path: string = "";
  public config: Configs = new Configs();
}