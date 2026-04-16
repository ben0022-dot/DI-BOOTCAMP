type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

// The Union Type
type DataItem = User | Product | Order;

function handleData(items: DataItem[]): string[] {
    return items.map(item => {
        switch (item.type) {
            case 'user':
                // TypeScript now knows 'item' is a User
                return `Hello, ${item.name}! You are ${item.age} years old.`;

            case 'product':
                // TypeScript now knows 'item' is a Product
                return `Product ID: ${item.id} costs $${item.price}.`;

            case 'order':
                // TypeScript now knows 'item' is an Order
                return `Order ${item.orderId} summary: $${item.amount} total.`;

            default:
                // Handling unexpected cases (Exhaustiveness checking)
                return "Unknown data type encountered.";
        }
    });
}

const mixedData: DataItem[] = [
    { type: 'user', name: 'Ezra', age: 19 },
    { type: 'product', id: 404, price: 25.99 },
    { type: 'order', orderId: 'ABC-123', amount: 150.00 }
];

const results = handleData(mixedData);

results.forEach(msg => console.log(msg));
/* Output:
"Hello, Ezra! You are 19 years old."
"Product ID: 404 costs $25.99."
"Order ABC-123 summary: $150.0 total."
*/

