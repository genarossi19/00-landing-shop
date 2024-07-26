// data.ts
export interface PRODUCT {
    id: number;
    title: string;
    price: string;
    stock: string;
    discount ?: string;
    imageUrl: string;
    favorite: boolean;
    tag ?: string
}

export const products: PRODUCT[] = [
    {
        id: 1,
        title: "Abstract Art 1",
        price: "$15.00",
        stock: "10 de 50",
        discount: "20% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG1.jpeg",
        favorite: true,
        tag: 'Amazing Product'
        
    },
    {
        id: 2,
        title: "Abstract Art 2",
        price: "$20.00",
        stock: "5 de 30",
        discount: "10% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG2.jpeg",
        favorite: false,
        tag: 'Unusual Objects'
    },
    {
        id: 3,
        title: "Abstract Art 3",
        price: "$25.00",
        stock: "15 de 40",
        discount: "15% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG3.jpeg",
        favorite: false,
        tag: 'Incredible Items'
    },
    {
        id: 4,
        title: "Abstract Art 4",
        price: "$18.00",
        stock: "8 de 35",
        discount: "25% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG4.jpeg",
        favorite: false,
        tag: 'Unique Stock'
    },
    {
        id: 5,
        title: "Abstract Art 5",
        price: "$22.00",
        stock: "20 de 60",
        discount: "30% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG5.jpeg",
        favorite: false,
        tag: 'Incredible Items'
    },
    {
        id: 6,
        title: "Abstract Art 6",
        price: "$19.00",
        stock: "25 de 55",
        discount: "5% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG6.jpeg",
        favorite: false,
        tag: 'Amazing Product'
    },
    {
        id: 7,
        title: "Abstract Art 7",
        price: "$23.00",
        stock: "12 de 45",
        discount: "10% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG7.jpeg",
        favorite: false,
        tag: 'Unusual Objects'
    },
    {
        id: 8,
        title: "Abstract Art 8",
        price: "$16.00",
        stock: "30 de 70",
        discount: "20% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG8.jpeg",
        favorite: false,
        tag: 'Amazing Product'
    },
    {
        id: 9,
        title: "Abstract Art 9",
        price: "$21.00",
        stock: "18 de 50",
        discount: "25% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG9.jpeg",
        favorite: true,
        tag: 'Unique Stock'
    },
    {
        id: 10,
        title: "Abstract Art 10",
        price: "$24.00",
        stock: "22 de 60",
        discount: "15% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG10.jpeg",
        favorite: false,
        tag: 'Amazing Product'
    },
    {
        id: 11,
        title: "Abstract Art 11",
        price: "$20.00",
        stock: "10 de 40",
        discount: "30% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG11.jpeg",
        favorite: false,
        tag: 'Unusual Objects'
    },
    {
        id: 12,
        title: "Abstract Art 12",
        price: "$17.00",
        stock: "5 de 30",
        discount: "10% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG12.jpeg",
        favorite: false,
        tag: 'Amazing Product'
    },
    {
        id: 13,
        title: "Abstract Art 13",
        price: "$18.00",
        stock: "8 de 35",
        discount: "25% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG13.jpeg",
        favorite: false,
        tag: 'Unique Stock'
    },
    {
        id: 14,
        title: "Abstract Art 14",
        price: "$19.00",
        stock: "25 de 55",
        discount: "5% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG14.jpeg",
        favorite: false,
        tag: 'Unique Stock'
    },
    {
        id: 15,
        title: "Abstract Art 15",
        price: "$23.00",
        stock: "12 de 45",
        discount: "10% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG15.jpeg",
        favorite: true,
        tag: 'Incredible Items'
    },
    {
        id: 16,
        title: "Abstract Art 16",
        price: "$16.00",
        stock: "30 de 70",
        discount: "20% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG16.jpeg",
        favorite: true,
        tag: 'Unusual Objects'
    },
    {
        id: 17,
        title: "Abstract Art 17",
        price: "$21.00",
        stock: "18 de 50",
        discount: "25% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG17.jpeg",
        favorite: false,
        tag: 'Amazing Product'
    },
    {
        id: 18,
        title: "Abstract Art 18",
        price: "$24.00",
        stock: "22 de 60",
        discount: "15% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG18.jpeg",
        favorite: true,
        tag: 'Unusual Objects'
    },
    {
        id: 19,
        title: "Abstract Art 19",
        price: "$20.00",
        stock: "10 de 40",
        discount: "30% off",
        imageUrl: "/Users/genarorossi/Documents/Astro/00-landing-shop/src/assets/OIG19.jpeg",
        favorite: false,
        tag: 'Incredible Items'
    }
];

export const allProducts = [
    ...products,
  ]