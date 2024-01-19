import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ShopSlice`.
 */
export type ShopSliceProps = SliceComponentProps<Content.ShopSliceSlice>;

/**
 * Component for "ShopSlice" Slices.
 */
const ShopSlice = ({ slice }: ShopSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for shop_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default ShopSlice;
