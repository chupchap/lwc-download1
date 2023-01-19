import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Download Brand Images";
  showFeatures = true;
  downloadZip = false;
  hideUpload = false;
  showhide(event) {
        this.downloadZip = true;
        this.hideUpload = true;
    }

}
