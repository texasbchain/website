import React from 'react'
import './Internships.css'
import teslaLogo from '../resources/tesla.png'

const Internships = () => {

  function handleCityChange() {
    var e = document.getElementById("job-level");
    if (e.value === 'sf') {
      addSf();
    }
    if (e.value === 'pa') {
      addPalo();
    }
    if (e.value === 'rem') {
      addRemote();
    }
    if (e.value === 'aus') {
      addAustin();
    }
    if (e.value === 'nyc') {
      addNyc();
    }
  }

  function handleTypeChange() {
    var e = document.getElementById("job-type");
    if (e.value === 'int') {
      addInt();
    }
    if (e.value === 'pt') {
      addPt();
    }
    if (e.value === 'ft') {
      addFt();
    }
  }

  function handleFunctionChange() {
    var e = document.getElementById("job-function");
    if (e.value === 'fe') {
      addFrt();
    }
    if (e.value === 'be') {
      addBck();
    }
    if (e.value === 'fst') {
      addFst();
    }
    if (e.value === 'mrk') {
      addMar();
    }
    if (e.value === 'fin') {
      addFin();
    }
    if (e.value === 'res') {
      addRes();
    }
  }

  function remRemote() { 
    document.getElementById("id-rem").style.display="none"; 
  }
  function remAustin() { 
    document.getElementById("id-aus").style.display="none"; 
  }
  function remSf() { 
    document.getElementById("id-sf").style.display="none"; 
  }
  function remPalo() { 
    document.getElementById("id-pa").style.display="none"; 
  }
  function remNyc() {
    document.getElementById("id-nyc").style.display="none"; 
  }
  function remInt() {
    document.getElementById("id-int").style.display="none"; 
  }
  function remFt() {
    document.getElementById("id-ft").style.display="none"; 
  }
  function remPt() {
    document.getElementById("id-pt").style.display="none"; 
  }
  function remFrt() {
    document.getElementById("id-frt").style.display="none"; 
  }
  function remBck() {
    document.getElementById("id-bck").style.display="none"; 
  }
  function remMar() {
    document.getElementById("id-mar").style.display="none"; 
  }
  function remFin() {
    document.getElementById("id-fin").style.display="none"; 
  }
  function remRes() {
    document.getElementById("id-res").style.display="none"; 
  }
  function remFst() {
    document.getElementById("id-fst").style.display="none"; 
  }
  function addRemote() { 
    document.getElementById("id-rem").style.display="block"; 
  }
  function addAustin() { 
    document.getElementById("id-aus").style.display="block"; 
  }
  function addSf() { 
    document.getElementById("id-sf").style.display="block"; 
  }
  function addPalo() { 
    document.getElementById("id-pa").style.display="block"; 
  }
  function addNyc() {
    document.getElementById("id-nyc").style.display="block"; 
  }
  function addInt() {
    document.getElementById("id-int").style.display="block"; 
  }
  function addFt() {
    document.getElementById("id-ft").style.display="block"; 
  }
  function addPt() {
    document.getElementById("id-pt").style.display="block"; 
  }
  function addFrt() {
    document.getElementById("id-frt").style.display="block"; 
  }
  function addBck() {
    document.getElementById("id-bck").style.display="block"; 
  }
  function addMar() {
    document.getElementById("id-mar").style.display="block"; 
  }
  function addFin() {
    document.getElementById("id-fin").style.display="block"; 
  }
  function addRes() {
    document.getElementById("id-res").style.display="block"; 
  }
  function addFst() {
    document.getElementById("id-fst").style.display="block"; 
  }
  return (
    <div style={{marginBottom: "200px"}}>
      <div className="jobs-title-style">
        <h1 className="jobs-title">Job Opportunities</h1>
      </div>
      {/* search bar */}
      <div className='jobs-search-wrapper'>
        <div className='jobs-search-box'>
          <div className='jobs-search-card'>
            <input className="jobs-search-input" placeholder='Job Title or Keywords' type='text'/>
            <button className='jobs-search-button'>Search</button>
          </div>
        </div>
      {/* filter box */}
      <div className='jobs-filter-box'>
        <div className='jobs-filter-dropdown'>
          <select className='jobs-filter-select' id='job-level' name='job-level' onChange={handleCityChange}>
            <option>Location</option>
            <option value='sf'>San Francisco</option>
            <option value='pa'>Palo Alto</option>
            <option value='nyc'>New York City</option>
            <option value='aus'>Austin</option>
            <option value='rem'>Remote</option>
          </select>
          <select className='jobs-filter-select' id='job-type' name='job-type' onChange={handleTypeChange}>
            <option>Type</option>
            <option value='int'>Internship</option>
            <option value='pt'>Part Time</option>
            <option value='ft'>Full Time</option> 
          </select>
          <select className='jobs-filter-select' id='job-function' name='job-function' onChange={handleFunctionChange}>
            <option>Function</option>
            <option value='fe'>Frontend</option>
            <option value='be'>Backend</option>
            <option value='fst'>Full-Stack</option>
            <option value='mrk'>Marketing</option>
            <option value='fin'>Finance</option>
            <option value='res'>Research</option> 
          </select>
        </div>
      </div>
        <div className='jobs-filter-chosen'>
          <div id="id-rem" className='jobs-chosen-card'>
            Remote <i onClick={remRemote} className='fas fa-times-circle'></i>
          </div>
          <div id="id-aus" className='jobs-chosen-card'>
            Austin <i onClick={remAustin} className='fas fa-times-circle'></i>
          </div>
          <div id="id-sf" className='jobs-chosen-card'>
            San Francisco <i onClick={remSf} className='fas fa-times-circle'></i>
          </div>
          <div id="id-pa" className='jobs-chosen-card'>
            Palo Alto <i style={{color: "#fff"}}onClick={remPalo} className='fas fa-times-circle'></i>
          </div>
          <div id="id-nyc" className='jobs-chosen-card'>
            New York City <i onClick={remNyc} className='fas fa-times-circle'></i>
          </div>
          <div id="id-int" className='jobs-chosen-card'>
            Internship <i onClick={remInt} className='fas fa-times-circle'></i>
          </div>
          <div id="id-pt" className='jobs-chosen-card'>
            Part-Time <i onClick={remPt} className='fas fa-times-circle'></i>
          </div>
          <div id="id-ft" className='jobs-chosen-card'>
            Full-Time <i onClick={remFt} className='fas fa-times-circle'></i>
          </div>
          <div id="id-frt" className='jobs-chosen-card'>
            Frontend <i onClick={remFrt}className='fas fa-times-circle'></i>
          </div>
          <div id="id-bck" className='jobs-chosen-card'>
            Backend <i onClick={remBck} className='fas fa-times-circle'></i>
          </div>
          <div id="id-mar" className='jobs-chosen-card'>
            Marketing <i onClick={remMar} className='fas fa-times-circle'></i>
          </div>
          <div id="id-fin" className='jobs-chosen-card'>
            Finance <i onClick={remFin} className='fas fa-times-circle'></i>
          </div>
          <div id="id-res" className='jobs-chosen-card'>
            Research <i onClick={remRes} className='fas fa-times-circle'></i>
          </div>
          <div id="id-fst" className='jobs-chosen-card'>
            Full-Stack <i onClick={remFst} className='fas fa-times-circle'></i>
          </div>
        </div>
      </div>
      {/* job postings */}
      <section className='jobs-list' id='jobs'>
        <div className='job-card'>
          <div className='job-name'>
            <img className='job-profile' src={teslaLogo} />
            <div className='job-detail'>
              <h4>Tesla</h4>
              <h3>Frontend Engineer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="job-label">
            <a className='label-a'>HTML</a>
            <a className='label-b'>CSS</a>
            <a className='label-c'>Solidity</a>
            <a className='label-d'>Rust</a>
            <a className='label-e'>Distributed Systems</a>
          </div>
        </div>

        <div className='job-card'>
          <div className='job-name'>
            <img className='job-profile' src={teslaLogo} />
            <div className='job-detail'>
              <h4>Tesla</h4>
              <h3>Frontend Engineer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="job-label">
            <a className='label-a'>HTML</a>
            <a className='label-b'>CSS</a>
            <a className='label-c'>Solidity</a>
            <a className='label-d'>Rust</a>
            <a className='label-e'>Distributed Systems</a>
          </div>
        </div>

        <div className='job-card'>
          <div className='job-name'>
            <img className='job-profile' src={teslaLogo} />
            <div className='job-detail'>
              <h4>Tesla</h4>
              <h3>Frontend Engineer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="job-label">
            <a className='label-c'>Solidity</a>
            <a className='label-d'>Rust</a>
            <a className='label-e'>Distributed Systems</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Internships