import { Send } from "@mui/icons-material";
import { Button } from "@mui/material";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <div className="desc">
        Get timely updates from your favourite products.
      </div>
      <div className="inputContainer">
        <div className="form-outline">
          <input type="email" id="typeEmail" className="form-control" />
          <label className="form-label" for="typeEmail">
            Enter your email
          </label>
        </div>
        <Button>
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
