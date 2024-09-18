import React from 'react'
/*
    We can catch all the parameteres after sign-in naming [...sign-in] or [[...sign-in]] folder instead of [sign-in].
    introduced url: http://localhost:3000/auth/sign-in/1234/hello
    console.log(params)
    result: { 'sign-in': [ 'sign-in', '1234', 'hello' ] }
*/
function SignInPage({params}: { params:{'sign-in':string} }) {
    console.log(params);
    console.log(params['sign-in'][2]);
    return (
        <div>SignInPage</div>
    )
}

export default SignInPage