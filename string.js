"use strict"

var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth")
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");




//function to find largest number
function largestNumber(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var largestNumber = 0;

    largestNumber = Math.max(first, second, third, fourth, fifth, sixth);
    output.innerHTML = largestNumber;

   
    return largestNumber;
}

//function to find smallest number
function smallestNumber(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    smallestNumber = Math.min(first, second, third, fourth, fifth, sixth);
    output.innerHTML = smallestNumber;
   

    return smallestNumber;
}

//find the mean
function mean(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    mean = (first + second + third + fourth + fifth + sixth) / 6
    output.innerHTML = mean;

}
//find the range
function range(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var largest = first;

        if(largest < second){
            largest = second;
        }
        if(largest < third){
            largest = third;
        }
        if(largest < fourth){
            largest = fourth;
        }
        if(largest < fifth){
            largest = fifth;
        }
        if(largest < sixth){
            largest = sixth;
        }
        console.log(largest);
        var smallest = first;
        if(smallest > second){
            smallest = second;
        }
        if(smallest > third){
            smallest = third;
        }
        if(smallest > fourth){
            smallest = fourth;
        }
        if(smallest > fifth){
            smallest = fifth;
        }
        if(smallest > sixth){
            smallest = sixth;
        }
        var range = parseInt(largest) - parseInt(smallest);
        console.log(smallest);
        output.innerHTML = " The range of the numbers is " + range;
    }



