import { StaticImageData } from "next/image"

export interface IProject {
  title: string,
  description: string,
  tags: string[]
  picture: StaticImageData,
  link?: string,
  tools?:string[]
}

export interface ITool {
  label: string,
  type: string,
}