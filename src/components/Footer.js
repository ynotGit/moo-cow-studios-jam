import React from 'react';
import _ from 'lodash';

import { Link, withPrefix } from '../utils';
import Picture from './Picture';

export default class Footer extends React.Component {
    render() {
        let page = _.get(this.props, 'page', null);
        let site = _.get(this.props, 'site', null);
        let menu = _.get(site, 'siteMetadata.main_menu', null);
        let date = new Date();
        let getYear = date.getFullYear();

        return (
            <footer className="footer">
                <div className="footer__container">
                    <Link className="footer__logo" to={withPrefix('/')}>
                        <Picture {...this.props} image={_.get(site, 'siteMetadata.logo_light', null)} cssClass={'footer__logo-image'} alt={'Site logo'} />
                    </Link>
                    <ul className="footer__nav">
                        {_.map(menu, (item, item_idx) => (
                            <li key={item_idx} className="footer__nav-item">
                                <Link to={withPrefix(_.get(item, 'url', null))} {...((_.get(item, 'title', null) === _.get(page, 'frontmatter.title', null)) ? ({ className: 'footer__nav-link footer__nav-link--active' }) : { className: 'footer__nav-link' })}>
                                    {_.get(item, 'title', null)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="footer__legal-notice">Copyright Moo Cow Design&copy; {getYear}</div>
                </div>
                <div className="footer__footer-credit">Created By&nbsp;<Link to="https://www.ynotinnovate.com">Y Not Innovate</Link></div>
            </footer >
        );
    }
}
