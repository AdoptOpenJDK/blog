import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialBar = () => {
  return (
    <>
      <div className="social-icon align-center inline-block">
        <a
          href="https://twitter.com/adoptopenjdk"
          target="_blank"
          className="light-link no-underline"
        >
          <span className="fa-stack fa-lg" style={{ fontSize: "1.10em" }}>
            <i className="fa fa-twitter fa-stack-1x fa-social-icon" />
          </span>
        </a>
      </div>
      <div className="social-icon align-center inline-block">
        <a
          href="https://www.facebook.com/adoptopenjdk"
          target="_blank"
          className="light-link no-underline"
        >
          <span className="fa-stack fa-lg" style={{ fontSize: "1.10em" }}>
            <i className="fa fa-facebook fa-stack-1x fa-social-icon" />
          </span>
        </a>
      </div>
      <div className="social-icon align-center inline-block">
        <a
          href="https://www.youtube.com/c/AdoptOpenJDK"
          target="_blank"
          className="light-link no-underline"
        >
          <span className="fa-stack fa-lg" style={{ fontSize: "1.10em" }}>
            <i className="fa fa-youtube-play fa-stack-1x fa-social-icon" />
          </span>
        </a>
      </div>
      <div className="social-icon align-center inline-block">
        <a
          href="https://www.twitch.tv/adoptopenjdk"
          target="_blank"
          className="light-link no-underline"
        >
          <span className="fa-stack fa-lg" style={{ fontSize: "1.10em" }}>
            <i className="fa fa-twitch fa-stack-1x fa-social-icon" />
          </span>
        </a>
      </div>
    </>
  )
}

export default SocialBar
