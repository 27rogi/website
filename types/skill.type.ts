export default interface Skill {
  [key: string]: {
    icon: string
    color: string
    name: string
    hidden?: boolean
  }
}
