/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
   * This is the label text
   */
    label: string;
    /**
   * this is the font size of the label
   */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * this is to capitaliza the label text
     */
    allCaps?: boolean;
    /**
     * Basic color for label text
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * This is a custom label text color
     */
    customColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, customColor }: MyLabelProps) => JSX.Element;
