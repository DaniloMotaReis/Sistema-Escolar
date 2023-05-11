const db = require('./db');
const Aluno = db.sequelize.define('aluno', {
    id_aluno:{type:db.Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    matricula:{type:db.Sequelize.INTEGER
    },
    nome:{type:db.Sequelize.STRING
    },
    fk_turma:{type:db.Sequelize.INTEGER,
        references:{ model:'Turma', key:'id_turma'},
        onDelete:'CASCADE',
        allowNull:false,
    }
}, { freezeTableName:true});
module.exports = Aluno;