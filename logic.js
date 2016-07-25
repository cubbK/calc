$( document ).ready(function () {

  var cifre = [0,1,2,3,4,5,6,7,8,9,"."];
  var toataOperatia = "";
  var numarCurent ="";
  $("button").click(function (data) {
    var id = data.target.id;
    switch (id) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        adaugareNum(id);
        break;
      case 'CE' :
        numarCurent = "";
        $("#output-big").text ('0');
        break;
      case 'C':
        numarCurent = "";
        toataOperatia = "";
        $("#output-big").text ('0');
        $("#output-small").text ('0');
        break;
      case '/':
      case '*':
      case '-':
      case '+':

        adaugareSemn(id);
        numarCurent = "";
        break;
    }

    function adaugareNum(id) {
      if (numarCurent.length <15) {numarCurent+=id;}

      $("#output-big").text (numarCurent);
    }
    function adaugareSemn(id) {

      toataOperatia +=numarCurent;
      if (['/','*','+','-'].indexOf(toataOperatia[toataOperatia.length-1]) == -1){
        console.log(toataOperatia[toataOperatia.length-1]);

        numarCurent = "";
        toataOperatia+=id;
        $("#output-small").text (toataOperatia);
      }else {
        console.log('este else');

        toataOperatia = toataOperatia.replaceAt(toataOperatia.length-1,id);
        console.log(toataOperatia[toataOperatia.length-1]);
        $("#output-small").text (toataOperatia);
      }

    }

  });

});
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
