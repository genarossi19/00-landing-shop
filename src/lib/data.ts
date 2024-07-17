// data.ts
export interface NFT {
    id: number;
    title: string;
    price: string;
    stock: string;
    discount: string;
    imageUrl: string;
    favorite: boolean;
  }
  
  export const nftData: NFT[] = [
    {
      id: 1,
      title: "NFT11",
      price: "$10.00",
      stock: "5 de 33",
      discount: "30% off",
      imageUrl: "url_de_la_imagen_1",
      favorite: false
    },
    {
      id: 2,
      title: "NFT11",
      price: "$10.00",
      stock: "5 de 33",
      discount: "30% off",
      imageUrl: "url_de_la_imagen_2",
      favorite: false
    },
    {
      id: 3,
      title: "NFT11",
      price: "$10.00",
      stock: "5 de 33",
      discount: "30% off",
      imageUrl: "url_de_la_imagen_3",
      favorite: false
    },
    {
      id: 4,
      title: "NFT11",
      price: "$10.00",
      stock: "5 de 33",
      discount: "30% off",
      imageUrl: "url_de_la_imagen_4",
      favorite: false
    },
    {
      id: 5,
      title: "NFT11",
      price: "$10.00",
      stock: "5 de 33",
      discount: "30% off",
      imageUrl: "url_de_la_imagen_5",
      favorite: false
    }
  ];
  