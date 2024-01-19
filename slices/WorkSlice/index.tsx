import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WorkSlice`.
 */
export type WorkSliceProps = SliceComponentProps<Content.WorkSliceSlice>;

/**
 * Component for "WorkSlice" Slices.
 */
const WorkSlice = ({ slice }: WorkSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for work_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default WorkSlice;
