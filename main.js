let workTime = document.querySelector(".main-work")
let lastWorkTime = document.querySelector(".last-work")
let excTime = document.querySelector(".main-excercise")
let lastExcTime = document.querySelector(".last-excercise")
let playTime = document.querySelector(".main-play")
let lastPlayTime = document.querySelector(".last-play")
let studyTime = document.querySelector(".main-study")
let lastStudyTime = document.querySelector(".last-study")
let socialTime = document.querySelector(".main-social")
let lastSocialTime = document.querySelector(".last-social")
let selfTime = document.querySelector(".main-self")
let lastSelfTime = document.querySelector(".last-self")

let dailySelect = document.querySelector(".daily")
let weeklySelect = document.querySelector(".weekly")
let monthlySelect = document.querySelector(".monthly")

let personData = {
    work: {
        day: {
            currentValue: 5,
            lastValue: 7,
        },
        week: {
            currentValue: 32,
            lastValue: 36,
        },
        month: {
            currentValue: 103,
            lastValue: 128,
        }
    },
    exc: {
        day: {
            currentValue: 1,
            lastValue: 1,
        },
        week: {
            currentValue: 4,
            lastValue: 5,
        },
        month: {
            currentValue: 11,
            lastValue: 18,
        }
    },
    play: {
        day: {
            currentValue: 1,
            lastValue: 2,
        },
        week: {
            currentValue: 10,
            lastValue: 8,
        },
        month: {
            currentValue: 23,
            lastValue: 29,
        }
    },
    social: {
        day: {
            currentValue: 1,
            lastValue: 3,
        },
        week: {
            currentValue: 5,
            lastValue: 10,
        },
        month: {
            currentValue: 21,
            lastValue: 23,
        }
    },
    study: {
        day: {
            currentValue: 0,
            lastValue: 1,
        },
        week: {
            currentValue: 4,
            lastValue: 7,
        },
        month: {
            currentValue: 13,
            lastValue: 19,
        }
    },
    self: {
        day: {
            currentValue: 0,
            lastValue: 1,
        },
        week: {
            currentValue: 2,
            lastValue: 2,
        },
        month: {
            currentValue: 7,
            lastValue: 11,
        }
    }
}


dailySelect.onclick = function() {
    weeklySelect.classList.remove("selected")
    monthlySelect.classList.remove("selected")
    dailySelect.classList.add("selected")
    workTime.innerHTML = `${personData.work.day.currentValue}hrs`;
    lastWorkTime.innerHTML = `Yesterday - ${personData.work.day.lastValue}hrs`;
    excTime.innerHTML = `${personData.exc.day.currentValue}hrs`;
    lastExcTime.innerHTML = `Yesterday - ${personData.exc.day.lastValue}hrs`;
    playTime.innerHTML = `${personData.play.day.currentValue}hrs`;
    lastPlayTime.innerHTML = `Yesterday - ${personData.play.day.lastValue}hrs`;
    studyTime.innerHTML = `${personData.study.day.currentValue}hrs`;
    lastStudyTime.innerHTML = `Yesterday - ${personData.study.day.lastValue}hrs`;
    socialTime.innerHTML = `${personData.social.day.currentValue}hrs`;
    lastSocialTime.innerHTML = `Yesterday - ${personData.social.day.lastValue}hrs`;
    selfTime.innerHTML = `${personData.self.day.currentValue}hrs`;
    lastSelfTime.innerHTML = `Yesterday - ${personData.self.day.lastValue}hrs`;
}
weeklySelect.onclick = function() {
    monthlySelect.classList.remove("selected")
    dailySelect.classList.remove("selected")
    weeklySelect.classList.add("selected")
    workTime.innerHTML = `${personData.work.week.currentValue}hrs`;
    lastWorkTime.innerHTML = `Last Week - ${personData.work.week.lastValue}hrs`;
    excTime.innerHTML = `${personData.exc.week.currentValue}hrs`;
    lastExcTime.innerHTML = `Last Week - ${personData.exc.week.lastValue}hrs`;
    playTime.innerHTML = `${personData.play.week.currentValue}hrs`;
    lastPlayTime.innerHTML = `Last Week - ${personData.play.week.lastValue}hrs`;
    studyTime.innerHTML = `${personData.study.week.currentValue}hrs`;
    lastStudyTime.innerHTML = `Last Week - ${personData.study.week.lastValue}hrs`;
    socialTime.innerHTML = `${personData.social.week.currentValue}hrs`;
    lastSocialTime.innerHTML = `Last Week - ${personData.social.week.lastValue}hrs`;
    selfTime.innerHTML = `${personData.self.week.currentValue}hrs`;
    lastSelfTime.innerHTML = `Last Week - ${personData.self.week.lastValue}hrs`;
}
monthlySelect.onclick = function() {
    weeklySelect.classList.remove("selected")
    dailySelect.classList.remove("selected")
    monthlySelect.classList.add("selected")
    workTime.innerHTML = `${personData.work.month.currentValue}hrs`;
    lastWorkTime.innerHTML = `Last Month - ${personData.work.month.lastValue}hrs`;
    excTime.innerHTML = `${personData.exc.month.currentValue}hrs`;
    lastExcTime.innerHTML = `Last Month - ${personData.exc.month.lastValue}hrs`;
    playTime.innerHTML = `${personData.play.month.currentValue}hrs`;
    lastPlayTime.innerHTML = `Last Month - ${personData.play.month.lastValue}hrs`;
    studyTime.innerHTML = `${personData.study.month.currentValue}hrs`;
    lastStudyTime.innerHTML = `Last Month - ${personData.study.month.lastValue}hrs`;
    socialTime.innerHTML = `${personData.social.month.currentValue}hrs`;
    lastSocialTime.innerHTML = `Last Month - ${personData.social.month.lastValue}hrs`;
    selfTime.innerHTML = `${personData.self.month.currentValue}hrs`;
    lastSelfTime.innerHTML = `Last Month - ${personData.self.month.lastValue}hrs`;
}