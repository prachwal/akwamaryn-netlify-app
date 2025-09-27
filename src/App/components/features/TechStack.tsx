/**
 * Union type for available technology versions
 */
export type TechStackVersion = 'preact' | 'typescript' | 'vite' | 'scss' | 'vitest'

/**
 * Props for the TechStack component
 */
export interface TechStackProps {
  /** Which technology version to display */
  version: TechStackVersion
  /** Optional CSS class name */
  className?: string
  /** Optional label to display before the version */
  label?: string
}

/**
 * TechStack component that displays technology version information
 *
 * @param props - Component props
 * @returns The version display JSX element
 *
 * @example
 * ```tsx
 * <TechStack version="preact" label="Preact:" className="tech-version" />
 * ```
 */
export function TechStack({ version, className, label }: TechStackProps) {
  const getVersion = (tech: TechStackVersion): string => {
    switch (tech) {
      case 'preact':
        return __PREACT_VERSION__
      case 'typescript':
        return __TYPESCRIPT_VERSION__
      case 'vite':
        return __VITE_VERSION__
      case 'scss':
        return __SCSS_VERSION__
      case 'vitest':
        return __VITEST_VERSION__
      default:
        return 'Unknown'
    }
  }

  const versionValue = getVersion(version)
  const displayText = label ? `${label} ${versionValue}` : versionValue

  return (
    <span className={className}>
      {displayText}
    </span>
  )
}