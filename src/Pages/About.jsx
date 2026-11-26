import React from 'react'
import PageBanner from '../Component/PageBanner'
import OurStory from '../Component/about/OurStory'
import WhoWeAre from '../Component/about/WhoWeAre'
import WhyChooseUs from '../Component/about/WhyChooseUs'
import MissionVision from '../Component/about/MissionVision'
import OurPromise from '../Component/about/OurPromise'

const About = () => {
  return (
    <div>
        <PageBanner 
        title="About Us"
        subtitle="Where Every Movie Becomes an Experience."
        backgroundImage="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80"
        />

        {/* Who we are */}
        <WhoWeAre />

        {/* Our story */}
        <OurStory />

        {/* Mission and Vision */}
        <MissionVision />

        {/* Why choose us */}
        <WhyChooseUs />

        {/*Our Promise */}
        <OurPromise />
    </div>
  )
}

export default About