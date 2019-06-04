"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_sizeme_1 = require("react-sizeme");
class Dash extends react_1.default.Component {
    render() {
        const { color = '#7A7A7A', dashGap = 4, dashLength = 1, dashThickness = 1, direction = 'column', rounded = false, size } = this.props;
        const isRow = direction === 'row';
        const length = (isRow ? size.width : size.height) || 0;
        const dots = Math.ceil(length / (dashGap + dashLength));
        return (react_1.default.createElement("div", { style: { display: 'flex', height: '100%', flexDirection: (isRow ? 'row' : 'column') } }, Array.from(Array(dots).keys()).map(number => {
            return (react_1.default.createElement("div", { key: number, style: {
                    height: dashLength,
                    width: dashThickness,
                    borderRadius: (rounded ? '100%' : 0),
                    backgroundColor: color,
                    marginRight: (isRow ? dashGap : 0),
                    marginBottom: (isRow ? 0 : (number === dots - 1 ? 0 : dashGap))
                } }));
        })));
    }
}
exports.default = react_sizeme_1.withSize({ monitorHeight: true, monitorWidth: true })(Dash);
