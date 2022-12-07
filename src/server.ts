import App from './app';
import HealthRoute from './routes/health.route';
import ProductRoute from './routes/product.route';
import CheckoutRoute from './routes/checkout.route';

const app = new App([new HealthRoute(), new ProductRoute(), new CheckoutRoute()]);

app.listen();

export default app;