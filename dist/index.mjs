// src/flexbox.ts
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n    @media (min-width: ",
        ") {\n      width: ",
        ";\n      flex-wrap: ",
        ";\n      flex-direction: ",
        ";\n      justify-content: ",
        ";\n      align-items: ",
        ";\n      align-content: ",
        ";\n      gap: ",
        ";\n      row-gap: ",
        ";\n      column-gap: ",
        ";\n    }\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  && {\n    display: flex;\n    ",
        "\n\n    width: ",
        ";\n  }\n"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n            @media (min-width: ",
        ") {\n              width: calc(\n                ",
        " - ",
        "px\n              );\n            }\n          "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n        ",
        "\n      "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n        width: calc(",
        " - ",
        "px);\n      "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n            @media (min-width: ",
        ") {\n              width: calc(",
        " - ",
        "px);\n            }\n          "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n        ",
        "\n      "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n  // background-color: red;\n  ",
        "\n"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n  && {\n    ",
        "\n    ",
        "\n  }\n"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
import styled, { css } from "styled-components";
var mediaLists = [
    {
        key: "xs",
        minWidth: "0px"
    },
    {
        key: "sm",
        minWidth: "576px"
    },
    {
        key: "md",
        minWidth: "768px"
    },
    {
        key: "lg",
        minWidth: "992px"
    },
    {
        key: "xl",
        minWidth: "1200px"
    },
    {
        key: "2xl",
        minWidth: "1440px"
    }
];
var rowStyles = mediaLists.map(function(media) {
    return css(_templateObject(), media.minWidth, function(param) {
        var width = param.width;
        return (typeof width === "undefined" ? "undefined" : _type_of(width)) === "object" ? width[media.key] : width ? width : "100%";
    }, function(param) {
        var wrap = param.wrap;
        return (typeof wrap === "undefined" ? "undefined" : _type_of(wrap)) === "object" ? wrap[media.key] : wrap ? wrap : "wrap";
    }, function(param) {
        var direction = param.direction;
        return (typeof direction === "undefined" ? "undefined" : _type_of(direction)) === "object" ? direction[media.key] : direction && direction;
    }, function(param) {
        var content = param.content;
        return (typeof content === "undefined" ? "undefined" : _type_of(content)) === "object" ? content[media.key] : content && content;
    }, function(param) {
        var align_items = param.align_items;
        return (typeof align_items === "undefined" ? "undefined" : _type_of(align_items)) === "object" ? align_items[media.key] : align_items && align_items;
    }, function(param) {
        var align_content = param.align_content;
        return (typeof align_content === "undefined" ? "undefined" : _type_of(align_content)) === "object" ? align_content[media.key] : align_content && align_content;
    }, function(param) {
        var gap = param.gap;
        return (typeof gap === "undefined" ? "undefined" : _type_of(gap)) === "object" ? "".concat(!gap ? 0 : gap[media.key], "px") : "".concat(gap, "px");
    }, function(param) {
        var row_gap = param.row_gap;
        return (typeof row_gap === "undefined" ? "undefined" : _type_of(row_gap)) === "object" ? "".concat(!row_gap ? 0 : row_gap[media.key], "px") : "".concat(row_gap, "px");
    }, function(param) {
        var column_gap = param.column_gap;
        return (typeof column_gap === "undefined" ? "undefined" : _type_of(column_gap)) === "object" ? "".concat(!column_gap ? 0 : column_gap[media.key], "px") : "".concat(column_gap, "px");
    });
});
var Row = styled.div(_templateObject1(), rowStyles, function(param) {
    var width = param.width;
    return width || "100%";
});
function extractSizes(breakpoints, sizes) {
    return breakpoints.map(function(breakpoint) {
        return {
            key: breakpoint.key,
            minWidth: breakpoint.minWidth,
            size: sizes[breakpoint.key]
        };
    }).filter(function(breakpoint) {
        return breakpoint.size !== void 0;
    });
}
var columnStyles = css(_templateObject7(), function(param) {
    var size = param.size, difference = param.difference;
    var getWidth = function(sizeValue) {
        return sizeValue ? "".concat(sizeValue / 12 * 100, "%") : "0%";
    };
    if ((typeof size === "undefined" ? "undefined" : _type_of(size)) === "object" && (typeof difference === "undefined" ? "undefined" : _type_of(difference)) === "object") {
        var mediaFilter = extractSizes(mediaLists, size);
        return css(_templateObject3(), mediaFilter.map(function(media) {
            return css(_templateObject2(), media.minWidth, getWidth(media.size), difference[media.key] || 0);
        }));
    } else if (typeof size === "number" && typeof difference === "number") {
        return css(_templateObject4(), getWidth(size), difference);
    } else if ((typeof size === "undefined" ? "undefined" : _type_of(size)) === "object" && typeof difference === "number") {
        var mediaFilter1 = extractSizes(mediaLists, size);
        return css(_templateObject6(), mediaFilter1.map(function(media) {
            return css(_templateObject5(), media.minWidth, getWidth(size[media.key]), difference);
        }));
    }
    return "";
});
var Column = styled.div(_templateObject8(), rowStyles, columnStyles);
export { Column, Row };
//# sourceMappingURL=index.mjs.map