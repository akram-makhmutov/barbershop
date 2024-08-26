import React from 'react';
import styles from './Field.module.scss';

interface FieldProps {
    fontSize: string;
    text: string;
}

const Field = React.forwardRef<HTMLInputElement, FieldProps>(({fontSize, text}, ref) => {
    return (
        <div>
            <input className={styles.fieldText} placeholder={text} style={{fontSize}} ref={ref}/>
        </div>
    );
});

export default Field;