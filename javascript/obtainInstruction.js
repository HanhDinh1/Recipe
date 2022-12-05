//promise based function
function obtainInstruction(food, step) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            //Get instruction string
            let instruction;

            if (food === "comSuon") {
                instruction = comSuon[step];
            }
            else if (food === "mashedPotatoes") {
                instruction = mashedPotatoes[step];
            }
            else if (food === "brusselsSprouts") {
                instruction = brusselsSprouts[step];
            }
            else if (food === "steak") {
                instruction = steak[step];
            };

            //resolve or reject the promise
            if (!instruction) {
                reject("Instruction step does not exit")
            }
            else {
                resolve(instruction);
            }
        }, Math.floor(Math.random() * 1000));
    });
}