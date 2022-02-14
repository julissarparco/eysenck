import { Provider, useGapLookup } from "./flex-core";
import { Gap, ItemFlexProps } from "./flex.types";
import cx from "clsx";
import ItemFlex from "./item-flex";

export type RowFlexProps = ItemFlexProps & {
  gap?: Gap;
  wrap?: boolean;
  children: React.ReactNode;
};

const RowFlex = ({
  className,
  children,
  gap,
  wrap,
  ...props
}: RowFlexProps) => {
  const { calculatedGap, itemProps } = useGapLookup(gap);

  return (
    <>
      <ItemFlex
        className={cx("FlexRow", className)}
        display={"flex"}
        {...(wrap && { flexWrap: "wrap" })}
        {...itemProps}
        {...props}
        gapDisabled
      >
        <Provider flexDirection={"row"} gap={calculatedGap}>
          {children}
        </Provider>
      </ItemFlex>
    </>
  );
};

export default RowFlex;
