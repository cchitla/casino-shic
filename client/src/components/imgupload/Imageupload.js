import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './Imageupload.css';
import API from '../../utils/API';


class AvatarUpload extends Component {

  state = {
    selectedFile: null,
    messageClass: "",
    messageText: ""
  }

  fileChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = (event) => {
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append("profileImage", this.state.selectedFile);
      axios.post(`/api/profile/img-upload`, data/* , {
        headers: {
          "accept": "application/json",
          "Accept-Language": "en-US,en;q=0.8",
         " Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        }
      } */)
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                this.setState({ messageText: "Max size: 2MB" });
                this.setState({ messageClass: "bg-blackish text-light-gold border-gold p-1 my-1 text-center" });
              } else {
                // If not the given file type
                this.setState({ messageText: response.data.error });
                this.setState({ messageClass: "bg-blackish text-light-gold border-gold p-1 my-1 text-center" });
              }
            } else {
              // Success
              let fileName = response.data;
              console.log(response.data.location);
              
              let data = { avatar: response.data.location }

              API.updatePlayer(this.props.user.email, data)
              .then(res => {console.log(res.data)})
              .catch(err => console.log(err));

              console.log("File Uploaded", fileName);
              
              this.setState({ messageText: "File Uploaded" });
              this.setState({ messageClass: "bg-blackish text-light-gold border-gold p-1 my-1 text-center" });
              window.location.reload(); //need this in order to show new image from db
            }
          }
        }).catch((error) => {
          // If another error
          console.log(error);
        });
    } else {
      // if file not selected throw error
      console.log("Please upload file");
      this.setState({ messageText: "Please upload file" });
      this.setState({ messageClass: "bg-blackish text-light-gold border-gold p-1 my-1 text-center" });
    }
  };

  render() {

    console.log(this.state);

    return (

      <Card.Footer>
        <div className={this.state.messageClass}>{this.state.messageText}</div>
        <input type="file" onChange={this.fileChangeHandler} className="form-control-file upload-btn mb-2" />
        <button className="custom-btn btn btn-block rounded-0" onClick={this.fileUploadHandler}>Upload</button>
      </Card.Footer>

    );
  }
}

export default AvatarUpload;