import {baseApiUrl} from "./constants";

interface IBaseAPI {
  setBase(base: string): void
  setRoot(root: string): void

  request<Expected>(req: WRequest): Promise<Res<Expected>>
}


class Api implements IBaseAPI {
  public base: string = baseApiUrl;
  public root: string = '/';

  public static mapperDict = {
    'text': (res: Response) => res.text(),
    'json': (res: Response) => res.json(),
    'blob': (res: Response) => res.blob(),
    'buffer': (res: Response) => res.arrayBuffer(),
  };

  public setBase(base: string): void {
    this.base = base;
  }
  public setRoot(root: string): void {
    this.root = root;
  }

  public async request<Expected>(req: WRequest): Promise<Response> {
    const { method, query, body } = req;

    let fullPath = this.base + this.root + req.path;

    if (query) {
      const paramsArray = Object.entries(query).map(([key, value]) =>
        `${key}=${value}`
      );
      const paramsString = '?' + paramsArray.join('&');
      fullPath += paramsString;
    }

    console.log(fullPath)

    const init: RequestInit = {
      body,
      method: method ?? 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}
    };

    return await fetch(fullPath, init);
  }
}

export const API = new Api();
