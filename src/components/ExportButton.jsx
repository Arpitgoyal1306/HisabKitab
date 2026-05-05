import { exportToCSV } from "../utils/exportCSV";

function ExportButton({ expenses }) {
  return (
    <button
      onClick={() => exportToCSV(expenses)}
      className="btn btn-primary w-full sm:w-auto"
      disabled={!expenses || expenses.length === 0}
    >
      Download CSV Report
    </button>
  );
}

export default ExportButton;
