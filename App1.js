import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Autocomplete from '@material-ui/lab/Autocomplete';

function App1() {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selectVal, setSelectVal] = useState();
  const handleClose = () => {
    console.log("close");
    setShow(false);
  };
  const handleShow = () => {
    console.log("open");
    setShow(true);
  };
  const ProgLang = [
    // "MBA",
    // "Media",
    // "Law",
    // "Humanities",
    // "Architecture",
    // "Sales",
    // "Mechanical Engineering",
    // "Chemical Engineering",
    // "ASP.NET Development",
    // "Ruby on Rails",
    // "Science,Design",
    // "Electronics Engineering",
    // "Computer Science",
    // "IOS App Developmment",
    // "PHP Developmment",
    // "Python/Django Developmment",
    // "Front End Developmment",
    // "Full Stack Developmment",
    // "Informaton Technology",
    // "Engineering",
    // "Civil Engineering",
    // "Javascript Development",
    // "Biotechnology Engineering",
    // "Metallugical Engineering",
    // "Navan Architecture and Ocean Engineering",
    // "Physics",
    // "Angular.js Development",
    // "Node.js Development",
    // "Subject Matter Expert(SME)",
    // "Journalism",
    // "Film Meking",
    // "Digital Marketing",
    // "Social Media Marketing",
    // "Marketing",
    // "Backend Development",
    // "Video Marketing/Editing",
    // "Merket Business/Research",
    // "Social Work",
    // "Blockchain Develoment",
    // "UI/Ux Design",
    // "Creative Writing",
    // "Biology",
    // "Public Relations(PR)",
    // "Database Building",
    // "Web Development",
    // "Mobile App Development",
    // "Automobile Engineering",
    // "Content Writing",
    // "Copywriting",
    // "software Development",
    // "Software Testing",
    // "Wordpress Development",
    // "Photography",
    // "Psychology",
    // "Analytics",
    // "Customer Service",
  ];
  
  const SearchButton = () => (
    <IconButton className="bg-primary text-white rounded-right rounded">
      <SearchIcon className="text-white"/>
    </IconButton>
  );

  return (
    <div id="search_bar">
      {/* <div class="input-group has_cross_and_button" id="search">
            <input onFocus={()=>setModalIsOpen(true)} type="text" class="form-control focus-visible" placeholder="What are you looking for?" id="" autocomplete="off" aria-invalid="false" data-focus-visible-added=""/>
            <span class="input-group-btn search_btn_container"><button class="btn btn-input btn-primary" type="button"><i class="icon_search ic-24-search" onFocus={()=>setModalIsOpen(true)}></i>search</button></span>
        </div> */}
      <br></br>
      <div className="d-flex justify-content-center">
        <div className="input-group col-md-6 col-10 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="What are you looking for?"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onClick={handleShow}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary rounded-right"
              onClick={handleShow}
              type="button"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <div className="d-flex flex-column justify-content-center align-items-center w-100 p-3 p-md-5">
          <div className="col-md-8 col-12 p-0">
            <button className="btn my-2 p-0" onClick={handleClose}>
              <CloseIcon color="disabled" className="" fontSize="medium" />
            </button>
            <div className="d-flex flex-column mt-3">
              <div className="">
                I am looking for
                <select className="custom-select mx-2" id="inputGroupSelect01">
                 
                  <option value="1">Polkadot</option>
                  <option value="2">Kusama</option>
                  <option value="3">Moonriver</option>
                </select>
                in
              </div>
              <div>
                <div className="input-group my-4 my-md-3">
                  <div className="col-10 p-0">
                  <Autocomplete
                    options={ProgLang}
                    renderInput={(params) => <TextField {...params} fullWidth size="small" placeholder="What are you looking for?" variant="outlined" />}
                    value={selectVal}
                    onChange={(e,value) => setSelectVal(value)}
                  />
                  </div>
                  <div className="input-group-append col-2 p-0">
                    <button className="btn btn-primary rounded-right" type="button">
                      <SearchIcon />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-2">
                <div>
                  <p className="text-dark"></p>
                </div>
                <div className="d-flex flex-wrap">
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    General
                  </button>
                  <button type="button" className
                  ="m-2 btn btn-outline-secondary">
                    Meetup
                  </button>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    AMA
                  </button>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    Event
                  </button>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    Learning
                  </button>

                </div>
              </div>
              <div className="mt-4 mb-2">
                <div>
                  <p className="text-dark">POPULAR CRYPTOCURRENCY</p>
                </div>
                <div>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    Polkadot
                  </button>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    Aave
                  </button>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    Acala
                  </button>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    Anyswap
                  </button>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    Bella Protocol
                  </button>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    Binance Coin 
                  </button>
                  <button type="button" className="m-2 btn btn-outline-secondary">
                    KILT Protocol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App1;
  