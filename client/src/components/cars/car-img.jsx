const CarImg = ({ car, index = 0, className = null }) => {
  if (!car.photo?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }

  return (
    <>
      <img
        className={className}
        src={'http://localhost:4000/uploads/' + car.photo[index]}
        alt=""
      />
    </>
  );
};

export default CarImg;
