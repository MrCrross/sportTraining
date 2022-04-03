const LEAD_ZERO = /^0+/;
const NOT_NUMBERS = /[^\d]/g;

const formatInput = input =>
    input.value.replace(NOT_NUMBERS, '').replace(LEAD_ZERO, '');
