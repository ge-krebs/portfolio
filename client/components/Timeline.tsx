//import the icons as below once set up
import workIcon from '/images/briefcase.png'
import educationIcon from '/images/graduation-cap.png'

import timeline from '../data/timeline'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Timeline() {
  //move to css?
  const iconStyle = { background: 'plum' }

  return (
    <div id="experience">
      <h1 className="title">Experience</h1>
      <img src="workIcon" alt="" />
      <VerticalTimeline>
        {timeline.map((element) => {
          // const isWorkIcon = element.icon === 'work'
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={iconStyle}
              // icon={isWorkIcon ? workIcon : educationIcon}
            >
              <h2 className="vertical-timeline-element-title">
                {element.title}
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                {element.location}
              </h4>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline

//<a href="https://www.flaticon.com/free-icons/education" title="education icons">Education icons created by Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/bag" title="bag icons">Bag icons created by Dimitry Miroliubov - Flaticon</a>
