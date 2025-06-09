// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets a random excuse.
 * The "async" is here because it takes time to get the response from the internet.
 */
async function getExcuse() {
  try {
    const resultJSON = await fetch("https://excuser-three.vercel.app/v1/excuse")
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // Get the excuse and its category
    const excuse = jsonData[0].excuse
    const category = jsonData[0].category

    // Output
    document.getElementById("result").innerHTML =
      "<p>Excuse: " + excuse + "</br>Category: " + category + " </p>"
  } catch (error) {
    document.getElementById("result").innerHTML = "Sorry, an error has occurred. Please try again later."
  }
}
