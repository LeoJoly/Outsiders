// == Package imports
import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown } from "react-icons/io";

const SportsCat = ({ category, isOpen, setIsOpen }) => {
  // defines arrow style
  const arrowCSS = isOpen === category.title
    ? 'category__header__arrow category__header__arrow--active'
    : 'category__header__arrow'

  // defines content style
  const contentCSS = isOpen === category.title
    ? 'category__content category__content--active'
    : 'category__content'

  const toggleOpen = () => {
    if (isOpen !== category.title) {
      setIsOpen(category.title)
    } else {
      setIsOpen('');
    }
  }

  return (
    <section className={`category category--${category.title.toLowerCase()}`}>
      <div
        className={`category__header category__header--${category.title.toLowerCase()}`}
        onClick={toggleOpen}
      >
        <h2 className="category__header__title">
          {category.title}
        </h2>
        <div className={arrowCSS}>
          <IoIosArrowDown />
        </div>
      </div>
      <div className={contentCSS}>
        {category.sports.map((s) => {
          return <p key={s.id}>{s.title}</p>
        })}
      </div>
    </section>
  );
};

SportsCat.propTypes = {
  category: PropTypes.object.isRequired,
  isOpen: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}

export default SportsCat;