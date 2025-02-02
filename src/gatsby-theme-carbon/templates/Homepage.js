import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloudnative3.jpg';

const audience = 'developer'; // 'partners'
const bannerText = 'Cloud-Native Expertise Roadmap';

const titleCase = (title) => {
    if (!title) {
        return '';
    }

    return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}
const plural = (title) => {
    return title + 's';
}

const BannerText = () => <h1>{bannerText}</h1>;

const FirstLeftText = () => <p>{titleCase(audience)} Ecosystem</p>;

const FirstRightText = () => (
  <p>
      This content is optimised to enable {plural(audience)} to deliver cloud native solutions with Red Hat OpenShift on IBM Cloud.
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud"
    >
      IBM Cloud →
    </a>
  </p>
);

const SecondLeftText = () => <p>Cloud-Native Journey</p>;

const SecondRightText = () => (
  <p>
      These practices and assets enable {plural(audience)} to understand how to develop and deliver enterprise standard application on IBM Cloud.
  </p>
);


const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
