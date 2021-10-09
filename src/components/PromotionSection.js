import React from 'react';
import _ from 'lodash';

import Picture from './Picture';
import { toStyleObj, withPrefix, Link, classNames } from '../utils';

export default class PromotionSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="content__row content__row--full-width promo__section" data-id={_.get(section, 'section_id', null)}>
                <div className="promo">
                    <Picture {...this.props} image={_.get(section, 'image', null)} alt={_.get(section, 'title', null)} />
                    <div className="promo__message-container" {...(_.get(section, 'background_image', null) ? ({ style: toStyleObj('background-image: url(\'' + withPrefix(_.get(section, 'background_image', null)) + '\')') }) : null)}>
                        <h2 className="promo__title">{_.get(section, 'title', null)}</h2>
                        <p className="promo__subtitle">{_.get(section, 'subtitle', null)}</p>
                        {_.get(section, 'cta', null) && ((() => {
                            let cta_style = _.get(section, 'cta.style', null) || 'primary';
                            return (
                                <Link className={classNames('link', 'promo__link', { 'link--light-filled': cta_style === 'primary', 'link--light': cta_style === 'secondary', 'link--light-borderless': cta_style === 'link' })} to={_.get(section, 'cta.url', null)}>
                                    {_.get(section, 'cta.title', null)}
                                </Link>
                            );
                        })())}
                    </div>
                </div>
            </section>
        );
    }
}
