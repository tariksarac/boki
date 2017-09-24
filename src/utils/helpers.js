
/**
* Function to generate unique id
 */
let newId = 0;
export function getNewId() {
    newId++;
    return newId;
}

/**
* Function to sort data
 */
export function sortData(data) {
    return data.sort(
        function (a, b) {
            return a.id - b.id;
        }
    )
}
