import AgGrid from "./agGrid"

import styles from "./App.module.css"

const columnDefs = [
    {
        headerClass: styles["select-header"],
        field: "select",
        checkboxSelection: true,
        width: 40
    },
    {
        field: "name",
        headerName: "Name"
    },
    {
        field: "surname",
        headerName: "Surname"
    },
    {
        field: "date",
        headerName: "Date"
    }
]

const gridData = [
    {
        id: "1",
        name: "Jeff",
        surname: "Bloom",
        date: "22.02.2024"
    },
    {
        id: "2",
        name: "Bob",
        surname: "the builder",
        date: "22.02.2024"
    },
    {
        id: "3",
        name: "Jennie",
        surname: "Marvel",
        date: "22.02.2024"
    },
    {
        id: "4",
        name: "Kate",
        surname: "Surname",
        date: "22.02.2024"
    },
    {
        id: "5",
        name: "Trevor",
        surname: "Surname",
        date: "22.02.2024"
    },
]

function App() {

    const getContextMenuItems = (props) => {
        console.log(props.node?.data)

        const isRowSelected = !!props.node

        const contextMenu = [
            {
                name: 'Create'
            },
        ]

        if (isRowSelected) {
            contextMenu.push(
                {
                    name: 'Edit'
                },
                {
                    name: 'Delete'
                }
            )
        }
        
        return contextMenu
    }

    return (
        <div className={styles["wrapper"]}>
            <AgGrid
                columnDefs={columnDefs}
                data={gridData}
                getContextMenuItems={getContextMenuItems}
            />
        </div>
    )
}

export default App
