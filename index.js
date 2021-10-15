/* Find all menu elements by selector ".nav-link"
or by className "nav-link".

Use "for" loop to iterate through all menu items
Inside of the loop add "onclick" event handler to 
each menu item.

In the "onclick" event handler:
1. Remove first "active" class from all
 menu elements
2. Add "active" class to the clicked menu element
3. Log to the console message with the name
 of the clicked menu item
*/




//If we use var instead of let in loop, I expect another result of this operation. 
// But we can fix this behavior. 

// for (var i = 0; i < length; i++) {
    // let current = i;  <----  This variable will reassign i;
//     const menuItem = tabs[current];

//     menuItem.onclick = () => {
//         for (let j = 0; j < length; j++) {
//             tabs[j].classList.remove('active');
//         }
//         menuItem.classList.add('active');
//         console.log(menuItem.innerHTML);
//     };
// }

const tabs = document.querySelectorAll('.nav-link');
const length = tabs.length;

for (let i = 0; i < length; i++) {
    const menuItem = tabs[i];

    menuItem.onclick = () => {
        for (let j = 0; j < length; j++) {
            tabs[j].classList.remove('active');
        }
        menuItem.classList.add('active');
        console.log(menuItem.innerHTML);
    };
}