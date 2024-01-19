import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactSlice`.
 */
export type ContactSliceProps = SliceComponentProps<Content.ContactSliceSlice>;

/**
 * Component for "ContactSlice" Slices.
 */
const ContactSlice = ({ slice }: ContactSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContactSlice;
