const birdElem = document.querySelector("[data-bird]")
const BIRD_SPEED= 5
let timeSinceLastJump = Number.POSITIVE_INFINITY
const JUMP_DURATION = 125

export function setupBird(){
    setTop(window.innerHeight/2)
    document.removeEventListener("keydown", handleJump)
    document.addEventListener("keydown", handleJump)
}

export function updateBird(delta){
    if(timeSinceLastJump < JUMP_DURATION)
    {
        const a = getTop() - BIRD_SPEED 
        setTop(a)
    }
    else
    {
        const a = getTop() + BIRD_SPEED 
        setTop(a)
    }
    timeSinceLastJump += BIRD_SPEED
    
}

export function getBirdRect(){
    return birdElem.getBoundingClientRect()
}

function setTop(top){
    birdElem.style.setProperty("--bird-top", top)
}

function getTop(){
    return parseFloat(getComputedStyle(birdElem).getPropertyValue("--bird-top"))
}

function handleJump(e){
    console.log(e.code)
    if(e.code !== "Space") return

    timeSinceLastJump = 0
}
