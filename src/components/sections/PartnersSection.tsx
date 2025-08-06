import React from 'react';

interface PartnersSectionProps {
  className?: string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ className }) => {
  return (
    <div className={`elisc_tm_partners ${className || ''} hidden`}>
      <div className="tm_content">
        <div className="elisc_tm_title">
          <span>- Clients</span>
          <h3>Customers &amp; clients</h3>
        </div>
        <div className="partners_inner">
          <ul>
            <li>
              <div className="list_inner">
                <img src="/assets/images/partners/1.png" alt="" />
                <a className="elisc_tm_full_link" href="#"></a>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <img src="/assets/images/partners/2.png" alt="" />
                <a className="elisc_tm_full_link" href="#"></a>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <img src="/assets/images/partners/3.png" alt="" />
                <a className="elisc_tm_full_link" href="#"></a>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <img src="/assets/images/partners/4.png" alt="" />
                <a className="elisc_tm_full_link" href="#"></a>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <img src="/assets/images/partners/5.png" alt="" />
                <a className="elisc_tm_full_link" href="#"></a>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <img src="/assets/images/partners/6.png" alt="" />
                <a className="elisc_tm_full_link" href="#"></a>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <img src="/assets/images/partners/7.png" alt="" />
                <a className="elisc_tm_full_link" href="#"></a>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <img src="/assets/images/partners/8.png" alt="" />
                <a className="elisc_tm_full_link" href="#"></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;