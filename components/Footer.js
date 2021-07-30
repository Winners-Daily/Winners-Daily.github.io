import footStyles from '../styles/footer.module.css';
import { useForm } from 'react-hook-form';

const Footer = () => {
    const {register, handleSubmit,formState: { errors }} = useForm();
    return (        
        <div className={footStyles.footer}>
            <div className={footStyles.form_container}>
                <form 
                    action="" 
                    method="post"
                    className={footStyles.form}>
                    <div className={footStyles.email_div}>   
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Enter yout email" 
                            className={footStyles.email_input}
                            {...register("email", { 
                                required:{
                                    value: true,
                                    message: "Email required."
                                },
                                pattern: {
                                    value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                    message: "Invalid email format."
                                }
                            })}
                        />
                    </div>
                    <button
                        className={footStyles.email_button}
                    >
                        Subscribe
                    </button>
                </form>
                
            </div>
            <p className={footStyles.copy}>© 2020 - 2021 thewinnersdaily.com. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;