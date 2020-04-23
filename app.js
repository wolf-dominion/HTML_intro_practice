console.log('It is connected')

// ruby way to make a method
// def print_array array
//     array.each do |n|
//         puts n
//     end
// end

// attr_reader is very similar to const
// deafult in a class should always be const, then if you decide you want it to be
// changable, change it to let
// unintentionally overwrite a value
// hashes in ruby are called objects in js

const myName = "Jared" // cannot ever be changed

let name = "Hannah" // can be changed 
console.log("My name at first declaration", name) // this is a flag to help with dev

name = "Lisa"
console.log("My name at second declaration", name) // this is a flag to help with dev

let arrayOfNames = ["cat", "dog", "mouse"]

function printArray(array)
{
    array.forEach(n => console.log(n))
}

printArray(arrayOfNames)

// function
// let
// const
// var (considered outdated, but will often be seen in previously written code)
// var is hoisted throughout file, which you don't want unneccesarily 