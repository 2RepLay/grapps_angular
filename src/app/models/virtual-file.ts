import {Contents} from "./contents";
export class VirtualFile {
  name: string;
  checked: boolean;

  isEditing: boolean = false;
  isEditable: boolean = true;

  public content:string;

  constructor(name) {
    this.name = name;
    this.checked = false;

    this.content = Contents.getContent();
  }

  public check(): void {
    this.checked = !this.checked;
  }

  public edit(): void {
    this.isEditing = true;
  }

  public save(): void {
    this.isEditing = false;
  }

  price = 10;
}
