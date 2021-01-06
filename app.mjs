import rect from './rectangle.mjs';

function solveRect(l, w) {
    console.log(`Solving for rectangle with demensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area of rectangle with demensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle with demensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call the rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);


// import { Rectangle } from './rectangle';

// const rect = Rectangle;

// function solveRect(l, w) {
//     console.log(`Solving for rectangle with demensions: ${l}, ${w}`);

//     rect(l, w, (err, rectangle) => {
//         if (err) {
//             console.log('ERROR:', err.message);
//         } else {
//             console.log(`Area of rectangle with demensions ${l}, ${w} is: ${rect.area()}`);
//             console.log(`Perimeter of rectangle with demensions ${l}, ${w} is: ${rect.perimeter()}`);
//         }
//     });
//     console.log('This statement is logged after the call the rect()');
// }

// solveRect(2, 4);
// solveRect(3, 5);
// solveRect(0, 5);
// solveRect(5, -3);