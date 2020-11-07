import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SizingDescription = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = ({ categoryBrand }) => (
  <div>
    <SizingDescription>
      {categoryBrand}
    </SizingDescription>
  </div>
);

Header.propTypes = {
  categoryBrand: PropTypes.string,

};

Header.defaultProps = {
  categoryBrand: null,

};
export default Header;
