# Arrays Asociativos

Un Array Asociativo (A veces llamado Mapa o Diccionario) es como un Array normal que puede almancenar más de una entrada. A diferencia de un Array, en el que puedes eliges el elemento a partir del indice, en un mapa tú eliges que es el indice es forma de una "clave".

## Declarando un Array Asociativo

Declaras un Array Asociativo usando claudators  `{}`  y dos puntos  `:`
```zenscript
val miArrayAsociativo = {
   tierra : <minecraft:dirt>,
   oro : <minecraft:gold_ingot>
} as IItemStack[string];
```

Por partes:

- `val myArrayAsociativo =` declaramos el array como una variable
- `{` esto es un Array Asociativo
- ` tierra : <minecraft:dirt>` Almacenamos el valor `<minecraft:dirt>` al lado de la clave ` tierra : `
- `,` Hay más de un elemento en el Mapa
- `oro : <minecraft:gold_ingot> ` Almacenamos el valor `<minecraft:gold_ingot>` al lado de la clave ` gold: `
- ` } ` Hemos llegado al final del Array.
- `as IItemStack[string];`  este Mapa utiliza strings como indices y IItemStacks como elementos


¿Cómo uso estos?

- Puedes usar cualquier tipo que esta expuesto a Zenscript como un elemento o una clave.
- No puedes usar variables como claves ya que el texto a la izquierda de los dos puntos se auto interpreta como un String aunque no tenga las comillas. Por tanto, si tu tuvieras una variable la convertiria a un string con el nombre de la variable, no con el valor que esa variable representa.


## Referirse a un Elemento dentro de un Mapa

You refer to items inside an Associative Array the same way you refer to items inside a normal [Array](/AdvancedFunctions/Arrays_and_Loops/):  
`Array[index]`  
Only difference is this time, you don't necessarily need to use an Integer as index, but whatever type you declared your Array to be!
```zenscript

val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//You can also use variables here, as long as the variable is of the correct type
print(assocArray[dirt]);
```


There is one special case, that is when you use strings as indeces:  
In this case you can also use the memberGetter like this:
```zenscript
val mapaConStrings = {
    //Puedes usar comillas 
    "uno" : "1",

    //pero no hace falta para la clave
    dos : "2"
} as string[string];

//Ahora puedes usar el Getter de Miembros
print(mapaConStrings.uno);

//O la clave entre corchetes.
print(mapaConStrings["dos"]);
```

## Manipulando elementos que se encuentran dentro de un Array Asociativo

As in Arrays, you can manipulate items inside an Associative Array using `array[index] = newValue`.  
There is one major differenc though:  
While Arrays have a fixed size, maps don't. Esto significa que puedes añadir una entrada a un valor con una clave que aún no exista.

```zenscript
val mapaCambiante = {
    <minecraft:dirt> : "Este soy yo",
    <minecraft:gold_ingot> : "y lo odio"
} as string[IItemStack];

val oro = <minecraft:gold>;

//Cambia el valor de lingoteDeOro
mapaCambiante[oro] = "y me encanta";

//Añade una entrada nueva
mapaCambiante[<minecraft:grass>] = "Olé";
```

## Conseguir lots Sets de Claves y Elementos de un Mapa

The KeySet is an array containing all the map's keys.  
The valueSet is an array containing all the map's values.  
The entrySet is an array containing all the map's entries (see below).

```zenscript
myAssocArray.keySet   //Set de Claves
myAssocArray.keys     //Set de Claves
myAssocArray.values   //Set de Elementos
myAssocArray.valueSet //Set de Elementos
myAssocArray.entrySet //Set de Entradas
```


## Bucle + Mapa

Hay dos iteradores que te permiten hacer un Bucle con un Mapa:

- The iterador de claves: Da vueltas a las claves, presenta una variable.
- El iteradores de entradas: Da vueltas a todo lo que se encuentra en el array, presenta dos variables.

Vamos a crear un Mapa que almacena recetas de crafteo para loopear:

- Las claves seran el resultado de la receta de tipo `IItemStack<code/></li>
<li>Los elementos seran los ingredientes de crafteo de tipo <code> IIngredient <code/></li>
<li>Usaremos los dos iteradores: <br/>
Primero el de claves, que se construye así: <code> for clave in mapa { hazAlgo; }
<code/></li>
<li>Luego usaremos el de entradas, que se construye así: <code> for clave, elemento in mapa { hazAlgo;} <code/></li>
</ul>

<pre><code class="zenscript">import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

val tierra = <minecraft:dirt>;
val mapaDeRecetasShaped = {
    <minecraft:grass> : [[tierra, tierra, tierra],[tierra, tierra, tierra],[tierra, tierra, tierra]],
    <minecraft:gold_ingot> : [[tierra, tierra, tierra],[tierra, <minecraft:gold_ingot>, tierra],[tierra, tierra, tierra]]
} as IIngredient[][][IItemStack];

mapaDeRecetasShaped[tierra] = [[tierra, tierra, tierra],[tierra, null, tierra],[tierra, tierra, tierra]];

//las claves seran tierra, hierba y lingote de oro
for clave in mapaDeRecetasShaped {
    recipes.addShaped(clave, mapaDeRecetasShaped[clave]);
}


//las claves seran tierra, hierba, y lingote de oro y los elementos seran sus respectivos ingredientes de crafteo.
for clave, elemento in  mapaDeRecetasShaped {
    recipes.addShaped(clave, elemento);
}
`</pre>

# Entrada ZenType
A map Entry consists of a key and a value.  
Currently the only way to get such an object is via a map's entrySet method.

Puedes usar los getters para conseguir la clave y elemento

```zenscript
//Sustituye mapa con el nombre de un Array Asociativo existente.
val miEntrada = mapa.entrySet[0];


miEntrsfs.key;    //Devuelve la clave de la entrada.
miEntrada.value;  //Devuelve el elemento de la entrada.
```
