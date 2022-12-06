import App from './app';
import HealthRoute from './routes/health.route';
import ProductRoute from './routes/product.route';

const app = new App([new HealthRoute(), new ProductRoute()]);

app.listen();

export default app;