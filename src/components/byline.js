import React from "react"
import ProfilePicInline from "./profilepicinline"
import { rhythm } from "../utils/typography"

const Byline = (props) => {
  const { author, date, identifier } = props

  const href = `./author/${identifier}`

  return (
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        marginTop: rhythm(1 / 2),
        marginBottom: rhythm(1 / 2),
        textDecoration: `none`
      }}
    >
    {date} – posted by &nbsp;<a href={href}>{author}</a> <ProfilePicInline identifier={identifier} name={author.name} />
    </div>
  )
}

export default Byline
