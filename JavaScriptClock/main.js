const pomodoroTimer = document.querySelector('#pomodoro-timer')

const startButton = document.querySelector('#pomodoro-start')
const pauseButton = document.querySelector('#pomodoro-pause')
const endButton = document.querySelector('#pomodoro-stop')
let currentTaskLabel = document.querySelector('#pomodoro-clock-task')
let updatedWorkSessionDuration
let updatedBreakSessionDuration

let workDurationInput = document.querySelector('#input-work-duration')
let breakDurationInput = document.querySelector('#input-break-duration')

workDurationInput.value = '25'
breakDurationInput.value = '5'

//START
startButton.addEventListener('click', () => { 
     toggleClock()
})

//PAUSE
pauseButton.addEventListener('click', () => { 
     toggleClock()
})

//END
endButton.addEventListener('click', () => { 
     toggleClock()
})

let isClockRunning = false

// in seconds = 25 minutes
let workSessionDuration = 1500
let currentTimeLeftInSession = 1500

// in seconds = 5 minutes
let breakSessionDuration = 300

//TOGGLE CLOCK
const toggleClock = reset => {
     if (reset){
          //STOP THE TIMER
     }else{
          if (isClockRunning == true){
               //PAUSE THE TIMER
               isClockRunning = false
          }else{
               //START THE TIMER
               isClockRunning = true
          }
     }
}
//STOP CLOCK
const stopClock = () => {
     // new
     displaySessionLog(type)
     clearInterval(clockTimer)
     isClockRunning = false
     currentTimeLeftInSession = workSessionDuration
     displayCurrentTimeLeftInSession()
     // new
     type = type === 'Work' ? 'Break' : 'Work'
   }
   
//CLOCK TIMER
clockTimer = setInterval(() => {
     //DECREASE TIME LEFT / INCREASE TIME SPENT
     currentTimeLeftInSession--;
},1000)

//STEP DOWN FUNCTION
const stepDown = () => {
     if(currentTimeLeftInSession > 0){
     currentTimeLeftInSession-- 
     timeSpentInCurrentSession++
     } else if (currentTimeLeftInSession == 0){
          timeSpentInCurrentSession = 0
          if(type === 'Work'){
               currentTimeLeftInSession = workSessionDuration
               displaySessionLog('Work')
               type = 'Break'
          }else{
               currentTimeLeftInSession = workSessionDuration
               type = 'Work'
               displaySessionLog('Break')
          }
     }
     displayCurrentTimeLeftInSession()
}

let timeSpentInCurrentSession = 0

const displaySessionLog = type => {
     const sessionsList = document.querySelector('#pomodoro-sessions')
     const li = document.createElement('li')
     if (type === 'Work') {
          sessionLabel = currentTaskLabel.value ? currentTaskLabel.value : 'Work'
          workSessionLabel = sessionLabel
        } else {
          sessionLabel = 'Break'
        }
     let elapsedTime = parseInt(timeSpentInCurrentSession / 60)
     elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1'

     const text = document.createTextNode('${sessionLabel} : ${elapsedTime} min')
     li.appendChild(text)
     sessionsList.appendChild(li)
}