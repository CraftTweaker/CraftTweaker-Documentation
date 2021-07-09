# Arrays Asociativos

Un Array Asociativo (A veces llamado Mapa o Diccionario) es como un Array normal que puede almancenar más de una entrada. A diferencia de un Array, en el que puedes eliges el elemento a partir del indice, en un mapa tú eliges que es el indice es forma de una "clave".

## Declarando un Array Asociativo

Declaras un Array Asociativo usando claudators `{}` y dos puntos `:`

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
- `as IItemStack[string];` este Mapa utiliza strings como indices y IItemStacks como elementos

¿Cómo uso estos?

- Puedes usar cualquier tipo que esta expuesto a Zenscript como un elemento o una clave.
- No puedes usar variables como claves ya que el texto a la izquierda de los dos puntos se auto interpreta como un String aunque no tenga las comillas. Por tanto, si tu tuvieras una variable la convertiria a un string con el nombre de la variable, no con el valor que esa variable representa.

## Referirse a un Elemento dentro de un Mapa

Te puedes referir a algo dentro de un Array asociativo de la misma manera que te refieres a un elemento dentro de un Array normal. `Array[clave]`  
La diferencia esta en que esta vez no necesitas un Int que sea un index sino que puede ser un IItemStack, un String, un IOreDictEntry...

```zenscript
<br />val tierra = <minecraft:dirt>;
val elMapa = {
    <minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[clave]
print(elMapa[<minecraft:dirt>]);

//Puedes usar variables como clave siempre y cuando sean del mismo tipo que la clave (aqui la clave es tipo IItemStack), y tengan un valor que este definido en el Mapa.
print(elMapa[tierra]);
```

Hay un caso especial en el que puedes usar strings como claves   
En este caso puedes usar el Getter de Miembros asi:

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

Como en Arrays, puedes manipular elementos dentro de un Mapa usando `array[indice / clave] = nuevoElemento`.  
Esto significa que puedes añadir una entrada a un valor con una clave que aún no exista. 

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

Un Set de Claves es un Array que contiene todas las claves del mapa   
Un Set de Claves es un Array que contiene todos los elementos que tienen una clave del mapa   
Un Set de Entradas es un Array que contiene todas las entradas del mapa (ver abajo).

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

- Las claves seran el resultado de la receta de tipo ` IItemStack <code/></li>
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
    
    Una entrada de un mapa consiste de una clave y un elemento   
    Actualmente la única manera de obtener este objeto es usando el metodo entrySet (Set de Entradas).
    
    Puedes usar los getters para conseguir la ` clave <code/> y <code> elemento `
    
    ```zenscript
    //Sustituye mapa con el nombre de un Array Asociativo existente.
    val miEntrada = mapa.entrySet[0];
    
    
    miEntrsfs.key;    //Devuelve la clave de la entrada.
    miEntrada.value;  //Devuelve el elemento de la entrada.
    ```