button_start = document.getElementById("button_start");
buttons_choose = document.getElementById("buttons_choose");
QuickSort = document.getElementById("QuickSort");
BubbleSort = document.getElementById("BubbleSort");
SelectionSort = document.getElementById("SelectionSort");
InsertionSort = document.getElementById("InsertionSort");
table_log = document.getElementById("table_log");

button_start.addEventListener('click', function(){
    button_start.style.display = 'none';
    buttons_choose.style.display = 'flex';
});

QuickSort.addEventListener('click', function(){
    buttons_choose.style.display = 'none';
    table_log.style.display = "inline-block";
    testSortAlgorithms(15, 1);
})
BubbleSort.addEventListener('click', function(){
    buttons_choose.style.display = 'none';
    table_log.style.display = "inline-block";
    testSortAlgorithms(15, 2);
})
SelectionSort.addEventListener('click', function(){
    buttons_choose.style.display = 'none';
    table_log.style.display = "inline-block";
    testSortAlgorithms(15, 3);
})
InsertionSort.addEventListener('click', function(){
    buttons_choose.style.display = 'none';
    table_log.style.display = "inline-block";
    testSortAlgorithms(15, 4);
})





function measureTime(algorithm, array) {
    const start = performance.now();
    algorithm(array);
    const end = performance.now(); 
    return end - start;
  }
  
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const less = [];
    const equal = [];
    const greater = [];
  
    for (let element of arr) {
      if (element < pivot) {
        less.push(element);
      } else if (element > pivot) {
        greater.push(element);
      } else {
        equal.push(element);
      }
    }
  
    return quickSort(less).concat(equal, quickSort(greater));
  }
  

  function bubbleSort(arr) {
    arr.length = arr.length/3;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  function selectionSort(arr) {
    arr.length = arr.length/3;
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
  function insertionSort(arr) {
    arr.length = arr.length/3;
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
  function testSortAlgorithms(arraySize, choose) {
    const arr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * arraySize));
  
    const arr1 = [...arr];
    const arr2 = [...arr];
    const arr3 = [...arr];
    const arr4 = [...arr];
  
    console.log(`Сортировка массива из ${arraySize} элементов:`);
    if(choose == 1){
        const quickSortTime = measureTime(quickSort, arr1);
        console.log(`QuickSort: ${quickSortTime.toFixed(4)} ms`);
        createTable(arr, arr1, quickSortTime);
    }
    if(choose == 2){
        const bubbleSortTime = measureTime(bubbleSort, arr2);
        console.log(`BubbleSort: ${bubbleSortTime.toFixed(4)} ms`);
        createTable(arr, arr2, bubbleSortTime);
    }
    if(choose == 3){
        const selectionSortTime = measureTime(selectionSort, arr3);
        console.log(`SelectionSort: ${selectionSortTime.toFixed(4)} ms`);
        createTable(arr, arr3, selectionSortTime);
    }
    if(choose == 4){
        const insertionSortTime = measureTime(insertionSort, arr4);
        console.log(`InsertionSort: ${insertionSortTime.toFixed(4)} ms`);
        createTable(arr, arr4, insertionSortTime);
    }  
}

function createTable(arr, arrsort, SortTime, algorithm){
    let table = "<Table border = 1><TR ><th>Num</th><th>Array</th><th>ArrSorted</th><th>SortTime</th>";
    for(let i = 0; i < arr.length; i++){
        
        table += "<TR><td>" + i + "</td>";
        table += "<td>" + arr[i] + "</td>";
        table += "<td>" + arrsort[i] + "</td>";
        table += "<td>" + SortTime.toFixed(4) + " ms</td></TR>";
    }
    table += "</Table>";
    table_log.innerHTML = table;
}