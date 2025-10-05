export interface IPageMain {
  title: string
  subtitle: string
  videoUrl: string
  buttons: Buttons
  sidebar: Sidebar
  socials: Socials
}

export interface Buttons {
  ios: Ios
  android: Android
  apk: Apk
}

export interface Ios {
  enabled: boolean
  label: string
}

export interface Android {
  enabled: boolean
  label: string
}

export interface Apk {
  enabled: boolean
  label: string
}

export interface Sidebar {
  download_app: DownloadApp
  watch_video: WatchVideo
  qr_code: QrCode
}

export interface DownloadApp {
  enabled: boolean
  label: string
}

export interface WatchVideo {
  enabled: boolean
  label: string
  url: string
}

export interface QrCode {
  enabled: boolean
  label: string
  url: string
}

export interface Socials {
  vk: Vk
  telegram: Telegram
  dzen: Dzen
  vkVideo: VkVideo
}

export interface Vk {
  enabled: boolean
  url: string
}

export interface Telegram {
  enabled: boolean
  url: string
}

export interface Dzen {
  enabled: boolean
  url: string
}

export interface VkVideo {
  enabled: boolean
  url: string
}
