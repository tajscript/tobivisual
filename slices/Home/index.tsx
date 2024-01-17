import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Home`.
 */
export type HomeProps = SliceComponentProps<Content.HomeSlice>;

/**
 * Component for "Home" Slices.
 */
const Home = ({ slice }: HomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home (variation: {slice.variation}) Slices
    </section>
  );
};

export default Home;
