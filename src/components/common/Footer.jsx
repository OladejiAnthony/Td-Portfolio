import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <a
            href={item.link}
            target="_blank"
          >
            <i data-aos='zoom-in'>{item.icon}</i>
          </a>
        ))}
        <p data-aos='zoom-in'>All Right Recieved 2022</p>
      </footer>
    </>
  )
}

export default Footer
