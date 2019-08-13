/* ---------------------------------------------------------------
                    BOILERPLATE - DATATABLE, SEARCHABLE
-----------------------------------------------------------------

A boilerplate searchable datatable.

*/

// --------------------------- IMPORTS ---------------------------

// My imports
import { loadAndProcessData } from "./loadAndProcessData";
import { createDataTable } from './dataTable'

// -------------------------- LOAD DATA + RENDER ----------------------------------

loadAndProcessData().then(data => {

  // CREATE DATA TABLE
  createDataTable(data)

})


