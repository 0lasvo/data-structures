export class JSONRecord {
  public title: string = '';
  public sources: string = '';
  public inPutData: InputData = new InputData();
  public outPutData: OutputData = new OutputData();
  public data: Data[] = [];
}

export class Data {
  public subtitle: string = '';
  public body: string = '';
  public images: string[] = [];
  public code: Code[] = [];
}

export class InputData {
  public images: string[] = [];
}

export class OutputData {
  public images: string[] = [];
}

export class Code {
  public title: string = '';
  public code: string = '';
}
