import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Directory} from "../models/virtual-directory";
import {VirtualFile} from "../models/virtual-file";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  @Input('init')
  directories: Directory[] = [];

  @Input('isRoot')
  isRoot: boolean = false;

  @Output('onFileClicked')
  luckyOne = new EventEmitter<VirtualFile>();

  @Output('onFilePicked')
  chosenOne = new EventEmitter<VirtualFile>();

  @Output('onFileUnpicked')
  abandonedOne = new EventEmitter<VirtualFile>();

  constructor() {

  }

  public addFolder(dir: Directory): void {
    dir.directories.push(new Directory("new Folder", [], []));
  }

  public addFile(dir: Directory): void {
    dir.files.push(new VirtualFile("new File"));
  }

  public removeDirectory(index): void {
    this.directories.splice(index, 1);
  }

  public onChange(file: VirtualFile) {
    if (file.checked) {
      this.pickFile(file);
    } else {
      this.unpickFile(file);
    }
  }

  public removeFile(dir: Directory, index): void {
    dir.files.splice(index, 1);
  }

  public showFileContent(file: VirtualFile) {
    this.luckyOne.emit(file);
  }

  public pickFile(file: VirtualFile) {
    this.chosenOne.emit(file);
  }

  public unpickFile(file: VirtualFile) {
    this.abandonedOne.emit(file);
  }
}
