/** Кастомный объект запроса Well Manager.
 * + `method?`: {@link ReqMethod}
 * + `path`: {@link ReqPath}
 * + `query?`: {@link ReqQuery}
 * + `body?`: {@link ReqBody}
 * */
interface WRequest {
  /** HTTP метод запроса. */
  method?: ReqMethod;
  /** Относительный путь. */
  path: ReqPath;
  /** Параметры запроса. */
  query?: ReqQuery | null;
  /** Тело запроса. */
  body?: ReqBody | null;
}

/** Метод HTTP запроса. */
type ReqMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/** Относительный путь HTTP запроса. */
type ReqPath = string;

/** Параметры поиска HTTP запроса.
 * @example
 * { sessionID: "...", formID: "..." }
 * */
type ReqQuery = Record<string, string>;

/** Тело HTTP запроса. */
type ReqBody = string | ArrayBuffer;

/** Кастомный ответ. */
type Res<Expected> = Response<Expected>;

