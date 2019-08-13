/* ---------------------------------------------------------------
                MODULE: LOAD AND PROCESS DATA
-----------------------------------------------------------------*/

import { csv } from "d3-fetch";
import { replaceLeaType } from './parse'

export const loadAndProcessData = () =>
  // GETTING DATA USING PROMISE ALL
  // Promise all gets all data before continuing
  Promise.all([
    csv("static/dummy.csv")
  ]).then(([csvData]) => {

    // PARSE CSVDATA
    // Making sure that object keys are in correct format
    csvData.forEach(function(d) {
      d.turnover_percent = +(+d.turnover_percent * 100).toFixed(1);
      d.turnover = +d.turnover;
      d.total_teachers = +d.total_teachers;
      d.lea_type = replaceLeaType(d.lea_type)
    });

    return csvData;
  });
