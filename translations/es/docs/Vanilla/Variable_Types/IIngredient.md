# IIngredientes

Un IIngredient es un ingrediente para las recetas.  
Esto podría ser [un elemento](/Vanilla/Items/IItemStack/), [una entrada del diccionario de mineral](/Vanilla/OreDict/IOreDictEntry/), [un líquido](/Vanilla/Liquids/ILiquidStack/) y mucho más.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.item.IIngredient;`

## Importando el paquete IIngredient

Generalmente, no necesitará esto, pero en algunos casos las recetas no funcionarán hasta [importar](/AdvancedFunctions/Import/) el paquete IIngredient.  
Puede hacer esto utilizando la siguiente importación:

```zenscript
importar crafttweaker.item.IIngredient;
```

## Funciones

Entonces, ¿qué podemos hacer con esto?

### Cadena de comandos

La cadena de comandos es cómo llamarías este elemento en ZS.  
Esto puede ser un manejador de corchetes o algo similar.

```zenscript
val item = <minecraft:iron_ingot>;

//prints "<minecraft:iron_ingot>"
print(item.commandString);
```

### Marca

Puedes marcar un IIngrediente para luego usarlo en [funciones de fabricación](/Vanilla/Recipes/Crafting/Recipe_Functions/). También puede recuperar la marca aplicada anteriormente.

```zenscript
//Marca la selección con el Picky de Cadena
//item.marked(name) <-- ¡El nombre es una cadena!
val markedPick = <minecraft:diamond_pickaxe>.marked("Picky");

//prints "Picky"
print(markedPick.mark);
```

### Cantidad

Si desea utilizar más de un objeto dado, puede establecer una cantidad a un IIngrediente.  
Esto es tan fácil como multiplicar el IIngrediente con un entero.  
Recuperar la cantidad también es posible.

```zenscript
val multiples Múltiples = <minecraft:apple> * 3;

//prints 3
print(multipleApples.amount);
```

### OR-haciendo un IIngrediente

A veces quieres IIngredient X o Y, ¿pero no quieres crear una receta para cada posibilidad? Por eso hay el método OR para IIngredientes:

```zenscript
val item1 = <minecraft:apple>;
val item2 = <minecraft:carrot>;

val either = item1 | item2;
val either2 = item1.or(item2);
```

### Obtener posibles artículos o líquidos

A veces un IIngredient representa más de un elemento, por ejemplo si está usando una entrada de [OreDictEntry](/Vanilla/OreDict/IOreDictEntry/) o si O-ed dos Ingredientes.  
Puede obtener todos los elementos posibles para este IIngredient como List<[ItemStack](/Vanilla/Items/IItemStack/)> Lista usando la primera función.  
La segunda función hace lo mismo que la primera pero devuelve un [ItemStack](/Vanilla/Items/IItemStack/)[] en lugar de una lista. Lo mismo ocurre con los líquidos en la tercera función, solo ellos retornan una [lista](/Vanilla/Liquids/ILiquidStack/) de ILiquidStack.

```zenscript
//Devuelve una Lista de ItemStack
//posibles artículos: Todos los lingotes de hierro y el lingote de oro de MC
val itemsIngredient = <ore:ingotIron> | <minecraft:gold_ingot>;


//Devuelve una lista de ILiquidStack|
//posibles líquidos: Lava y Agua
val liquidsIngredient = <liquid:lava> | <liquid:water>;


para el artículo en itemsIngredient. tems{
    //Imprime el nombre de visualización de cada elemento posible
    print(item. isplayName);
}

para artículo en itemsIngredient.itemArray{
    //Imprime el nombre de cada posible elemento Visualización
    print(item. isplayName);
}

para líquido en líquidosIngrediente. iquids{
    //Imprime el nombre de la pantalla de cada posible líquido
    print(liquid. isplayName);
}

para líquido en <minecraft:water_bucket>.liquidos {
    //Imprime el líquido contenido, es decir, agua.
    //May not work for every item, however h.
    print(liquid.displayName);
}
```

### Transforma un IIngrediente al fabricar

A veces quieres que un objeto no se consuma al fabricar sino que recibe daño o devuelve un objeto completamente diferente.  
Esto es para lo que los Transformadores de objetos están allí.

```zenscript
<br /><br />val item = <minecraft:apple>;

//Item won't be consumed and will stay in the grid
transformedItem = item.reuse();

//Item won't be consumed and the whole stack will be given back to you (does /give).
transformedItem = item.giveBack();

//item será consumido pero le dará la pila especificada (la ranura de fabricación será eliminada!).
transformedItem = elemento. iveBack(<minecraft:potato>);

//item será reemplazado con el objeto especificado, que en su lugar irá a la ranura de fabricación
transformedItem = item. ransformReplace(<minecraft:potato>);

//da el objeto por 1
transformedItem = item. ransformDamage();

//damages the item by the given value
transformedItem = item.transformDamage(3);

//item will be consumed, without matter what.
transformedItem = item.noReturn();

//Causa múltiples elementos a consumir.
transformedItem = item.transformConsume(3);
```

### Condiciones del ingrediente

A veces quieres que tu ingrediente tenga una etiqueta específica o que solo funcione si (no) está dañado. Estas condiciones pueden ser añadidas a tus ingredientes usando lo siguiente:

```zenscript
val item = <minecraft:apple>;

//Item solo será aceptado con al menos 1 punto de daño
var conditionedItem = item. nlyDamaged();

//Item sólo será aceptado con al menos los puntos de daño
conditionedItem = item. nlyDamageAtLeast(10);

//Item sólo será aceptado con como mucho los puntos de daño especificados
conditionedItem = item. nlyDamageAtMost(100);

//Item sólo será aceptado con puntos de daño mayores o iguales que el primero y menor o igual que el segundo entero.
conditionedItem = item.onlyDamageBetween(10,100);

//Item sólo será aceptado con la etiqueta especificada. El elemento puede tener más etiquetas de las especificadas, las que se ignoran cuando se seleccionan.
//Si quieres que JEI muestre la etiqueta en la pantalla de recetas, necesitarás añadir una etiqueta usando "withTag(tag)"
conditionedItem = item. nlyWithTag({display: {Nombre: "Tomato"}});

//Item sólo será aceptado con la etiqueta especificada. El elemento puede tener más etiquetas de las especificadas, las que se ignoran cuando se seleccionan.
//Nota: Esto puede no funcionar con todos los ingredientes, pero funcionará para los artículos. ¡El lado Pro de usar esto es que JEI mostrará las etiquetas en la receta!
conditionedItem = item.withTag({display: {Nombre: "Tomato"}});

//Artículo sólo será aceptado si se encuentra en una pila de al menos la cantidad especificada. Se utiliza principalmente en combinación con el transformador de consumo.
//Tenga en cuenta que si sólo añade esto, seguirá consumiendo sólo un artículo por fabricación.
conditionedItem = item.onlyStack(32);
```

### Emparejando

Si desea comprobar si un ItemStack coincide con su IIngredient puede utilizar el método de partida. Esto devolverá un booleano. Si el IIngredient representa un líquido, comprobará si el producto es un recipiente válido para este líquido.

```zenscript
print(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
print(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>));
```

También puedes coincidir con dos objetos IIngredient, en cuyo caso necesitarás usar el ```en``` operador:

```zenscript
lingotes val = <minecraft:iron_ingot> | <minecraft:gold_ingot>;
val NoreIngot = <ore:ingotIron>;
val ingotGold = <minecraft:gold_ingot>;

//verdadero ya que los lingotes Ingredient tiene <minecraft:gold_ingot>
lingots tiene ingotGold;

//falso como <minecraft:iron_ingot> no se puede encontrar en <ore:ingotGold>
oreIngot tiene lingotes;
```