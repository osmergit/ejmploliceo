import  express from "express"
export const router = express.Router();


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


