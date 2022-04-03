const Button = {
  baseStyle: {
    py: '0',
    textTransform: 'uppercase',
    boxShadow: 'none',
    _focus: {
      boxShadow: 'none',
    },
    _disabled: {
      cursor: 'pointer !important',
    },
  },
  variants: {
    green: {
      _hover: { color: 'white' },
      bg: "green.600",
      color: "#E2E8F0",
      borderRadius: "0",
      border: '1px',
      borderColor: 'green.600',
    },
    login: {
      _hover: { color: 'white' },
      color: "#E2E8F0",
      borderRadius: "0",
      border: '1px',
      borderColor: 'green.600',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'transparent',

  },
}

export default Button