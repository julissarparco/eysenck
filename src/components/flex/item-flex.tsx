import Box from "@mui/material/Box";
import cx from 'clsx';
import { useFlexStyles, useGapItem } from "./flex-core";
import { ItemFlexProps } from "./flex.types";

const ItemFlex = ({
  className,
  position,
  cssPosition,
  grow,
  shrink,
  stretched,
  gapDisabled,
  ...props
}: ItemFlexProps) => {
  const flexStyles = useFlexStyles(position);
  const itemProps = useGapItem();

  return (
    <>
      <Box
        className={cx("FlexItem", className)}
        {...flexStyles}
        {...(!gapDisabled && itemProps)}
        flexGrow={typeof grow === "boolean" ? 1 : grow}
        {...(stretched && { flexGrow: 100000 })}
        flexShrink={shrink}
        {...props}
        position={cssPosition}
      />
    </>
  );
};

export default ItemFlex;
