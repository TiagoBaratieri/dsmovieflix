import ContentLoader from 'react-content-loader';
import { generateList } from 'util/list';

const MovieCardLoader = () => {
    const loaderItems = generateList(4);
    return (
      <>
        {loaderItems.map((item) => (
          <ContentLoader
            key={item}
            speed={1}
            width={270}
            height={322}
            viewBox="0 0 250 335"
            backgroundColor="#6C6C6C"
            foregroundColor="#525252"
          >
            <rect x="0" y="2" rx="10" ry="10" width="250" height="335" />
          </ContentLoader>
        ))}
      </>
    );
  };
  
  export default MovieCardLoader;
  