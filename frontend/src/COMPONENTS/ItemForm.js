import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [height_m, setHeightM] = useState('');
    const [weight_kg, setWeightKg] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residential_address, setResidentialAddress] = useState('');
    const [residential_zipcode, setResidentialZipcode] = useState('');
    const [permanent_address, setPermanentAddress] = useState('');
    const [permanent_zipcode, setPermanentZipcode] = useState('');
    const [mother_first_name, setMotherFirstName] = useState('');
    const [mother_middle_name, setMotherMiddleName] = useState('');
    const [mother_surname, setMotherSurname] = useState('');
    const [employment_status, setEmploymentStatus] = useState('');
    const [telephone, setTelephone] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name); 
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setEmail(item.email);
            setPhone(item.phone);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setHeightM(item.height_m);
            setWeightKg(item.weight_kg);
            setBloodType(item.blood_type);
            setCitizenship(item.citizenship);
            setResidentialAddress(item.residential_address);
            setResidentialZipcode(item.residential_zipcode);
            setPermanentAddress(item.permanent_address);
            setPermanentZipcode(item.permanent_zipcode);
            setMotherFirstName(item.mother_first_name);
            setMotherMiddleName(item.mother_middle_name);
            setMotherSurname(item.mother_surname);
            setEmploymentStatus(item.employment_status);
            setTelephone(item.telephone);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name,
            middle_name,
            last_name,
            email,
            phone,
            sex,
            civil_status,
            height_m,
            weight_kg,
            blood_type,
            citizenship,
            residential_address,
            residential_zipcode,
            permanent_address,
            permanent_zipcode,
            mother_first_name,
            mother_middle_name,
            mother_surname,
            employment_status,
            telephone
        };

        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('Error submitting the form!', error);
        }
    };

    return (
        <div className='create-item'>
        <h1>CREATE ITEM</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>First Name:</label>
                <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Middle Name:</label>
                <input type="text" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Last Name:</label>
                <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Phone:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Sex:</label>
                <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Civil Status:</label>
                <input type="text" value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Height (m):</label>
                <input type="text" value={height_m} onChange={(e) => setHeightM(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Weight (kg):</label>
                <input type="text" value={weight_kg} onChange={(e) => setWeightKg(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Blood Type:</label>
                <input type="text" value={blood_type} onChange={(e) => setBloodType(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Residential Address:</label>
                <input type="text" value={residential_address} onChange={(e) => setResidentialAddress(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Residential Zipcode:</label>
                <input type="text" value={residential_zipcode} onChange={(e) => setResidentialZipcode(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Permanent Address:</label>
                <input type="text" value={permanent_address} onChange={(e) => setPermanentAddress(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Permanent Zipcode:</label>
                <input type="text" value={permanent_zipcode} onChange={(e) => setPermanentZipcode(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Mother's First Name:</label>
                <input type="text" value={mother_first_name} onChange={(e) => setMotherFirstName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Mother's Middle Name:</label>
                <input type="text" value={mother_middle_name} onChange={(e) => setMotherMiddleName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Mother's Surname:</label>
                <input type="text" value={mother_surname} onChange={(e) => setMotherSurname(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Employment Status:</label>
                <input type="text" value={employment_status} onChange={(e) => setEmploymentStatus(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Telephone:</label>
                <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <div className='form-group center'>
                <button type="submit">Update</button>
            </div>
        </form>
    </div>
    );
};

export default ItemForm;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ItemForm = ({ item, onSuccess }) => {
//     const [first_name, setFirstName] = useState('');
//     const [middle_name, setMiddleName] = useState('');
//     const [last_name, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [sex, setSex] = useState('');
//     const [civil_status, setCivilStatus] = useState('');
//     const [height_m, setHeightM] = useState('');
//     const [weight_kg, setWeightKg] = useState('');
//     const [blood_type, setBloodType] = useState('');
//     const [citizenship, setCitizenship] = useState('');
//     const [residential_address, setResidentialAddress] = useState('');
//     const [residential_zipcode, setResidentialZipcode] = useState('');
//     const [permanent_address, setPermanentAddress] = useState('');
//     const [permanent_zipcode, setPermanentZipcode] = useState('');
//     const [mother_first_name, setMotherFirstName] = useState('');
//     const [mother_middle_name, setMotherMiddleName] = useState('');
//     const [mother_surname, setMotherSurname] = useState('');
//     const [employment_status, setEmploymentStatus] = useState('');
//     const [telephone, setTelephone] = useState('');

//     useEffect(() => {
//         if (item) {
//             setFirstName(item.first_name); 
//             setMiddleName(item.middle_name);
//             setLastName(item.last_name);
//             setEmail(item.email);
//             setPhone(item.phone);
//             setSex(item.sex);
//             setCivilStatus(item.civil_status);
//             setHeightM(item.height_m);
//             setWeightKg(item.weight_kg);
//             setBloodType(item.blood_type);
//             setCitizenship(item.citizenship);
//             setResidentialAddress(item.residential_address);
//             setResidentialZipcode(item.residential_zipcode);
//             setPermanentAddress(item.permanent_address);
//             setPermanentZipcode(item.permanent_zipcode);
//             setMotherFirstName(item.mother_first_name);
//             setMotherMiddleName(item.mother_middle_name);
//             setMotherSurname(item.mother_surname);
//             setEmploymentStatus(item.employment_status);
//             setTelephone(item.telephone);
//         }
//     }, [item]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const data = {
//             first_name,
//             middle_name,
//             last_name,
//             email,
//             phone,
//             sex,
//             civil_status,
//             height_m,
//             weight_kg,
//             blood_type,
//             citizenship,
//             residential_address,
//             residential_zipcode,
//             permanent_address,
//             permanent_zipcode,
//             mother_first_name,
//             mother_middle_name,
//             mother_surname,
//             employment_status,
//             telephone
//         };

//         try {
//             if (item) {
//                 await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
//             } else {
//                 await axios.post('http://localhost:8000/api/items/', data);
//             }
//             onSuccess();
//         } catch (error) {
//             console.error('Error submitting the form!', error);
//         }
//     };

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem 0' }}>
//             <center >
//                 <h1 style={{ textAlign: 'center' }}>CREATE ITEM</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label>First Name:</label>
//                         <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Middle Name:</label>
//                         <input type="text" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Last Name:</label>
//                         <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Email:</label>
//                         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Phone:</label>
//                         <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Sex:</label>
//                         <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Civil Status:</label>
//                         <input type="text" value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Height (m):</label>
//                         <input type="text" value={height_m} onChange={(e) => setHeightM(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Weight (kg):</label>
//                         <input type="text" value={weight_kg} onChange={(e) => setWeightKg(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Blood Type:</label>
//                         <input type="text" value={blood_type} onChange={(e) => setBloodType(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Citizenship:</label>
//                         <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Residential Address:</label>
//                         <input type="text" value={residential_address} onChange={(e) => setResidentialAddress(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Residential Zipcode:</label>
//                         <input type="text" value={residential_zipcode} onChange={(e) => setResidentialZipcode(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Permanent Address:</label>
//                         <input type="text" value={permanent_address} onChange={(e) => setPermanentAddress(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Permanent Zipcode:</label>
//                         <input type="text" value={permanent_zipcode} onChange={(e) => setPermanentZipcode(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Mother's First Name:</label>
//                         <input type="text" value={mother_first_name} onChange={(e) => setMotherFirstName(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Mother's Middle Name:</label>
//                         <input type="text" value={mother_middle_name} onChange={(e) => setMotherMiddleName(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Mother's Surname:</label>
//                         <input type="text" value={mother_surname} onChange={(e) => setMotherSurname(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Employment Status:</label>
//                         <input type="text" value={employment_status} onChange={(e) => setEmploymentStatus(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ marginBottom: '1rem', fontSize:'2rem', fontWeight:'bold' }}>
//                         <label style={{ marginBottom: '0.5rem' }}>Telephone:</label>
//                         <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
//                     </div>
//                     <div style={{ textAlign: 'center' }}>
//                         <button type="submit" style={{ fontSize: '2rem' }}>Save</button>
//                     </div>
//                 </form>
//             </center>
//         </div>
//     );
// };

// export default ItemForm;
