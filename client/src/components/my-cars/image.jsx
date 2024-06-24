const getImageUrl = (src) => {
  return src && src.includes('https://')
    ? src
    : 'http://localhost:4000/uploads/' + src;
};

const Image = ({ src, ...rest }) => {
  const completeUrl = getImageUrl(src);
  return (
    <>
      <img {...rest} src={completeUrl} alt={''} />
    </>
  );
};

export default Image;
export { getImageUrl };
