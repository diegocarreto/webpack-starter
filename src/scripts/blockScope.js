//Block Scope
function findPerson(params) {
    
        let message = 'Finding';
    
        let findFn = function searchKey() {
    
            let message = 'Override';
    
            console.log(message);
        };
    
        findFn();
    }
    
    findPerson();