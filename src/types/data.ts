export interface IData {
  greeting: IGreeting;
  hostInfo: IHostInfo[];
  // locationInfo: ILocationInfo[];
  mapInfo: IMapInfo;
}

export interface IGreeting {
  mainImg: string;
  title: string;
  date: string;
  message: string;
  host: {
    groom: {
      name: string;
      relation: string;
      parents: Parent;
    };
    bride: {
      name: string;
      relation: string;
      parents: Parent;
    };
  };
  eventDetail: string;
  eventDay: string;
}

export interface BrideAndGroomParents {
  name: string;
  relation: string;
  position: string;
  parents: Parent;
}

type Parent = { relation: string; isDeceased?: boolean; name: string }[];

export interface BrideAndGroom {
  name: string;
  relation: string;
  position: string;
}

export interface IHostInfo {
  host: string;
  accountInfo: { name: string; relation: string; bank: string; account: string }[];
}

export interface IMapInfo {
  address1: string;
  address2: string;
  naverMap: string;
  kakaoMap: string;
  lat: number;
  lon: number;
}

// export interface ILocationInfo {
//   title: string;
//   desc: string;
// }

declare global {
  interface Window {
    Kakao: any;
  }
}
