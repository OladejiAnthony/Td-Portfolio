import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { portfolio } from "../data/dummydata"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import { Link } from "react-router-dom"


const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(portfolio)
      return
    }
  }

  return (
    <>
      <article>
        <div className='container'>
          <Heading 
            title='Portfolio' 
          />
          <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <>
              <a
                 href={item.link}
                 target="_blank"
                 className='box' 
                 data-aos='fade-up' rel="noreferrer"
              >
                <div className='img'>
                  <div>
                    <h3>{item.cover}</h3>
                    <h4>{item.text}</h4>
                  </div> 
                </div>
                {/* <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div> */}
              </a>
              </>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
