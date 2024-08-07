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
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG1.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMS5qcGVnIiwiaWF0IjoxNzIyODc4NjI3LCJleHAiOjE3NTQ0MTQ2Mjd9.Q9CLXjtZqHa8Ttv9RxwSU9ImdZBqE_GxEY6IXnw3ND4&t=2024-08-05T17%3A23%3A47.639Z",
        favorite: true,
        tag: 'Amazing Product'
        
    },
    {
        id: 2,
        title: "Abstract Art 2",
        price: "$20.00",
        stock: "5 de 30",
        discount: "10% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG2.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMi5qcGVnIiwiaWF0IjoxNzIyODc4NjUxLCJleHAiOjE3NTQ0MTQ2NTF9.pAzqB7wgohGtpsIlPlQ4GodTRzXUFspmNHa6JR7GdQc&t=2024-08-05T17%3A24%3A11.333Z",
        favorite: false,
        tag: 'Unusual Objects'
    },
    {
        id: 3,
        title: "Abstract Art 3",
        price: "$25.00",
        stock: "15 de 40",
        discount: "15% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG3.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMy5qcGVnIiwiaWF0IjoxNzIyODc4NzM5LCJleHAiOjE3NTQ0MTQ3Mzl9.YrMGI7VtYUCfCU8gSoP8Rxt0AyeUiiWyv4dBv7N2M5c&t=2024-08-05T17%3A25%3A39.892Z",
        favorite: false,
        tag: 'Incredible Items'
    },
    {
        id: 4,
        title: "Abstract Art 4",
        price: "$18.00",
        stock: "8 de 35",
        discount: "25% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG4.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHNC5qcGVnIiwiaWF0IjoxNzIzMDQ2MjQzLCJleHAiOjE3NTQ1ODIyNDN9.a_q6t7pH_XqrE37kNwgsGUI4x1qW0WYC2qyt29UtW5E&t=2024-08-07T15%3A57%3A23.095Z",
        favorite: false,
        tag: 'Unique Stock'
    },
    {
        id: 5,
        title: "Abstract Art 5",
        price: "$22.00",
        stock: "20 de 60",
        discount: "30% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG5.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHNS5qcGVnIiwiaWF0IjoxNzIzMDQ2Mjc1LCJleHAiOjE3NTQ1ODIyNzV9.Vbo6JWvQ2yEtiLLD6ccmHvLI3-U4MVgGhhCZ1eqdIhE&t=2024-08-07T15%3A57%3A55.583Z",
        favorite: false,
        tag: 'Incredible Items'
    },
    {
        id: 6,
        title: "Abstract Art 6",
        price: "$19.00",
        stock: "25 de 55",
        discount: "5% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG6.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHNi5qcGVnIiwiaWF0IjoxNzIzMDQ2MzUzLCJleHAiOjE3NTQ1ODIzNTN9.yzGPu0NQ3xhSExfIFTq-qDj0ME653WqTbRbCgKwC9mE&t=2024-08-07T15%3A59%3A13.722Z",
        favorite: false,
        tag: 'Amazing Product'
    },
    {
        id: 7,
        title: "Abstract Art 7",
        price: "$23.00",
        stock: "12 de 45",
        discount: "10% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG7.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHNy5qcGVnIiwiaWF0IjoxNzIzMDQ2MzY0LCJleHAiOjE3NTQ1ODIzNjR9.LKQlA5HSZXfUV8RopZMmC1BH0Tb8LOHMFVSndOrHWlw&t=2024-08-07T15%3A59%3A24.818Z",
        favorite: false,
        tag: 'Unusual Objects'
    },
    {
        id: 8,
        title: "Abstract Art 8",
        price: "$16.00",
        stock: "30 de 70",
        discount: "20% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG8.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHOC5qcGVnIiwiaWF0IjoxNzIyODc4OTMyLCJleHAiOjE3MjM0ODM3MzJ9.E8cFEeKPZYbtTPwo4Exy5kuNrIfoAqYdLxjmDsjyoZI&t=2024-08-05T17%3A28%3A52.421Z",
        favorite: false,
        tag: 'Amazing Product'
    },
    {
        id: 9,
        title: "Abstract Art 9",
        price: "$21.00",
        stock: "18 de 50",
        discount: "25% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG9.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHOS5qcGVnIiwiaWF0IjoxNzIzMDQ2NDQyLCJleHAiOjE3NTQ1ODI0NDJ9.Fp6v1AGHXXexKt-NPdzhCAffRRudMKtBi2epjsDOacI&t=2024-08-07T16%3A00%3A42.318Z",
        favorite: true,
        tag: 'Unique Stock'
    },
    {
        id: 10,
        title: "Abstract Art 10",
        price: "$24.00",
        stock: "22 de 60",
        discount: "15% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG10.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMTAuanBlZyIsImlhdCI6MTcyMzA0NjQ3NiwiZXhwIjoxNzU0NTgyNDc2fQ.R28imrkx-_Pzcbr_nBy0r-6y19OiZ6ZXRQnDZHYCAaQ&t=2024-08-07T16%3A01%3A16.596Z",
        favorite: false,
        tag: 'Amazing Product'
    },
    {
        id: 11,
        title: "Abstract Art 11",
        price: "$20.00",
        stock: "10 de 40",
        discount: "30% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG11.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMTEuanBlZyIsImlhdCI6MTcyMzA0NjU3MywiZXhwIjoxNzU0NTgyNTczfQ.rNuKBNEDQmX8pkOAXe2HbLoWdprXgR9lhsOpygOk4Gs&t=2024-08-07T16%3A02%3A53.366Z",
        favorite: false,
        tag: 'Unusual Objects'
    },
    {
        id: 12,
        title: "Abstract Art 12",
        price: "$17.00",
        stock: "5 de 30",
        discount: "10% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG12.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMTIuanBlZyIsImlhdCI6MTcyMzA0NjU4NywiZXhwIjoxNzU0NTgyNTg3fQ.k3Bz5Ym-kuvDj8ITsRh81vAFLabV-VITkux-7Ix6i1M&t=2024-08-07T16%3A03%3A07.762Z",
        favorite: false,
        tag: 'Amazing Product'
    },
    {
        id: 13,
        title: "Abstract Art 13",
        price: "$18.00",
        stock: "8 de 35",
        discount: "25% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG13.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMTMuanBlZyIsImlhdCI6MTcyMzA0NjYwNywiZXhwIjoxNzU0NTgyNjA3fQ.gMCShFOpH0kOfabdc9GIVtt_lqRRERFZ6MFvirAuQfw&t=2024-08-07T16%3A03%3A27.364Z",
        favorite: false,
        tag: 'Unique Stock'
    },
    {
        id: 14,
        title: "Abstract Art 14",
        price: "$19.00",
        stock: "25 de 55",
        discount: "5% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG14.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMTQuanBlZyIsImlhdCI6MTcyMzA0NjYyNCwiZXhwIjoxNzU0NTgyNjI0fQ.NWhiUxTlqi16mwFKc_q3tcO6RVl1YIx5hS0uMIt1r40&t=2024-08-07T16%3A03%3A44.286Z",
        favorite: false,
        tag: 'Unique Stock'
    },
    {
        id: 15,
        title: "Abstract Art 15",
        price: "$23.00",
        stock: "12 de 45",
        discount: "10% off",
        imageUrl: "https://bpveogtxvzqffqmbkgss.supabase.co/storage/v1/object/sign/images/products/OIG15.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdHMvT0lHMTUuanBlZyIsImlhdCI6MTcyMzA0NjY0MCwiZXhwIjoxNzU0NTgyNjQwfQ.ziJ4B8NO-IA7PNpzCEBhIK1RoBnh3wIz8s2db_naius&t=2024-08-07T16%3A04%3A00.267Z",
        favorite: true,
        tag: 'Incredible Items'
    },
    
];

export const allProducts = [
    ...products,
  ]