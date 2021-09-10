import ContentLoader from 'react-content-loader';

const MovieDetailLoader = () => (
  <ContentLoader
    speed={1}
    width="1043"
    height={180}
    backgroundColor="#6C6C6C"
    foregroundColor="#525252"
  >
    <rect x="0" y="0" rx="10" ry="10" width="1043" height="161" />
  </ContentLoader>
);

export default MovieDetailLoader;
