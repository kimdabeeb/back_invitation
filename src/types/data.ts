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
//   title1: string;
//   desc1: string;
//   title2: string;
//   desc2: string; 
//   desc21: string; 
//   desc22: string; 
//   desc23: string; 
//   desc24: string; 
//   title3: string;
//   desc3: string; 
//   title4: string;
//   desc4: string;
// }
