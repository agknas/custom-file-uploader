import {Component, OnInit} from '@angular/core';

import {FileItem} from 'ng2-file-upload';

import {CustomFileUploader} from './custom-file-uploader';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
/*
  TASK:
   add drop zone functionality to app (check ng2-file-upload demo)
   create a service etc. that will store information about uploading process(information should contain
   time when upload had finished and if result was successful or not and name of the file)
 */
export class FileUploaderComponent implements OnInit {

  uploader: CustomFileUploader;

  constructor() {
  }

  ngOnInit(): void {
    this.uploader = new CustomFileUploader({url: 'api/dummyUpload'});
  }

  upload(): void {
    this.uploader.queue.forEach((file: FileItem) => {
      file.upload();
    });
  }
}
