
import { columnsDataComplex} from "./variables/columnsData";
import tableDataComplex from "./variables/tableDataComplex.json";
import ComplexTable from "./components/ComplexTable";

const Tables = () => {
  return (
    <div>


      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </div>
    </div>
  );
};

export default Tables;
