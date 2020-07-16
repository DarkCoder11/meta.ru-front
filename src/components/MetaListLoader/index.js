import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

const MetaListLoader = ({
  rx,
  ry,
  rows,
  speed,
  columns,
  padding,
  coverWidth,
  coverHeight,
  rectClasses,
}) => {
  const initial = 0;
  const covers = Array(columns * rows).fill(1);
  const coverHeightWithPadding = coverHeight + padding;
  const coverWidthWithPadding = coverWidth + padding;

  const rendCovers = () =>
    covers.map((_, i) => {
      const vy = Math.floor(i / columns) * coverHeightWithPadding + initial;
      const vx =
        (i * coverWidthWithPadding) % (columns * coverWidthWithPadding);

      return (
        <rect
          key={shortid.generate()}
          x={vx}
          y={vy}
          rx={rx}
          ry={ry}
          width={coverWidth}
          height={coverHeight}
          className={rectClasses}
        />
      );
    });

  return (
    <ContentLoader
      speed={speed}
      height={rows * coverHeightWithPadding}
      width={columns * coverWidthWithPadding}
    >
      {rendCovers()}
    </ContentLoader>
  );
};

MetaListLoader.defaultProps = {
  rx: 8,
  ry: 8,
  rows: 3,
  speed: 1,
  columns: 3,
  padding: 15,
  coverWidth: 216,
  coverHeight: 113,
  rectClasses: '',
};

MetaListLoader.propTypes = {
  rx: PropTypes.number,
  ry: PropTypes.number,
  rows: PropTypes.number,
  speed: PropTypes.number,
  columns: PropTypes.number,
  padding: PropTypes.number,
  coverWidth: PropTypes.number,
  coverHeight: PropTypes.number,
  rectClasses: PropTypes.string,
};

export default MetaListLoader;
