import {useState, useRef} from "react";
import {FiEye, FiEyeOff} from "react-icons/fi";
import styles from './Input.module.css';

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label: string;
    name: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'date';
    size?: 'medium' | 'large';
}


export const Input = ({value, onChange, label, name, placeholder, size = 'large', type = 'text'}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleShowPassword = () => {
        if (inputRef.current) {
            setShowPassword(!showPassword);
            inputRef.current.type = inputRef.current.type === 'password' ? 'text' : 'password';
        }
    }
    return (
        <div className={`${styles.container} ${
                size === 'medium' ? styles.medium : size === 'large' ? styles.large : ''
        }`}>
            <input className={styles.input} type={type} name={name} id={name} value={value}
                   onChange={e => onChange(e.target.value)} placeholder={placeholder || label} autoComplete={'off'}
                   ref={inputRef}
            />
            <label htmlFor={name} className={styles.label}>{label}</label>
            {
                value && (
                    <span className={styles['hide-password']} onClick={e => {
                        e.stopPropagation();
                        handleShowPassword();
                    }}>
                        {
                            type === 'password' && (showPassword ? <FiEyeOff/> : <FiEye/>)
                        }
                    </span>
                )
            }
        </div>
    )
}