import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'

import { Font, SideBar } from '../shared';

export const LeftSideBar = () => {
  return (
    <SideBar>
      <Font href="https://github.com/VoChrisK" target="_blank">
        <FontAwesomeIcon icon={ faGithub } />
      </Font>
      <Font href="https://www.linkedin.com/in/chris-vo-/" target="_blank">
        <FontAwesomeIcon icon={ faLinkedinIn } />
      </Font>
      <Font href="mailto:vo.chris.k@gmail.com" target="_blank">
        <FontAwesomeIcon icon={ faEnvelope } />
      </Font>
      <Font href="" target="_blank">
        <FontAwesomeIcon icon={ faFileLines } />
      </Font>
    </SideBar>
  );
};