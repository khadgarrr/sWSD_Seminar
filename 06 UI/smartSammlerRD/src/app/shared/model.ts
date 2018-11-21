export enum markerType {
  Beeren = 1,
  Holler = 2,
  Schwammerl = 3
}

export const BLANK_MARKER = "/assets/images/camera.png";

export class Marker {
  constructor() {}

  id: number;
  imgURL: string;
  lable: string;
  type: number;
  lat: number;
  lng: number;
  hasCoords?: boolean;
  remark: string;
  picture?: any;

  static getMarkerLabel(type: number): string {
    return markerType[type];
  }
}

export interface Direction {
  origin: Coordinates;
  destination: Coordinates;
}

export interface Coordinates {
  lat: number;
  lng: number;
}
