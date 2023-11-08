import { Document, Page, pdfjs } from "react-pdf";

const PdfViewer = ({ pdfFile }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <Document file={pdfFile}>
      <Page>
        <h1>Hello world</h1>
      </Page>
    </Document>
  );
};

export default PdfViewer;
