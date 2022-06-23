export const validate = (values: any) => {

    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.numero) {
        errors.numero = "Username is required!";
    } else if (values.numero.length < 4) {
        errors.numero = "numero must be more than 4 characters";
    } else if (values.numero.length > 10) {
        errors.numero = "numero cannot exceed more than 10 characters";
    }

    if (!values.nom) {
        errors.nom = "Username is required!";
    }

    if (!values.prenom) {
        errors.prenom = "Username is required!";
    }

    if (!values.email) {
        errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
    }

    if (!values.codePostal) {
        errors.codePostal = "Username is required!";
    }

    // if (!values.password) {
    //     errors.password = "Password is required";
    // } else if (values.password.length < 4) {
    //     errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //     errors.password = "Password cannot exceed more than 10 characters";
    // }

    return errors;
};