import styled, { css } from "styled-components";

/* ---------------- base typing ---------------- */
export type TWrap = "wrap" | "nowrap";
export type TDirection = "row" | "column";
export type TContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type TItems =
  | "center"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "baseline";
export type TMedia = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/* ---------------- props types ---------------- */
export type IFlexProps = {
  wrap?: { [K in TMedia]?: TWrap } | TWrap;
  direction?: { [K in TMedia]?: TDirection } | TDirection;
  content?: { [K in TMedia]?: TContent } | TContent;
  align_items?: { [K in TMedia]?: TItems } | TItems;
  align_content?: { [K in TMedia]?: TItems } | TItems;
  gap?: { [K in TMedia]?: number } | number;
  row_gap?: { [K in TMedia]?: number } | number;
  column_gap?: { [K in TMedia]?: number } | number;
};
export interface IRowProps extends IFlexProps {
  width?: string;
}
export interface IColumnProps extends IFlexProps {
  size: { [K in TMedia]?: number } | number;
  difference: { [K in TMedia]?: number } | number;
}

/* ---------------- media constants ---------------- */
const mediaLists: {
  key: TMedia;
  minWidth: string;
}[] = [
  { key: "xs", minWidth: "0px" },
  { key: "sm", minWidth: "576px" },
  { key: "md", minWidth: "768px" },
  { key: "lg", minWidth: "992px" },
  { key: "xl", minWidth: "1200px" },
  { key: "2xl", minWidth: "1440px" },
];

/* ---------------- media flex styles ---------------- */
const rowStyles = mediaLists.map((media) => {
  return css<IRowProps>`
    @media (min-width: ${media.minWidth}) {
      width: ${({ width }) =>
        typeof width === "object" ? width[media.key] : width ? width : "100%"};
      flex-wrap: ${({ wrap }) =>
        typeof wrap === "object" ? wrap[media.key] : wrap ? wrap : "wrap"};
      flex-direction: ${({ direction }) =>
        typeof direction === "object"
          ? direction[media.key]
          : direction && direction};
      justify-content: ${({ content }) =>
        typeof content === "object" ? content[media.key] : content && content};
      align-items: ${({ align_items }) =>
        typeof align_items === "object"
          ? align_items[media.key]
          : align_items && align_items};
      align-content: ${({ align_content }) =>
        typeof align_content === "object"
          ? align_content[media.key]
          : align_content && align_content};
      gap: ${({ gap }) =>
        typeof gap === "object"
          ? `${!gap ? 0 : gap[media.key]}px`
          : `${gap}px`};
      row-gap: ${({ row_gap }) =>
        typeof row_gap === "object"
          ? `${!row_gap ? 0 : row_gap[media.key]}px`
          : `${row_gap}px`};
      column-gap: ${({ column_gap }) =>
        typeof column_gap === "object"
          ? `${!column_gap ? 0 : column_gap[media.key]}px`
          : `${column_gap}px`};
    }
  `;
});

/* ---------------- Row ---------------- */
export const Row = styled.div<IRowProps>`
  && {
    display: flex;
    ${rowStyles}

    width: ${({ width }) => width || "100%"};
  }
`;
Row.defaultProps = {
  wrap: 'wrap',
  direction: 'row',
  content: 'flex-start',
  align_items: 'stretch',
  align_content: 'stretch',
  gap: 0,
  row_gap: 0,
  column_gap: 0,
  width: '100%',
} 
/* ---------------- Column ---------------- */
// This function extracts the sizes for the media types defined in 'sizes'
function extractSizes(
  breakpoints: { key: TMedia; minWidth: string }[],
  sizes: { [K in TMedia]?: number }
) {
  return breakpoints
    .map((breakpoint) => ({
      key: breakpoint.key,
      minWidth: breakpoint.minWidth,
      size: sizes[breakpoint.key],
    }))
    .filter((breakpoint) => breakpoint.size !== undefined);
}
// styles
const columnStyles = css<IColumnProps>`
  // background-color: red;
  ${({ size, difference }) => {
    const getWidth = (sizeValue: number | undefined) =>
      sizeValue ? `${(sizeValue / 12) * 100}%` : "0%";

    if (typeof size === "object" && typeof difference === "object") {
      const mediaFilter = extractSizes(mediaLists, size);
      return css`
        ${mediaFilter.map(
          (media) => css`
            @media (min-width: ${media.minWidth}) {
              width: calc(
                ${getWidth(media.size)} - ${difference[media.key] || 0}px
              );
            }
          `
        )}
      `;
    } else if (typeof size === "number" && typeof difference === "number") {
      return css`
        width: calc(${getWidth(size)} - ${difference}px);
      `;
    } else if (typeof size === "object" && typeof difference === "number") {
      const mediaFilter = extractSizes(mediaLists, size);
      return css`
        ${mediaFilter.map(
          (media) => css`
            @media (min-width: ${media.minWidth}) {
              width: calc(${getWidth(size[media.key])} - ${difference}px);
            }
          `
        )}
      `;
    }
    return "";
  }}
`;

export const Column = styled.div<IColumnProps>`
  && {
    ${rowStyles}
    ${columnStyles}
  }
`;
