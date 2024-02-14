// import {Select, SelectOption} from "./components/Select/Select.tsx";
// import {useState} from "react";
// import {Input} from "./components/Input/Input.tsx";
// import {TextAreaInput} from "./components/TextAreaInput/TextAreaInput.tsx";

// import {ZoomImageViewer} from "./components/ZoomImageViewer/ZoomImageViewer.tsx";
// import ProductTestImage from './assets/ProductImageTest.jpg';
// import ProductTestImage2 from './assets/ProductTestTwoImage.jpg';
import {
    MenuItemsProps,
    SideBarMenuRedisignDesktop
} from "./components/SideBarMenuRedisign/SideBarMenuRedisign.tsx";
import {useState} from "react";
import {FiEdit, FiHome, FiTrash} from "react-icons/fi";
import {TableRedisign} from "./components/TableRedisign/TableRedisign.tsx";
import {ModalRedisign, ModalRedisignOverflow} from "./components/ModalRedisign/ModalRedisign.tsx";
import {createPortal} from "react-dom";

export default function App() {

    const [open, setOpen] = useState(true);

    const [darkMode, setDarkMode] = useState(true);

    const [search, setSearch] = useState('')



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
    //         <TextAreaInput value={value4} onChange={setValue4} label={'some'} name={'textAreaTest'} size={4}/>
    //     </div>
    // )

    const menuItems: MenuItemsProps = [
        {
            type: 'menu',
            title: 'Inicio',
            icon: <FiHome/>,
            link: '/'
        },
        {
            type: 'subMenu',
            title: 'Productos',
            icon: <FiHome/>,
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
            icon: <FiHome/>,
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
            icon: <FiHome/>,
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
            icon: <FiHome/>,
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
            icon: <FiHome/>,
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
            icon: <FiEdit/>,
        },
        {
            label: 'Delete',
            icon: <FiTrash/>,
        }
    ]

    const handleCallback = (row: unknown, type: string) => {
        console.log(row, type)
    }

    return (
        // <div>
        //     <ZoomImageViewer image={ProductTestImage} alt={'Imagen Test'} height={500} width={500}/>
        //     <ZoomImageViewer image={ProductTestImage2} width={500} height={500} alt={'Imagen Test 2'}/>
        // </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <SideBarMenuRedisignDesktop darkMode={darkMode} setDarkMode={setDarkMode} menuItems={menuItems}/>
            <div style={{
                padding: '2rem',
                width: '100%',
                height: '100vh',
                backgroundColor: darkMode ? '#1f1f1f' : '#dedede',
                transition: 'all 0.5s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                // backgroundColor: '#dedede',
            }}>
                <TableRedisign darkMode={darkMode} title={'Employees'} columns={columns} search={search} setSearch={setSearch} data={employees} dropDownOptions={dropdownOptions} callback={handleCallback} onRowClick={row => console.log(row)}/>

            </div>
            {
                open && createPortal(<>
                    <ModalRedisignOverflow setModalOpen={setOpen}>
                        <ModalRedisign setModalOpen={setOpen} darkMode={darkMode}>

                        </ModalRedisign>
                    </ModalRedisignOverflow>
                </>
                    , document.querySelector('#modal') as HTMLDivElement)
            }
        </div>
    )
}