import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const handle_success = (msg) => {
  toast.success(msg);
};
const handle_error = (msg) => {
  toast.error(msg);
};

module.exports = { handle_success, handle_error };
