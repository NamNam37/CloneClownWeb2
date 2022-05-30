import { DestF } from './destF.model';
import { Users } from './users.model';
import { Logs } from './logs.model';
import { SourceF } from './sourceF.model';

export class Configs {
  public id: number = 0;
  public configName: string = "";
  public last_used: Date = new Date();
  public schedule: string = "";
  public type: string = "";
  public backupCount: number = 0;
  public packageCount: number = 0;
  public isZIP: boolean = false;
  public dests: DestF[] = [];
  public users: Users[] = [];
  public logs: Logs[] = [];
  public sources: SourceF[] = [];
}