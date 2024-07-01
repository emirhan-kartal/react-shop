import { Product } from "./Interfaces";
const categories: string[] = ["Men", "Women", "Kids", "Accessories"];

const products: Product[] = [
    // Men
    {
        id: "1",
        name: "Men's Running Shoes",
        price: 120,
        description: "High-performance running shoes.",
        image: "https://via.placeholder.com/150?text=Men's+Running+Shoes",
        category: "Men",
        stock: 50,

        date: "2023-01-01",
        productInfo: {
            details: `## Product Details

Discover the ultimate in running shoe technology with our Men's Running Shoes, meticulously crafted to enhance your performance and comfort with every stride.

### Design and Construction

![Breathable Mesh](https://via.placeholder.com/400x300?text=Breathable+Mesh)
These high-performance running shoes are engineered with a focus on breathability, lightweight construction, and superior durability. The upper mesh material ensures optimal airflow, keeping your feet cool and dry even during intense workouts or long-distance runs. The seamless design reduces irritation and friction, providing a comfortable fit that molds to your foot's natural shape.

### Cushioning and Support

![Cushioning Technology](https://via.placeholder.com/400x300?text=Cushioning+Technology)
Featuring advanced cushioning technology, these shoes offer responsive comfort and excellent shock absorption. The midsole is designed to provide stability and support, enhancing your stride and reducing fatigue. Whether you're running on roads, tracks, or trails, our shoes offer the right balance of cushioning and responsiveness to help you perform at your best.

### Outsole Performance

![Durable Outsole](https://via.placeholder.com/400x300?text=Durable+Outsole)
The outsole is crafted from durable rubber with a multidirectional tread pattern, offering exceptional traction on various surfaces. It ensures reliable grip and agility, allowing you to maintain control and stability in all weather conditions. The strategic placement of grooves and flex zones promotes natural foot movement, making these shoes versatile for both training sessions and competitive races.

### Fit and Comfort

![Padded Collar](https://via.placeholder.com/400x300?text=Padded+Collar)
Our shoes are designed with a focus on comfort and fit. The padded collar and tongue provide a snug, supportive feel around the ankle, while the lace-up closure allows for a customizable fit. The interior lining is soft and breathable, preventing moisture buildup and enhancing overall comfort throughout your run.

### Performance Enhancements

![Performance Features](https://via.placeholder.com/400x300?text=Performance+Features)
Designed for serious athletes and casual runners alike, these shoes incorporate performance-enhancing features such as:
- **Breathable Mesh:** Keeps feet cool and dry.
- **Lightweight Design:** Reduces fatigue during long runs.
- **Responsive Cushioning:** Enhances comfort and energy return.
- **Durable Outsole:** Provides excellent traction and durability.
- **Supportive Structure:** Promotes natural foot movement and stability.

### Ideal For

Our Men's Running Shoes are ideal for:
- **Daily Running:** Perfect for daily training runs or jogging sessions.
- **Competitive Races:** Provides the performance needed for races and marathons.
- **Gym Workouts:** Offers stability and cushioning for indoor workouts.

### Care Instructions

![Care Instructions](https://via.placeholder.com/400x300?text=Care+Instructions)
To maintain the performance and longevity of your running shoes, we recommend:
- **Regular Cleaning:** Wipe with a damp cloth after each use to remove dirt and debris.
- **Air Dry:** Allow shoes to air dry naturally away from direct heat sources.
- **Proper Storage:** Store in a cool, dry place when not in use to prevent material damage.

### Sustainability Commitment

![Sustainability](https://via.placeholder.com/400x300?text=Sustainability+Commitment)
At [Your Company Name], we are committed to sustainability. These running shoes are manufactured using eco-friendly practices and materials wherever possible. We strive to reduce our environmental impact while delivering high-quality products that meet your performance needs.

---

Experience unmatched comfort, support, and performance with our Men's Running Shoes. Whether you're training for a marathon or simply enjoy a morning jog, these shoes are your perfect companion on the road to achieving your fitness goals.

For more information or to purchase, visit our [website](#) or contact our customer service team at [customer.service@example.com](mailto:customer.service@example.com).
`,
            reviews: [
                {
                    id: "r1",
                    name: "John Doe",
                    rating: 5,
                    comment: "Very comfortable!",
                    date: "2023-01-15",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: true,
        discountPrice: 100,
        discountStartDate: "2023-06-01",
        discountEndDate: "2023-06-15",
        specialFilterProps: {
            brand: "Nike",
            color: "Black",
            size: "10",
        },
    },
    {
        id: "2",
        name: "Men's Jacket",
        price: 150,
        description: "Waterproof winter jacket.",
        image: "https://via.placeholder.com/150?text=Men's+Jacket",
        category: "Men",
        stock: 30,
        date: "2023-02-01",

        productInfo: {
            details: "Keeps you warm and dry in harsh weather.",
            reviews: [
                {
                    id: "r3",
                    name: "Jane Doe",
                    rating: 4,
                    comment: "Very comfortable but a bit long.",
                    date: "2023-02-10",
                },
            ],            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Columbia",
            color: "Blue",
            size: "L",
        },
    },
    // Women
    {
        id: "3",
        name: "Women's Yoga Pants",
        price: 70,
        description: "Comfortable and flexible yoga pants.",
        image: "https://via.placeholder.com/150?text=Women's+Yoga+Pants",
        category: "Women",
        stock: 100,
        date: "2023-08-01",

        productInfo: {
            details: "Perfect for yoga and other workouts.",
            reviews: [
                {
                    id: "r3",
                    name: "Jane Doe",
                    rating: 4,
                    comment: "Very comfortable but a bit long.",
                    date: "2023-02-10",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Lululemon",
            color: "Black",
            size: "M",
        },
    },
    {
        id: "4",
        name: "Women's Summer Dress",
        price: 85,
        description: "Light and airy summer dress.",
        image: "https://via.placeholder.com/150?text=Women's+Summer+Dress",
        category: "Women",
        stock: 70,
        date: "2022-01-01",

        productInfo: {
            details: "Perfect for summer days.",
            reviews: [
                {
                    id: "r3",
                    name: "Jane Doe",
                    rating: 4,
                    comment: "Very comfortable but a bit long.",
                    date: "2023-02-10",
                },
            ],            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: true,
        discountPrice: 65,
        discountStartDate: "2023-07-01",
        discountEndDate: "2023-07-15",
        specialFilterProps: {
            brand: "H&M",
            color: "Red",
            size: "S",
        },
    },
    // Kids
    {
        id: "5",
        name: "Kids' Sneakers",
        price: 45,
        description: "Durable and stylish sneakers for kids.",
        image: "https://via.placeholder.com/150?text=Kids'+Sneakers",
        category: "Kids",
        stock: 80,
        date: "2023-01-12",
        productInfo: {
            details: "Perfect for active kids.",
            reviews: [
                {
                    id: "r5",
                    name: "Parent A",
                    rating: 5,
                    comment: "My kid loves these shoes!",
                    date: "2023-03-01",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Adidas",
            color: "White",
            size: "4",
        },
    },
    {
        id: "6",
        name: "Kids' T-Shirt",
        price: 20,
        description: "Soft and comfortable T-shirt.",
        image: "https://via.placeholder.com/150?text=Kids'+T-Shirt",
        category: "Kids",
        stock: 200,
        date: "2023-01-24",

        productInfo: {
            details: "Perfect for everyday wear.",
            reviews: [
                {
                    id: "r3",
                    name: "Jane Doe",
                    rating: 4,
                    comment: "Very comfortable but a bit long.",
                    date: "2023-02-10",
                },
            ],            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: true,
        discountPrice: 15,
        discountStartDate: "2023-08-01",
        discountEndDate: "2023-08-15",
        specialFilterProps: {
            brand: "Gap",
            color: "Yellow",
            size: "M",
        },
    },
    // Accessories
    {
        id: "7",
        name: "Leather Wallet",
        price: 50,
        description: "Genuine leather wallet.",
        image: "https://via.placeholder.com/150?text=Leather+Wallet",
        category: "Accessories",
        stock: 40,
        date: "2023-04-01",

        productInfo: {
            details: "Slim and stylish wallet.",
            reviews: [
                {
                    id: "r7",
                    name: "Sam B.",
                    rating: 5,
                    comment: "Great quality!",
                    date: "2023-04-10",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Fossil",
            color: "Brown",
        },
    },
    {
        id: "8",
        name: "Sunglasses",
        price: 100,
        description: "Polarized sunglasses.",
        image: "https://via.placeholder.com/150?text=Sunglasses",
        category: "Accessories",
        stock: 60,
        date: "2023-06-01",

        productInfo: {
            details: "Protect your eyes in style.",
            reviews: [
                {
                    id: "r3",
                    name: "Jane Doe",
                    rating: 4,
                    comment: "Very comfortable but a bit long.",
                    date: "2023-02-10",
                },
            ],            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: true,
        discountPrice: 80,
        discountStartDate: "2023-05-01",
        discountEndDate: "2023-05-15",
        specialFilterProps: {
            brand: "Ray-Ban",
            color: "Black",
        },
    },
    // More products for each category
    {
        id: "9",
        name: "Men's Casual Shirt",
        price: 60,
        description: "Comfortable casual shirt.",
        image: "https://via.placeholder.com/150?text=Men's+Casual+Shirt",
        category: "Men",
        stock: 100,
        date: "2023-05-01",

        productInfo: {
            details: "Perfect for everyday wear.",
            reviews: [
                {
                    id: "r9",
                    name: "Michael P.",
                    rating: 4,
                    comment: "Good quality but fits a bit tight.",
                    date: "2023-01-20",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Zara",
            color: "Green",
            size: "M",
        },
    },
    {
        id: "10",
        name: "Women's Handbag",
        price: 120,
        description: "Stylish leather handbag.",
        image: "https://via.placeholder.com/150?text=Women's+Handbag",
        category: "Women",
        stock: 30,
        date: "2023-03-04",

        productInfo: {
            details: "Elegant and spacious.",
            reviews: [
                {
                    id: "r10",
                    name: "Alice W.",
                    rating: 5,
                    comment: "I love this bag!",
                    date: "2023-02-25",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Coach",
            color: "Black",
        },
    },
    {
        id: "11",
        name: "Men's Athletic Shorts",
        price: 35,
        description: "Comfortable and breathable athletic shorts.",
        image: "https://via.placeholder.com/150?text=Men's+Athletic+Shorts",
        category: "Men",
        stock: 80,
        date: "2023-02-11",

        productInfo: {
            details: "Ideal for running and workouts.",
            reviews: [
                {
                    id: "r11",
                    name: "Peter K.",
                    rating: 4,
                    comment: "Good quality but slightly loose.",
                    date: "2023-03-05",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Under Armour",
            color: "Gray",
            size: "L",
        },
    },
    {
        id: "12",
        name: "Women's Running Shoes",
        price: 110,
        description: "High-performance running shoes.",
        image: "https://via.placeholder.com/150?text=Women's+Running+Shoes",
        category: "Women",
        stock: 60,
        date: "2023-03-01",

        productInfo: {
            details: "Breathable and lightweight.",
            reviews: [
                {
                    id: "r12",
                    name: "Emily R.",
                    rating: 5,
                    comment: "Perfect for my morning runs!",
                    date: "2023-04-12",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Asics",
            color: "Pink",
            size: "7",
        },
    },
    {
        id: "13",
        name: "Kids' Jacket",
        price: 55,
        description: "Warm and comfortable jacket for kids.",
        image: "https://via.placeholder.com/150?text=Kids'+Jacket",
        category: "Kids",
        stock: 50,
        date: "2023-03-01",

        productInfo: {
            details: "Ideal for cold weather.",
            reviews: [
                {
                    id: "r13",
                    name: "Parent B",
                    rating: 4,
                    comment: "Keeps my child warm and cozy.",
                    date: "2023-05-15",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "North Face",
            color: "Red",
            size: "S",
        },
    },
    {
        id: "14",
        name: "Men's Dress Shoes",
        price: 130,
        description: "Elegant leather dress shoes.",
        image: "https://via.placeholder.com/150?text=Men's+Dress+Shoes",
        category: "Men",
        stock: 40,
        date: "2023-03-01",

        productInfo: {
            details: "Perfect for formal occasions.",
            reviews: [
                {
                    id: "r14",
                    name: "David H.",
                    rating: 5,
                    comment: "Very stylish and comfortable.",
                    date: "2023-06-01",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Allen Edmonds",
            color: "Black",
            size: "9",
        },
    },
    {
        id: "15",
        name: "Women's Scarf",
        price: 25,
        description: "Elegant silk scarf.",
        image: "https://via.placeholder.com/150?text=Women's+Scarf",
        category: "Accessories",
        stock: 70,
        date: "2023-03-01",

        productInfo: {
            details: "Adds a touch of elegance to any outfit.",
            reviews: [
                {
                    id: "r15",
                    name: "Lisa G.",
                    rating: 5,
                    comment: "Beautiful and soft.",
                    date: "2023-07-05",
                },
            ],
            shipping: "Free shipping on orders over $50.",
            returns: "30-day return policy.",
        },
        onDiscount: false,
        specialFilterProps: {
            brand: "Gucci",
            color: "Blue",
        },
    },
];

const config = {
    currency_symbol: "$",
    currency_code: "USD",
    shipping_cost: 9,
    categories: [...categories],
    products: [...products],
};
export default config;
