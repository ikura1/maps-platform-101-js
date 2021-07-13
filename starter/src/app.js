/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function loadMapsJSAPI() {
  const googleMapsAPIKey = "AIzaSyDxduAHWk4xW4lbJaLYpMjVG5nwYuAD6CA"
  const googleMapsAPIURI = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=runApp`

  const script = document.createElement("script")
  script.src = googleMapsAPIURI
  script.defer = true
  script.async = true

  window.runApp = runApp

  document.head.appendChild(script)
}

function runApp() {
  console.log("Maps JS API loaded")
  const map = displayMap()
}

function displayMap() {
  const mapOptions = {
    center: { lat: -33.860664, lng: 151.208138 },
    zoom: 14,
  }
  //   getElement
  const mapDiv = document.getElementById("map")
  // create map instance
  return new google.maps.Map(mapDiv, mapOptions)
}

loadMapsJSAPI()
