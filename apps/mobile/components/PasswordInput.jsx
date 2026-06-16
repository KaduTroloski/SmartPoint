import React, { useState } from 'react';

import FormInput from './FormInput';

export default function PasswordInput(props) {
    const [hidden, setHidden] = useState(true);

    return (
        <FormInput
            secureTextEntry={hidden}
            rightIcon={
                hidden
                    ? 'eye-off-outline'
                    : 'eye-outline'
            }
            onRightIconPress={() =>
                setHidden(!hidden)
            }
            {...props}
        />
    );
}