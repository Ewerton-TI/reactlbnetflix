import React from 'react';
import Logo from '../../assets/img/logo.png';

import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img class="Logo" src={Logo} alt="Logo lbnetflix" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/Ewerton-TI">
          Ewerton de Oliveira
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
