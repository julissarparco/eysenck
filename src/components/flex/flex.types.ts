import { BoxProps } from "@mui/material/Box";

export type FlexContextValue = "row" | "column" | "row-column" | "column-row" | undefined;

export type Position =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "middle"
  | "middle-right"
  | "center"
  | string
  | undefined;

export type Gap =
  | number
  | string
  | Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", string | number>>
  | undefined;

export type ItemFlexProps = {
  position?: Position;
  grow?: boolean | number;
  shrink?: number;
  stretched?: boolean;
  gapDisabled?: boolean;
  cssPosition?: "fixed" | "absolute" | "sticky" | "static" | "relative";
} & BoxProps;

export type ProviderProps = {
  flexDirection: FlexContextValue;
  gap: Gap;
};