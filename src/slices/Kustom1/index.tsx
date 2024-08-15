import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Kustom1`.
 */
export type Kustom1Props = SliceComponentProps<Content.Kustom1Slice>;

/**
 * Component for "Kustom1" Slices.
 */
const Kustom1 = ({ slice }: Kustom1Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for kustom1 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Kustom1;
