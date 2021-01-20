//Задание 1
//1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. 
//Продумайте, какие методы понадобятся для работы с этими сущностями.

class Basket {
    constructor() {
        //в любой корзине должен быть список всех товаров
        allGoodsInBasket = []
    }

   //методы- их общая стоимость, возможность очистить всю корзину или удалить выбранный товар, уменьшить кол-во товаров одной позиции

     basketSum() {} //общая стоимость
     basketDelete(){} //очистить всю корзину
     basketDeleteNumPieces(){} //уменьшить кодичество какого-либо товара на единицу,а если 0 - то удалить
     basketDeleteOnePieces(){} //отдельно метод для удаления любой позиции товара (независимо от количества)
}

class ProductInBasket {
    constructor() {
        // у товара в корзине должны отображаться название,цена, его иллюстрация в небольшом формате
        this.title = title; 
        this.img = img;
        this.price = price; 
       }
       //метод подсчета количества товара каждой позиции
       numPieces() {
           let sumNumPieces = () => {}
       }


}

//2. Добавьте для ProductsList метод, определяющий суммарную стоимость всех товаров. 70строка
//----------------------------------------------------

class Product {
    constructor(product, img = 'https://placehold.it/100x50') {
        let {title, price=0, id} = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

    render() {
        return `<div class="product-item">
                        <img src="${this.img}" alt="${this.title}">
                        <div class="desc">
                            <h3>${this.title}</h3>
                            <p>${this.price}</p>
                            <button class="buy-btn">Купить</button>
                        </div>
                    </div>`
    };
}

class ProductsList {
    constructor(container = '.products') {
        //data -  сырые данные,приходящие от сервера с инфой о цене,названии продукта, итд
        this.data = [];
        //products  - массив всех инстансов класса Product
        this.products = [];
        this.container = document.querySelector(container);
        //получаем спсиок товаров и рендерим их на страницу
        this._fetchData();
        this._render();
    }
        //стоимость всех товаров на странице, только это не работает(((( Ругается что нет никакого прайса
        sumAllProducts() {
            let sumAllProductsList = 0;
            console.log(this.products); //массив успешно выводится,в нем 4 продукта со всеми параметрами

 /*            for (let i=0; i<this.products.length; i++){
                sumAllProductsList+= this.products[i].price;
            }
            console.log(this.sumAllProductsList); */

            //пробовала и циклом let ..of но тоже неуспех(

                for (let i of this.products) {
                    sumAllProductsList+= this.products[i].price; 
                }
                console.log(this.sumAllProductsList);
        }

       _fetchData() {
        this.data = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Keyboard', price: 200 },
            { id: 3, title: 'Mouse', price: 100 },
            { id: 4, title: 'Gamepad' },
        ]
    }

    _render() {
        for (let dataEl of this.data) {
            //создай новый инстанс продукта из массива дата и каждый продукт заренедери
            const product = new Product(dataEl);
            this.products.push(product);
            //генерируем верстку каждого продукта и запихиваем в контейнер
            this.container.insertAdjacentHTML('beforeend', product.render());   
        }
    }

}

const list = new ProductsList();
list.sumAllProducts();