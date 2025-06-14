import p1_img from '../assets/p1.jfif'
import p2_img from '../assets/p2.jfif'
import p3_img from '../assets/p3.avif'
import p4_img from '../assets/p4.jfif'

let data_product= [
     {
            id: 1,
            name: "Kurti",
            category: "women",
            image: p1_img,
            newPrice: 50.0,
            oldPrice: 80.5
        },
    
        { id: 2, name: "Jeans", category: "men", image:p2_img, newPrice: 60.0, oldPrice: 90.5 },
        { id: 3, name: "Saree", category: "women", image:p3_img, newPrice: 75.0, oldPrice: 120.0 },
        { id: 4, name: "Jacket", category: "men", image: p4_img, newPrice: 90.0, oldPrice: 140.0 }
]

export default data_product;
