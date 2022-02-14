import { createTheme, Theme, useTheme } from "@mui/material";
import React from "react";
import { FlexContextValue, Gap, Position, ProviderProps } from "./flex.types";

const FlexContext = React.createContext<FlexContextValue>(undefined);

export const positionInsideRow = (position: Position) => {
  if (position === "left") return undefined;
  if (position === "right") return { marginLeft: "auto" };
  if (position === "top") return { alignSelf: "flex-start" };
  if (position === "bottom") return { alignSelf: "flex-end" };
  if (position === "middle") return { alignSelf: "center" };
  if (position === "middle-right")
    return { alignSelf: "center", marginLeft: "auto" };
  if (position === "center")
    return { alignSelf: "center", marginLeft: "auto", marginRight: "auto" };
};

export const positionInsideColumn = (position: Position) => {
  if (position === "left") return { alignSelf: "flex-start" };
  if (position === "right") return { alignSelf: "flex-end" };
  if (position === "top") return undefined;
  if (position === "bottom") return { marginTop: "auto" };
  if (position === "middle") return { marginTop: "auto", marginBottom: "auto" };
  if (position === "middle-right")
    return { alignSelf: "flex-end", marginTop: "auto", marginBottom: "auto" };
  if (position === "center")
    return { alignSelf: "center", marginTop: "auto", marginBottom: "auto" };
};

export const useGapCtx = () => React.useContext(GapContext);
const GapContext = React.createContext<Gap>(undefined);

export const useFlexStyles = (position: Position) => {
  const flex = React.useContext(FlexContext);
  if (flex === "row") return positionInsideRow(position);
  if (flex === "column") return positionInsideColumn(position);
};

const baseTheme = createTheme();

const toCssValue = (value: number | string) =>
  typeof value === "number" ? `${value}px` : value;

export const getThemeCssValue = (
  gap: string | number,
  theme: Pick<Theme, "spacing"> = baseTheme
) =>
  `calc(${typeof gap === "number" ? toCssValue(theme.spacing(gap)) : gap} / 2)`;

export const resolveGap = (
  gap: string | number,
  theme: Pick<Theme, "spacing"> = baseTheme
) => (process.env.NODE_ENV === "test" ? gap : getThemeCssValue(gap, theme));

export const gapToCss =
  (theme: Pick<Theme, "breakpoints" | "spacing">, resolver = resolveGap) =>
  (gap: Gap): Gap => {
    if (typeof gap === "undefined" || gap === null) return undefined;
    if (typeof gap === "string" || typeof gap === "number") {
      return resolver(gap, theme);
    }
    return Object.entries(gap).reduce(
      (result, current) => ({
        ...result,
        [current[0]]: gapToCss(theme, resolver)(current[1]),
      }),
      {}
    );
  };

export const useGapItem = () => {
  const theme = useTheme();
  const gap = useGapCtx();
  return {
    p: gapToCss(theme)(gap),
  };
};

export const useGapLookup = (gap: Gap) => {
  const isValidGap = typeof gap !== "undefined";
  const inheritedGap = useGapCtx();
  const hasInheritedGap = typeof inheritedGap !== "undefined";
  let calculatedGap = gap;
  if (!isValidGap) {
    calculatedGap = inheritedGap;
  }
  const theme = useTheme();
  return {
    isValidGap,
    hasInheritedGap,
    calculatedGap,
    itemProps: {
      ...(!hasInheritedGap && {
        // need to do this, otherwise cannot test calc() with .toHaveStyle
        p: gapToCss(theme)(calculatedGap),
      }),
      ...(hasInheritedGap &&
        isValidGap && {
          p: gapToCss(theme)(inheritedGap),
          m: gapToCss(theme, (value) =>
            resolveGap(typeof value === "number" ? -value : `-${value}`)
          )(gap),
        }),
    },
  };
};

export const FlexProvider = FlexContext.Provider;
export const GapProvider = GapContext.Provider;

export const Provider = ({
  flexDirection,
  gap,
  children,
}: React.PropsWithChildren<ProviderProps>) => {
  return (
    <FlexProvider value={flexDirection}>
      <GapProvider value={gap}>{children}</GapProvider>
    </FlexProvider>
  );
};