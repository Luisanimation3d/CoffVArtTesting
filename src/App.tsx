// import {Select, SelectOption} from "./components/Select/Select.tsx";
// import {useState} from "react";
// import {Input} from "./components/Input/Input.tsx";
// import {TextAreaInputRedisign} from "./components/TextAreaInputRedisign/TextAreaInputRedisign.tsx";

// import {ZoomImageViewer} from "./components/ZoomImageViewer/ZoomImageViewer.tsx";
// import ProductTestImage from './assets/ProductImageTest.jpg';
// import ProductTestImage2 from './assets/ProductTestTwoImage.jpg';
import {
    MenuItemsProps, SideBarMenuRedisign
} from "./components/SideBarMenuRedisign/SideBarMenuRedisign.tsx";
import { useState } from "react";
import { FiEdit, FiHome, FiTrash } from "react-icons/fi";
// import {TableRedisign} from "./components/TableRedisign/TableRedisign.tsx";
import { ModalRedisign, ModalRedisignOverflow } from "./components/ModalRedisign/ModalRedisign.tsx";
import { createPortal } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import { FormRedisign } from "./components/FormRedisign/FormRedisign.tsx";
import { FormField, SelectOption } from "./types/Form";
import { InfoCardRedisign } from "./components/InfoCardRedisign/InfoCardRedisign.tsx";

export default function App() {

    const [open, setOpen] = useState(true);

    const [darkMode, setDarkMode] = useState(true);

    const [search, setSearch] = useState('')

    const [page, setPage] = useState(1)


    // const options: SelectOption[] = [
    //     {
    //         value: '1',
    //         label: '1'
    //     },
    //     {
    //         value: '2',
    //         label: '2'
    //     },
    //     {
    //         value: '3',
    //         label: '3'
    //     }
    // ]
    // const [valueOne, setValueOne] = useState<SelectOption | undefined>(options[0]);
    // const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
    // const [value, setValue] = useState<string>('');
    // const [value2, setValue2] = useState<string>('');
    // const [value3, setValue3] = useState<string>('');
    // const [value4, setValue4] = useState<string>('');
    // // console.log(value1)
    // return (
    //     <div className={'Container'}>
    //         <Select options={options} onChange={o => setValueOne(o)} value={valueOne} placeholder={'Seleccione una opción'}/>
    //         <Select multiple options={options} onChange={o => setValue1(o)} value={value1} placeholder={'Seleccione al menos una opción'}/>
    //         <Input value={value} onChange={setValue} label={'Nombre'} name={'nombre'} size={'medium'}/>
    //         <Input value={value2} onChange={setValue2} label={'Nombre'} name={'nombre'} size={"medium"}/>
    //         <Input value={value3} onChange={setValue3} label={'Nombre'} name={'nombre'} type={'number'}/>
    //         <TextAreaInputRedisign value={value4} onChange={setValue4} label={'some'} name={'textAreaTest'} size={4}/>
    //     </div>
    // )

    const menuItems: MenuItemsProps = [
        {
            type: 'menu',
            title: 'Inicio',
            icon: <FiHome />,
            link: '/'
        },
        {
            type: 'subMenu',
            title: 'Productos',
            icon: <FiHome />,
            subItems: [
                {
                    title: 'Productos',
                    link: '/productos'
                },
                {
                    title: 'Categorías',
                    link: '/categorias'
                }
            ]
        },
        {
            type: 'subMenu',
            title: 'Ventas',
            icon: <FiHome />,
            subItems: [
                {
                    title: 'Ventas',
                    link: '/ventas'
                },
                {
                    title: 'Reportes',
                    link: '/reportes'
                }
            ]
        },
        {
            type: 'subMenu',
            title: 'Usuarios',
            icon: <FiHome />,
            subItems: [
                {
                    title: 'Usuarios',
                    link: '/usuarios'
                },
                {
                    title: 'Roles',
                    link: '/roles'
                }
            ]
        },
        {
            type: 'subMenu',
            title: 'Configuración',
            icon: <FiHome />,
            subItems: [
                {
                    title: 'Configuración',
                    link: '/configuracion'
                },
                {
                    title: 'Configuración 2',
                    link: '/configuracion2'
                }
            ]
        },
        {
            type: 'subMenu',
            title: 'Configuración',
            icon: <FiHome />,
            subItems: [
                {
                    title: 'Configuración',
                    link: '/configuracion'
                },
                {
                    title: 'Configuración 2',
                    link: '/configuracion2'
                }
            ]
        }
    ]

    const employees = [
        {
            id: 1,
            employee: 'John Doe',
            leaveType: 'Annual Leave',
            datesRequested: '01/01/2022 - 05/01/2022',
            duration: '5 days',
            state: 'Pending'
        },
        {
            id: 2,
            employee: 'Jane Doe',
            leaveType: 'Sick Leave',
            datesRequested: '01/01/2022 - 05/01/2022',
            duration: '5 days',
            state: 'Approved'
        },
        {
            id: 3,
            employee: 'John Doe',
            leaveType: 'Annual Leave',
            datesRequested: '01/01/2022 - 05/01/2022',
            duration: '5 days',
            state: 'Declined'
        }
    ]

    const columns = [
        {
            header: 'id',
            key: 'id'
        },
        {
            header: 'Employee',
            key: 'employee'
        },
        {
            header: 'Leave Type',
            key: 'leaveType'
        },
        {
            header: 'Dates Requested',
            key: 'datesRequested'
        },
        {
            header: 'Duration',
            key: 'duration'
        },
        {
            header: 'Status',
            key: 'state'
        }
    ]

    const dropdownOptions = [
        {
            label: 'Edit',
            icon: <FiEdit />,
        },
        {
            label: 'Delete',
            icon: <FiTrash />,
        }
    ]

    const handleCallback = (row: unknown, type: string) => {
        console.log(row, type)
    }

    const [form, setForm] = useState<{
        name: string,
        lastName: string,
        email: string,
        password: string,
        confirmPassword: string,
        phone: string,
        address: string,
        city: string,
        state: string,
        zip: string,
        country: string,
        role: SelectOption[],
        description: string
    }>({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        role: [],
        description: ''
    })

    const formFields: FormField[] = [
        {
            type: 'text',
            value: form.name,
            placeholder: 'Name',
            onChange: (e) => setForm({ ...form, name: e }),
            label: 'Name',
            name: 'name',
            size: 'medium'
        },
        {
            type: 'text',
            value: form.lastName,
            placeholder: 'Last Name',
            onChange: (e) => setForm({ ...form, lastName: e }),
            label: 'Last Name',
            name: 'lastName',
            size: 'medium'
        },
        {
            type: 'email',
            value: form.email,
            placeholder: 'Email',
            onChange: (e) => setForm({ ...form, email: e }),
            label: 'Email',
            name: 'email',
            size: 'large'
        },
        {
            type: 'password',
            value: form.password,
            placeholder: 'Password',
            onChange: (e) => setForm({ ...form, password: e }),
            label: 'Password',
            name: 'password',
            size: 'medium'
        },
        {
            type: 'password',
            value: form.confirmPassword,
            placeholder: 'Confirm Password',
            onChange: (e) => setForm({ ...form, confirmPassword: e }),
            label: 'Confirm Password',
            name: 'confirmPassword',
            size: 'medium'
        },
        {
            type: 'number',
            value: form.phone,
            placeholder: 'Phone',
            onChange: (e) => setForm({ ...form, phone: e }),
            label: 'Phone',
            name: 'phone',
            size: 'medium'
        },
        {
            type: 'text',
            value: form.address,
            placeholder: 'Address',
            onChange: (e) => setForm({ ...form, address: e }),
            label: 'Address',
            name: 'address',
            size: 'medium'
        },
        {
            type: 'text',
            value: form.city,
            placeholder: 'City',
            onChange: (e) => setForm({ ...form, city: e }),
            label: 'City',
            name: 'city',
            size: 'medium'
        },
        {
            type: 'text',
            value: form.state,
            placeholder: 'State',
            onChange: (e) => setForm({ ...form, state: e }),
            label: 'State',
            name: 'state',
            size: 'medium'
        },
        {
            type: 'text',
            value: form.zip,
            placeholder: 'Zip',
            onChange: (e) => setForm({ ...form, zip: e }),
            label: 'Zip',
            name: 'zip',
            size: 'medium'
        },
        {
            type: 'text',
            value: form.country,
            placeholder: 'Country',
            onChange: (e) => setForm({ ...form, country: e }),
            label: 'Country',
            name: 'country',
            size: 'medium'
        },
        {
            type: 'select',
            value: form.role,
            options: [
                {
                    value: '1',
                    label: 'Admin'
                },
                {
                    value: '2',
                    label: 'User'
                }
            ],
            onChange: (e) => setForm({ ...form, role: e }),
            placeholder: 'Select a role',
            label: 'Role',
            name: 'role',
            size: 'large',
            multiple: true
        },
        {
            type: 'textarea',
            value: form.description,
            placeholder: 'Description',
            onChange: (e) => setForm({ ...form, description: e }),
            label: 'Description',
            name: 'description',
            size: 4
        }
    ]

    return (
        // <BrowserRouter>
        //     <Routes>
        //
        //         <Route path={'/'} element={<>
        //             <div className={'appContainer'}>
        //                 {/* <SideBarMenuRedisignDesktop darkMode={darkMode} setDarkMode={setDarkMode} menuItems={menuItems}/> */}
        //                 <SideBarMenuRedisign darkMode={darkMode} setDarkMode={setDarkMode} menuItems={menuItems}/>
        //                 <div style={{
        //                     padding: '2rem',
        //                     width: '100%',
        //                     height: '100vh',
        //                     backgroundColor: darkMode ? '#1f1f1f' : '#dedede',
        //                     transition: 'all 0.5s ease',
        //                     display: 'flex',
        //                     justifyContent: 'flex-start',
        //                     alignItems: 'center',
        //                     flexDirection: 'column',
        //                     gap: '1rem',
        //                     // backgroundColor: '#dedede',
        //                 }}>
        //                     {/*<TableRedisign darkMode={darkMode} title={'Employees'} columns={columns} search={search} setSearch={setSearch} data={employees} dropDownOptions={dropdownOptions} callback={handleCallback} onRowClick={row => console.log(row)} page={page} setPage={setPage} totalPages={5} pagination={true}/>*/}
        //                     <FormRedisign fields={formFields} onSubmit={()=>null} title={'Formulario de prueba'} button={'Enviar formulario'}/>
        //                 </div>
        // {
        //     open && createPortal(<>
        //             <ModalRedisignOverflow setModalOpen={setOpen}>
        //                 <ModalRedisign setModalOpen={setOpen} darkMode={darkMode}>

        //                 </ModalRedisign>
        //             </ModalRedisignOverflow>
        //         </>
        //         , document.querySelector('#modal') as HTMLDivElement)
        // }
        //             </div>
        //         </>}/>
        //
        //     </Routes>
        //
        // </BrowserRouter>
        <BrowserRouter>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <SideBarMenuRedisign darkMode={darkMode} setDarkMode={setDarkMode} menuItems={menuItems} />
                <div style={{
                    padding: '4rem',
                    width: '100%',
                    height: '100vh',
                    backgroundColor: darkMode ? '#1f1f1f' : '#dedede',
                    transition: 'all 0.5s ease',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(4, 1fr)',
                    gap: '1rem',
                    // backgroundColor: '#dedede',
                }}>
                    <InfoCardRedisign darkMode={darkMode} style={{
                        gridColumn: '1 / 2',
                        gridRow: '1 / 6'
                    }} />
                    <InfoCardRedisign darkMode={darkMode} style={{
                        gridColumn: '2 / 4',
                        gridRow: '1 / 3'
                    }} />
                    <InfoCardRedisign darkMode={darkMode} style={{
                        gridColumn: '2 / 4',
                        gridRow: '3 / 6'
                    }} />
                </div>
                {
                    open && createPortal(<>
                        <ModalRedisignOverflow setModalOpen={setOpen}>
                            <ModalRedisign setModalOpen={setOpen} darkMode={darkMode}>
                                <FormRedisign fields={formFields} title="Formulario" button={'Enviar'} onSubmit={() => null} />
                            </ModalRedisign>
                        </ModalRedisignOverflow>
                    </>
                        , document.querySelector('#modal') as HTMLDivElement)
                }
            </div>
        </BrowserRouter>

    )
}