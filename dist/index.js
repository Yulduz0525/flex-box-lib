"use strict";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
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
function _templateObject9() {
    var data = _tagged_template_literal([
        '\n  && {\n    margin-left: auto;\n    margin-right: auto;\n    /* max-width: "100vw"; */\n    width: 100%;\n    transition: all 250ms ease-in-out;\n\n    width: clamp(200px, 95%, 394px);\n    // Extra small devices (landscape phones, 320px and 430px) - 24px\n    @media (min-width: 320px) {\n      width: clamp(296px, 95%, 394px);\n    }\n    // Small devices (landscape phones, 576px and 744px) - 36px\n    @media (min-width: 430px) {\n      width: clamp(394px, 90%, 688px);\n    }\n    // Medium devices (tablets, 744px and 992px) - 56px\n    @media (min-width: 744px) {\n      width: clamp(688px, 85%, 920px);\n    }\n    // Large devices (laptop, 992px and 1440px) - 72px\n    @media (min-width: 992px) {\n      width: clamp(920px, 80%, 1340px);\n    }\n    // Extra large devices (laptop, 1440px and up) - 100px\n    @media (min-width: 1440px) {\n      width: clamp(1340px, 75%, 1600px);\n    }\n  }\n'
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    Column: function() {
        return Column;
    },
    Container: function() {
        return Container;
    },
    Row: function() {
        return Row;
    },
    colors: function() {
        return colors;
    },
    mergeColors: function() {
        return mergeColors;
    }
});
module.exports = __toCommonJS(src_exports);
// src/flexbox.ts
var import_styled_components = __toESM(require("styled-components"));
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
    return import_styled_components.css(_templateObject(), media.minWidth, function(param) {
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
var Row = import_styled_components.default.div(_templateObject1(), rowStyles, function(param) {
    var width = param.width;
    return width || "100%";
});
Row.defaultProps = {
    wrap: "wrap",
    direction: "row",
    content: "flex-start",
    align_items: "stretch",
    align_content: "stretch",
    gap: 0,
    row_gap: 0,
    column_gap: 0,
    width: "100%"
};
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
var columnStyles = import_styled_components.css(_templateObject7(), function(param) {
    var size = param.size, difference = param.difference;
    var getWidth = function(sizeValue) {
        return sizeValue ? "".concat(sizeValue / 12 * 100, "%") : "0%";
    };
    if ((typeof size === "undefined" ? "undefined" : _type_of(size)) === "object" && (typeof difference === "undefined" ? "undefined" : _type_of(difference)) === "object") {
        var mediaFilter = extractSizes(mediaLists, size);
        return import_styled_components.css(_templateObject3(), mediaFilter.map(function(media) {
            return import_styled_components.css(_templateObject2(), media.minWidth, getWidth(media.size), difference[media.key] || 0);
        }));
    } else if (typeof size === "number" && typeof difference === "number") {
        return import_styled_components.css(_templateObject4(), getWidth(size), difference);
    } else if ((typeof size === "undefined" ? "undefined" : _type_of(size)) === "object" && typeof difference === "number") {
        var mediaFilter1 = extractSizes(mediaLists, size);
        return import_styled_components.css(_templateObject6(), mediaFilter1.map(function(media) {
            return import_styled_components.css(_templateObject5(), media.minWidth, getWidth(size[media.key]), difference);
        }));
    }
    return "";
});
var Column = import_styled_components.default.div(_templateObject8(), rowStyles, columnStyles);
// src/constants/colors.ts
var colors = {
    /* ---------- solid ----------*/ "primary-25": "rgba(184, 243, 151, 1)",
    "primary-50": "rgba(248, 254, 244, 1)",
    "primary-100": "rgba(241, 253, 234, 1)",
    "primary-200": "rgba(227, 250, 213, 1)",
    "primary-300": "rgba(212, 248, 193, 1 )",
    "primary-400": "rgba(198, 245, 172, 1)",
    "primary-500": "rgba(184, 243, 151, 1)",
    // (Base)
    "primary-600": "rgba(166, 219, 136, 1)",
    // (Hover)
    "primary-700": "rgba(157, 207, 128, 1)",
    // (Active)
    "primary-800": "rgba(147, 194, 121, 1)",
    "primary-900": "rgba(138, 182, 113, 1)",
    "secondary-50": " rgba(240, 231, 254, 1)",
    "secondary-100": " rgba(208, 181, 251, 1)",
    "secondary-200": " rgba(185, 145, 249, 1)",
    "secondary-300": " rgba(152, 95, 246, 1)",
    "secondary-400": " rgba(133, 64, 245, 1)",
    "secondary-500": " rgba(102, 16, 242, 1)",
    // (Base)
    "secondary-600": " rgba(93, 15, 220, 1)",
    // (Hover)
    "secondary-700": " rgba(72, 11, 172, 1)",
    // (Active)
    "secondary-800": " rgba(56, 9, 133, 1)",
    "secondary-900": " rgba(43, 7, 102, 1)",
    "gray-25": "rgba(252, 252, 252, 1)",
    "gray-50": "rgba(249, 250, 251, 1)",
    "gray-100": "rgba(242, 244, 247, 1)",
    "gray-200": "rgba(234, 236, 240, 1)",
    "gray-300": "rgba(208, 213, 221, 1)",
    "gray-400": "rgba(152, 162, 179, 1)",
    "gray-500": "rgba(102, 112, 133, 1)",
    // (Base)
    "gray-600": "rgba(71, 84, 103, 1)",
    //( Hover)
    "gray-700": "rgba(52, 64, 84, 1)",
    // (Active)
    "gray-800": "rgba(29, 41, 57, 1)",
    "gray-900": "rgba(16, 24, 40, 1)",
    // message and status colors
    "success-50": "rgb(234, 249, 241, 1)",
    "success-100": "rgba(212, 244, 226, 1)",
    "success-200": "rgba(169, 233, 197, 1)",
    "success-300": "rgba(126, 221, 169, 1)",
    "success-400": "rgba(83, 210, 140, 1)",
    "success-500": "rgba(40, 199, 111, 1)",
    // (Base)
    "success-600": "rgba(36, 179, 100, 1)",
    // (Hover)
    "success-700": "rgba(34, 169, 94, 1)",
    // (Active)
    "success-800": "rgba(32, 159, 89, 1)",
    "success-900": "rgba(30, 149, 83, 1)",
    "danger-50": "rgb(253, 238, 238, 1)",
    "danger-100": "rgba(251, 221, 221, 1)",
    "danger-200": "rgba(247, 187, 187, 1)",
    "danger-300": "rgba(242, 152, 153, 1)",
    "danger-400": "rgba(238, 118, 119, 1)",
    "danger-500": "rgba(234, 84, 85, 1)",
    // (Base)
    "danger-600": "rgba(211, 76, 77, 1)",
    // (Hover)
    "danger-700": "rgba(199, 71, 72, 1)",
    // (Active)
    "danger-800": "rgba(187, 67, 68, 1)",
    "danger-900": "rgba(175, 63, 64, 1)",
    "warning-50": "rgb(255, 245, 236, 1)",
    "warning-100": "rgba(255, 236, 217, 1)",
    "warning-200": "rgba(255, 217, 180, 1)",
    "warning-300": "rgba(255, 197, 142, 1)",
    "warning-400": "rgba(255, 178, 105, 1)",
    "warning-500": "rgba(255, 159, 67, 1)",
    // (Base)
    "warning-600": "rgba(230, 143, 60, 1)",
    // (Hover)
    "warning-700": "rgba(217, 135, 57, 1)",
    // (Active)
    "warning-800": "rgba(204, 127, 54, 1)",
    "warning-900": "rgba(191, 119, 50, 1)",
    // extra colors
    "extra-white": "rgba(255, 255, 255, 1)",
    /* ---------- common ---------- */ // typography
    "typography-heading": "rgba(24, 28, 50, 1)",
    "typography-body": "rgba(63, 66, 84, 1)",
    "typography-muted": "rgba(161, 165, 183, 1)",
    "typography-placeholder": "rgba(161, 165, 183, 1)",
    // opacity
    "opacity-primary8": "rgba(184, 243, 151, 0.07999999821186066)",
    "opacity-primary16": "rgba(184, 243, 151, 0.1599999964237213)",
    "opacity-primary24": "rgba(184, 243, 151, 0.23999999463558197)",
    "opacity-primary32": "rgba(184, 243, 151, 0.3199999928474426)",
    "opacity-primary40": "rgba(184, 243, 151, 0.4000000059604645)",
    "opacity-primary48": "rgba(184, 243, 151, 0.47999998927116394)",
    "opacity-secondary8": "rgba(102, 16, 242, 0.07999999821186066)",
    "opacity-secondary16": "rgba(102, 16, 242, 0.1599999964237213)",
    "opacity-secondary24": "rgba(102, 16, 242, 0.23999999463558197)",
    "opacity-secondary32": "rgba(102, 16, 242, 0.3199999928474426)",
    "opacity-secondary40": "rgba(102, 16, 242, 0.4000000059604645)",
    "opacity-secondary48": "rgba(102, 16, 242, 0.47999998927116394)",
    "opacity-gray8": "rgba(102, 112, 133, 0.07999999821186066)",
    "opacity-gray16": "rgba(102, 112, 133, 0.1599999964237213)",
    "opacity-gray24": "rgba(102, 112, 133, 0.23999999463558197)",
    "opacity-gray32": "rgba(102, 112, 133, 0.3199999928474426)",
    "opacity-gray40": "rgba(102, 112, 133, 0.4000000059604645)",
    "opacity-gray48": "rgba(102, 112, 133, 0.47999998927116394)",
    "opacity-success8": "rgba(40, 199, 111, 0.08)",
    "opacity-success16": "rgba(40, 199, 111, 0.016)",
    "opacity-success24": "rgba(40, 199, 111, 0.024)",
    "opacity-success32": "rgba(40, 199, 111, 0.032)",
    "opacity-success40": "rgba(40, 199, 111, 0.4)",
    "opacity-success48": "rgba(40, 199, 111, 0.48)",
    "opacity-warning8": "rgba(255, 159, 67, 0,08)",
    "opacity-warning16": "rgba(255, 159, 67, 0.016)",
    "opacity-warning24": "rgba(255, 159, 67, 0.024)",
    "opacity-warning32": "rgba(255, 159, 67, 0.032)",
    "opacity-warning40": "rgba(255, 159, 67, 0.4)",
    "opacity-warning48": "rgba(255, 159, 67, 0.48)",
    "opacity-danger8": "rgba(234, 84, 85, 0,08)",
    "opacity-danger16": "rgba(234, 84, 85, 0.016)",
    "opacity-danger24": "rgba(234, 84, 85, 0.024)",
    "opacity-danger32": "rgba(234, 84, 85, 0.032)",
    "opacity-danger40": "rgba(234, 84, 85, 0.4)",
    "opacity-danger48": "rgba(234, 84, 85, 0.48)",
    // gradient
    primary: "linear-gradient(90deg, rgba(184, 243, 151, 1) 0%, rgba(212, 248, 193, 1) 100%)",
    secondary: "linear-gradient(90deg,rgba(102, 16, 242, 1) 0%,rgba(152, 95, 246, 1) 100%",
    gray: "linear-gradient(90deg,rgba(102, 112, 133, 1) 0%,rgba(208, 213, 221, 1) 100%",
    success: "linear-gradient(90deg,rgba(40, 199, 111, 1) 0%,rgba(72, 218, 137, 1) 100%",
    danger: "linear-gradient(90deg,rgba(234, 84, 85, 1) 0%,rgba(240, 129, 130, 1) 100%",
    warning: "linear-gradient(90deg,rgba(255, 159, 67, 1) 0%,rgba(255, 185, 118, 1) 100%"
};
var mergeColors = function(customColors) {
    return _object_spread({}, colors, customColors);
};
// src/container.ts
var import_styled_components2 = __toESM(require("styled-components"));
var Container = import_styled_components2.default.div(_templateObject9());
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Column: Column,
    Container: Container,
    Row: Row,
    colors: colors,
    mergeColors: mergeColors
});
//# sourceMappingURL=index.js.map