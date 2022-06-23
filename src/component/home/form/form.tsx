import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Formik, Field, Form, ErrorMessage } from "formik";
import './form.css';
import { validate } from "./validation";

export function FormHome() {

    const { register, handleSubmit, } = useForm();
    const [data, setData] = useState("");

    let [rappelMoi, setRappelMoi] = useState(true)
    let [civilité, setCivilité] = useState<string>()
    let [infoJuste, setInfoJuste] = useState(false)


    let onSubmit = (data: any) => {
        console.log(data);
    }

    let rappelMoihandleChange = () => {
        setRappelMoi(!rappelMoi)
    }

    let changeCivilité = (genre: string) => {
        setCivilité(genre)
    }

    let infoJusteChange = () => {
        setInfoJuste(!infoJuste)
    }


    const initialValues = {
        numero: "",
        nom: "",
        prenom: "",
        email: "",
        codePostal: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState<any>({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    let handleSubmitForm = (e: any) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    return (
        <div>

            <form onSubmit={handleSubmitForm}>

                <div className="mb-3">
                    <label className="form-label">Numero de telephone*</label>
                    <input type="number" name="numero" value={formValues.numero} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder=" xx xx xx xx xx" />
                    <p>{formErrors.numero}</p>
                </div>

                <div className="mb-3">
                    <input type="checkbox" onChange={rappelMoihandleChange} checked={rappelMoi === true} className="margin-right-5" id="exampleFormControlInput1" />
                    <label className="form-label margin-right-30" >Rappelez-moi dès que possible</label>

                    {
                        !rappelMoi ?
                            <div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=" Choisir une jounée" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=" Choisir une heure" />
                                </div>
                            </div>
                            : ""
                    }

                </div>

                <div className="mb-3">
                    <label className="form-label">Objet de votre demande</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value="les SCPI" disabled />
                </div>

                <h4>Vos informations personnelles</h4>

                <div>
                    <label className="form-label">Civilité *</label>
                    <div>
                        <input type="radio" checked={civilité === "madame"} onChange={() => { changeCivilité("madame") }} className="margin-right-5" id="exampleFormControlInput1" value="madame" />
                        <label className="form-label margin-right-30" >Mme</label>
                        <input type="radio" checked={civilité === "monsieur"} onChange={() => { changeCivilité("monsieur") }} className="margin-right-5" id="exampleFormControlInput1" value="monsieur" />
                        <label className="form-label">M.</label>
                    </div>
                </div>


                <div className="info-perso">
                    <div>
                        <label className="form-label">Nom*</label>
                        <input type="text" name="nom" value={formValues.nom} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder=" Votre nom" />
                        <p>{formErrors.nom}</p>
                    </div>

                    <div>
                        <label className="form-label">Prenom*</label>
                        <input type="text" value={formValues.prenom} onChange={handleChange} name="prenom" className="form-control" id="exampleFormControlInput1" placeholder=" Votre prenom" />
                        <p>{formErrors.prenom}</p>
                    </div>

                    <div>
                        <label className="form-label">Email*</label>
                        <input type="email" value={formValues.email} onChange={handleChange} name="email" className="form-control" id="exampleFormControlInput1" placeholder=" Votre email" />
                        <p>{formErrors.email}</p>
                    </div>

                    <div>
                        <label className="form-label">Code Postal*</label>
                        <input type="number" value={formValues.codePostal} onChange={handleChange} name="codePostal" className="form-control" id="exampleFormControlInput1" placeholder=" Votre code postal" />
                        <p>{formErrors.codePostal}</p>
                    </div>
                </div>


                <br />
                <div>
                    <input type="checkbox" onChange={infoJusteChange} checked={infoJuste === true} className="margin-right-5" id="exampleFormControlInput1" />
                    <label className="form-label margin-right-30" >Les infos sont juste</label>
                </div>


                <button type="submit" className="btn btn-dark" disabled={infoJuste === false} >Envoyer ma demande</button>


            </form>


        </div>
    );
}
