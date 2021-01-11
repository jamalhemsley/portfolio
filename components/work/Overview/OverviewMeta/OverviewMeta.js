import React from 'react';
import PropTypes from 'prop-types';
import { renderDate, renderSlug, renderText } from 'utils/content';
import { SiteLink } from 'components/common';
import { ExternalLinkIcon } from 'components/icons';

// import styles from '../Overview.module.scss';

const MetaWrapper = ({ title, children }) => (
  <div className="Overview__meta-section">
    <div className="title">{renderText(title, true)}</div>
    <ul className="text-standard list">{children}</ul>
  </div>
);

MetaWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

MetaWrapper.defaultProps = {
  title: '',
  children: [],
};

export const OverviewMeta = ({ meta, date }) => (
  <aside className="Overview__meta">
    <MetaWrapper title="Date">
      <li className="item">{renderDate(date)}</li>
    </MetaWrapper>

    {meta.map((section, index) => {
      const key = `meta-${section.slice_type}-${index}`;
      switch (section.slice_type) {
        case 'agency':
          return (
            <MetaWrapper
              key={key}
              title={section.items.length > 1 ? 'Agencies' : 'Agency'}>
              {section.items.map((item, i) => {
                const metaKey = `agency-${i}`;

                return (
                  <li key={metaKey} className="item">
                    {item.link ? (
                      <SiteLink link={item.link}>
                        <span>{item.name}</span>
                        <span className="icon">
                          <ExternalLinkIcon
                            type="gradient"
                            height={16}
                            width={16}
                          />
                        </span>
                      </SiteLink>
                    ) : (
                      renderText(item.name, true)
                    )}
                  </li>
                );
              })}
            </MetaWrapper>
          );

        case 'contributors':
          return (
            <MetaWrapper key={key} title="Contributors">
              {section.items.map((item, i) => {
                const metaKey = `contributor-${i}`;

                return (
                  <li key={metaKey} className="item">
                    {item.link ? (
                      <SiteLink link={item.link}>
                        <span>{item.name}</span>
                        <span className="icon">
                          <ExternalLinkIcon
                            type="gradient"
                            height={16}
                            width={16}
                          />
                        </span>
                      </SiteLink>
                    ) : (
                      renderText(item.name, true)
                    )}
                  </li>
                );
              })}
            </MetaWrapper>
          );

        case 'roles':
          return (
            <MetaWrapper
              key={key}
              title={section.items.length > 1 ? 'Roles' : 'Role'}>
              {section.items.map((item, i) => {
                const metaKey = `role-${i}`;

                return (
                  <li key={metaKey} className="item">
                    {renderText(item.role, true)}
                  </li>
                );
              })}
            </MetaWrapper>
          );

        case 'technologies':
          return (
            <MetaWrapper key={key} title="Technologies">
              {section.items.map((item, i) => {
                const metaKey = `technology-${i}`;

                return (
                  <li key={metaKey} className="item">
                    {renderText(item.name)}
                  </li>
                );
              })}
            </MetaWrapper>
          );

        default:
          return null;
      }
    })}
  </aside>
);

OverviewMeta.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.shape({})),
  date: PropTypes.string,
};

OverviewMeta.defaultProps = {
  meta: [],
  date: '',
};

export default OverviewMeta;
