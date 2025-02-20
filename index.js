const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

    const products = [
        {
            name: 'Slim-fit jeans',
            brand: 'Guess',
            price: 108,
            image: 'https://image.s5a.com/is/image/TheBay/195124508959_main?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            stock: 60,
        },
        {
            name: 'Cotton check shirt',
            brand: 'Only & sons',
            price: 69,
            image: 'https://image.s5a.com/is/image/TheBay/5715610259292_main?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            stock: 120,
        },
        {
            name: 'Cotton crewneck t-shirt',
            brand: 'Mango',
            price: 55.99,
            image: 'https://image.s5a.com/is/image/TheBay/8447144030883_main?wid=534&hei=712&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            stock: 100,
        },
    ];

    // Buy Button component - handle purchasing (i.e. updating stock)
    const BuyBtn = ({ stock, stockUpdateHandle }) => {

        const handlePurchase = () => {
            stockUpdateHandle(stock - 1)
        }

        return (
            stock > 0 ? <button onClick={handlePurchase} className="buy-btn">Add to bag</button> : ''
        );
    }

    // Product component - (generates an individual/single product)
    const Product = ({ product }) => {

        const [stock, setStock] = React.useState(product.stock);

        // function that handles the state change
        const handleUpdateStock = (stock) => {
            setStock(stock);
        }
        
        const style = {
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'sans-serif',
        };

        const btnStyle = {

        };

        const imgStyle = {
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
        }



        return (
            <div>
                <div className="product-img">
                    <img style={imgStyle} src={product.image} alt={product.name} />
                </div>
                <div style={style}>
                    <h3>{product.brand}</h3>
                    <h4>{product.name}</h4>
                    <h4>${product.price}</h4>
                    {stock > 0 ? <span className="success">{stock} items: IN STOCK</span> : <span className="error">Not in stock!</span>}
                    <BuyBtn stock={stock} stockUpdateHandle={handleUpdateStock} />
                </div>
            </div>
        );
    }

    // Products list component (generates the list of products)
    const Products = ({ products }) => {
        return (
            <div className="products-list">
                {products.length > 0 &&
                   products.map((product, index) => (
                    <div key={index} className="product">
                        <Product product={product} />
                    </div>
                ))}  
            </div>
        );
    }



    return (
        <div>
            <Products products={products} />
        </div>
    );
}

root.render(<App />);