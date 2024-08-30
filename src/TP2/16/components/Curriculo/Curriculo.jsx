import MeuPdf from "../../assets/pdf/Guilherme-Reis-Curriculo.pdf"
import "./CurriculoC.css"


import { MdCloudDownload } from "react-icons/md";


const DownloadButton = () => {
  return (
    <a href={MeuPdf} download>
      <button className="button-style"><MdCloudDownload /></button>
    </a>
  );
};

export default DownloadButton;