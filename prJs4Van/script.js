document.addEventListener('DOMContentLoaded', getMyLocation)

var ourCoords = {
    latitude: 48.943190463387886, 
    longitude: 24.733861440721554
}

let watchId = null


function getMyLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError)
        var watchButton = document.getElementById("watch");
        watchButton.onclick = watchLocation;
        var clearWatchButton = document.getElementById("clearWatch")
        clearWatchButton.onclick = clearWatch;
    } else {
        alert("Oops, no geolocation support")
    }
}

function displayLocation (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude)
    let div = document.getElementById('location')
    div.innerHTML = `You are at Lalitude: ${latitude}, Longitude: ${longitude}`
    div.innerHTML += ` (with ${position.coords.accuracy} meters accuracy)`

    let km = computeDistance(position.coords, ourCoords)
    let distance = document.getElementById('distance')
    distance.innerHTML = `You are ${km} km from the College`
}

function displayError(error) {
    const errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out",
    };

    const errorMessage = errorTypes[error.code];
    if(error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    let div = document.getElementById('location')
    div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude)
    let startLongRads = degreesToRadians(startCoords.longitude)
    let destLatRads = degreesToRadians(destCoords.latitude)
    let destLongRads = degreesToRadians(destCoords.longitude)
    let Radius = 6371;

    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
    Math.cos(startLatRads) * Math.cos(destLatRads) *
    Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    let radians = (degrees * Math.PI)/100;
    return radians;
}

function watchLocation() {
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError)
}

function clearWatch() {
    if(watchId) {
        navigator.geolocation.clearWatch(watchId)
        watchId = null;
    }
}
