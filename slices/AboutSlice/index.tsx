import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutSlice`.
 */
export type AboutSliceProps = SliceComponentProps<Content.AboutSliceSlice>;

/**
 * Component for "AboutSlice" Slices.
 */
const AboutSlice = ({ slice }: AboutSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for about_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AboutSlice;
