export class Contents {
  static variables: any[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est ligula, ornare nec porttitor eu, malesuada in lorem. In at ultricies nulla, eget pharetra erat. Nullam non lacinia massa, nec congue metus. Nunc vel tempus risus. Vivamus congue pulvinar metus, eget iaculis odio commodo vel. Duis nibh metus, euismod a vehicula id, dapibus vel dolor. Proin maximus, elit nec varius varius, massa quam consectetur purus, ut consequat purus dolor ut enim. Aliquam mauris tellus, luctus ut nulla at, placerat feugiat est. Cras a odio nec orci venenatis iaculis. Etiam nec libero dictum, pellentesque nulla sodales, tempor sem. Praesent vel pretium tortor. Vestibulum aliquam lacus ut elit iaculis euismod. Praesent enim risus, viverra nec lectus eget, scelerisque mattis nisl. Cras in condimentum diam.",

    "Vestibulum vitae mattis nibh. Sed iaculis risus vitae lobortis vulputate. Cras in ornare quam. Sed convallis convallis tempor. Mauris eu tellus leo. Phasellus sollicitudin neque massa, ut fringilla libero blandit vitae. Proin sit amet nulla nunc. Etiam pretium justo tincidunt, commodo nisl sit amet, varius justo. Integer id orci vestibulum, sodales neque ut, suscipit est. Duis risus ex, blandit quis dolor id, convallis suscipit velit. Duis fermentum tempus euismod. Suspendisse feugiat arcu sit amet magna mollis sollicitudin.",

    "Donec tempus egestas ultrices. Sed tristique blandit convallis. Quisque tempor condimentum turpis at consequat. Praesent euismod ligula lectus, in mattis nibh gravida sit amet. Morbi et velit pellentesque, commodo libero ut, egestas arcu. Vestibulum venenatis imperdiet nisi, a lobortis leo cursus id. Duis euismod commodo diam et consectetur. In hac habitasse platea dictumst. Vestibulum vel dignissim magna. Pellentesque nec risus sit amet purus rutrum condimentum. Nunc interdum augue non purus porttitor, ac pharetra ligula aliquam."
  ];

  public static getContent(){
    let length = Contents.variables.length;

    return Contents.variables[Math.floor(Math.random() * (length))];
  }
}
