async function shell() 
{
    console.log('In shell()');
    const ele = document.querySelectorAll(".bar");
    let gap;
    for(gap = Math.floor(ele.length/2); gap>0; gap = Math.floor(gap / 2))
    {
        console.log('In gapth loop');
        for(let i = gap; i < ele.length; i++)
        {
            console.log('In ith loop');
            console.log(ele[i]);
            let temp=ele[i].style.height;
            var flag = 0;
            let j=i;
            ele[j].style.background = 'red';
            ele[j-gap].style.background = 'red';
            await waitforme(delay);
            await waitforme(delay);
            await waitforme(delay);
            ele[j-gap].style.background = 'cyan';
            ele[j].style.background = 'cyan';

            for(j = i; j >=gap && parseInt(ele[j-gap].style.height) > parseInt(temp); j -= gap)
            {
                flag=1;
                ele[j].style.height=ele[j-gap].style.height;
            }
            ele[j].style.height=temp;

            if(flag == 1)
            {
                ele[j].style.background = 'yellow';
                await waitforme(delay);
                await waitforme(delay);
                await waitforme(delay);
                ele[j].style.background = 'cyan';
            }
        }
    }
    for(let i=0;i<ele.length;i++)
    {
        await waitforme(delay);
        ele[i].style.background = 'green';
    }
}

const shellSortbtn = document.querySelector(".shellSort");
shellSortbtn.addEventListener('click', async function()
{
    var x = document.getElementById("test");
    x.style.visibility = "visible";
    x.innerHTML = "<img src = images/red.png width= 20px height= 20px >" + "&nbsp; Comparing two values" + "<br/>" + "<img src = images/yellow.png width= 20px height= 20px >" + "&nbsp; Swapped value" + "<br/>" + "<img src = images/green.png width= 20px height= 20px >" + "&nbsp; Sorted value";

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await shell();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});