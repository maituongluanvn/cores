import _ from 'underscore';

const commandsList = ['/help'];

export class Commands {
  command: string;
  constructor(command: string) {
    this.command = command;
  }
  public validator(): boolean {
    const isValid = _.contains(commandsList, this.command);
    return isValid;
  }

  //   execute(){

  //   }
}
