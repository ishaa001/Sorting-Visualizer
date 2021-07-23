  
async function brick() 
{
    const ele = document.querySelectorAll(".bar");
    let issorted=0;

    while(!issorted)
    {
        issorted=1;
        // Perform Bubble sort on odd indexed element
        for(let i = 1; i <= ele.length-2; i+=2)
        {
            ele[i].style.background = 'red';
            ele[i+1].style.background = 'red';
            await waitforme(delay);
            await waitforme(delay);
            if(parseInt(ele[i].style.height) > parseInt(ele[i+1].style.height))
            {
                await waitforme(delay);
                await waitforme(delay);
                swap(ele[i],ele[i+1]);
                ele[i].style.background = 'darkblue';
                await waitforme(delay);
                await waitforme(delay);
                issorted=0;
            }
            ele[i].style.background = 'cyan';
            ele[i+1].style.background = 'cyan';
        }
        // Perform Bubble sort on even indexed element
        for(let i=0;i<=ele.length-2;i+=2)
        {
            ele[i].style.background = 'yellow';
            ele[i+1].style.background = 'yellow';
            if(parseInt(ele[i].style.height) > parseInt(ele[i+1].style.height))
            {
                await waitforme(delay);
                await waitforme(delay);
                swap(ele[i],ele[i+1]);
                ele[i].style.background = 'darkblue';
                await waitforme(delay);
                await waitforme(delay);
                issorted=0;
            }
            ele[i].style.background = 'cyan';
            ele[i+1].style.background = 'cyan';
        }
    }
    for(let i=0;i<ele.length;i++)
    {
        await waitforme(delay);
        ele[i].style.background = 'green';
    }
}

const brickSortbtn = document.querySelector(".brickSort");
brickSortbtn.addEventListener('click', async function()
{
    var x = document.getElementById("test");
    x.style.visibility = "visible";
    x.innerHTML = "<img src = images/red.png width= 20px height= 20px >" + "&nbsp; Comparing odd values" + "<br/>" + "<img src = images/yellow.png width= 20px height= 20px >" + "&nbsp; Comparing even values" + "<br/>" + "<img src = images/green.png width= 20px height= 20px >" + "&nbsp; Sorted value &nbsp;&nbsp;" + "<img src = images/blue.png width= 20px height= 20px >" + "&nbsp; Swapped values";

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await brick();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});