
console.log("===== FUNCTION DECLARATION =====");

console.log(sumNumbers(10, 20));

function sumNumbers(a, b) {
    return a + b;
}

console.log("===== FUNCTION EXPRESSION =====");

const multiplyNumbers = function (a, b) {
    return a * b;
};

console.log(multiplyNumbers(10, 20));

console.log("===== ARROW FUNCTION =====");

const subtractNumbers = (a, b) => {
    return a - b;
};

console.log(subtractNumbers(20, 5));

const divideNumbers = (a, b) => a / b;

console.log(divideNumbers(20, 5));

console.log("===== HOISTING =====");

console.log(checkDeviceStatus(true));

function checkDeviceStatus(isActive) {
    return isActive ? "Thiet bi dang bat" : "Thiet bi dang tat";
}

const getDeviceName = function (name) {
    return name;
};

const getDevicePower = (powerWatts) => powerWatts;

console.log(getDeviceName("Dieu hoa"));
console.log(getDevicePower(1500));

console.log("===== SMART HOME =====");

const devices = [
    {
        id: "DEV_001",
        name: "Dieu hoa",
        isActive: true,
        powerWatts: 1500
    },
    {
        id: "DEV_002",
        name: "Den ngu",
        isActive: true,
        powerWatts: 20
    }
];

const findDevice = (list, targetId) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === targetId) {
            return list[i];
        }
    }

    return null;
};

const updateDeviceStatus = (list, targetId, isActive) => {
    const device = findDevice(list, targetId);

    if (device === null) {
        return false;
    }

    device.isActive = isActive;

    return true;
};

console.log(updateDeviceStatus(devices, "DEV_001", false));
console.log(findDevice(devices, "DEV_001"));
console.table(devices);