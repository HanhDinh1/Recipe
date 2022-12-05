getInstruction ("comSuon", 0, (step1) => {
    document.querrySelector("#comSuon").innerHTML +=`<li>${step1}</li>`;
        getInstruction ("comSuon", 1, (step2) => {
            document.querrySelector("#comSuon").innerHTML += `<li>${step2}</li>`;

            getInstruction("comSuon", 2, (step3) => {
                document.querySelector ("#comSuon").innerHTML += `<li>${step3}</li>`;
                
                getInstruction("comSuon", 3, (step4) => {
                    document.querySelector ("#comSuon").innerHTML += `<li>${step4}</li>`;
                    document.querySelector("#comSuonImg").removeAttribute("hidden");
                    document.querySelector("#comSuon").innerHTML += `<li>Com Suon is ready! Enjoy!</li>`;
                }, (error) => console.log(error))
            }, (error) => console.log(error))            
        }, (error) => console.log(error))
}, (error) => console.log(error))