var background1 ;
var corona,diabeties,bloodPressure;
var form,form2;
var covid,sugar,bp ;
var diseases;
var background2;
function preload (){
    background1 = loadImage("backform2.png");
    corona = loadImage("covid19.png");
    diabeties = loadImage("sugar.png");
    bloodPressure = loadImage("bp.png");
    background2 = loadImage("backform3.png");

}
function setup(){
    canvas = createCanvas(displayWidth-50,displayHeight-80);
    form = new Form();
    form2 = new Form2();
}
function draw(){
    //background(background1);
    form.display();
   // form2.display();
}