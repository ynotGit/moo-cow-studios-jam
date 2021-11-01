import React from 'react';
import _ from 'lodash';

import { withPrefix, Link } from '../utils';

export default class ContactSection extends React.Component {
  render() {
    let section = _.get(this.props, 'section', null);
    return (
      <section className="content__row content__row--full-width contact__section" data-id={_.get(section, 'section_id', null)}>
        {_.get(section, 'image', null) && (<img src={withPrefix(_.get(section, 'image', null))} alt="" className="contact__image" />)}
        <div className="contact__text-container">
          <h3 className="contact__title">Have any questions? <br /> Contact us.</h3>

          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name:</label>
              <br />
              <input type="text" name="name" />
            </p>
            <p>
              <label>Your Email:</label>
              <br />
              <input type="email" name="email" />
            </p>
            <p>
              <label>Message:</label>
              <br />
              <textarea name="message" placeholder="Hello there! How can we help?"></textarea>
            </p>
            <p>
              <button type="submit" className="link contact__link">Send</button>
            </p>
          </form>
        </div>
      </section>
    );
  }
}
