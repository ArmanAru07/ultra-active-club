const Settimelocal = (time) => {
    let trainingTime = {};

    trainingTime[Date.now()] = { time };
    localStorage.setItem('TotalActivity', JSON.stringify(trainingTime))
    window.location.reload();
}



const getTime = () => {
    const storeTime = localStorage.getItem('TotalActivity')
    const trainingInfo = {}

    if (storeTime) {

        const trainingInfo = JSON.parse(storeTime);
        return trainingInfo
    }
    else {
        return trainingInfo;
    }
}

export { Settimelocal, getTime }