import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from "react-router-dom";

export const Header = ({type}) => {

  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate : new Date(),
      key:'selection'
    }
  ])

  const [openOptions, setOpenOptions] = useState(false)

  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:0
  })

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions(prev => { return {
      ...prev, 
      [name] : operation === "i" ? options[name] +1 : options[name] -1
    }})
  }

  const handleSearch = () => {
    navigate("/hotels", {state:{destination,date,options}})
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attraction</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>

        </div>

        { type !== "list" &&
          <> 
            <h1 className="headerTitle">Lorem ipsum dolor sit adipisicing elit</h1>
            <p className="headerDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatem recusandae alias excepturi! Dolorum, minima? In, </p>
            <button className="headerBtn">Sing in / Register</button>

            <div className="headerSeach">

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input type="text" placeholder="Where are you goint?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
              </div>


              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange 
                  editableDateInputs={true} 
                  onChange={item => 
                  setDate([item.selection])}  
                  moveRangeOnFirstSelection={false} 
                  ranges={date} 
                  className="date"
                  minDate={new Date()}
                /> }
              </div>


              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>

                {openOptions && <div className="options">

                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")} >-</button>
                      <span className="optionCounterNumber">{options.adult}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("adult", "i")} >+</button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")} >-</button>
                      <span className="optionCounterNumber">{options.children}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("children", "i")} >+</button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button disabled={options.room <= 0} className="optionCounterButton" onClick={() => handleOption("room", "d")} >-</button>
                      <span className="optionCounterNumber">{options.room}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("room", "i")} >+</button>
                    </div>
                  </div>

                </div> }
              </div>

              <div className="headerSearchItem">
                <botton className="headerBtn" onClick={handleSearch}>Search</botton>
              </div>

            </div> 
        </>
        }

      </div>
    </div>
  )
}
