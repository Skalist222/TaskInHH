

function sostavChisla(massivChisel, chislo)
{// код писать только внутри данной функции
    function validation(mas)
    {
        var sum = mas.reduce((partialSum, a) => partialSum + a, 0);
        //Валидация
        if (sum == chislo){return mas;}
        if (sum < chislo){return [];}
        for(var i =0;i<mas.length;i++)
        {
            if(mas[j]<=0)
            {
                console.log("error exist element < 1");
                return null;
            }
            for(var j = i+1;j<mas.length;j++)
            {
                if(mas[i]==mas[j])
                {
                    console.log("error exist dublicates");
                    return null;
                }
            }
        }
    }
    function netDubley(massiv)
    {
        var proverka = massiv.filter(function(item, pos){return massiv.indexOf(item) === pos;});
        return proverka.length == massiv.length;
    }
    

    massivChisel = [...massivChisel].sort();
    var normalMassiv = massivChisel.filter(el=> el < chislo);
    console.log("Итоговый массив: "+normalMassiv);
    //Массив для проверенных сумм
    var variants = normalMassiv.map(el=> [el]);
    //Массив для результатов
    var resultats = [];
    var valid = validation(massivChisel);
    if(valid === mas || valid === []) return valid;
    if(valid === null) return null;





for(var i =0; i<variants.length;i++)
{
    for(var j=i+1;j<variants.length;j++)
    {
        var sum = variants[i].reduce((partialSum, a)=>partialSum+a,0)+
        variants[j].reduce((partialSum, a)=>partialSum+a,0);
        if(sum<chislo)
        {
            var conc = variants[i].concat(variants[j]);
            variants.push(conc);
            continue;
        }
        if(sum>chislo)
        {
            continue;
        }
        if(sum ==chislo)
        {
            resultats.push(variants[i].concat(variants[j]));
            continue;
        }
    }
}
console.log(resultats.filter(el => netDubley(el)));
return resultats.filter(el => netDubley(el));
}

// console.log(sostavChisla([8, 2, 3, 4, 6, 7, 1], 99));

function compareNumericArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  
  arr1 = [...arr1].sort();
  arr2 = [...arr2].sort();
  
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}

function compareArraysOfNumericArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  
  for(let el1 of arr1) {
    if(arr2.findIndex(el2 => compareNumericArrays(el1, el2)) < 0) {
      return false;
    }
  }
  
  return true;
}

runTests();

function runTests() {
    const tests = [
    {
      chislo: 5, 
      massivChisel: [8, 2, 3, 4, 6, 7, 1],
      result: [[2, 3], [4, 1]]
    },
    {
      chislo: 99, 
      massivChisel: [8, 2, 3, 4, 6, 7, 1],
      result: []
    },
    {
      chislo: 8, 
      massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
      result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
    },
    {
      chislo: 8, 
      massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
      result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
    },
    {
      chislo: 15, 
      massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
      result: [[1, 2, 3, 4, 5], [2, 3, 4, 6], [1, 3, 5, 6], [4, 5, 6], [1, 3, 4, 7], [1, 2, 5, 7], [3, 5, 7], [2, 6, 7], [1, 2, 4, 8], [3, 4, 8], [2, 5, 8], [1, 6, 8], [7, 8]]
    },  
    
  ];

  let errors = 0;
  for(var test of tests) {
    let result;
    try{
      result = sostavChisla(test.massivChisel, test.chislo);
      
      if(!compareArraysOfNumericArrays(
          result, 
          test.result)
      ) {
        errors++;
        console.log('--------------------------------------------')
        console.log("failed for test", test, "Got result", result);
      }
    } catch(e) {
      errors++;
      console.log("failed for", test, 'exception', e.message);
    }    
  }

  if(errors === 0) {
    console.log('checkStringForBracects test successfuly completed');
  } else {
    console.log(`checkStringForBracects test failed with ${errors} errors`);
  }
}

