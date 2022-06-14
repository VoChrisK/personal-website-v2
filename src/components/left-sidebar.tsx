import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'

import { Icon, SideBar } from '../shared';

export const LeftSideBar = () => {
  return (
    <SideBar>
      <Icon href="https://github.com/VoChrisK" target="_blank">
        <FontAwesomeIcon icon={ faGithub } />
      </Icon>
      <Icon href="https://www.linkedin.com/in/chris-vo-/" target="_blank">
        <FontAwesomeIcon icon={ faLinkedinIn } />
      </Icon>
      <Icon href="mailto:vo.chris.k@gmail.com" target="_blank">
        <FontAwesomeIcon icon={ faEnvelope } />
      </Icon>
      <Icon href="" target="_blank">
        <FontAwesomeIcon icon={ faFileLines } />
      </Icon>
    </SideBar>
  );
};