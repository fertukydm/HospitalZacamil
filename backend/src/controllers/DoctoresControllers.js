const DoctoresController = {};
import DoctoresModel from "../models/Doctores.js"

DoctoresController.getDoctores = async (req, res) => {
    const Doctores = await DoctoresModel.find();
    res.json(Doctores);
};

DoctoresController.createDoctores = async (req, res) => {
    const {Nombre, Especialidad, email, password} = req.body;
    const newDoctores = new newDoctores({Nombre, Especialidad, email, password});
    await newDoctores.save();
    res.json({message: "Doctor save"});

    DoctoresController.deleteDoctor = async (req,res) => {
        const deleteDoctor = await DoctoresModel.findByIdAndDelete(req.params.id);
        if(!deleteDoctor) {
            return res.status(404).json({ message: "Doctor dont find"});
        }
        res.json({ message: "Doctor deleted"});
    };

    DoctoresController.updateDoctor = async (req,res) => {
        const {Nombre, Especialidad, email, password} = req.body;

        await DoctoresModel.findByAndUpdate(
            req.params.id,{
                Nombre,
                Especialidad,
                email,
                password
            },
            {new: true}
        );
        res.json({message: "Doctor update"});
    }
    };
    export default DoctoresController;
