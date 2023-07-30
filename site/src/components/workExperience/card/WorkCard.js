import './WorkCard.css'
import {useState} from 'react'

function WorkCard(props) {
  const [readMore, setReadMore] = useState(false);
  let description = props.item.description;
  const useReadMore = description.length > 100;

  if (useReadMore) {
    description = description.substring(0, 99);
  }

  return (
    <div className={"work-card " + (props.item.fixed == "true" || props.showMore ? "show" : "hide")} data-testid="work-card" key={`${props.index}-work-card`}>
      <div className="work-card-header">
        <div className="work-card-company-position">
          <h2 className="company-work-card item" data-testid="company-work-card" key={`${props.index}-company-work-card`}>{props.item.company}</h2>
          <p className="position-work-card item" data-testid="position-work-card" key={`${props.index}-position-work-card`}>{props.item.position}</p>
        </div>
        <div className="work-card-location-date">
          <p className="location-work-card item" data-testid="location-work-card" key={`${props.index}-location-work-card`}>{props.item.location}</p>
          <p className="start-end-work-card item" data-testid="start-end-work-card" key={`${props.index}-start-end-work-card`}>{props.item.start} - {props.item.end}</p>
        </div>
      </div>
      <div>
        <p className="description-work-card" data-testid="description-work-card" key={`${props.index}-description-work-card`}>
          {readMore ? props.item.description : description}
          {
            useReadMore ?
            <a className="description-work-card-read-more" data-testid="description-work-card-read-more" onClick={() => (setReadMore(!readMore))}>{readMore ? " - Read Less..." : " - Read More..."}</a>
            : ""
          }
        </p>

        <ul className="techs-work-card" data-testid="techs-work-card" key={`${props.index}-techs-work-card`}>
          {props.item.techs.map((item, index) => (
            <li key={`${index}-${props.index}-tech-item-work-card`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WorkCard
