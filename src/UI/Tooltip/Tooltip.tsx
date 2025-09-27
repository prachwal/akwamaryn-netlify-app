import { ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'
import './Tooltip.scss'

/**
 * Props for the Tooltip component
 */
export interface TooltipProps {
  /** Content to display in the tooltip */
  content: ComponentChildren
  /** Child elements that trigger the tooltip */
  children: ComponentChildren
  /** Optional CSS class name */
  className?: string
  /** Tooltip position */
  position?: 'top' | 'bottom' | 'left' | 'right'
}

/**
 * Tooltip component that shows additional information on hover
 *
 * @param props - Component props
 * @returns The tooltip JSX element
 *
 * @example
 * ```tsx
 * <Tooltip content={<span>Version: <strong>1.0.0</strong></span>}>
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
export function Tooltip({
  content,
  children,
  className,
  position = 'top'
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className={`tooltip-container ${className || ''}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`tooltip tooltip-${position}`}>
          {content}
        </div>
      )}
    </div>
  )
}