import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, navigation}) => (
  <header
    className="flex-initial bg-indigo-800"
  >
    <div
      className="flex justify-between items-center py-4 px-8"
    >
      <h1>
        <Link
          to="/"
          className="text-white text-3xl font-bold"
        >
          {siteTitle}
        </Link>
      </h1>
      {navigation}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
