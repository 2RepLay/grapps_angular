import {VirtualFile} from "./virtual-file";

export class Directory {
  name: string;
  directories: Directory[];
  files: VirtualFile[];

  expanded: boolean;
  checked: boolean;

  isEditing: boolean = false;
  isEditable: boolean = true;

  constructor(name, directories, files) {
    this.name = name;
    this.files = files;
    this.directories = directories;
    this.expanded = true;
    this.checked = false;
  }


  public lockEditing(): void {
    this.isEditable = false;
  }

  public toggle(): void {
    this.expanded = !this.expanded;
  }

  public check(): void {
    let new_state = !this.checked;
    this.checked = new_state;
    this.checkRecursive(new_state);
  }

  checkRecursive(state){
    this.directories.forEach(d => {
      d.checked = state;
      d.checkRecursive(state);
    });

    this.files.forEach(f => {
      f.checked = state;
    });
  }

  public edit(): void {
    this.isEditing = true;
  }

  public save(): void {
    this.isEditing = false;
  }
}
