import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './TitleLayout.scss';
import { Button, Image } from '../../components';

const TitleLayout = ({
  title,
  refName,
  children,
  allowExpand,
  titleClasses,
  titleRowClasses,
  titleContainerClasses,
  isHeader,
  ...rest
}) => {
  const [isShowChildren, setIsShowChildren] = useState(true);

  const toggleIsShowHandler = () => {
    setIsShowChildren(!isShowChildren);
  };

  return (
    <div ref={refName} className={titleContainerClasses}>
      <div
        style={{
          marginBottom: isShowChildren ? 15 : 0,
        }}
        className={classNames(styles.row, {
          [titleRowClasses]: titleRowClasses,
        })}
      >
        {isHeader ? (
          <h1
            {...rest}
            className={titleClasses}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <h2
            {...rest}
            className={titleClasses}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <Button onClick={toggleIsShowHandler}>
          {allowExpand && (
            <Image
              className={classNames(styles.rowIcon, {
                [styles.rowIconReversed]: !isShowChildren,
              })}
              src="/img/upArrow.svg"
              alt="hide"
            />
          )}
        </Button>
      </div>

      <div
        className={classNames(styles.rowContent, {
          [styles.rowContentHidden]: !isShowChildren,
        })}
      >
        {children}
      </div>
    </div>
  );
};

TitleLayout.defaultProps = {
  refName: null,
  titleClasses: '',
  allowExpand: true,
  titleRowClasses: '',
  titleContainerClasses: '',
  isHeader: false,
};

TitleLayout.propTypes = {
  refName: PropTypes.any,
  allowExpand: PropTypes.bool,
  titleClasses: PropTypes.string,
  title: PropTypes.any.isRequired,
  titleRowClasses: PropTypes.string,
  children: PropTypes.any.isRequired,
  titleContainerClasses: PropTypes.string,
  isHeader: PropTypes.bool,
};

export default TitleLayout;
