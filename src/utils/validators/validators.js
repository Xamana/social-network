export const require = value => value ? undefined : 'Filed is required';

export const maxLength = max => value => value && value.length > max
      ? `Max length is ${max} symbols` 
      : undefined;

export const combineValidators = (...validators) => value =>
      validators.reduce((error, validator) => error || validator(value), undefined);