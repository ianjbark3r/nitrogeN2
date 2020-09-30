import heroBg from './Images/hero-bg.jpg'

// Common styles
const fontColor = "#4D4D4D"
const lightFontColor = "#FFFFFF"
const servicesColor = "#0C83FA"
const apptsColor = "#E51C23"

export const colClasses = "col-12 col-md-8"

export const rowClasses = "row justify-content-center"

export const titleClasses = "display-4 font-weight-bold"

export const hrStyles = {
  height: "2px",
  borderWidth: "0",
  color: `${fontColor}`,
  backgroundColor: `${fontColor}`
}

export const lightHrStyles = {
  height: "2px",
  borderWidth: "0",
  color: `${lightFontColor}`,
  backgroundColor: `${lightFontColor}`
}


// Hero
export const heroRowStyles = {
  backgroundImage: `url(${heroBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100vh",
  paddingTop: "25vh"
}

export const heroContentStyles = {
  color: `${lightFontColor}`,
  textAlign: "center"
}

// Hero buttons
export const buttonClasses = "btn mx-2 mt-5 px-4 text-uppercase"

export const servicesButtonStyles = {
  background: `${servicesColor}`,
  borderRadius: "0",
  color: "white"
}

export const apptsButtonStyles = {
  background: `${apptsColor}`,
  borderRadius: "0",
  color: "white"
}

export const whyButtonStyles = {
  background: "#FFFFFF",
  borderRadius: "0"
}


// Info
export const infoContentClasses = "col-12 col-md-4"

export const infoRowStyles = {
  paddingTop: "12vh",
}

export const infoColStyles = {
  color: `${fontColor}`,
  paddingTop: "2rem"
}

export const infoContentStyles = {
  paddingBottom: "17vh"
}


// Services
export const servicesContentClasses = "col-12 col-md-4"

export const servicesH1Classes = "py-2"

export const servicesH3Classes = "pt-4 pb-2"

export const servicesHOOClasses = "col-12 col-md-8"

export const servicesRowStyles = {
  backgroundColor: `${servicesColor}`,
  border: `6px solid ${servicesColor}`,
  paddingTop: "12vh"
}

export const servicesColStyles = {
  color: `${lightFontColor}`,
  fontSize: "1.2rem"
}

export const servicesContentStyles = {
  backgroundColor: `${servicesColor}`,
  paddingBottom: "17vh"
}

export const servicesHOOStyles = {
  backgroundColor: `${servicesColor}`,
  border: `6px solid ${servicesColor}`,
  paddingBottom: "2vh"
}


// Booking
export const bookingRowStyles = {
  background: `${apptsColor}`,
  paddingTop: "12vh",
  height: "100vh"
}

export const bookingColStyles = {
  color: `${lightFontColor}`
}


// Footer
export const footerRowStyles = {
  paddingTop: "4vh",
  paddingBottom: "8vh"
}

export const footerColStyles = {
  fontWeight: "bold",
  textAlign: "right"
}