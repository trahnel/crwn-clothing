import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  MenuItemContainer,
  ContentContainer,
  BackgroundImageContainer,
  ContentSubtitle,
  ContentTitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
