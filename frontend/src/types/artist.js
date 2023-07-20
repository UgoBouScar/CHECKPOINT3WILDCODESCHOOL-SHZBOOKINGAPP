import PropTypes from "prop-types";

const ArtisteType = {
  id: PropTypes.number,
  titre: PropTypes.string,
  style: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  legende: PropTypes.string,
  description: PropTypes.string,
};

export default ArtisteType;
