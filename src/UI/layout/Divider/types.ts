/**
 * Props for the Divider component
 */
export interface DividerProps {
  /** The orientation of the divider line */
  orientation?: 'horizontal' | 'vertical';
  /** The style variant of the divider line */
  variant?: 'solid' | 'dashed' | 'dotted';
  /** The thickness of the divider line */
  thickness?: 'thin' | 'medium' | 'thick';
  /** The color of the divider line */
  color?: 'default' | 'muted' | 'accent';
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}