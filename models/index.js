var path = require('path');


// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite o Postgres
//var sequelize = new Sequelize(null, null, null, 
 // { dialect:  "sqlite",
   // storage:  "quiz.sqlite"  // solo SQLite (.env)
 // }      
//);

var url, storage;

if(!process.env.DATABASE_URL){
url="sqlite:///";
storage="quiz.sqlite";
}else{
url=process.env.DATABASE_URL;
storage=process.env.DATABASE_STORAGE || "";
}

var sequelize=new Sequelize(url, {storage:storage, omitNull:true});

// Importar definicion de la tabla Quiz
var quiz_path = path.join(__dirname,'quiz');
var Quiz = sequelize.import(quiz_path);




// sequelize.sync() inicializa tabla de preguntas en DB
sequelize.sync().then(function() {
  // then(..) ejecuta el manejador una vez creada la tabla
 	return
        Quiz.count().then(function (count){
          if(count === 0) {   // la tabla se inicializa solo si está vacía
		return
            Quiz.create( 
              [ {pregunta: 'Capital de Italia',   respuesta: 'Roma', UserId: 2}, // estos quizes pertenecen al usuario pepe (2)
                {pregunta: 'Capital de Portugal', respuesta: 'Lisboa', UserId: 2}
              ]
            ).then(function(){console.log('Base de datos (tabla quiz) inicializada')});
          };
        });
      }).catch(function(error){
console.log("err sincronizando",error);
    
  });
exports.Quiz=Quiz;
