//callback
function getInstruction(food, step, callback, errorCallback) {
    setTimeout (() => {
        //get instruction string
        let instruction;

        if(food ==="comSuon") {
            instruction = comSuon[step];
        }
        else if(food ==="mashedPotatoes") {
            instruction = mashedPotatoes[step];
        }
        else if(food ==="brusselsSprouts") {
            instruction = brusselsSprouts[step];
        }
        else if(food ==="steak") {
            instruction = steak[step];
        };
        //invoke the provided callback and error callback
        if (!instruction) {
            errorCallback ("Instruction step does not exist!");
        } else {
            callback (instruction);
        }
    }, Math.floor(Math.random() * 1000));
}