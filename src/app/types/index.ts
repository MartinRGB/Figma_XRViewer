import React from "react";

declare module '*.png' {/* empty */}
declare module '*.jpg' {/* empty */}
declare module '*.obj' {/* empty */}
declare module '*.mtl' {/* empty */}
declare module '*.glb' {/* empty */}
declare module '*.mp4' {/* empty */}

export interface CreateImageProps {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    image: number;
    message: any;
    name: string;
}
  
export interface DownloadImageProps {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    isServe: boolean;
    data: any;
    imageLayout: React.MutableRefObject<any>;
}

export interface IPluginApp {
    platform:string;
}

export interface IGLTFViewerApp {
    envBuild:string;
    width:number;
    height:number;
}