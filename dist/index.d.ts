import * as styled_components from 'styled-components';

type TWrap = "wrap" | "nowrap";
type TDirection = "row" | "column";
type TContent = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
type TItems = "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
type TMedia = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type IFlexProps = {
    wrap?: {
        [K in TMedia]?: TWrap;
    } | TWrap;
    direction?: {
        [K in TMedia]?: TDirection;
    } | TDirection;
    content?: {
        [K in TMedia]?: TContent;
    } | TContent;
    align_items?: {
        [K in TMedia]?: TItems;
    } | TItems;
    align_content?: {
        [K in TMedia]?: TItems;
    } | TItems;
    gap?: {
        [K in TMedia]?: number;
    } | number;
    row_gap?: {
        [K in TMedia]?: number;
    } | number;
    column_gap?: {
        [K in TMedia]?: number;
    } | number;
};
interface IRowProps extends IFlexProps {
    width?: string;
}
interface IColumnProps extends IFlexProps {
    size: {
        [K in TMedia]?: number;
    } | number;
    difference: {
        [K in TMedia]?: number;
    } | number;
}
declare const Row: styled_components.StyledComponent<"div", any, IRowProps, never>;
declare const Column: styled_components.StyledComponent<"div", any, IColumnProps, never>;

declare const colors: {
    readonly "primary-25": "rgba(184, 243, 151, 1)";
    readonly "primary-50": "rgba(248, 254, 244, 1)";
    readonly "primary-100": "rgba(241, 253, 234, 1)";
    readonly "primary-200": "rgba(227, 250, 213, 1)";
    readonly "primary-300": "rgba(212, 248, 193, 1 )";
    readonly "primary-400": "rgba(198, 245, 172, 1)";
    readonly "primary-500": "rgba(184, 243, 151, 1)";
    readonly "primary-600": "rgba(166, 219, 136, 1)";
    readonly "primary-700": "rgba(157, 207, 128, 1)";
    readonly "primary-800": "rgba(147, 194, 121, 1)";
    readonly "primary-900": "rgba(138, 182, 113, 1)";
    readonly "secondary-50": " rgba(240, 231, 254, 1)";
    readonly "secondary-100": " rgba(208, 181, 251, 1)";
    readonly "secondary-200": " rgba(185, 145, 249, 1)";
    readonly "secondary-300": " rgba(152, 95, 246, 1)";
    readonly "secondary-400": " rgba(133, 64, 245, 1)";
    readonly "secondary-500": " rgba(102, 16, 242, 1)";
    readonly "secondary-600": " rgba(93, 15, 220, 1)";
    readonly "secondary-700": " rgba(72, 11, 172, 1)";
    readonly "secondary-800": " rgba(56, 9, 133, 1)";
    readonly "secondary-900": " rgba(43, 7, 102, 1)";
    readonly "gray-25": "rgba(252, 252, 252, 1)";
    readonly "gray-50": "rgba(249, 250, 251, 1)";
    readonly "gray-100": "rgba(242, 244, 247, 1)";
    readonly "gray-200": "rgba(234, 236, 240, 1)";
    readonly "gray-300": "rgba(208, 213, 221, 1)";
    readonly "gray-400": "rgba(152, 162, 179, 1)";
    readonly "gray-500": "rgba(102, 112, 133, 1)";
    readonly "gray-600": "rgba(71, 84, 103, 1)";
    readonly "gray-700": "rgba(52, 64, 84, 1)";
    readonly "gray-800": "rgba(29, 41, 57, 1)";
    readonly "gray-900": "rgba(16, 24, 40, 1)";
    readonly "success-50": "rgb(234, 249, 241, 1)";
    readonly "success-100": "rgba(212, 244, 226, 1)";
    readonly "success-200": "rgba(169, 233, 197, 1)";
    readonly "success-300": "rgba(126, 221, 169, 1)";
    readonly "success-400": "rgba(83, 210, 140, 1)";
    readonly "success-500": "rgba(40, 199, 111, 1)";
    readonly "success-600": "rgba(36, 179, 100, 1)";
    readonly "success-700": "rgba(34, 169, 94, 1)";
    readonly "success-800": "rgba(32, 159, 89, 1)";
    readonly "success-900": "rgba(30, 149, 83, 1)";
    readonly "danger-50": "rgb(253, 238, 238, 1)";
    readonly "danger-100": "rgba(251, 221, 221, 1)";
    readonly "danger-200": "rgba(247, 187, 187, 1)";
    readonly "danger-300": "rgba(242, 152, 153, 1)";
    readonly "danger-400": "rgba(238, 118, 119, 1)";
    readonly "danger-500": "rgba(234, 84, 85, 1)";
    readonly "danger-600": "rgba(211, 76, 77, 1)";
    readonly "danger-700": "rgba(199, 71, 72, 1)";
    readonly "danger-800": "rgba(187, 67, 68, 1)";
    readonly "danger-900": "rgba(175, 63, 64, 1)";
    readonly "warning-50": "rgb(255, 245, 236, 1)";
    readonly "warning-100": "rgba(255, 236, 217, 1)";
    readonly "warning-200": "rgba(255, 217, 180, 1)";
    readonly "warning-300": "rgba(255, 197, 142, 1)";
    readonly "warning-400": "rgba(255, 178, 105, 1)";
    readonly "warning-500": "rgba(255, 159, 67, 1)";
    readonly "warning-600": "rgba(230, 143, 60, 1)";
    readonly "warning-700": "rgba(217, 135, 57, 1)";
    readonly "warning-800": "rgba(204, 127, 54, 1)";
    readonly "warning-900": "rgba(191, 119, 50, 1)";
    readonly "extra-white": "rgba(255, 255, 255, 1)";
    readonly "typography-heading": "rgba(24, 28, 50, 1)";
    readonly "typography-body": "rgba(63, 66, 84, 1)";
    readonly "typography-muted": "rgba(161, 165, 183, 1)";
    readonly "typography-placeholder": "rgba(161, 165, 183, 1)";
    readonly "opacity-primary8": "rgba(184, 243, 151, 0.07999999821186066)";
    readonly "opacity-primary16": "rgba(184, 243, 151, 0.1599999964237213)";
    readonly "opacity-primary24": "rgba(184, 243, 151, 0.23999999463558197)";
    readonly "opacity-primary32": "rgba(184, 243, 151, 0.3199999928474426)";
    readonly "opacity-primary40": "rgba(184, 243, 151, 0.4000000059604645)";
    readonly "opacity-primary48": "rgba(184, 243, 151, 0.47999998927116394)";
    readonly "opacity-secondary8": "rgba(102, 16, 242, 0.07999999821186066)";
    readonly "opacity-secondary16": "rgba(102, 16, 242, 0.1599999964237213)";
    readonly "opacity-secondary24": "rgba(102, 16, 242, 0.23999999463558197)";
    readonly "opacity-secondary32": "rgba(102, 16, 242, 0.3199999928474426)";
    readonly "opacity-secondary40": "rgba(102, 16, 242, 0.4000000059604645)";
    readonly "opacity-secondary48": "rgba(102, 16, 242, 0.47999998927116394)";
    readonly "opacity-gray8": "rgba(102, 112, 133, 0.07999999821186066)";
    readonly "opacity-gray16": "rgba(102, 112, 133, 0.1599999964237213)";
    readonly "opacity-gray24": "rgba(102, 112, 133, 0.23999999463558197)";
    readonly "opacity-gray32": "rgba(102, 112, 133, 0.3199999928474426)";
    readonly "opacity-gray40": "rgba(102, 112, 133, 0.4000000059604645)";
    readonly "opacity-gray48": "rgba(102, 112, 133, 0.47999998927116394)";
    readonly "opacity-success8": "rgba(40, 199, 111, 0.08)";
    readonly "opacity-success16": "rgba(40, 199, 111, 0.016)";
    readonly "opacity-success24": "rgba(40, 199, 111, 0.024)";
    readonly "opacity-success32": "rgba(40, 199, 111, 0.032)";
    readonly "opacity-success40": "rgba(40, 199, 111, 0.4)";
    readonly "opacity-success48": "rgba(40, 199, 111, 0.48)";
    readonly "opacity-warning8": "rgba(255, 159, 67, 0,08)";
    readonly "opacity-warning16": "rgba(255, 159, 67, 0.016)";
    readonly "opacity-warning24": "rgba(255, 159, 67, 0.024)";
    readonly "opacity-warning32": "rgba(255, 159, 67, 0.032)";
    readonly "opacity-warning40": "rgba(255, 159, 67, 0.4)";
    readonly "opacity-warning48": "rgba(255, 159, 67, 0.48)";
    readonly "opacity-danger8": "rgba(234, 84, 85, 0,08)";
    readonly "opacity-danger16": "rgba(234, 84, 85, 0.016)";
    readonly "opacity-danger24": "rgba(234, 84, 85, 0.024)";
    readonly "opacity-danger32": "rgba(234, 84, 85, 0.032)";
    readonly "opacity-danger40": "rgba(234, 84, 85, 0.4)";
    readonly "opacity-danger48": "rgba(234, 84, 85, 0.48)";
    readonly primary: "linear-gradient(90deg, rgba(184, 243, 151, 1) 0%, rgba(212, 248, 193, 1) 100%)";
    readonly secondary: "linear-gradient(90deg,rgba(102, 16, 242, 1) 0%,rgba(152, 95, 246, 1) 100%";
    readonly gray: "linear-gradient(90deg,rgba(102, 112, 133, 1) 0%,rgba(208, 213, 221, 1) 100%";
    readonly success: "linear-gradient(90deg,rgba(40, 199, 111, 1) 0%,rgba(72, 218, 137, 1) 100%";
    readonly danger: "linear-gradient(90deg,rgba(234, 84, 85, 1) 0%,rgba(240, 129, 130, 1) 100%";
    readonly warning: "linear-gradient(90deg,rgba(255, 159, 67, 1) 0%,rgba(255, 185, 118, 1) 100%";
};
interface CustomColors {
    [key: string]: string;
}
declare const mergeColors: (customColors: CustomColors) => Record<string, string>;

declare const Container: styled_components.StyledComponent<"div", any, {}, never>;

export { Column, Container, type IColumnProps, type IFlexProps, type IRowProps, Row, type TContent, type TDirection, type TItems, type TMedia, type TWrap, colors, mergeColors };
