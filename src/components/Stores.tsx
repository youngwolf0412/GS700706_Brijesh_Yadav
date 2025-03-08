import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { stores } from "../constants/constant";
import { FaTrash } from "react-icons/fa";

ModuleRegistry.registerModules([AllCommunityModule]);

// Delete button cell renderer component
const DeleteButtonRenderer = (props: any) => {
  const handleClick = () => {
    props.onClick(props.data);
  };

  return (
    <div
      className="cursor-pointer text-gray-700 flex items-center justify-center h-full"
      onClick={handleClick}
    >
      <FaTrash />
    </div>
  );
};

export const Stores = () => {
  const [rowData, setRowData] = useState(stores);

  // Function to handle row deletion
  const handleDeleteRow = (data: any) => {
    setRowData(rowData.filter((row) => row.ID !== data.ID));
  };

  const [colDefs, setColDefs] = useState([
    {
      headerName: "",
      width: 50,
      maxWidth: 50,
      cellRenderer: DeleteButtonRenderer,
      cellRendererParams: {
        onClick: handleDeleteRow,
      },
      sortable: false,
      filter: false,
    },
    {
      headerName: "S.No",
      valueGetter: (params: any) => params.node.rowIndex + 1,
      width: 70,
      maxWidth: 70,
    },
    { field: "Label" },
    { field: "City" },
    { field: "State" },
  ]);
  const defaultColDef = {
    flex: 1,
  };

  return (
    <div className="h-[500px] w-full">
      <AgGridReact<{
        ID: string;
        Label: string;
        City: string;
        State: string;
      }>
        rowData={rowData}
        columnDefs={colDefs as any} // Type assertion to fix type error
        defaultColDef={defaultColDef}
      />
    </div>
  );
};
