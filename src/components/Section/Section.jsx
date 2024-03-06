import propTypes from 'prop-types';

export const Section = props => {
  const { title, children } = props;
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};
