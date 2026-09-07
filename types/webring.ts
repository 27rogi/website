export interface WebringData {
  prev?: WebringNavItem
  curr: WebringNavItem
  next?: WebringNavItem
}

export interface WebringNavItem {
  slug: string
  name: string
  url: string
  favicon?: string
}
