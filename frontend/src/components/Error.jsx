export default ({ id, errors }) => {

    if(!errors){
        return;
    }

    if(!errors[id]){
        return;
    }

    return (
        <>
            {errors[id].map((err, index) => <p key={index} className="error">{err}</p>)}
        </>
    )
}