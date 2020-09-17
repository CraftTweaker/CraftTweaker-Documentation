# Array

Un array è un elenco contenente più elementi dello stesso tipo.

## Array Dichiaranti

È dichiarato utilizzando ```[``` e ```]```.

**Imortant**: *devi* inizializzare gli array a qualcosa, anche se è un array vuoto.

`var floatArray as float [];` non darà errori di sintassi, ma dopo aver ricaricato il tuo gioco, otterrai un errore e lo script non funzionerà.

Invece, inizializza array vuoti come questo `var floatArray come float [] = [];`

```zenscript
//Array contenente "Hello" e "World"
val stringArray = ["Hello", "World"] come string[];

//Array contenente 1-3
val intArray = [1,2,3] come int[];
```

Se ora pensi di "aspettare, non ho visto queste parentesi prima?", hai. Ricorda ```recipes.add(out,[[],[],[]]);```? Questo usa tre array con ciascuno contenente fino a tre voci per definire una ricetta di tabella di creazione.

## Array Di Casting

Sicuramente hai notato che tutti gli array qui hanno la dichiarazione `come` allegata.  
Perché chiedi? Questo perché ZenScript a volte non può prevedere quale tipo gli oggetti nell'array sono. Questa può essere la causa di strani registri degli errori di conversione!  
Meglio essere sicuri che scusarsi e lanciare gli Array ai loro tipi corretti!  
Inoltre, se trasmetti a tipi non primitivi (tutto tranne le stringhe, ints and the same be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Array Nestati

È possibile posizionare gli array negli arrays.

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","! ]] come stringa[][];
```

## Reffering agli oggetti in un Array

È possibile fare riferimento a un elemento all'interno di un array utilizzando il suo posto nella lista. Il primo elemento di un Array è No. 0, il secondo No.1 e così via.

Se si desidera fare riferimento a un oggetto in un Array nidificato, hai bisogno di due o più referenti, poiché ciascuno rimuove un livello delle liste.

```zenscript
/*
stringArray[0] is "Hello"
stringArray[1] is "World"
stringArray[2] is "I"
stringArray[3] is "am"
*/
val stringArray = ["Hello", Mondo","I","am"] come stringa[];

//prints "Hello"
print(stringArray[0]);


//Nested Arrays
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beautiful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","! ]] come stringa[][];

/*
stringArrayAll[0] is ["Hello","World"]
stringArrayAll[1] is ["I", am"]
stringArrayAll[2] is ["a","beautiful"]
stringArrayAll[3] is ["Butterfly","! ]

stringArrayAll[0][0] is "Hello"
stringArrayAll[0][1] is "World"
etc.
*/

//prints "World"
print(stringArrayAll[0][1]);
```

# Cicli

Un ciclo è una funzione che si ripete. È possibile utilizzare loop per applicare un'azione a tutti gli elementi in un Array

## Per Ciclo

L'uso principale del for-loop è iterating attraverso un array. Iterare significa fare un'azione a tutti gli elementi di un array.  
Puoi usare la parola chiave `pausa` per rompere prematuramente il ciclo.

```zenscript
importazione crafttweaker.item. ItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] come IItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] come IItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] come IItemStack[];


//for [nome_intero, ] elementName in IArray {code}

per l'elemento in IArray {
    //definisce la variabile "item" con ogni elemento di IArray (i. . <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Basta usare questa variabile ora!
    ricette. emove(voce);
}

for i, item in IArray {
    //definisce la variabile "i" con ogni elemento Numero di IArray (i. . 0,1,2,...
    //definisce la variabile "oggetto" con ogni elemento di IArray (es. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Basta usare queste variabili ora!

    //Artigianato oggetto di IArray usando l'oggetto di JArray e KArray (es. Terra con erba e ascia di legno, assi con legno e pala dorata, diamante con lingotto d'oro e smeraldo)
    ricette. ddShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //definisce la variabile "i" con ogni numero da 0 a 9 (i. . 0,1,2,...,8,9)
    stampa(i);
}

per i in 10 .. 20 {
    //definisce la variabile "i" con ogni numero da 10 a 19 (cioè 10,11,12,. .,18,19)
    print(i);
}

per elemento caricatoMods["minecraft"]. tems {
    //definisce la variabile "item" con ogni elemento aggiunto dalla mod con il modID "minecraft" e rimuove la sua ricetta di creazione
    ricette. emove(articolo);
}
```

## Durante Il Ciclo

Il loop mentre esegue il codice dato finché la condizione data valuta a `true`.  
In alternativa, puoi fermarlo usando la parola chiave `break`.

```zenscript
var i = 0; 

//Stampa 0 - 9, perché nell'iterazione dopo, i < 10 è falso dato che i è 10 allora.
while i < 10 {
    print(i); 
    i += 1;
} 

print("After loop: " + i);


//Stampa 10-6, perché nell'iterazione dopo di che i == 5 e si romperà.
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

stampa("Dopo il ciclo 2: " + i);


per k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Aggiunta di oggetti ad un Array

Anche se non è consigliabile farlo, è possibile aggiungere alcuni oggetti agli arrays.  
Puoi aggiungere solo singoli oggetti a un array, non puoi aggiungere due array.  
Utilizzi l'operatore `+` per l'aggiunta di array:

```zenscript
importazione crafttweaker.item. ItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [ferro, ferro, ferro];

array += iron;
for item in array {
    print(item. isplayName);
}
```