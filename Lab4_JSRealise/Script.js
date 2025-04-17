button_start = document.getElementById("button_start");
buttons_choose = document.getElementById("buttons_choose");
buttons_sorts = document.getElementById("buttons_sorts");
buttons_search = document.getElementById("buttons_search");
QuickSort = document.getElementById("QuickSort");
BubbleSort = document.getElementById("BubbleSort");
SelectionSort = document.getElementById("SelectionSort");
InsertionSort = document.getElementById("InsertionSort");
LinearSearch = document.getElementById("LinearSearch");
BinarySearch = document.getElementById("BinarySearch");
LinearWithBarier = document.getElementById("LinearWithBarier");
table_log = document.getElementById("table_log");
table_log_sorttext = document.getElementById("table_log_sorttext");
table_log_sorttable = document.getElementById("table_log_sorttable");
table_log_searchtext = document.getElementById("table_log_searchtext");
table_log_searchtable = document.getElementById("table_log_searchtable");
let choose1, choose2;


button_start.addEventListener('click', function(){
    button_start.style.display = 'none';
    buttons_choose.style.display = 'flex';
    buttons_sorts.style.display = 'inline-block';
    buttons_search.style.display = 'none';

});

QuickSort.addEventListener('click', function(){
    buttons_sorts.style.display = 'none';
    buttons_search.style.display = 'inline-block';
    testSortAlgorithms(15, 1);
})
BubbleSort.addEventListener('click', function(){
    buttons_sorts.style.display = 'none';
    buttons_search.style.display = 'inline-block';
    testSortAlgorithms(15, 2);
})
SelectionSort.addEventListener('click', function(){
    buttons_sorts.style.display = 'none';
    buttons_search.style.display = 'inline-block';
    testSortAlgorithms(15, 3);
})
InsertionSort.addEventListener('click', function(){
    buttons_sorts.style.display = 'none';
    buttons_search.style.display = 'inline-block';
    testSortAlgorithms(15, 4);
})

LinearSearch.addEventListener('click', function(){
    buttons_search.style.display = 'none';
    table_log.style.display = "inline-block";
    testSearchAlgorithms(sortedArr, 1);
})
BinarySearch.addEventListener('click', function(){
    buttons_search.style.display = 'none';
    table_log.style.display = "inline-block";
    choose2 = 2;
    testSearchAlgorithms(sortedArr, 2);
})
LinearWithBarier.addEventListener('click', function(){
    buttons_search.style.display = 'none';
    table_log.style.display = "inline-block";
    choose2 = 3;
    testSearchAlgorithms(sortedArr, 3);
})




function measureTime(algorithm, array, target) {
    const start = performance.now();
    algorithm(array, target);
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
  
  function linearSearch(arr, target) {
    console.log(target);
    let comparisons = 0;
    for (let i = 0; i < arr.length; i++) {
      comparisons++;
      if (arr[i] === target) {
        return { found: true, index: i, comparisons: comparisons };
      }
    }
    return { found: false, index: -1, comparisons: comparisons };
  }
  
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let comparisons = 0;
  
    while (left <= right) {
      comparisons++;
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return { found: true, index: mid, comparisons: comparisons };
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return { found: false, index: -1, comparisons: comparisons };
  }

  function linearSearchWithBarrier(arr, target) {
    const lastElement = arr[arr.length - 1];
    arr[arr.length - 1] = target; 
    let i = 0;
    while (true) {
      comparisons++;
      if (arr[i] === target) {
        break;
      }
      i++;
    }
    arr[arr.length - 1] = lastElement; 
    if (i < arr.length - 1 || lastElement === target) {
      return { found: true, index: i, comparisons: comparisons };
    } else {
      return { found: false, index: -1, comparisons: comparisons };
    }
  }


  function testSortAlgorithms(arraySize, choose1) {
    const arr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * arraySize));
    const arr1 = [...arr];
    const arr2 = [...arr];
    const arr3 = [...arr];
    const arr4 = [...arr];
    let sortedArr;
    if(choose1 == 1){
        const quickSortTime = measureTime(quickSort, arr1, 0);
        console.log(`QuickSort: ${quickSortTime.toFixed(4)} ms`);
        createTable(arr, arr1, quickSortTime);
        let sortedArr = arr1;
    }
    if(choose1 == 2){
        const bubbleSortTime = measureTime(bubbleSort, arr2, 0);
        console.log(`BubbleSort: ${bubbleSortTime.toFixed(4)} ms`);
        createTable(arr, arr2, bubbleSortTime);
        let sortedArr = arr2;
    }
    if(choose1 == 3){
        const selectionSortTime = measureTime(selectionSort, arr3, 0);
        console.log(`SelectionSort: ${selectionSortTime.toFixed(4)} ms`);
        createTable(arr, arr3, selectionSortTime);
        let sortedArr = arr3;
    }
    if(choose1 == 4){
        const insertionSortTime = measureTime(insertionSort, arr4, 0);
        console.log(`InsertionSort: ${insertionSortTime.toFixed(4)} ms`);
        createTable(arr, arr4, insertionSortTime);
        let sortedArr = arr4;
    }  
    return sortedArr;
}

function testSearchAlgorithms(sortedArr, choose2){
    let target = sortedArr[0];
    let found = false;
    let comparisons, index = 0;
    if(choose2 == 1){
        console.log(sortedArr);
        const linearSearchTime = measureTime(linearSearch, sortedArr, target);
        createSearchTable(found, index, comparisons, linearSearchTime, target);
    }
    if(choose2 == 2){
        const binarySearchTime = measureTime(binarySearch, sortedArr, target);
        createSearchTable(found, index, comparisons, binarySearchTime, target);
    }
    if(choose2 == 3){
        const linearSearchWithBarrierTime = measureTime(linearSearchWithBarrier, sortedArr, target);
        createSearchTable(found, index, comparisons, linearSearchWithBarrierTime, target);
    }
}

function createTable(arr, arrsort, SortTime, algorithm){
    let text = "<h3>Sorted Array with Algorithm " + algorithm + "</h3>";
    let table = "<Table border = 1><TR ><th>Num</th><th>Array</th><th>ArrSorted</th><th>SortTime</th>";
    for(let i = 0; i < arr.length; i++){
        
        table += "<TR><td>" + i + "</td>";
        table += "<td>" + arr[i] + "</td>";
        table += "<td>" + arrsort[i] + "</td>";
        table += "<td>" + SortTime.toFixed(4) + " ms</td></TR>";
    }
    table += "</Table>";
    table_log_sorttext.innerHTML = text;
    table_log_sorttable.innerHTML = table;
}

function createSearchTable(found, index, comparisons, Time, algorithm, target){
    let text = "<h3>Search element " + target + " with algorithm " + algorithm + "</h3>";
    let table = "<Table border = 1><TR ><th>Index</th><th>Element</th><th>Status</th><th>SearchTime</th><th>Comparisons</th><TR><td>" + index + "</td><td>" + target + "</td><td>" + found + "</td><td>" + Time.toFixed(4) + "</td><td>" + comparisons + "</td></TR></Table>";
    table_log_searchtext.innerHTML = text;
    table_log_searchtable.innerHTML = table;
}