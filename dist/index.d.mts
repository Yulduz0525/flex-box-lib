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

export { Column, type IColumnProps, type IFlexProps, type IRowProps, Row, type TContent, type TDirection, type TItems, type TMedia, type TWrap };
