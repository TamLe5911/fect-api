import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <>
      <h1>Slug: {slug}</h1>
    </>
  );
};

export default Product;
