import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function SidebarSection({title, children, more}) {
  return (
    <section
      className="bg-[--background-primary] mb-4 rounded-2xl border border-[color:var(--background-secondary)] overflow-hidden">
      <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[color:var(--color-base)]">
        {title}
      </h5>
      <div className="grid">
        {children}
      </div>
      {more && (
        <Link to={more}
              className="h-[52px] flex items-center px-4 text-[15px] text-[color:var(--color-base)] transition-colors hover:bg-[color:var(--background-third)]"
        >
          Show more
        </Link>
      )}
    </section>
  )

  SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
  }
  SidebarSection.defaultProps = {
    more: false
  }
}
