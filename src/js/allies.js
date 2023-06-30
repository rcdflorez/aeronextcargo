const LOGO_DJ_CARGO = "./img/allies-Logo DJ.png"
const LOGO_AIR_GENERAL = "./img/allies-AG Logo Cargo.png"
const LOGO_ALLIANCE = "./img/allies-AGI Logo Large Dark Blue.png"

const alliesList = [
  {
    img: LOGO_DJ_CARGO,
    link: "https://djcargo.com/",
    stations: "STI"
  },
  {
    img: LOGO_DJ_CARGO,
    link: "https://djcargo.com/",
    stations: "SDQ"
  },
  {
    img: "./img/allies-LOG - WFS CMJN.png",
    link: "https://www.wfs.aero/",
    stations: ""
  },
  {
    img: LOGO_AIR_GENERAL,
    link: "https://airgeneral.com/",
    stations: "FLL"
  },
  {
    img: LOGO_AIR_GENERAL,
    link: "https://airgeneral.com/",
    stations: "TPA"
  },
  {
    img: LOGO_AIR_GENERAL,
    link: "https://airgeneral.com/",
    stations: "MCO"
  },
  {
    img: LOGO_AIR_GENERAL,
    link: "https://airgeneral.com/",
    stations: "ORD"
  },
  {
    img: "./img/allies-JetBlueLogo.png",
    link: "https://www.jetblue.com/",
    stations: ""
  },
  {
    img: "./img/allies-LOGO_GSA_FORCE.png",
    link: "https://gsaforce.com/",
    stations: ""
  },
  {
    img: LOGO_ALLIANCE,
    link: "https://www.allianceground.com/",
    stations: "MIA"
  },
  {
    img: LOGO_ALLIANCE,
    link: "https://www.allianceground.com/",
    stations: "JFK"
  },
  {
    img: LOGO_ALLIANCE,
    link: "https://www.allianceground.com/",
    stations: "EWR"
  },
  {
    img: LOGO_ALLIANCE,
    link: "https://www.allianceground.com/",
    stations: "ATL"
  },
  {
    img: LOGO_ALLIANCE,
    link: "https://www.allianceground.com/",
    stations: "SFO"
  },
  {
    img: LOGO_ALLIANCE,
    link: "https://www.allianceground.com/",
    stations: "LAX"
  },
  {
    img: LOGO_ALLIANCE,
    link: "https://www.allianceground.com/",
    stations: "LAS"
  },
  {
    img: "./img/allies-GMD-LOGO.png",
    link: "https://www.gmdpr.com/",
    stations: ""
  },
  
  {
    img: "./img/allies-ESCM LOGO.png",
    link: "https://www.eckertseamans.com/",
    stations: ""
  },
  {
    img: "./img/allies-IBS-Logo.png",
    link: "https://www.ibsplc.com/",
    stations: ""
  },
  {
    img: "./img/allies-Logo-Altitute.png",
    link: "https://www.tenaciousaltitude.com/",
    stations: ""
  },
  
]

const alliesContainer = document.getElementById('container-allies')
if(alliesContainer){
  alliesContainer.innerHTML = alliesList.map(allie =>{
    let allieTemplate = `
      <a href="${allie.link}" target="_blank" rel="noopener noreferrer">
        <img src="${allie.img}" alt="">
        <p class="allie-stations">${allie.stations}</p>
      </a>`
    return allieTemplate
  }).join("")
}