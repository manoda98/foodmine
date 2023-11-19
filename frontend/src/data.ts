import {Food} from 'c:/Users/manod/Desktop/foodmine/frontend/src/app/shared/models/food';

export const sample_foods: Food[] = [
    {
        id: "1",
        name: "Pizza",
        price: 10.99,
        tags: ["Italian", "Cheese", "Pepperoni"],
        favorite: true,
        stars: 4.8,
        imageUrl: "assets/pizza.jpg",
        origins: ["Italy"],
        cookTime: "25 minutes"
    },
    {
        id: "2",
        name: "Burger",
        price: 7.50,
        tags: ["American", "Beef", "Fast Food"],
        favorite: true,
        stars: 4.5,
        imageUrl: "assets/burger.jpg",
        origins: ["United States"],
        cookTime: "15 minutes"
    },
    {
        id: "3",
        name: "Sushi",
        price: 18.25,
        tags: ["Japanese", "Fish", "Healthy"],
        favorite: false,
        stars: 4.9,
        imageUrl: "assets/sushi.jpg",
        origins: ["Japan"],
        cookTime: "No cooking required"
    },
    {
        id: "4",
        name: "Thai Rice",
        price: 9.99,
        tags: ["Thai", "Noodles", "Spicy"],
        favorite: true,
        stars: 4.7,
        imageUrl: "assets/thairice.jpg",
        origins: ["Thailand"],
        cookTime: "30 minutes"
    },
    {
        id: "5",
        name: "Tacos",
        price: 8.25,
        tags: ["Mexican", "Spicy", "Tortilla"],
        favorite: false,
        stars: 4.3,
        imageUrl: "assets/tacos.jpg",
        origins: ["Mexico"],
        cookTime: "20 minutes"
    },

    {
        id: "6",
        name: "waffles",
        price: 6.99,
        tags: ["American", "Fast Food", "Beef"],
        favorite: false,
        stars: 4.2,
        imageUrl: "assets/waffels.jpg",
        origins: ["United States"],
        cookTime: "10 minutes"
    }
]