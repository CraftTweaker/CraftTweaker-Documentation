# Array Associativi

Un Array Associativo (a volte chiamato anche una Mappa o un Dizionario) è come un normale [Array](/AdvancedFunctions/Arrays_and_Loops/) nel modo in cui è in grado di memorizzare voci multiple. A differenza di [Arrays](/AdvancedFunctions/Arrays_and_Loops/) , tuttavia, è possibile scegliere quale tipo si desidera l'indice, o (come lo chiamiamo in mappe) chiave, per essere!

## Dichiarare una matrice associativa

Si dichiara Associative Arrays utilizzando parentesi ricce `{}` e punti `:`

```zenscript
val myAssocArray = {
    dirt : <minecraft:dirt>,
    gold : <minecraft:gold_ingot>
} come IItemStack[string];
```

Ripartiamo questo giù, vero?

- `val myAssocArray =` dichiarazione di variabile standard
- `{` this is an Associative Array, Sir!
- `dirt : <minecraft:dirt>` mappiamo `<minecraft:dirt>` sotto la stringa `dirt`
- `,` aspetta, c'è di più per venire
- `oro : <minecraft:gold_ingot>` mappiamo `<minecraft:gold_ingot>` sotto la stringa `oro`
- `}` abbiamo raggiunto la fine dell'Array, Signore!
- `come IItemStack[string];` questo è un Array Associativo che utilizza le stringhe come indici e IItemStacks come valori.

Okay, quindi che cosa devo pensare quando li uso?

- È possibile utilizzare su ogni tipo disponibile a Zenscript come chiave o valore.
- Non puoi usare le variabili per la dichiarazione delle chiavi nella Dichiarazione iniziale (quella che usa `{}`) come testo chiaro è interpretata come stringa!

## Riferirsi agli oggetti all'interno di un Array Associativo.

Fai riferimento agli oggetti all'interno di un Array Associativo allo stesso modo in cui fai riferimento agli oggetti all'interno di un Array [normale](/AdvancedFunctions/Arrays_and_Loops/):  
`Array[index]`  
Solo la differenza è questa volta, non hai necessariamente bisogno di usare un Integer come indice, ma qualunque tipo hai dichiarato la tua Array!

```zenscript
<br />val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "Questo è me"
} come stringa[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//È anche possibile utilizzare varaibles qui, purché la variabile sia del tipo corretto
print(assocArray[dirt]);
```

C'è un caso speciale, che è quando si usano le stringhe come inserimenti:  
In questo caso è anche possibile utilizzare il memberGetter in questo modo:

```zenscript
val assocWithStrings = {
    //puoi usare "" se vuoi
    "one" : "1",

    //ma non devi
    due : "2"
} come stringa[string];

//È possibile utilizzare il memberGetter
print(assocWithStrings. ne);

//O l'indice standard Getter
print(assocWithStrings["due"]);
```

## Manipolazione degli oggetti all'interno di un Array Associativo

Come in Arrays, puoi manipolare gli oggetti all'interno di un Array Associativo utilizzando `array[index] = newValue`.  
C'è però una differenza importante:  
Mentre gli Array hanno una dimensione fissa, le mappe non lo fanno. Ciò significa che puoi sempre aggiungere una voce impostando un indice che non è stato precedentemente impostato!

```zenscript
val changingArray = {
    <minecraft:dirt> : "this is me",
    <minecraft:gold_ingot> : "e lo odio"
} come stringa[IItemStack];

val gg = <minecraft:gold>;

//Sovrascrive il valore di gold_ingot
changingArray[gg] = "e lo amo";

//add a new entry
changingArray[<minecraft:grass>] = "Power!";
```

## Recuperare chiave e ingressi di un Array Associativo

Il KeySet è un array contenente tutte le chiavi della mappa.  
Il valueSet è un array contenente tutti i valori della mappa.  
L'entrySet è un array contenente tutte le voci della mappa (vedi sotto).

```zenscript
myAssocArray.keySet //keySet
myAssocArray.keys //keySet
myAssocArray.values //valueSet
myAssocArray.valueSet //valueSet
myAssocArray.entrySet //entrySet
```

## Iterare su un Array Associativo

Ci sono due Iteratori che ti permettono di iterare su un Array Associativo:

- La chiave-Iteratore: Itera sopra le chiavi, usa una variabile
- Il key-value-Iterator: Iterates sopra le chiavi e i valori, utilizza due variabili

Aggiungiamo un Array Associativo che memorizza le ricette di lavorazione da iterare:

- Le chiavi devono essere l'output di creazione come [IItemStack](/Vanilla/Items/IItemStack/)
- I valori devono essere gli ingredienti di fabbricazione come [IIngrediente](/Vanilla/Variable_Types/IIngredient/)
- Useremo il key-Iterator che è costruito in questo modo: `per la chiave in assocArray {doSth;}`
- Useremo anche il key-value-Iterator che è costruito come questa `per la chiave, il valore in assocArray {doSth;}`

```zenscript
import crafttweaker.item.IItemStack;
import crafttweaker.item. Ingrediente;

val dirt = <minecraft:dirt>;
val recipeMapShaped = {
    <minecraft:grass> : [[dirt, dirt, dirt],[dirt, dirt, dirt],[dirt, dirt, dirt]],
    <minecraft:gold_ingot> [[sporco, sporco, sporco, sporco],[sporcizia, <minecraft:gold_ingot>, sporco],[sporco, sporco, sporco]]
} come IIngrediente[][][IItemStack];

recipeMapShaped[dirt] = [[sporco, sporco, sporcizia],[sporco, null, sporco],[sporco, sporco, sporcizia]];

//key will be grass, goldIngot, sporco
for key in recipeMapShaped {
    recipes. ddShaped(key, recipeMapShaped[key]);
}


//chiavi saranno erba, goldIngot, sporcizia, values will be the recipes for them
for key, value in recipeMapShaped {
    recipes. ddShaped(key, value);
}
```

# Voce ZenType

Un elemento mappa consiste di una chiave e un valore.  
Attualmente l'unico modo per ottenere un tale oggetto è tramite un metodo di impostazione della mappa.

È possibile utilizzare i ricevitori per ottenere `chiave` e `valore`

```zenscript
//Sostituisci la mappa con un riferimento a una mappa/array associativo
val myEntry = map.entryImposta[0];


myEntry.key; //Restituisce la chiave dell'elemento.
myEntry.value; //Restituisce il valore dell'elemento.
```