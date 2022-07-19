const dotsToggle = document.querySelector('.dots');
const dotsMenu = document.querySelector('.dots-menu');
const customBtn = document.querySelector('.custom-box')
const customMenu = document.querySelector('.custom-menu-backdrop');
const customBtnCancel = document.querySelector('.cancel');
const customBtnDone = document.querySelector('.done');
const suggContainerAdder = document.querySelector('.sugg-container-add');
const sugg = document.querySelector('.sugg');
const suggAddMenu = document.querySelector('.sugg-add-menu-backdrop');
const suggAddMenuText = document.querySelector('.sugg-add-menu-text');
const suggAddMenuUrl = document.querySelector('.sugg-add-menu-url');
const doneAddMenu = document.querySelector('.done-add-menu');
const cancelAddMenu = document.querySelector('.cancel-add-menu');
const backdrop = document.querySelector('.backdrop');


const suggWrapperTest = document.querySelector('.sugg-wrapper');
let inner = suggWrapperTest.innerHTML;
suggAddMenuUrl.value = '';
suggAddMenuText.value = '';

queryRefresh();

function queryRefresh() {
    console.error('Query Refreshed')
    const backdrop = document.querySelector('.backdrop');
    const suggDotsBtn = document.querySelectorAll('.sugg-dots');
    const suggDotsOptions = document.querySelectorAll('.sugg-dots-options');
    const suggDotsBox = document.querySelectorAll('.sugg-dots-box');
    const suggDots = document.querySelectorAll('.sugg-dots');
    const suggContainer = document.querySelectorAll('.sugg-container');
    const suggName = document.querySelectorAll('.sugg-name');
    const remove = document.querySelectorAll('.remove');
    const edit = document.querySelectorAll('.edit');
    const suggWrapper = document.querySelectorAll('.sugg-wrapper')

    const suggEditMenu = document.querySelectorAll('.sugg-edit-menu-backdrop');
    const suggEditMenuText = document.querySelectorAll('.sugg-edit-menu-text');
    const suggEditMenuUrl = document.querySelectorAll('.sugg-edit-menu-url');
    const doneEditMenu = document.querySelectorAll('.done-edit-menu');
    const cancelEditMenu = document.querySelectorAll('.cancel-edit-menu');

    for (let i = 0; i < suggDotsBtn.length; i++) {

        if (suggDotsBtn[i].classList.contains('added')) {
            console.log(`%calready added suggDotBtnListner[${i}]`, `color: red;`);
        }
        else {
            console.warn(`%cadded suggDotBtnListner[${i}]`, `color: red;`);
            suggDotsBtn[i].classList.add('added');

            suggDotsBtn[i].addEventListener('click', (e) => {
                console.log(`clicked dotBtn[${i}]`);
                e.preventDefault();

                if (dotsMenu.classList.contains('active')) {
                    dotsMenu.classList.remove('active')
                }

                suggDotsOptions[i].classList.add('active');
                backdrop.classList.add('active');
                suggContainer[i].classList.add('active');

                suggEditMenuUrl[i].value = suggContainer[i].getAttribute("href");
                suggEditMenuText[i].value = suggName[i].innerHTML;
                const tempAtt = suggContainer[i].getAttribute("href");
                console.log(`%c${tempAtt}`, "color: green");

                backdrop.addEventListener('click', () => {
                    suggContainer[i].setAttribute("href", tempAtt);
                    backdrop.classList.remove('active');
                    suggDotsOptions[i].classList.remove('active');
                    suggContainer[i].classList.remove('active');
                })
            })
        }

    }


    for (let i = 0; i < edit.length; i++) {
        if (edit[i].classList.contains('added')) {
            console.log(`%calready added editListner[${i}]`, `color: purple;`);
        }
        else {
            console.warn(`%cadded editListner[${i}]`, `color: purple;`);
            edit[i].classList.add('added');

            edit[i].addEventListener('click', (e) => {
                console.log(`clicked editBtn[${i}]`);
                e.preventDefault();
                console.log(e);

                suggEditMenu[i].classList.add('active');
                suggDotsOptions[i].classList.remove('active');
                backdrop.classList.remove('active');

                suggEditMenuText[i].focus();

                if (suggEditMenuUrl[i].value === '') {
                    console.error("empty feild");
                    doneEditMenu[i].classList.remove('active');
                }
                else doneEditMenu[i].classList.add('active');

                suggEditMenuUrl[i].addEventListener('input', () => {
                    if (suggEditMenuUrl[i].value === '') {
                        console.error("empty feild");
                        doneEditMenu[i].classList.remove('active');
                    }
                    else doneEditMenu[i].classList.add('active');
                })
            })


        }
    }

    for (let i = 0; i < cancelEditMenu.length; i++) {
        if (cancelEditMenu[i].classList.contains('added')) {
            console.log(`%calready added cancelEditMenuListner[${i}]`, `color: green;`);
        }
        else {
            console.warn(`%cadded cancelEditMenuListner[${i}]`, `color: green;`);
            cancelEditMenu[i].classList.add('added');

            cancelEditMenu[i].addEventListener('click', (e) => {
                e.preventDefault();

                suggEditMenu[i].classList.remove('active');
                suggContainer[i].classList.remove('active');  
            })
        }
    }

    for (let i = 0; i < doneEditMenu.length; i++) {
        if (doneEditMenu[i].classList.contains('added')) {
            console.log(`%calready added doneEditMenuListner[${i}]`, `color: yellow;`);
        }
        else {
            console.warn(`%cadded doneEditMenuListner[${i}]`, `color: yellow;`);
            doneEditMenu[i].classList.add('added');

            doneEditMenu[i].addEventListener('click', (e) => {
                if (doneEditMenu[i].classList.contains('active')) {
                    e.preventDefault();

                    suggName[i].innerHTML = suggEditMenuText[i].value;
                    suggContainer[i].removeAttribute('href');
                    suggContainer[i].setAttribute("href", suggEditMenuUrl[i].value);

                    suggEditMenu[i].classList.remove('active');
                    suggContainer[i].classList.remove('active');
                }
            })
        }
    }
    // Removing sugg box


    for (let i = 0; i < remove.length; i++) {
        if (remove[i].classList.contains('added')) {
            console.log(`%calready added removeListner[${i}]`, `color: blue;`)
        }
        else {
            console.warn(`%cadded removeListner[${i}]`, `color: blue;`)
            remove[i].classList.add('added');

            remove[i].addEventListener('click', (e) => {
                e.preventDefault();

                suggWrapper[i].remove(suggWrapper[i]);
                console.log(`${i} removed`)
                backdrop.classList.remove('active');

                queryRefresh();
            })
        }
    }

    // Break

    // Sugg box hover effect

    for (let i = 0; i < suggDotsBox.length; i++) {
        suggDotsBox[i].onmouseover = () => {
            suggDots[i].classList.add('active')
        }

        suggDotsBox[i].onmouseout = () => {
            suggDots[i].classList.remove('active')
        }
    }

    // Break

}       //queryRefresh function end



// Adds a shortcut to the suggestion section

suggContainerAdder.addEventListener('click', () => {
    if (dotsMenu.classList.contains('active')) {
        dotsMenu.classList.remove('active')
    }
    suggAddMenu.classList.add('active');

    suggAddMenuText.focus();

    suggAddMenuUrl.addEventListener('input', () => {
        if (suggAddMenuUrl.value === '') {
            console.error("empty feild");
            doneAddMenu.classList.remove('active');
        }
        else doneAddMenu.classList.add('active');
    })
})


cancelAddMenu.addEventListener('click', () => {
    suggAddMenu.classList.remove('active');
    doneAddMenu.classList.remove('active');
    suggAddMenuUrl.value = '';
    suggAddMenuText.value = '';
})


doneAddMenu.addEventListener('click', () => {
    if (doneAddMenu.classList.contains('active')) {
        doneAddMenu.classList.add('added');

        const wrapper = document.createElement('div');
        wrapper.setAttribute("class", "sugg-wrapper");
        sugg.insertBefore(wrapper, suggContainerAdder);
        wrapper.innerHTML = inner;

        const suggContainer = document.querySelectorAll('.sugg-container');
        suggContainer[suggContainer.length - 1].removeAttribute('href');
        suggContainer[suggContainer.length - 1].setAttribute('href', suggAddMenuUrl.value);

        const suggName = document.querySelectorAll('.sugg-name');
        suggName[suggName.length - 1].innerHTML = suggAddMenuText.value;

        suggAddMenuUrl.value = '';
        suggAddMenuText.value = '';
        suggAddMenu.classList.remove('active');
        doneAddMenu.classList.remove('active');

        queryRefresh();
    }
})

// Break

// Opens the customize page menu
{
    customBtn.addEventListener('click', () => {
        if (dotsMenu.classList.contains('active')) {
            dotsMenu.classList.remove('active')
        }
        customMenu.classList.add('active')
    })

    customBtnDone.addEventListener('click', () => {
        customMenu.classList.remove('active')
    })

    customBtnCancel.addEventListener('click', () => {
        customMenu.classList.remove('active')
    })
}
// Break


// Opens the dot menu

dotsToggle.addEventListener('click', () => {
    dotsMenu.classList.toggle('active')
})

// Break
