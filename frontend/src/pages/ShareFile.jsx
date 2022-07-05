import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ShareFile = () => {
  const { id } = useParams();
  const [files, setFiles] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getFiles = async () => {
    try {
      const url = `http://localhost:5000/sharefile/${id}`;
      setLoading(true);
      let res = await axios.get(url);

      setFiles(res.data.message);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    getFiles();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>No file found or the link has expired</h1>;
  }

  return (
    <div>
      <h1>{files?.fileName}</h1>
      {/* <h1>{file.fileType}</h1>
          <h1>{file.fileSize}</h1>
          <h1>{file.fileUrl}</h1> */}
    </div>
  );
};

export default ShareFile;
