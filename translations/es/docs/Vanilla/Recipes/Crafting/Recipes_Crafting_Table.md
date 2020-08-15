# Recetas

## Tipos de receta

Hay varios tipos de recetas:

### Recetas moldeadas

Las recetas moldeadas son recetas, donde importa, qué objeto entra en qué ranura. Por ejemplo, no puede organizar 7 lingotes de hierro en ningún orden para crear piernas de hierro. La forma importa, por lo tanto es una receta en forma.

### Receta pirateada

Las recetas moldeadas son recetas en forma. Sólo la diferencia es que la receta puede ser reflejada a lo largo de los ejes horizontales o verticales.

### Recetas sin Forma

Las recetas sin forma son recetas, donde sólo los objetos que pones en la cuadrícula de fabricación importan, mientras que la forma no tiene importancia. Por ejemplo, los tintes azules y amarillos crean tinte verde. A esta receta no le importa dónde pones el objeto.

## Eliminar recetas

Hay varias maneras de eliminar las recetas.

### eliminar

```zenscript
recipes.remove(salida, NBTMatch);
```

This will crafting table recipes for the given `output`.  
If `NBTMatch` is true, it will only remove recipes that result in items with the same NTB-Data as provided

`La salida` es un [IIngrediente](/Vanilla/Variable_Types/IIngredient/).  
`NBTMatch` es un boolan y opcional (será lo mismo que falso si no se especifica).

### quitar forma

```zenscript
recipes.removeShaped(salida, entradas);
```

Este es más estricto en qué recetas eliminar y solo eliminará las recetas con forma que fabrica `salida` con `entrada`.

`output` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (e.g.[[iron,iron,iron],[iron,null,iron],[iron,null,iron]])

Además, `entradas` es opcional. Si se omite, la función hará lo mismo que `receta.remove`, aunque solo eliminará las recetas en forma.  
`entradas` pueden contener caracteres comodín: `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*>,<*>]]` referiría una receta cuyos objetos, siempre y cuando cada ranura esté llena, no importe.

### eliminar sin forma

```zenscript
recipes.removeShapeless(salida, entradas, comodín);
```

Esta es más estricta en qué recetas remover y solo eliminará las recetas sin forma que fabrica `salida` con `entrada`.  
Si `comodín` es verdadero, eliminará las recetas sin forma que fabriquen `salida` con `entrada` y otra, objetos no especificados (por ejemplo, puede desactivar todas las recetas sin forma que contengan, entre otras, Lapis como ingrediente).

`salida` es un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)  
`entradas` es un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)[]  
`comodín` es un boolan y opcional (será lo mismo que falso si no se especifica)

Además, `entradas` es opcional. Si se omite, la función hará lo mismo que `receta.remove`, aunque solo eliminará recetas sin forma.

### eliminar todo

Elimina todas las recetas de fabricación en el juego.  
Un poco asqueroso, ¿no crees?

```zenscript
recetas.removeAll();
```

### Eliminar por nombre

Como 1.12 introduce recetas de nombramiento, también puedes eliminar recetas una vez que conozcas su nombre. También puedes usar regex para eliminar múltiples recetas a la vez. Y no, si no sabes qué expresiones regulares son, ¡no lo explicaré aquí!

```zenscript
recipes.removeByRegex("name[1-9]");
recipes.removeByRecipeName("modid:recipename");
```

### Eliminar por mod

También puedes eliminar todas las recetas que fueron añadidas por el mod especificado.  
Necesitas proporcionar el modificador del mod como cadena.

```zenscript
recipes.removeByMod("modularmachinery");
```

## Añadir recetas

### Notas en 1.12

En 1.12, cada receta añadida requiere un identificador UNIQUE porque el equipo de forja lo quería de esa manera.  
Esto significa que todas las funciones añadidas ahora requieren un parámetro adicional `nombre` al inicio (que no se puede omitir).  
Esto significa `recipe.addShaped(output,input);` ahora es `receta. ddShaped(name,output,input);`  
Todas las demás funcionalidades permanecen iguales. Recuerda que `nombre` necesita ser único!  
`name` es una cadena.

### addShaped

```zenscript
//pre-1.12
recipes.addShaped(output,inputs,function,action);

//1.12
recipes.addShaped(name,output,inputs,function,action);
```

This creates a shaped recipe for `output` using `inputs` as Ingredients.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`name` is a string and needs to be unique but is also optional `output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (see below)  
`function` is a IRecipeFunction. Por favor, consulte [respetando la entrada del wiki](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) para más información sobre las funciones.  
`acción` es una recetaAcción. Consulte [respetando la entrada de la wiki](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) para obtener más información sobre las acciones.

`entradas` es un 2 Dimensional [IIngrediente](/Vanilla/Variable_Types/IIngredient/) Array.  
Así que la receta para Pantalones de Hierro sería escrita como `[[hierro,hierro],[hierro,hierro,hierro,[hierro],[hierro],[hierro, ull,iron]]`  
Si se trata de confundir, intente dividir los arreglos en una matriz por línea

```zenscript
val hierro = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

recetas.addShaped("CTLeggings", leggings,
 [[hierro,hierro,hierro],
  [hierro,null,hierro],
  [hierro,null,hierro]]);
```

### addShapedMirrored

```zenscript
//Normal pre 1.12 syntax
recipes.addShapedMirrored(output,inputs,function,action);

//Recomendada sintaxis 1.12
recipes.addShapedMirrored(name,output,inputs,function,action);
```

Igual que `addShaped`, solo que la receta creada de esta manera es una receta replicada.

### addShapeless

```zenscript
//Normal pre 1.12 syntax
recipes.addShapeless(output,inputs,function,action)

//Recommended 1.12 syntax
recipes.addShapeless(name,output,inputs,function,action)
```

This creates a shapeless recipe for `output` using `inputs` as Ingredients.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`nombre` is a string and needs to be unique `output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (e.g. [<minecraft:dye:1>,<minecraft:dye:2>])  
`función` es una IRecipeFunction. Consulte [respetando la entrada de la wiki](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) para obtener más información sobre las funciones. Esto es opcional.  
`acción` es una IRecipeAction. Consulte [respetando la entrada de la wiki](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) para obtener más información sobre las acciones. Esto es opcional.

### addHidden

```zenscript
addHiddenShapeless(String name, IItemStack output, IIngredient[] ingredientes, @Optional IRecipeFunction function, @Optional IRecipeAction action);
addHiddenShaped(String name, IItemStack output, IIngredient[][] ingredientes, @Optional IRecipeFunction function, @Optional IRecipeAction action, @Optional boolean mirrored);
```

Esto crea una receta sin forma para `salida` usando `entradas` como ingredientes que se llama `nombre`.  
Si se añade una función `` como tercer parámetro, también puede usar una función para determinar la salida.  
Si una `acción` función es añadida como parámetro, también puedes determinar, qué pasará, si el objeto está fabricado.  
Para la variante sin forma también puedes establecer si la receta es `replicada`, si se omite, no lo hará.

## Otra funcionalidad

### Obtén todas las recetas de fabricación registradas.

You can use this to get a [`List<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) that contains ALL registered crafting recipes.

    recetas.all;
    

### Consigue todas las recetas para un IIngrediente dado

You can use this to get a [`List<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) that contains ALL registered crafting recipes for the given [IIngredient](/Vanilla/Variable_Types/IIngredient/).

    //recipes.getRecipesFor(ingrediente IIngredient);
    recipes.getRecipesFor(<minecraft:iron_ingot>);
    

### Reemplaza todos los ingredientes del artículo por otro

Puedes usar esto para reemplazar todos los [ingredientes](/Vanilla/Variable_Types/IIngredient/) en una receta por otra, por ejemplo todos los palos con piedras. También acepta un tercer parámetro opcional que concuerda con las salidas de la receta. Si la receta

    //recipes.replaceAllOccurences(IIngredient toReplace, IIngredient replaceWith, @Optional IIngredient forOutput);
    
    //reemplaza cada palo con recetas
    de piedra. eplaceAllOccurences(<minecraft:stick>, <minecraft:stone>);
    
    //Explicitly usa cualquier salida, reemplaza lingotes de oro con recetas
    bloques de oro. eplaceAllOccurences(<ore:ingotGold>, <ore:blockGold>, <*>);
    
    
    //Solo reemplaza en las recetas con una diamond_sword como salida
    recetas. eplaceAllOcurences(<ore:gemDiamond>, <ore:blockDiamond>, <minecraft:diamond_sword>);
    
    
    //condiciones también funcionan -> sustituye en recetas para cualquier salida de recetas excepto
    recetas. eplaceAllOccurences(<ore:gunpowder>, <minecraft:tnt>, <*>. nly(function(item) {
        return !isNull(item) & !<minecraft:tnt>.matches(item);
    }));
    

### Fabricar

¡Incluso puedes fabricar desde dentro de `recetas`! La función devolverá un [ItemStack](/Vanilla/Items/IItemStack/) o `nulo` dependiendo de si se encuentra una receta o no.

    //recipes.craft(IItemStack[][]content);
    recipes.craft([[<minecraft:iron_ingot>]]);