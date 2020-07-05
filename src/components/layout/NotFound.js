import React from 'react';

const NotFound = () => {
  return (
    <section className='wrapper style5'>
      <div className='inner'>
        <h1 className='x-large text-primary'>
          <i className='fas fa-exclamation-triangle' /> Страница не найдена
        </h1>
        <p className='large'>Такой страницы не существует :(</p>
      </div>
    </section>
  );
};

export default NotFound;
