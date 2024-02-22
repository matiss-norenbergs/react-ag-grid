import { Component } from "react"
import classNames from "classnames"

import { AgGridReact } from "ag-grid-react"
import { MenuModule } from "@ag-grid-enterprise/menu"

import styles from "./AgGrid.module.css"
import "./AgGrid.css"

class AgGrid extends Component {
    render() {
        const {
            columnDefs,
            data,
            getContextMenuItems
        } = this.props

        return (
            <div
                className={classNames(
                    styles["data-grid-wrapper"],
                    styles["ag-theme-alpine"],
                )}
                style={{ height: 600 }}
            >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={data}
                    getContextMenuItems={getContextMenuItems}

                    modules={[ MenuModule ]}
                />
            </div>
        )
    }
}

export default AgGrid