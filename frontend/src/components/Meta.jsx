import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'BookishBazaar - online shopping platform for Books',
  description: 'We sell the best books for cheap',
  keywords: 'books, buy books, cheap books',
};

export default Meta;
