import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching the items!', error);
        }
    };

    return (
        <div className="item-list">
            <h1>Items</h1>
            {items.map(item => (
                <div key={item.id} className="item">
                    <table className="item-table">
                        <thead>
                            <tr>
                                <th>Label</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>First Name:</td>
                                <td className='details'>{item.first_name}</td>
                            </tr>
                            <tr>
                                <td>Middle Name:</td>
                                <td className='details'>{item.middle_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name:</td>
                                <td className='details'>{item.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td className='details'>{item.email}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td className='details'>{item.phone}</td>
                            </tr>
                            <tr>
                                <td>Sex:</td>
                                <td className='details'>{item.sex}</td>
                            </tr>
                            <tr>
                                <td>Civil Status:</td>
                                <td className='details'>{item.civil_status}</td>
                            </tr>
                            <tr>
                                <td>Height (m):</td>
                                <td className='details'>{item.height_m}</td>
                            </tr>
                            <tr>
                                <td>Weight (kg):</td>
                                <td className='details'>{item.weight_kg}</td>
                            </tr>
                            <tr>
                                <td>Blood Type:</td>
                                <td className='details'>{item.blood_type}</td>
                            </tr>
                            <tr>
                                <td>Citizenship:</td>
                                <td className='details'>{item.citizenship}</td>
                            </tr>
                            <tr>
                                <td>Residential Address:</td>
                                <td className='details'>{item.residential_address}</td>
                            </tr>
                            <tr>
                                <td>Residential Zipcode:</td>
                                <td className='details'>{item.residential_zipcode}</td>
                            </tr>
                            <tr>
                                <td>Permanent Address:</td>
                                <td className='details'>{item.permanent_address}</td>
                            </tr>
                            <tr>
                                <td>Permanent Zipcode:</td>
                                <td className='details'>{item.permanent_zipcode}</td>
                            </tr>
                            <tr>
                                <td>Mother's First Name:</td>
                                <td className='details'>{item.mother_first_name}</td>
                            </tr>
                            <tr>
                                <td>Mother's Middle Name:</td>
                                <td className='details'>{item.mother_middle_name}</td>
                            </tr>
                            <tr>
                                <td>Mother's Surname:</td>
                                <td className='details'>{item.mother_surname}</td>
                            </tr>
                            <tr>
                                <td>Employment Status:</td>
                                <td className='details'>{item.employment_status}</td>
                            </tr>
                            <tr>
                                <td>Telephone:</td>
                                <td className='details'>{item.telephone}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="item-actions">
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;


















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ItemList = ({ onEdit, onDelete }) => {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         fetchItems();
//     }, []);

//     const fetchItems = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/api/items/');
//             setItems(response.data);
//         } catch (error) {
//             console.error('Error fetching the items!', error);
//         }
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <h1>Items</h1>
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//                 {items.map((item) => (
//                     <li key={item.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', width: '400px', padding: '1rem' }}>
//                         <div><strong>Name:</strong> {item.first_name} {item.middle_name} {item.last_name}</div>
//                         <div><strong>Email:</strong> {item.email}</div>
//                         <div><strong>Phone:</strong> {item.phone}</div>
//                         <div><strong>Sex:</strong> {item.sex}</div>
//                         <div><strong>Civil Status:</strong> {item.civil_status}</div>
//                         <div><strong>Height (m):</strong> {item.height_m}</div>
//                         <div><strong>Weight (kg):</strong> {item.weight_kg}</div>
//                         <div><strong>Blood Type:</strong> {item.blood_type}</div>
//                         <div><strong>Citizenship:</strong> {item.citizenship}</div>
//                         <div><strong>Residential Address:</strong> {item.residential_address}</div>
//                         <div><strong>Residential Zipcode:</strong> {item.residential_zipcode}</div>
//                         <div><strong>Permanent Address:</strong> {item.permanent_address}</div>
//                         <div><strong>Permanent Zipcode:</strong> {item.permanent_zipcode}</div>
//                         <div><strong>Mother's First Name:</strong> {item.mother_first_name}</div>
//                         <div><strong>Mother's Middle Name:</strong> {item.mother_middle_name}</div>
//                         <div><strong>Mother's Surname:</strong> {item.mother_surname}</div>
//                         <div><strong>Employment Status:</strong> {item.employment_status}</div>
//                         <div><strong>Telephone:</strong> {item.telephone}</div>
//                         <br />
//                         <button onClick={() => onEdit(item)}>Edit</button>
//                         <button onClick={() => onDelete(item.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ItemList;
