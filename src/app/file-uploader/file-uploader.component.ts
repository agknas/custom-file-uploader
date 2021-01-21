import {Component, OnInit} from '@angular/core';

import {FileItem} from 'ng2-file-upload';

import {CustomFileUploader} from './custom-file-uploader';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
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
