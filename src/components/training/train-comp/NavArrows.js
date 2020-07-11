import React from 'react';
import PropTypes from 'prop-types';

export default function NavArrows({
  onLeftClick,
  onRightClick,
  isPrev,
  children
}) {
  return (
    <div className="sf-nav-arrows">
      <div
        className="sf-nav-arrows--arrow-container sf-nav-arrows--left-arrow-container"
        onClick={onLeftClick}
      >
        {isPrev ? null : <div className="sf-nav-arrows--arrow"><i class="fas fa-arrow-left"></i></div>}
      </div>
      {children}
      <div
        className="sf-nav-arrows--arrow-container sf-nav-arrows--right-arrow-container"
        onClick={onRightClick}
      >
        <div className="sf-nav-arrows--arrow"><i className="fas fa-arrow-right"></i></div>
      </div>
      <style jsx="true">{`
        .sf-nav-arrows--arrow-container.sf-nav-arrows--left-arrow-container {
          visibility: ${isPrev ? 'hidden' : 'visible'};
        }
      `}</style>
    </div>
  );
}

NavArrows.propTypes = {
  onLeftClick: PropTypes.func,
  onRightClick: PropTypes.func,
  isPrev: PropTypes.bool,
  children: PropTypes.node
};
