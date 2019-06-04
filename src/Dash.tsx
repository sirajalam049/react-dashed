import React from 'react'
import { withSize, SizeMeProps } from 'react-sizeme'

interface DashProps extends SizeMeProps {
    // Color of the individual dash
    color?: string

    // Gap between the dashes
    dashGap?: number

    // Length of each dash
    dashLength?: number

    // True if you want to make the dashes circular
    rounded?: boolean

    // Thickness of each dash
    dashThickness?: number

    // Direction, row or column
    direction?: 'row' | 'column'
}

class Dash extends React.Component<DashProps> {

    render() {
        const { color = '#7A7A7A', dashGap = 4, dashLength = 1, dashThickness = 1, direction = 'column', rounded = false, size } = this.props
        const isRow = direction === 'row';
        const length = (isRow ? size.width : size.height) || 0;
        const dots = Math.ceil(length / (dashGap + dashLength));
        return (
            <div style={{ display: 'flex', height: '100%', flexDirection: (isRow ? 'row' : 'column') }} >
                {
                    Array.from(Array(dots).keys()).map(number => {
                        return (
                            <div
                                key={number}
                                style={{
                                    height: dashLength,
                                    width: dashThickness,
                                    borderRadius: (rounded ? '100%' : 0),
                                    backgroundColor: color,
                                    marginRight: (isRow ? dashGap : 0),
                                    marginBottom: (isRow ? 0 : (number === dots - 1 ? 0 : dashGap))
                                }}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default withSize({ monitorHeight: true, monitorWidth: true })(Dash);