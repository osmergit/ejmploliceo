import { evento } from '../models/eventos.js';
//Registrar evento
export const regevento = (req, res) => {
    const equipos = evento(req.body);
    equipos
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

//mostrar un evento deportivo
  export const shevento = (req,res) => {
   
    evento
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error})); 
}
  export default regevento

//mostrar un partido especifico

export const shonevent = (req, res) => {
    const { id } = req.params;
    evento
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

  //Borrar un evento deportivo

export const delevento =  (req, res) => {
    const { id } = req.params;
    evento
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };