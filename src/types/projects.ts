import { StaticImageData } from "next/image"

export type ProjectType = {
  title: string,
  description: string,
  tags: string[]
  picture: StaticImageData,
  link?: string,
  tools?:string[]
}