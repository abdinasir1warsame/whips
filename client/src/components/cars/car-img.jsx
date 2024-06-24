import Image from '../my-cars/image';
const CarImg = ({ car, index = 0, className = null }) => {
  if (!car.photo?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }

  return (
    <>
      <Image className={className} src={car.photo[index]} alt="" />
    </>
  );
};

export default CarImg;
