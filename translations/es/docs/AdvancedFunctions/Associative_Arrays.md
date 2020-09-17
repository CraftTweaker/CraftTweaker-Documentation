# Arreglos Asociados

Un Arreglo Asociativo (a veces llamado Mapa o Diccionario) es como un [Arreglo normal](/AdvancedFunctions/Arrays_and_Loops/) en la forma en que es capaz de almacenar múltiples entradas. A diferencia de [Arrays](/AdvancedFunctions/Arrays_and_Loops/) , sin embargo, puedes elegir qué tipo quieres que sea el índice, o (como lo llamamos en mapas), ¡ser!

## Declarando un Arreglo Asociativo

Declaras Arrays Asociativos usando llaves `{}` y dos puntos `:`

```zenscript
val myAssocArray = {
    dirt : <minecraft:dirt>,
    gold : <minecraft:gold_ingot>
} as ItemStack[string];
```

Separémoslo, ¿no?

- `val myAssocArray =` declaración de variable estándar
- `{` esto es un Array Asociado, Señor!
- `dirt : <minecraft:dirt>` mapeamos `<minecraft:dirt>` bajo la cadena `dirt`
- `,` espera, hay más por venir
- `de oro: <minecraft:gold_ingot>` mapeamos `<minecraft:gold_ingot>` bajo la cadena `de oro`
- `}` ¡Hemos llegado al final del Array, Señor!
- `como ItemStack[string];` este es un Arreglo Asociativo que utiliza cadenas como índices e ItemStacks como valores.

Vale, entonces ¿qué tengo que pensar al usarlos?

- Puede utilizar sobre todos los tipos disponibles para Zenscript como clave o valor.
- No puedes usar variables para la declaración clave en la declaración inicial (la que usa `{}`) como texto claro se interpreta como cadena!

## Refiriendo a los artículos dentro de un Array Asociativo.

Usted se refiere a los elementos dentro de un Arreglo Asociativo de la misma manera que usted se refiere a los elementos dentro de un Arreglo normal [](/AdvancedFunctions/Arrays_and_Loops/):  
`Arreglo[index]`  
Sólo la diferencia es esta vez, no necesita necesariamente usar un entero como índice, ¡pero cualquier tipo que haya declarado que es su matriz!

```zenscript
<br /><br />val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//You can also use varaibles here, as long as the variable is of the correct type
print(assocArray[dirt]);
```

Hay un caso especial que es cuando usas cadenas como indeces:  
En este caso también puedes usar el memberGetter como este:

```zenscript
val assocWithStrings = {
    //you can use "" if you want
    "one" : "1",

    //pero no tienes que
    dos : "2"
} como cadena[string];

//Puedes usar la impresión
de memberGetter (assocWithStrings. ne);

//O el índice estándar Getter
print(assocWithStrings["dos"]);
```

## Manipulando elementos dentro de un Arreglo Asociativo

Como en Arrays, puede manipular elementos dentro de un Arreglo Asociativo usando `array[index] = newValue`.  
Sin embargo, hay una diferencia importante:  
Mientras que los matrices tienen un tamaño fijo, los mapas no lo hacen. Esto significa que siempre puede agregar una entrada configurando un índice que no ha sido previamente establecido!

```zenscript
val changingArray = {
    <minecraft:dirt> : "this is me",
    <minecraft:gold_ingot> : "y lo odio"
} como cadena[IItemStack];

val gg = <minecraft:gold>;

///Sobreescribe el valor de gold_ingot
changingArray[gg] = "y me encanta";

//añade una nueva entrada
changingArray[<minecraft:grass>] = "¡Poder!";
```

## Recuperar una llave y entradas de un Array Asociativo

El conjunto de claves es un array que contiene todas las claves del mapa.  
El conjunto de valores es un array que contiene todos los valores del mapa.  
El entrySet es un array que contiene todas las entradas del mapa (ver abajo).

```zenscript
myAssocArray.keySet //keySet
myAssocArray.keys //keySet
myAssocArray.values //valueSet
myAssocArray.valueSet //valueSet
myAssocArray.entrySet //entrySet
```

## Iterando sobre un Arreglo Asociativo

Hay dos iteradores que te permiten iterar sobre un Array Asociado:

- La clave-iterador: Iteriza sobre las claves, utiliza una variable
- El clave-valor-Iterador: Iteriza sobre las claves y valores, utiliza dos variables

Añadamos un Arreglo Asociativo que almacena recetas de fabricación para iterarse:

- Las claves deben ser la salida de fabricación como [ItemStack](/Vanilla/Items/IItemStack/)
- Los valores deben ser los ingredientes de fabricación como [IIngrediente](/Vanilla/Variable_Types/IIngredient/)
- Utilizaremos la clave-Iterator que está construida así: `para la clave en assocArray {doSth;}`
- También usaremos la clave-valor-Iterator que está construida como esta `para clave, valor en assocArray {doSth;}`

```zenscript
importar crafttweaker.item.IItemStack;
importar crafttweaker.item. Ingrediente;

dirt val = <minecraft:dirt>;
val recipeMapShaped = {
    <minecraft:grass> : [[dirt, dirt],[dirt, dirt, dirt],[dirt, dirt, dirt]],
    <minecraft:gold_ingot> : [[dirt, dirt],[dirt, <minecraft:gold_ingot>, dirt],[dirt, dirt, dirt]]
} as IIngredient[][][IItemStack];

Forma de receta[dirt] = [[suciedad, suciedad, sucio],[suciedad, suciedad, sucio],[suciedad, suciedad, sucio]];

///key will be grass, goldIngot, dirt
for key in recipeMapShaped {
    recipes. ddShaped(key, recipeMapShaped[key]);
}


///keys serán hierba, goldIngot, suciedad, los valores serán las recetas para ellas
para la clave, valor en receta MapShaped {
    recetas. ddShaped(llave, valor);
}
```

# Entrada ZenType

Una entrada de mapa consiste en una clave y un valor.  
Actualmente la única forma de obtener dicho objeto es mediante el método entrySet de un mapa.

Puedes usar los getters para obtener `clave` y `valor`

```zenscript
//Reemplazar el mapa con una referencia a un array asociativo existente
val myEntry = map.entrySet[0];


myEntry.key; //Devuelve la clave de la entrada.
myEntry.value; //Devuelve el valor de la entrada.
```