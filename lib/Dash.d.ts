import React from 'react';
import { SizeMeProps } from 'react-sizeme';
interface DashProps extends SizeMeProps {
    color?: string;
    dashGap?: number;
    dashLength?: number;
    rounded?: boolean;
    dashThickness?: number;
    direction?: 'row' | 'column';
}
declare const _default: React.ComponentType<Pick<DashProps, "color" | "dashGap" | "dashLength" | "rounded" | "dashThickness" | "direction">>;
export default _default;
