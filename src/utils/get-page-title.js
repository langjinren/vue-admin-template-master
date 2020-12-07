import defaultSettings from '@/settings'

const title = defaultSettings.title || 'vue-admin-template-lang'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
