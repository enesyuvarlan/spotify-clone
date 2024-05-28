import {createElement} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({as, size, variant, className, children, ...props}) {
  return createElement(as, {
    type: 'button',
    className: classNames('rounded-full block flex justify-center items-center font-bold transition-colors', {
      "px-4 h-8 text-sm": size === 'small',
      "px-4 h-9": size === 'normal',
      "px-4 text-[17px] h-[52px] w-full": size === 'large',
      "bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white": variant === 'primary',
      "bg-[#eff3f4] hover:bg-[#d7dbdc] text-black": variant === 'white',
      "bg-[#15202b] border border-[#536471] hover:bg-[#f4212e1a] hover:border-[#67070f] hover:text-[#f4212e] text-white": variant === 'white-outline',
      [className]: true
    }),
    ...props
  }, children)
}

Button.propTypes = {
  as: PropTypes.any,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
  props: PropTypes.object,
  className: PropTypes.string,
}
Button.defaultProps = {
  as: 'button',
  size: 'normal',
  variant: 'primnary'
}
