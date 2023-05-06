const menor18 = document.getElementById('menor18');
const entre1859 = document.getElementById('entre1859');
const mayor59 = document.getElementById('mayor59');
const resultados = document.getElementById('resultados');

menor18.addEventListener('click', () => {
  resultados.innerHTML = '<p>Referir a Psiquiatría</p>';
});

entre1859.addEventListener('click', () => {
  resultados.innerHTML = '<p>Aplicar PSICACES y CIE-10 y seleccionar resultados:</p><button id="leve">Leve</button><button id="moderado">Moderado</button><button id="grave">Grave</button>';

  const leve = document.getElementById('leve');
  const moderado = document.getElementById('moderado');
  const grave = document.getElementById('grave');

  leve.addEventListener('click', () => {
    resultados.innerHTML = '<p>Evaluar riesgo de suicidio</p><button id="bajo">Bajo</button><button id="medio">Medio</button><button id="alto">Alto/Suicida</button>';
    const bajo = document.getElementById('bajo');
    const medio = document.getElementById('medio');
    const alto = document.getElementById('alto');

    bajo.addEventListener('click', () => {
      resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
      resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
    });

    medio.addEventListener('click', () => {
      resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
      resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
    });

    alto.addEventListener('click', () => {
      resultados.innerHTML = '<p>URGENTE</p>';
      resultados.innerHTML += '<p>Referir a segundo o tercer nivel de atención</p>'
    });
  });

  moderado.addEventListener('click', () => {
    resultados.innerHTML = '<p>Evaluar riesgo de suicidio</p><button id="bajo">Bajo</button><button id="medio">Medio</button><button id="alto">Alto/Suicida</button>';
    
    const bajo = document.getElementById('bajo');
    const medio = document.getElementById('medio');
    const alto = document.getElementById('alto');

    bajo.addEventListener('click', () => {
      resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
      resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
    });

    medio.addEventListener('click', () => {
      resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
      resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
    });

    alto.addEventListener('click', () => {
      resultados.innerHTML = '<p>URGENTE</p>';
      resultados.innerHTML += '<p>Referir a segundo o tercer nivel de atención</p>'
    });
  });

  grave.addEventListener('click', () => {
    resultados.innerHTML = '<p>Referir a segundo o tercer nivel de atención</p>';

  });
});

mayor59.addEventListener('click', () => {
  const mayor59 = document.getElementById('mayor59');
  const resultados = document.getElementById('resultados');
  
  mayor59.addEventListener('click', () => {
    resultados.innerHTML = '<p>¿El paciente tiene algunas de estas patologías?<br>- Demencia<br>- Delirio<br>- Enfermedades metabolicas<br>- Abuso y dependecia de sustancias</p><button id="siTiene">Sí tiene</button><button id="noTiene">No tiene</button>';
  
    const siTiene = document.getElementById('siTiene');
    const noTiene = document.getElementById('noTiene');
  
    siTiene.addEventListener('click', () => {
      resultados.innerHTML = '<p>Referir a segundo o tercer nivel de atención</p>';
    });
  
    noTiene.addEventListener('click', () => {
      resultados.innerHTML = '<p>Aplicar PSICACES y CIE-10 y seleccionar resultados</p><button id="leve">Leve</button><button id="moderado">Moderado</button><button id="grave">Grave</button>';
  
      const leve = document.getElementById('leve');
      const moderado = document.getElementById('moderado');
      const grave = document.getElementById('grave');
  
      leve.addEventListener('click', () => {
        resultados.innerHTML = '<p>Evaluar riesgo de suicidio</p><button id="bajo">Bajo</button><button id="medio">Medio</button><button id="alto">Alto/Suicida</button>';
        const bajo = document.getElementById('bajo');
        const medio = document.getElementById('medio');
        const alto = document.getElementById('alto');
    
        bajo.addEventListener('click', () => {
          resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
          resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
        });
    
        medio.addEventListener('click', () => {
          resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
          resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
        });
    
        alto.addEventListener('click', () => {
          resultados.innerHTML = '<p>URGENTE</p>';
          resultados.innerHTML += '<p>Referir a segundo o tercer nivel de atención</p>'
        });
      });
    
      moderado.addEventListener('click', () => {
        resultados.innerHTML = '<p>Evaluar riesgo de suicidio</p><button id="bajo">Bajo</button><button id="medio">Medio</button><button id="alto">Alto/Suicida</button>';
    
        const bajo = document.getElementById('bajo');
        const medio = document.getElementById('medio');
        const alto = document.getElementById('alto');
    
        bajo.addEventListener('click', () => {
          resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
          resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
        });
    
        medio.addEventListener('click', () => {
          resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
          resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
        });
    
        alto.addEventListener('click', () => {
          resultados.innerHTML = '<p>URGENTE</p>';
          resultados.innerHTML += '<p>Referir a segundo o tercer nivel de atención</p>'
        });
      });
    
  
      grave.addEventListener('click', () => {
        resultados.innerHTML = '<p>Referir a segundo o tercer nivel de atención</p>';
      });
    });
  });
  });

// Delegación de eventos para el botón "bajo", "medio" y "alto/suicida"
resultados.addEventListener('click', (event) => {
  if (event.target.id === 'bajo') {
    resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
    resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
  }
  else if (event.target.id === 'medio') {
    resultados.innerHTML = '<p>Evaluar:<br>- condición médica inestable (anorexia)<br>- comorbilidad con otra condición médica o psiquiatría</p>';
    resultados.innerHTML += '<button id="si">Sí</button><button id="no">No</button>';
  }
  else if (event.target.id === 'alto') {
    resultados.innerHTML = '<p>URGENTE</p>';
    resultados.innerHTML += '<p>Referir a segundo o tercer nivel de atención</p>'
    
  }
});

// Delegación de eventos para los botones "si" y "no" (entre 18 y 59 años)
resultados.addEventListener('click', (event) => {
  if (event.target.id === 'si') {
    resultados.innerHTML = '<p>Referir a segundo o tercer nivel de atención</p>';
  }
  else if (event.target.id === 'no') {
    resultados.innerHTML = '<p>Iniciar tratamiento</p>';
    resultados.innerHTML += '<button id="depresionleve">Depresión leve</button><button id="depresionmoderada">Depresion Moderada</button>';
  }
});

// Delegación de eventos para los botones "si" y "no" (entre 18 y 59 años)
resultados.addEventListener('click', (event) => {
  if (event.target.id === 'depresionleve') {
    resultados.innerHTML = '<p>Tratamiento no farmacológico<br>- Terapia cognitivo conductual<br>- Psicoeducación<br>- Técnicas de relajación<br>- Terapia de grupo<br>- Ejercicio físico (30 min, 3 veces por semana)</p>';
  }
  else if (event.target.id === 'depresionmoderada') {
    resultados.innerHTML = '<p>MANEJO CONJUNTO<br>a.Farmacologico<br>b.Tratamiento no farmacológico<br>- Terapia cognitivo conductual<br>- Psicoeducación<br>- Técnicas de relajación<br>- Terapia de grupo<br>- Ejercicio físico (30 min, 3 veces por semana)</p>';
  }
});











