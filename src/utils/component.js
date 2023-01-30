import kebabCase from 'lodash.kebabcase';
import classNames from 'classnames';

export function getModifiers(block, props) {
  return Object
    .keys(props)
    .reduce((modifiers, modifier) => {
      if (props[modifier]) {
        modifiers.push(`${block}--${kebabCase(modifier)}`);
      }

      return modifiers;
    }, []);
}

function handleSpacePressToClick(event) {
  if (![' ', 'Spacebar', 'Enter'].includes(event.key)) {
    return;
  }
  event.preventDefault();
  event.target.click();
}

export function getDynamicButtonProps({ as = 'button', disabled = false } = {}) {
  const tabIndex = disabled ? '-1' : '0';

  return as === 'button' ? {
    type: 'button',
    tabIndex,
  } : {
    role: 'button',
    onKeyPress: handleSpacePressToClick,
    tabIndex,
  };
}
export function classNameFactory(blockClassName) {
  return (...args) => {
    let [elmName, modifiers = {}] = args;
    if (typeof args[0] === 'object') {
      modifiers = elmName;
      elmName = null;
    }
    const rootClass = `${blockClassName}${elmName ? `__${elmName}` : ''}`;

    return classNames(
      rootClass,
      getModifiers(rootClass, modifiers),
    );
  };
}

export function convertToPersianDigits(digits) {
  const persian = {
    0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹',
  };

  return Array.from(`${digits}`).map((num) => persian[num]).join('');
}

export function getRandomID() {
  return Math.floor(Math.random() * 1000000000).toString(26);
}
