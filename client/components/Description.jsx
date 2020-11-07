import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header.jsx';

const DescriptionItemStyle = styled.ul`
  display: flex;

`;
const DescriptionListStyle = styled.li`
  display: inline-block
  list-style-type: none;
  flex: 0 1 autol
`;

const DescriptionStyle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 16 px;
  color: #A9A9A9;
  margin: 50px ;
`;
const StyledMore= styled.a`
  margin-left: 10px;
  color: #1a73e8;
  cursor: pointer;
`;
const Description = ({ description, categoryBrand }) => (
  <div>
    <DescriptionItemStyle>

      {categoryBrand.map((item, index) => (
        <DescriptionListStyle>
          <Header
            categoryBrand={item}
          // eslint-disable-next-line react/no-array-index-key
            index={index}
          />
        </DescriptionListStyle>
      ))}

    </DescriptionItemStyle>
    <span></span>
    <DescriptionStyle>{ description }
    <StyledMore> more >></StyledMore>
    </DescriptionStyle>
  </div>
);

Description.propTypes = {
  description: PropTypes.string,
  categoryBrand: PropTypes.arrayOf(PropTypes.string),
};

Description.defaultProps = {
  description: null,
  categoryBrand: null,
};

export default Description;
