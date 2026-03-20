import PropTypes from "prop-types";

export default function PageTitle({ title, subtitle }) {
  return (
    <header className="section-header">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

PageTitle.defaultProps = {
  subtitle: "",
};
