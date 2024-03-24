export interface DocPage {
  title: string
  description: string[]
  contributors: PageContributor[]
  pageItems: PageItem[]
}

export interface PageContributor {
  github_username: string
}

export interface PageItem {
  imgPlaceholder: string
  titleCard: string
  cover: Cover
  links: Link[]
  videos?: Video[]
  infoExtra?: InfoExtra
}

export interface Cover {
  src: string
  height: number
  width: number
}

export interface Link {
  type: LinkType
  url: string
}

export enum LinkType {
  Marketplace = 'Marketplace',
  Web = 'Web',
  Discord = 'Discord',
  X = 'X',
  Github = 'Github',
  Ig = 'Instagram',
  Twitch = 'Twitch',
  YouTube = 'YouTube',
  TikTok = 'TikTok',
  Store = 'Store',
}

export interface Video {
  tooltip: string
  url: string
}

export interface InfoExtra {
  country: string
  city: string
  date: {
    month: string
    days: string[]
  }
}
