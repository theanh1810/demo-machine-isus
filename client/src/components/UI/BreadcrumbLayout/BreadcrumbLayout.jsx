import { Breadcrumb } from 'antd';
import './Breadcrumb.css';
import { HomeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreadcrumbLayout = ({LinkSecond, NameSecond, LinkThird, NameThird}) => (

    <Breadcrumb
      style={{
        margin: '0 0 10px',
      }}
    >
      <Breadcrumb.Item><Link to="/"><HomeFilled /></Link></Breadcrumb.Item>
      <Breadcrumb.Item><Link to={LinkSecond}>{NameSecond}</Link></Breadcrumb.Item>
      {LinkThird && NameThird && (
        <Breadcrumb.Item>
          <Link to={LinkThird}>{NameThird}</Link>
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
);

BreadcrumbLayout.propTypes = {
  LinkSecond: PropTypes.elementType.isRequired, 
  NameSecond: PropTypes.string,
  LinkThird: PropTypes.elementType.isRequired, 
  NameThird: PropTypes.string,
};


export default BreadcrumbLayout;