1. If you add the JSON to your package.json and then type:
##npm install##
 in the project directory, you will get the two modules you need to run the tracker ('path' and 'fs')

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

2. if you do not have a package.json, type npm init and do all that jazz
Instead of adding the modules by hand, type:
##npm install path fs --save##
 into your terminal in the file directory

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

3. create tracker-object.js file in your HR-ToyProblems directory and copy and past the code from tracker-object.js

This tracker-object.js will be where you keep your stuff updated. To use this properly, that is the only thing you will edit. The way that I used this was I would go into the tracker every time I completed a toy problem. 

 Below is an example of what this will look like as you add toy problems. Basically any truthy value will trigger a true response in the tracker this allows you to write notes to yourself if you want. Anything false will return false. 

 module.exports = {
 allAnagrams            : 'true',
 asyncMap               : false,
 balancedParens         : 'true',
 binaryHeap             : 'tru',
 binarySearchArray      : 'true',
 bubbleSort             : 'true',
 characterFrequency     : 'true',
 coinSums               : 'true',
 commonAncestor         : 'true',
 commonCharacters       : 'true - extra credit to do',
 composePipe            : 'ture',
 }

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

4. To see how you are doing and if you are over that magic 80%, simply type:
##node tracker.js##
into your directory and will get your score.


Please let me know if anything is broken

@trevjnels