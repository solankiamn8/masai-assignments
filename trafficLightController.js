function trafficLight(callback) {
    let lights = ['Red', 'Green', 'Yellow']
    let index = 0
    let cycleCount = 0
    let seconds = 0
    
    function changeLight() {
        let currentLight = lights[index]
        callback(currentLight, seconds)

        seconds += 4

        index = (index + 1) % 3
        cycleCount++
        if(cycleCount >= 3){
            clearInterval(lightInterval)
        }
    }

    lightInterval = setInterval(changeLight, 4000)
}

function onLightChange(light, seconds){
    console.log(`Light is now: ${light} at ${seconds}seconds`)
}

trafficLight(onLightChange);









// Traffic Signal Controller (Callback & setInterval)\n \n A traffic light cycles through "Red" â†’ "Green" â†’ "Yellow" every 4 seconds.\n \n Task:\n \n

// Implement trafficLight(callback).\n
// Use setInterval to change the light every 4 seconds.\n
// Call the callback function with the current light.\n
// Stop after 3 cycles.\n \n Example Usage:\n \n
// trafficLight((color) => console.log(`Light is now: ${color}`));\n
// \n
// // Logs: "Light is now: Red" â†’ "Green" â†’ "Yellow" â†’ Stops after 3 cycles\n
// \n
// ```\n
// \n
// \n