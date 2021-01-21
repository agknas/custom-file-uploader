import {FileUploader, FileUploaderOptions} from 'ng2-file-upload';

export class CustomFileUploader extends FileUploader {

  constructor(options: FileUploaderOptions) {
    super(options);
  }
}
