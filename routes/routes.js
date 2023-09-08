import  express from "express"
export const router = express.Router();
import {regevento, shevento, shonevent ,delevento, upevento} from "../controllers/controllereventos.js"
import {db} from "../mongodb.js"


//Aca vienen mis rutas para manejar los eventos deportivos
router.get('/mostraruno/:id', shonevent)
router.post('/regevento', regevento);
router.get('/mostrar', shevento);
router.delete('/delete/:id',delevento)
router.put('/update/:id', upevento)


router.get('/', (req, res) => {
    res.send('Ejemplo de mi servidor de pagina Web')
  })


router.get('/inicio', (req, res) => {
    res.send('Esta es mi pagina de inicio')
  })
router.get('/correo', (req, res) => {
    res.send('Esta es mi pagina de correo')
  })

//router.get('/shuser', showuser);


export default router;


