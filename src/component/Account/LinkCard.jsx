import { memo } from "react";
import format from "date-fns/format";
import './Account.css'
import activity from "../../assets/activity.png"

const LinkCard = ({id, createdAt, longURL, shortCode, name, totalClicks, copyLink, deleteLinks,}) => {
    const shortURL = `${window.location.host}/${shortCode}`

  return (
  <>
    

    <div className="container-top">
      <h3>Created at {format(createdAt, "d MMM, HH:mm")}</h3>
    </div>
    <div className="container">
      <div className="url-card">
        <div className="urlcardsection">
          <div className="long-url">
            <p>{name}</p>
            <p
              style={{ fontSize: "16px", fontWeight: "100", paddingTop: "2px" }}
            >
              { longURL }
            </p>
          </div>

          <div className="short-url">
            <h4>{shortCode}</h4>
            <button onClick={() => copyLink(shortURL)} >COPY</button>
            <button onClick={() => deleteLinks(id)} >Delete</button>
          </div>
        </div>
      </div>

      <div className="statscontainer">
        <div className="urlstatscard">
          <div className="statcontent">
            <p style={{paddingRiight: "12px"}}> {totalClicks}</p>
            <img src={activity} alt="illustrationicon" />
          </div>

          <div className="totalclicks" style={{ fontSize: "16px", fontWeight: "100", paddingTop: "2px" }}>
            {" "}
            Total clicks{" "}
          </div>
        </div>
      </div>
    </div>
    <div className="break-line"> </div>
  </>)

;};

export default memo(LinkCard);
