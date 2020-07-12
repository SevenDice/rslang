import React from 'react';

function AboutCard({ img, name, loc, tlg, vk, git, role }) {
  return (
    <div className='about-card'>
      <img src={img} alt='' className='about-card__img' />
      <div className='about-card__name'>{name}</div>
      <div className='about-card__loc'>{loc}</div>
      <div className='about-card__role'>{role}</div>

      <ul className='about-card__socials icons'>
        <li>
          <a href={tlg} className='icon brands fa-telegram'>
            <span className='label'>Telegram</span>
          </a>
        </li>
        <li>
          <a href={vk} className='icon brands fa-vk'>
            <span className='label'>VK</span>
          </a>
        </li>
        <li>
          <a href={git} className='icon brands fa-github'>
            <span className='label'>Github</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AboutCard;
