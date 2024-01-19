import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ArtSlice`.
 */
export type ArtSliceProps = SliceComponentProps<Content.ArtSliceSlice>;

/**
 * Component for "ArtSlice" Slices.
 */
const ArtSlice = ({ slice }: ArtSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for art_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default ArtSlice;
