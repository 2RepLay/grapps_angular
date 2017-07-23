import {Component} from '@angular/core';
import {Directory} from "./models/virtual-directory";
import {VirtualFile} from "./models/virtual-file";
import {HttpClient} from "@angular/common/http";
import {PostBody} from "./models/PostBody";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Grapps angular treeview';
  public directories: Directory[] = [];

  public content: string;
  public totalPrice: number = 0;

  constructor(private http: HttpClient) {
    let root: Directory = new Directory("root", [], []);
    root.lockEditing();

    this.directories = [root];
  }

  saveState(): void {
    let state = JSON.stringify(this.directories);

    localStorage.setItem("state", state);

    if (this.content != null)
      localStorage.setItem("content", this.content);
  }

  loadState(): void {
    let state = JSON.parse(localStorage.getItem("state"));

    if (state == null) {
      alert("There is no saved instance state!");
    }

    this.directories = state;
    this.content = localStorage.getItem("content");
  }

  removeState(): void {
    let root: Directory = new Directory("root", [], []);
    root.lockEditing();

    this.directories = [root];
    this.content = null;

    localStorage.removeItem("state");
    localStorage.removeItem("content");
  }

  showFile(file: VirtualFile): void {
    this.content = file.content;
  }

  pickFile(file: VirtualFile): void {
    this.content = file.content;
    this.totalPrice += file.price;
  }

  unpickFile(file: VirtualFile) {
    this.content = null;
    this.totalPrice -= file.price;
  }

  pay(): void {
    let post_body: PostBody = new PostBody();
        post_body.sale_price = this.totalPrice;

    //I don't know is this is ok, but server returns 500 error, accessing this link with browser throws a message that required page was not found
    //I though that link is wrong, but task was to send request here.
    this.http.post("https://preprod.paymeservice.com/api/generate-sale", JSON.stringify(post_body)).subscribe(data => {
      console.log(data);
    });
  }
}
