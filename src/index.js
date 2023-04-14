let ex = require('express');
let ap = ex();
//importando la conexion para la bdd
let bd = require('./bdd/conexbd');//ubicacionynombredelarchivo
//ap.set("port","process.env.PORT || 3000");//no funciona localmente asi
ap.set("puerto","3000");//establece una variable
//MOTOR DE PLANTILLAS
ap.set('view engine','ejs');
ap.set('views',__dirname +'/vistas');
//MIDDLEWARS
ap.use(ex.urlencoded({ extended: false })); //para usar los input tipe text de html 
///////////////////////////////////////////////
let x="";
//funcion principal
ap.get('/',funget);
function funget(ped,res)
{   
  x= ped.query.va//recepciona la variable, la primera vez es indefinida    
  res.render("index",{v:x,resu:""});//asigna el valor(v=x) para su tratamiento en el EJS  
  //el nombre de la variable "v" debe ser el mismo en ejs
}
//funcion cuando hace click en el boton sumar
ap.get('/sum',funsum);
function funsum(ped,res)
{ 
  //x1="Vale más hacer y arrepentirse que no hacer y arrepentirse"; 
  let a,b,r;
  a = parseInt(ped.query.t1);
  b = parseInt(ped.query.t2);  
  r=a+b; 
  res.render("index",{v:x,resu:r});  
}
//funcion cuando hace click en el boton multiplicar
ap.get('/mul',funmul);
function funmul(ped,res)
{ 
  
  let a,b,r;
  a = parseInt(ped.query.t1);
  b = parseInt(ped.query.t2);  
  r=a*b; 
  res.render("index",{v:x,resu:r});  
}
///////////////////////////////////////////////
var server=ap.listen(process.env.PORT || ap.get("puerto"), mensaje);
function mensaje()
{
  console.log('Servidor node iniciado');
}
