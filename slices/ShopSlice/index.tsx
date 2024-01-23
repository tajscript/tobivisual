import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";

/**
 * Props for `ShopSlice`.
 */
export type ShopSliceProps = SliceComponentProps<Content.ShopSliceSlice>;

/**
 * Component for "ShopSlice" Slices.
 */
const ShopSlice = async ({ slice }: ShopSliceProps): Promise<JSX.Element> => {

  const client = createClient();

  const products = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.featured) && item.featured.uid
        ) {
          return client.getByUID("featuredart", item.featured.uid)
        }
    })
  )

  console.log(products)


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <div>
        {products.map((item, index) => item && (
          <div key={index}>
            {item.data.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopSlice;
