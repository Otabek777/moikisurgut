document.querySelector('.header__catalog_btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.catalog_menu').classList.toggle('active');
});

if(document.querySelector('.catalog__filter')) {
    const filterOpen = document.querySelectorAll('.filter_open');
    for(let i = 0; i < filterOpen.length; i++) {
        filterOpen[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    };
};

if(document.querySelector('.catalog_open')) {
    const catalogOpen = document.querySelectorAll('.catalog_open');
    for(let i = 0; i < catalogOpen.length; i++) {
        catalogOpen[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const catalogOpenp = this.querySelector('p');
            if(this.classList.contains('active')) {
                catalogOpenp.textContent = "Cкрыть";
            } else {
                catalogOpenp.textContent = "Показать все";
            };
        });
    };
};

document.querySelector('.btn_open_menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header_min_menu').classList.toggle('active');
});

if(document.querySelector('.catalog_menu_open')) {
    document.querySelector('.catalog_menu_open').addEventListener('click', function() {
        document.querySelector('.catalog__filter').classList.add('active');
        document.querySelector('body').classList.add('hidden');
    });
    document.querySelector('.fliter_close').addEventListener('click', function() {
        document.querySelector('.catalog__filter').classList.remove('active');
        document.querySelector('body').classList.remove('hidden');
    });
};


if(document.querySelector('.product__description')) {
    const desBtn1 = document.querySelector('#description_btn1');
    const desBtn2 = document.querySelector('#description_btn2');
    const desBtn3 = document.querySelector('#description_btn3');
    const desBlock1 = document.querySelector('#descrioption_block1');
    const desBlock2 = document.querySelector('#descrioption_block2');
    const desBlock3 = document.querySelector('#descrioption_block3');
    desBtn1.addEventListener('click', function() {
        this.classList.add('active');
        desBtn2.classList.remove('active');
        desBtn3.classList.remove('active');

        desBlock1.classList.add('show');
        desBlock2.classList.remove('show');
        desBlock3.classList.remove('show');
    });
    desBtn2.addEventListener('click', function() {
        this.classList.add('active');
        desBtn1.classList.remove('active');
        desBtn3.classList.remove('active');

        desBlock2.classList.add('show');
        desBlock1.classList.remove('show');
        desBlock3.classList.remove('show');
    });
    desBtn3.addEventListener('click', function() {
        this.classList.add('active');
        desBtn1.classList.remove('active');
        desBtn2.classList.remove('active');

        desBlock3.classList.add('show');
        desBlock1.classList.remove('show');
        desBlock2.classList.remove('show');
    });
};