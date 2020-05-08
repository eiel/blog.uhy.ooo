import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../../utils/typography"
import { mainColor } from "../../utils/color"

type Props = {
  tableOfContents: string
  className?: string
}

const TOCInner: React.FunctionComponent<Props> = ({
  tableOfContents,
  className,
}) => {
  return (
    <nav
      className={className}
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
  )
}

export const TOC = styled(TOCInner)`
  position: sticky;
  top: 0;
  padding: ${rhythm(1)} 0 0 ${rhythm(0.25)};

  ${scale(-0.25)};
  line-height: 1.25em;

  ul,
  li {
    margin: 0;
    list-style-type: none;
  }

  a {
    color: ${mainColor.normal};
    text-decoration: none;
  }

  li > ul {
    border-left: 1px solid ${mainColor.light};
    margin-left: ${rhythm(0.25)};
    padding-left: ${rhythm(0.25)};
  }

  li > p {
    margin: 0 0 ${rhythm(0.5)} 0;
  }
`