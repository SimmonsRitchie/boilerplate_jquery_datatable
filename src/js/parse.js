
/* ---------------------------------------------------------------
                MODULE: PARSE
-----------------------------------------------------------------*/
/*
Functions for parsing dirty data
*/

// -------------------------- TITLE CASE ----------------------------------

// Formats strings as title case
export const titleCase = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Formats 'N/A' or 'na' or 'n a' as "n/a"
export const handleNa = (str) => {
  const regex = /^n a$|^na$|^n\/a$/i
  return str.replace(regex, "n/a")
}

// Replaces lea_type codes with actual type
export const replaceLeaType = (str) => {
  switch(str) {
    case "SD":
    return "School District"
    case "CS":
    return "Charter School"
    case "CTC":
    return "Career Technical Center"
    case "IU":
    return "Intermediate Unit"
    case "SJCI":
    return "State Juvenile Correctional Institute"
    default:
    return "n/a"
  }
}