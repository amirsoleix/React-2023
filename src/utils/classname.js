import kebabCase from 'lodash.kebabcase';

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
