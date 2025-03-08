import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { sku } from "../constants/constant";
import { FaTrash, FaPlus } from "react-icons/fa";

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

export default function SKU() {
  const [rowData, setRowData] = useState(sku);

  // Function to handle row deletion
  const handleDeleteRow = (data: any) => {
    setRowData(rowData.filter((row) => row.ID !== data.ID));
  };

  // Function to handle creating a new item
  const handleCreateNewItem = () => {
    // Would typically open a modal/form to create a new item
    alert("Create new SKU item functionality would go here");
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
      field: "Label",
      headerName: "SKU",
      flex: 2,
    },
    {
      field: "Price",
      headerName: "Price",
      cellClass: "text-right",
    },
    {
      field: "Cost",
      headerName: "Cost",
      cellClass: "text-right",
    },
  ]);

  const defaultColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };

  return (
    <div className="w-full relative pb-16">
      <div className="ag-theme-alpine">
        <AgGridReact<{
          ID: string;
          Label: string;
          Class: string;
          Department: string;
          Price: string;
          Cost: string;
        }>
          rowData={rowData}
          columnDefs={colDefs as any}
          defaultColDef={defaultColDef}
          animateRows={true}
          domLayout="autoHeight"
        />
      </div>

      {/* Sticky Button at bottom of main content */}
      <div className="fixed bottom-0 left-52 right-0 py-4 bg-white border-t border-gray-200 shadow-md z-10">
        <div className="px-5">
          <button
            className="flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            onClick={handleCreateNewItem}
          >
            <FaPlus className="mr-2" /> New SKU
          </button>
        </div>
      </div>
    </div>
  );
}
