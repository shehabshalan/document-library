import {
  FaFileWord,
  FaFileImage,
  FaFileExcel,
  FaFilePdf,
} from "react-icons/fa";
import { RiFileTextFill } from "react-icons/ri";
const documentIcon = (fileType) => (
  <>
    {fileType === "doc" && <FaFileWord size={30} />}
    {fileType === "docx" && <FaFileWord size={30} />}
    {fileType === "pdf" && <FaFilePdf size={30} />}
    {fileType === "xls" && <FaFileExcel size={30} />}
    {fileType === "csv" && <FaFileExcel size={30} />}
    {fileType === "txt" && <RiFileTextFill size={30} />}
    {fileType === "jpg" && <FaFileImage size={30} />}
    {fileType === "png" && <FaFileImage size={30} />}
    {fileType === "gif" && <FaFileImage size={30} />}
    {fileType === "svg" && <FaFileImage size={30} />}
  </>
);

export default documentIcon;
