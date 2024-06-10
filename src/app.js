// Levantando el servidor.
import express from "express";
const app = express();
import productosRouter from "./routes/productos.router.js";
import carritoRouter from "./routes/carrito.router.js";

const PUERTO = 8080;
app.listen(PUERTO, () => {
	console.log(`Listening in port: http://localhost:${PUERTO}`);
});

// Middleware para recibir datos en Json:
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Ruta general
app.get("/", (req, res) => {
	res.send("Bienvenidos a la App de: Gonzalo Federico Jontade.");
});

// Rutas productos
app.use("/api/products", productosRouter);

// Rutas carritos
app.use("/api/carts", carritoRouter);

app.get("*", (req, res) => {
	res.send("ERROR: Esta ruta no esta definida.");
});
