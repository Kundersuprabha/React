import {useState} from 'react'

const PasswordGenerator = () => {
    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(12)
    const [includeUperCase, setIncludeUpperCase] = useState(true)
    const [includeLowerCase, setIncludeLowerCase] = useState(true)
    const [includeNumbers, setIncludeNumbers] = useState(true)
    const [includeSpecialCharacters, setIncludeSpecialCharacters]= useState(true)

    const handleGeneratePassword = () => {
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
        const numbers = '0123456789'
        const specialCharacters = '~`!@#$%^&*()_-==+{[}]:;"<.>/?'

        let validChars = '';
        if (includeUperCase) {
            validChars += upperCase; // Append uppercase letters
        }
        if (includeLowerCase) {
            validChars += lowerCase; // Append lowercase letters
        }
        if (includeNumbers) {
            validChars += numbers; // Append numbers
        }
        if (includeSpecialCharacters) {
            validChars += specialCharacters; // Append special characters
        }

        if (!validChars) {
            setPassword("Select at least one option");
            return;
        }

        let generatePassword = '';
        
        for(let i = 0; i < passwordLength; i++){
            const randomIndex = Math.floor(Math.random() * validChars.length)
            generatePassword += validChars[randomIndex]
        }
        setPassword(generatePassword)
    }

    return(
        <section className='landing-section'>
            <div>
            <div className='row conatiner'>
                <div className='heading'>Password Generator</div>
                <div className='mb-2'>
                    <label className='form-label'>Password Length: </label>
                    <input 
                        type='number' 
                        className='form-control input-box'
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Include UpperCase: </label>
                    <input 
                        type='checkbox' 
                        className='form-check-input mx-2' 
                        checked={includeUperCase}
                        onChange={(e) => setIncludeUpperCase(!includeUperCase)}
                    />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Include LowerCase: </label>
                    <input 
                        type='checkbox' 
                        className='form-check-input mx-2' 
                        checked={includeLowerCase}
                        onChange={(e) => setIncludeLowerCase(!includeLowerCase)}
                    />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Include Numbers: </label>
                    <input 
                        type='checkbox' 
                        className='form-check-input mx-2'
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(!includeNumbers)}
                    />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>Include Special characters: </label>
                    <input 
                        type='checkbox' 
                        className='form-check-input mx-2' 
                        checked={includeSpecialCharacters}
                        onChange={(e) => setIncludeSpecialCharacters(!includeSpecialCharacters)}
                    />
                </div>
                <button className='btn btn-primary' onClick={handleGeneratePassword}>Generate Password</button>
                <div className='mb-2'>
                    <label className='form-label'>Password: </label>
                    <input 
                        type='text' 
                        className='form-control input-box' 
                        readOnly
                        value={password}
                    />
                </div>
            </div>
            </div>
        </section>
    )
}

export default PasswordGenerator