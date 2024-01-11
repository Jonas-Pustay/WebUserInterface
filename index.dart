import 'dart:html';

void main() 
{
  HtmlElement buttonPlay = querySelector("#PlayButton") as HtmlElement;
  buttonPlay.onClick.listen(alerttest);
}

void alerttest(MouseEvent event)
{
  print("test");
}
