/* Exercise_1 */

function joinStrings(string1, string2) {

    if (!isNaN(parseInt(string1))) {

        string1 = String(string1);

    } else if (!isNaN(parseInt(string2))) {

        string2 = String(string2);
    }

    return `${string1} ${string2}`
}