export class JSONRecord {
  public title: any;
  public sources: any;
  public inPutData: InputData = new InputData;
  public outPutData: OutputData = new OutputData;
  public data: Data[] = [];
}
export class Data{
  public subtitle: any;
  public body: any;
  public images: any;
  public videos: any;
  public code: Code[] = [];
}
export class InputData{
  public images: string[] = [];
}

export class OutputData{
  public images: string[] = [];
}

export class Code{
  public title: any;
  public code: any;
}
