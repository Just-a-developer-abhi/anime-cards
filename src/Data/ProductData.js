const Productdata = [
    [
        {
    id : 1,
    name: "Akatsuki Red cloud Tshirt",
    image:"https://imgs.search.brave.com/kuGeRMl3j8c8JOjpNfKYbkizlxkS4qx4DRjO4Pqx668/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9kMmo2/ZGJxMGV1eDBiZy5j/bG91ZGZyb250Lm5l/dC9pbWFnZXMvNjAw/NzQ3NjAvMjMxODY5/MzEyNC5qcGc",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 260",
    discounted_price: "INR 210"
},
{
    id : 3,
    name: "Hokage Red Hoodie",
    image:"https://imgs.search.brave.com/-uGF6gGQgYN3pIZZDNvB7EGU3WCYY8XVouccXTwYLmw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/akdSaFJZT3FtUnRq/b1Jfb2RWZEdnSGFI/YSZwaWQ9QXBp",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 360",
    discounted_price: "INR 300"
},
{
    id : 4,
    name: "All Anime Girls Hoodies",
    image:"https://imgs.search.brave.com/QbGUqrwtQ4UXyluIfwjypKCc8aWy194Yq232GxWpy20/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMTZpUy5v/S0dTQnVOalNzcGJx/NkFpaXBYYU4vQ2xv/dWRzdHlsZS0zRC1I/b29kaWVzLU1lbi1D/bG90aGVzLTIwMTgt/M0QtQW5pbWUtUHJp/bnQtSG9vZHktU3dl/YXRzaGlydC1KdW1w/ZXJzLUxvbmctU2xl/ZXZlLUZpdG5lc3Mt/U3RyZWV0d2Vhci5q/cGc",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 250",
    discounted_price: "INR 230"
},

{
    id : 6,
    name: "Kakkashi lightening casual Tshirt",
    image:"https://imgs.search.brave.com/10jKA4199aULNwro428tAeHpnAPXH3N0Y7ElEP6rVM4/rs:fit:960:960:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMXNpcS5p/Y0lyQktOalNaSzlx/Nnlnb1ZYYUovQWlr/b29raS1OYXJ1dG8t/U3dlYXRzaGlydC0z/RC1NZW4tV29tZW4t/U3dlYXRzaGlydC1Q/b2xsdXZlci1GYW1v/dXMtQW5pbWUtQmx1/ZS1EZXNpZ24tTmFy/dXRvLUhvb2RpZXMt/Q290dG9uLVRoaW4u/anBn",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 580",
    discounted_price: "INR 510"
},
{
    id : 10,
    name: "The sage of six paths hoodies",
    image:"https://imgs.search.brave.com/AwJXhS7_4sPaCtaDA9c7AVKFmxgNkQawbJnoNgwaMxc/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMTlma290/djVUQnVOalNzcGNx/NnpuR0ZYYUEvRHlr/aG1pbHktU2FzdWtl/LVppcC1Ib29kZWQt/TmFydXRvLVppcHBl/ci1Ib29kaWVzLVN3/ZWF0c2hpcnQtMjAx/Ny1OZXctQW5pbWUt/M2QtUHJpbnRlZC1N/ZW4tcy1Ib29kaWVz/LmpwZw",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 510",
    discounted_price: "INR 450"
},
{
    id : 1,
    name: "Akatsuki Red cloud Tshirt",
    image:"https://imgs.search.brave.com/kuGeRMl3j8c8JOjpNfKYbkizlxkS4qx4DRjO4Pqx668/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9kMmo2/ZGJxMGV1eDBiZy5j/bG91ZGZyb250Lm5l/dC9pbWFnZXMvNjAw/NzQ3NjAvMjMxODY5/MzEyNC5qcGc",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 260",
    discounted_price: "INR 210"
},
{
    id : 6,
    name: "Kakkashi lightening casual Tshirt",
    image:"https://imgs.search.brave.com/10jKA4199aULNwro428tAeHpnAPXH3N0Y7ElEP6rVM4/rs:fit:960:960:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMXNpcS5p/Y0lyQktOalNaSzlx/Nnlnb1ZYYUovQWlr/b29raS1OYXJ1dG8t/U3dlYXRzaGlydC0z/RC1NZW4tV29tZW4t/U3dlYXRzaGlydC1Q/b2xsdXZlci1GYW1v/dXMtQW5pbWUtQmx1/ZS1EZXNpZ24tTmFy/dXRvLUhvb2RpZXMt/Q290dG9uLVRoaW4u/anBn",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 580",
    discounted_price: "INR 510"
},
{
    id : 10,
    name: "The sage of six paths hoodies",
    image:"https://imgs.search.brave.com/AwJXhS7_4sPaCtaDA9c7AVKFmxgNkQawbJnoNgwaMxc/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMTlma290/djVUQnVOalNzcGNx/NnpuR0ZYYUEvRHlr/aG1pbHktU2FzdWtl/LVppcC1Ib29kZWQt/TmFydXRvLVppcHBl/ci1Ib29kaWVzLVN3/ZWF0c2hpcnQtMjAx/Ny1OZXctQW5pbWUt/M2QtUHJpbnRlZC1N/ZW4tcy1Ib29kaWVz/LmpwZw",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 510",
    discounted_price: "INR 450"
},
{
    id : 1,
    name: "Akatsuki Red cloud Tshirt",
    image:"https://imgs.search.brave.com/kuGeRMl3j8c8JOjpNfKYbkizlxkS4qx4DRjO4Pqx668/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9kMmo2/ZGJxMGV1eDBiZy5j/bG91ZGZyb250Lm5l/dC9pbWFnZXMvNjAw/NzQ3NjAvMjMxODY5/MzEyNC5qcGc",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 260",
    discounted_price: "INR 210"
},
{
    id : 3,
    name: "Hokage Red Hoodie",
    image:"https://imgs.search.brave.com/-uGF6gGQgYN3pIZZDNvB7EGU3WCYY8XVouccXTwYLmw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/akdSaFJZT3FtUnRq/b1Jfb2RWZEdnSGFI/YSZwaWQ9QXBp",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 360",
    discounted_price: "INR 300"
}

    ],

    [
        {
            id : 5,
            name: "Monkey D Luffy OnePiece, casual Hoodie",
            image:"https://imgs.search.brave.com/JUlLcVq_7T4nQEvwqt53hOnJmELKcU8DZ7B1HXmr4y0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMUpSa2Vh/WHpzSzFSankxWGJx/NnhPYUZYYUkvTWVu/cy1BbmltZS1PbmUt/UGllY2UtSG9vZGll/LTNELVByaW50LVB1/bGxvdmVyLVN3ZWF0/c2hpcnQtTW9ua2V5/LUx1ZmZ5LUJhdHRs/ZS1UcmFja3N1aXQt/SG9vZGllcy1PdXRl/cndlYXItU3dlYXRz/aGlydC5qcGc",
            quantity:100,
            anime_name:"OnePiece",
            price: "INR 260",
            discounted_price: "INR 210"
        }
    ],

    [
        {
            id : 9,
            name: "Tokyo Ghoul Transition Hoodies",
            image:"https://imgs.search.brave.com/V6RTmQEYPlhOuepP4cCBZVpjXnCW1qD2LiEhNl8l_bc/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMVRuSThS/RlhYWFhhcVhGWFhx/NnhYRlhYWE4vQ2xh/c3NpYy1hbmltZS1U/b2t5by1HaG91bC0z/ZC1Ib29kaWVzLTIw/MTctQXV0dW1uLU5l/dy1GYXNoaW9uLUhv/b2RpZS1Ub2t5by1H/aG91bC1oYXJhanVr/dS1IaXAtSG9wLmpw/Zw",
            quantity:100,
            anime_name:"Tokyo Ghoul",
            price: "INR 600",
            discounted_price: "INR 530"
        },
        {
            id : 9,
            name: "Tokyo Ghoul Transition Hoodies",
            image:"https://imgs.search.brave.com/V6RTmQEYPlhOuepP4cCBZVpjXnCW1qD2LiEhNl8l_bc/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMVRuSThS/RlhYWFhhcVhGWFhx/NnhYRlhYWE4vQ2xh/c3NpYy1hbmltZS1U/b2t5by1HaG91bC0z/ZC1Ib29kaWVzLTIw/MTctQXV0dW1uLU5l/dy1GYXNoaW9uLUhv/b2RpZS1Ub2t5by1H/aG91bC1oYXJhanVr/dS1IaXAtSG9wLmpw/Zw",
            quantity:100,
            anime_name:"Tokyo Ghoul",
            price: "INR 600",
            discounted_price: "INR 530"
        }
    ],

    [
        {
            id : 3,
            name: "Hokage Red Hoodie",
            image:"https://imgs.search.brave.com/-uGF6gGQgYN3pIZZDNvB7EGU3WCYY8XVouccXTwYLmw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/akdSaFJZT3FtUnRq/b1Jfb2RWZEdnSGFI/YSZwaWQ9QXBp",
            quantity:100,
            anime_name:"Naruto",
            price: "INR 360",
            discounted_price: "INR 300"
        }
    ],

    [
        {
            id : 8,
            name: "Tanjiro Black Heart Wrenching Hoodie",
            image:"https://imgs.search.brave.com/NKejQiifoi_5Bi1qwkOK-DOqPvp8_n_vMtHTvDWaFsg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UyL2Ex/L2I5L2UyYTFiOTYw/ZmFkOGU5Yjk2OTM0/ZGEyNDM0YzkwYjIz/LnBuZw",
            quantity:100,
            anime_name:"Naruto",
            price: "INR 510",
            discounted_price: "INR 450"
        },
         {
            id : 8,
            name: "Tanjiro Black Heart Wrenching Hoodie",
            image:"https://imgs.search.brave.com/NKejQiifoi_5Bi1qwkOK-DOqPvp8_n_vMtHTvDWaFsg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UyL2Ex/L2I5L2UyYTFiOTYw/ZmFkOGU5Yjk2OTM0/ZGEyNDM0YzkwYjIz/LnBuZw",
            quantity:100,
            anime_name:"Naruto",
            price: "INR 510",
            discounted_price: "INR 450"
        }
    ],

    [
        {
        id : 7,
        name: "Gojo black hoodies",
        image:"https://imgs.search.brave.com/LsSAzCOwrnyFtPaJE_9iTTOW3EMVPIj6b8DQzuUu5mc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzI2Mzk4ODg4L3Iv/aWwvYWIyMmYxLzMw/NTIxMTMyNDEvaWxf/ZnVsbHhmdWxsLjMw/NTIxMTMyNDFfNHhh/Yi5qcGc",
        quantity:100,
        anime_name:"Jujutsu Kaisen",
        price: "INR 350",
        discounted_price: "INR 300"
    },
    {
        id : 7,
        name: "Gojo black hoodies",
        image:"https://imgs.search.brave.com/LsSAzCOwrnyFtPaJE_9iTTOW3EMVPIj6b8DQzuUu5mc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzI2Mzk4ODg4L3Iv/aWwvYWIyMmYxLzMw/NTIxMTMyNDEvaWxf/ZnVsbHhmdWxsLjMw/NTIxMTMyNDFfNHhh/Yi5qcGc",
        quantity:100,
        anime_name:"Jujutsu Kaisen",
        price: "INR 350",
        discounted_price: "INR 300"
    },
    ],

    [
    {
    id : 2,
    name: "DBZ Super Saiyan Jacket",
    image:"https://imgs.search.brave.com/_vRegiFAWHavJTLLM4QtarwYAgrY1_6gb6-_itgCj_w/rs:fit:655:655:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxL2Qw/LzBiL2UxZDAwYjlj/YTg5YzY1ZGNjYzdh/MjkyOGFlYjkyOWEw/LnBuZw",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 440",
    discounted_price: "INR 400"
}

    ],

    [
        {
    id : 4,
    name: "All Anime Girls Hoodies",
    image:"https://imgs.search.brave.com/QbGUqrwtQ4UXyluIfwjypKCc8aWy194Yq232GxWpy20/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMTZpUy5v/S0dTQnVOalNzcGJx/NkFpaXBYYU4vQ2xv/dWRzdHlsZS0zRC1I/b29kaWVzLU1lbi1D/bG90aGVzLTIwMTgt/M0QtQW5pbWUtUHJp/bnQtSG9vZHktU3dl/YXRzaGlydC1KdW1w/ZXJzLUxvbmctU2xl/ZXZlLUZpdG5lc3Mt/U3RyZWV0d2Vhci5q/cGc",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 250",
    discounted_price: "INR 230"
},
{
    id : 4,
    name: "All Anime Girls Hoodies",
    image:"https://imgs.search.brave.com/QbGUqrwtQ4UXyluIfwjypKCc8aWy194Yq232GxWpy20/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMTZpUy5v/S0dTQnVOalNzcGJx/NkFpaXBYYU4vQ2xv/dWRzdHlsZS0zRC1I/b29kaWVzLU1lbi1D/bG90aGVzLTIwMTgt/M0QtQW5pbWUtUHJp/bnQtSG9vZHktU3dl/YXRzaGlydC1KdW1w/ZXJzLUxvbmctU2xl/ZXZlLUZpdG5lc3Mt/U3RyZWV0d2Vhci5q/cGc",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 250",
    discounted_price: "INR 230"
}
    ],

    [
         {
    id : 4,
    name: "All Anime Girls Hoodies",
    image:"https://imgs.search.brave.com/QbGUqrwtQ4UXyluIfwjypKCc8aWy194Yq232GxWpy20/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMTZpUy5v/S0dTQnVOalNzcGJx/NkFpaXBYYU4vQ2xv/dWRzdHlsZS0zRC1I/b29kaWVzLU1lbi1D/bG90aGVzLTIwMTgt/M0QtQW5pbWUtUHJp/bnQtSG9vZHktU3dl/YXRzaGlydC1KdW1w/ZXJzLUxvbmctU2xl/ZXZlLUZpdG5lc3Mt/U3RyZWV0d2Vhci5q/cGc",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 250",
    discounted_price: "INR 230"
},
 {
    id : 4,
    name: "All Anime Girls Hoodies",
    image:"https://imgs.search.brave.com/QbGUqrwtQ4UXyluIfwjypKCc8aWy194Yq232GxWpy20/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMTZpUy5v/S0dTQnVOalNzcGJx/NkFpaXBYYU4vQ2xv/dWRzdHlsZS0zRC1I/b29kaWVzLU1lbi1D/bG90aGVzLTIwMTgt/M0QtQW5pbWUtUHJp/bnQtSG9vZHktU3dl/YXRzaGlydC1KdW1w/ZXJzLUxvbmctU2xl/ZXZlLUZpdG5lc3Mt/U3RyZWV0d2Vhci5q/cGc",
    quantity:100,
    anime_name:"Naruto",
    price: "INR 250",
    discounted_price: "INR 230"
}
    ],
    [
        {
    id : 5,
    name: "Monkey D Luffy OnePiece, casual Hoodie",
    image:"https://imgs.search.brave.com/JUlLcVq_7T4nQEvwqt53hOnJmELKcU8DZ7B1HXmr4y0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMUpSa2Vh/WHpzSzFSankxWGJx/NnhPYUZYYUkvTWVu/cy1BbmltZS1PbmUt/UGllY2UtSG9vZGll/LTNELVByaW50LVB1/bGxvdmVyLVN3ZWF0/c2hpcnQtTW9ua2V5/LUx1ZmZ5LUJhdHRs/ZS1UcmFja3N1aXQt/SG9vZGllcy1PdXRl/cndlYXItU3dlYXRz/aGlydC5qcGc",
    quantity:100,
    anime_name:"OnePiece",
    price: "INR 260",
    discounted_price: "INR 210"
},
{
    id : 5,
    name: "Monkey D Luffy OnePiece, casual Hoodie",
    image:"https://imgs.search.brave.com/JUlLcVq_7T4nQEvwqt53hOnJmELKcU8DZ7B1HXmr4y0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMUpSa2Vh/WHpzSzFSankxWGJx/NnhPYUZYYUkvTWVu/cy1BbmltZS1PbmUt/UGllY2UtSG9vZGll/LTNELVByaW50LVB1/bGxvdmVyLVN3ZWF0/c2hpcnQtTW9ua2V5/LUx1ZmZ5LUJhdHRs/ZS1UcmFja3N1aXQt/SG9vZGllcy1PdXRl/cndlYXItU3dlYXRz/aGlydC5qcGc",
    quantity:100,
    anime_name:"OnePiece",
    price: "INR 260",
    discounted_price: "INR 210"
}
    ]

]

export default Productdata;