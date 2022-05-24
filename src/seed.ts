import { AppDataSource } from "./data-source";
import { Category } from "./entity/Category";
import { Description } from "./entity/Description";
import { Product } from "./entity/Product";

export class SeedData {
    private readonly categoryRepository = AppDataSource.getTreeRepository(Category);

    
    public async initialize(){
      await AppDataSource.initialize();
      const categories = await this.categoryRepository.find();
     
      if(categories.length === 0){
          this.initData();
      }
    }
    private async initData() {


        const paramDiscription: string[][] = [["Тип", "Хороший телефон", ""], ["ОЗУ", "2", "Гб"], ["Операционная система", "Android 10", ""]];
        const descriptions: Description[] = this.getDiscriptions(paramDiscription);


        const product = new Product();
        product.cost = 100;
        product.img = "phone.png";
        product.counterOrder = 1;
        product.nameProduct = "phone.png"
        product.quantityInWarehouse = 15;
        product.descriptions = descriptions;

        const paramDiscription2: string[][] = [["Тип", "Средний телефон", ""], ["ОЗУ", "6", "Гб"], ["Операционная система", "Android 11", ""]];
        const descriptions2: Description[] = this.getDiscriptions(paramDiscription2);

        const product2 = new Product();
        product2.cost = 200;
        product2.img = "phone.png";
        product2.counterOrder = 2;
        product2.nameProduct = "Xiaomi Redmi Note 10S"
        product2.quantityInWarehouse = 1;
        product2.descriptions = descriptions2;

        const paramDiscription3: string[][] = [["Тип", "Плохой телефон", ""], ["ОЗУ", "7", "Гб"], ["Операционная система", "IOS 16", ""]];
        const descriptions3: Description[] = this.getDiscriptions(paramDiscription3);


        const product3 = new Product();
        product3.cost = 300;
        product3.img = "phone.png";
        product3.counterOrder = 3;
        product3.nameProduct = "Iphone 11";
        product3.quantityInWarehouse = 3;
        product3.descriptions = descriptions3;


        const paramDiscription4: string[][] = [["Тип", "Интересный планшет", ""], ["ОЗУ", "128", "Гб"], ["Операционная система", "Android 10.0 HMS", ""]];
        const descriptions4: Description[] = this.getDiscriptions(paramDiscription4);


        const product4 = new Product();
        product4.cost = 3000;
        product4.img = "pad.png";
        product4.counterOrder = 2;
        product4.nameProduct = "Huawei MatePad";
        product4.quantityInWarehouse = 6; 
        product4.descriptions = descriptions4;



        const productPhones: Product[] = [product, product2, product3];
        const productPad: Product[] = [product4];

        const paramDiscription5: string[][] = [["Тип питания", "Аккумулятор", ""], ["Мощность", "10000", "ВТ"], ["Бренд", "SuperDreli", ""]];
        const descriptions5: Description[] = this.getDiscriptions(paramDiscription5);


        const product5 = new Product();
        product5.cost = 1000000;
        product5.img = "superDreli.png";
        product5.counterOrder = 3;
        product5.nameProduct = "Супер дрель";
        product5.quantityInWarehouse = 1;
        product5.descriptions = descriptions5;

        const productDrill: Product[] = [product5];


        const paramDiscription6: string[][] = [["Матрица", "IPS", ""], ["Дисплей", "5.5", "Д."], ["Бренд", "BBL", ""]];
        const descriptions6: Description[] = this.getDiscriptions(paramDiscription6);


        const product6 = new Product();
        product6.cost = 100;
        product6.img = "computer.png";
        product6.counterOrder = 1;
        product6.nameProduct = "TV 1";
        product6.quantityInWarehouse = 14;
        product6.descriptions = descriptions6;

        const productTV: Product[] = [product6];

        /*Категории  */

        const category = new Category();
        category.name = "Смартфоны и гаджеты";
        category.icon = "fa-mobile";
        category.counterOrder = 5;
        category.img = "phone.png"

        const subcategories1 = new Category();
        subcategories1.name = "Смартфоны";
        subcategories1.counterOrder = 1;
        subcategories1.icon = "fa-mobile"
        subcategories1.img = "phone.png";
        subcategories1.products = productPhones;
        subcategories1.parent = category;

        const subcategories2 = new Category();
        subcategories2.name = "Планшеты";
        subcategories2.counterOrder = 3;
        subcategories2.icon = "fa-mobile"
        subcategories2.img = "phone.png";
        subcategories2.products = productPad;
        subcategories2.parent = category;

        /*Смартфоны и гаджеты */

        this.categoryRepository.save(category);
        this.categoryRepository.save(subcategories1);
        this.categoryRepository.save(subcategories2);


        /* Строительство*/
        const category2 = new Category();
        category2.name = "Строительство";
        category2.icon = "screwdriver-wrench";
        category2.counterOrder = 9;
        category2.img = "tools.png"

        const subcategories3 = new Category();
        subcategories3.name = "Дрели";
        subcategories3.counterOrder = 9;
        subcategories3.icon = "screwdriver-wrench"
        subcategories3.img = "tools.png";
        subcategories3.products = productDrill;
        subcategories3.parent = category2;

        this.categoryRepository.save(category2);
        this.categoryRepository.save(subcategories3);

        /* Телевизоры*/
        const category3 = new Category();
        category3.name = "Телевизоры";
        category3.icon = "tv";
        category3.counterOrder = 1;
        category3.img = "tv.png";
        category3.products = productTV;

        this.categoryRepository.save(category3);

    }
    private getDiscriptions(paramDiscription: string[][]): Description[] {
        const descriptions: Description[] = [];

        for (let param of paramDiscription) {
            const description = new Description();
            description.name = param[0];
            description.value = param[1];
            description.prefix = param[2];
            descriptions.push(description);
        }

        return descriptions;
    }
}