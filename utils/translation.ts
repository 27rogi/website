import type { ComposerTranslation } from 'vue-i18n'

export function getMetadataTranslation(t: ComposerTranslation, key: string | unknown, field: string, suffix = '', fallback = ''): string {
  if (typeof key !== 'string') {
    return fallback
  }
  const translation = t(`metadata.keys.${key}.${field}`)
  return (
    translation !== `metadata.keys.${key}.${field}` ? `${translation}${suffix}` : fallback
  )?.trim()
}
