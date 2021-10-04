import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {withPrefix, attribute, toStyleObj} from '../utils';
import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.seo.title', null) ? (_.get(this.props, 'pageContext.frontmatter.seo.title', null)) : _.get(this.props, 'pageContext.frontmatter.title', null) + ' | ' + _.get(this.props, 'pageContext.site.siteMetadata.title', null)}</title>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.seo.description', null) || ''} />
                    {_.get(this.props, 'pageContext.frontmatter.seo.robots', null) && (
                    <meta name="robots" content={_.join(_.get(this.props, 'pageContext.frontmatter.seo.robots', null), ',')}/>
                    )}
                    {_.map(_.get(this.props, 'pageContext.frontmatter.seo.extra', null), (meta, meta_idx) => {
                        let key_name = _.get(meta, 'keyName', null) || 'name';
                        return (
                          _.get(meta, 'relativeUrl', null) ? (
                            _.get(this.props, 'pageContext.site.siteMetadata.domain', null) && ((() => {
                                let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');
                                let rel_url = withPrefix(_.get(meta, 'value', null));
                                let full_url = domain + rel_url;
                                return (
                                  <meta key={meta_idx} {...(attribute(key_name, _.get(meta, 'name', null)))} content={full_url}/>
                                );
                            })())
                          ) : 
                            <meta key={meta_idx + '.1'} {...(attribute(key_name, _.get(meta, 'name', null)))} content={_.get(meta, 'value', null)}/>
                        )
                    })}
                    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.css" />
                    {_.get(this.props, 'pageContext.site.siteMetadata.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.favicon', null))}/>
                    )}
                    <body className={_.get(this.props, 'pageContext.frontmatter.template', null) + '-template palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette', null)} />
                </Helmet>
                    <div className="site-wrapper">
                        <Header {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />
                        {this.props.children}
                        <Footer {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />
                    </div>
                    <div style={toStyleObj("display: none")} id="template-params" data-api-key={_.get(this.props, 'pageContext.site.siteMetadata.snipcart_api_key', null)} data-templates-url={withPrefix('js/snipcart-templates.vue')}/>
            </React.Fragment>
        );
    }
}
