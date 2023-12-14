async function heapSort()
{
    console.log('In heapSort()');
    const arr = document.querySelectorAll(".bar");
    var n = arr.length;
    
    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        await heapify(arr, n, i);
        
    // One by one extract an element from heap
    for (i = n - 1; i > 0; i--) {
        // Move current root to end
        await waitforme(delay);

        swap(arr[0],arr[i]);
        await heapify(arr, i, 0);
        arr[i].style.background = 'green';
    }
    arr[i].style.background = 'green';
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
async function heapify(arr, n, i)
{
    console.log('In heapify');
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2
    
    // If left child is larger than root
    if (l < n && parseInt(arr[l].style.height) > parseInt(arr[largest].style.height))
    {
        console.log('left child is larger than root');
        largest = l;
    }
        
    // If right child is larger than largest so far
    if (r < n && parseInt(arr[r].style.height) > parseInt(arr[largest].style.height))
    {
        console.log('right child is larger than largest so far');
        largest = r;
    }

    // If largest is not root
    if (largest != i) 
    {            
        console.log('largest is not root');
        arr[i].style.background = 'blue';
        arr[largest].style.background = 'red';
        
        //await waitforme(delay);
        //arr[largest].style.background = 'yellow';
        await waitforme(delay);
        await waitforme(delay);
        await waitforme(delay);
        swap(arr[i],arr[largest]);
        await waitforme(delay);
        await waitforme(delay);

        arr[i].style.background = 'cyan';
        arr[largest].style.background = 'cyan';        
        await heapify(arr, n, largest);
    }
}

const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener('click', async function()
{
    var x = document.getElementById("test");
    x.style.visibility = "visible";
    x.innerHTML = "<img src = images/blue.png width= 20px height= 20px >" + "&nbsp; Old Root Value" + "<br/>" + "<img src = images/red.png width= 20px height= 20px >" + "&nbsp; New Root Value" + "<br/>" + "<img src = images/green.png width= 20px height= 20px >" + "&nbsp; Sorted Value";

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await heapSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});