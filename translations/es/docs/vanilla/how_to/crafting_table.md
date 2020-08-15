# Mesa de fabricación

## Tipos de receta

Hay tres tipos de recetas para crear tablas:

- **Sin forma:** Una receta sin forma es una receta donde la posición de los objetos de entrada en la cuadrícula de fabricación no importa.
- **Conformado:** Una receta en forma es una receta donde la posición de los objetos debe ser exacta.
- **Mirrorizado en forma** Una receta replicada es como recetas en forma pero refleja la receta a lo largo de los ejes horizontales o verticales.

## Añadir una receta

_¡Al añadir una receta, asegúrate de que tus nombres de recetas sean únicos!_

### Añadiendo recetas sin forma

`craftingTable.addShapeless(nombre de receta, salida, ingredientes, función receta);`

- `recipeName` &lt;cadena>
- `salida` <[ItemStack](/vanilla/api/items/IItemStack)>
- `ingredientes` <[IIngrediente](/vanilla/api/items/IIngredient)[]>
- `recipeFunction` (Opcional) <[Receta FunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

Añade una receta [sin forma](#recipe-types) a la tabla de fabricación. Como [las recetas](#recipe-types) sin forma ignoran la posición de los objetos de entrada, el orden de los artículos al crear la receta tampoco importa.

[Las recetas](#recipe-types) sin forma pueden tener hasta 9 entradas, pero aquellos con 4 o menos entradas también pueden ser fabricados en la cuadrícula de inventario 2x2.

Las recetas de la tabla de fabricación también pueden producir más de 1 cantidad del elemento de salida. Esto se puede lograr utilizando el [operador de multiplicación de ItemStack](/vanilla/api/items/IItemStack/#mul) en el elemento de salida.

```zenscript
crear tabla. ddShapeless("shapeless_example_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// Una receta sin forma puede tener hasta 9 entradas
// Esto también demuestra que se puede usar más de una salida. En este ejemplo, se producirá 8 césped.
craftingTable.addShapeless("shapeless_example_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_Vea [Utilizando funciones de recetas](#using-recipe-functions) para ver ejemplos sobre cómo usar funciones de recetas._

### Añadiendo recetas moldeadas y moldeadas

`craftingTable.addShaped(nombre de receta, salida, ingredientes, función receta);`

`craftingTable.addShapedMirrored(recipeName, salida, ingredientes, recetaFunction);`

- `recipeName` &lt;cadena>
- `salida` <[ItemStack](/vanilla/api/items/IItemStack)>
- `ingredientes` <[IIngrediente](/vanilla/api/items/IIngredient)[][]>
- `recetaFunction` (Opcional) <[Receta Funcionaria](/vanilla/api/recipe/RecipeFunctionMatrix)>

Añade una receta [en forma](#recipe-types) (o [replicada](#recipe-types), dependiendo de la función) a la tabla de fabricación. El orden de los objetos al crear la receta dicta la posición de cada objeto en la cuadrícula de fabricación.

En su lugar, hacer de la receta una receta [replicada](#recipe-types) permite más flexibilidad al jugador al añadir los objetos a la cuadrícula de fabricación.

Las recetas [en forma](#recipe-types) y [replicadas](#recipe-types) pueden ser hechas para funcionar en una cuadrícula de fabricación de 2x2 (inventario) o 3x3.

Las recetas de la tabla de fabricación también pueden producir más de 1 cantidad del elemento de salida. Esto se puede lograr utilizando el [operador de multiplicación de ItemStack](/vanilla/api/items/IItemStack/#mul) en el elemento de salida.

```zenscript
// Añadir una receta en forma
craftingTable. ddShaped("shaped_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// Añadir una receta en forma de 2x2 (esto también se puede hacer como replicado)
de craftingTable. ddShaped("shaped_example_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Añadiendo una receta replicada
CraftingTable. ddShapedMirrored("shaped_mirror_example_1", <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_Vea [Utilizando funciones de recetas](#using-recipe-functions) para ver ejemplos sobre cómo usar funciones de recetas._

## Usar funciones de receta

Una función de receta permite una salida determinada programáticamente. Esto puede ser especialmente útil cuando usted necesita parte de la información del elemento de entrada, como el daño del artículo u otros datos NBT.

_Dado que las recetas moldeadas y moldeadas son similares, los ejemplos sólo incluirán recetas de forma. Puedes tratar cualquier ejemplo usando `addShaped` como el mismo que usando `addShapedMirrored`._

### Utilizando RecetpeFunctionArray en una receta sin Forma

`recipeFunction` <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(usualOut como ItemStack, entradas como ItemStack[]) =>{};`

- `usualOut` <[ItemStack](/vanilla/api/items/IItemStack)>
- `entradas` <[ItemStack](/vanilla/api/items/IItemStack)[]> Arreglo de entradas ordenado lo mismo que se define en la receta original

```zenscript
importar crafttweaker.api.item.IItemStack;

craftingTable. ddShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (usualOut como ItemStack, entradas como IItemStack[]) => {
    // Comprueba si <item:minecraft:dirt> tiene un nombre de "bloque de diamante totalmente real"
    if (entradas[0]. isplayName == "totally real diamond block") {
        // Devuelve <item:minecraft:diamond> * 9
        return usualOut;
    }

    // De lo contrario, return <item:minecraft:clay> con un nombre mostrado de "Diamond"
    return <item:minecraft:clay>. etDisplayName("Diamante");
});
```

### Utilizando la receta de RecipeFunctionMath en una receta moldeada

`recetaFunction` <[RecipeFunctionMprise](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(usualOut como IItemStack, entradas como ItemStack[][]) =>{};`

- `usualOut` <[ItemStack](/vanilla/api/items/IItemStack)>
- `entradas` <[ItemStack](/vanilla/api/items/IItemStack)[][]> Array de entradas ordenado lo mismo que se define en la receta original. Una entrada se puede encontrar definiendo la fila, luego la columna (`entradas[0][1]` para obtener el elemento en la primera fila, segunda columna).

```zenscript
importar crafttweaker.api.item.IItemStack;

craftingTable. ddShaped("shapeed_func_example_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (usualOut como IItemStack, entradas como ItemStack[][]) => {
        var counter = 0;
        // Comprueba si todos <item:minecraft:clay_ball> tiene un nombre mostrado de "Diamond"
        para la fila en las entradas {
            para recetaItem en la fila {
                if (<item:minecraft:clay_ball>. atches(recipeItem) && receta. isplayName == "Diamond") {
                    // Si el objeto de la receta es <item:minecraft:clay_ball> y tiene un nombre de "Diamond" incrementa el contador
                    contra++;
                }
            }
        }

        // Si tenemos 8 <item:minecraft:clay_ball> con el nombre de "Diamond"
        if (counter == 8) {
            if (inputs[1][1]. isplayName == "Diamante especial") {
                // Si <item:minecraft:diamond> tiene un nombre mostrado de "Diamante especial"
                // Devuelve 2 <item:minecraft:diamond_block>
                return usualOut * 2;
            } else {
                // Devuelve <item:minecraft:diamond_block>
                return usualOut;
            }
        }

        // De lo contrario, return <item:minecraft:clay> with a display name of "Diamond Block"
        return <item:minecraft:clay>. etDisplayName("Bloque de Diamantes");
});
```

### Uso avanzado

#### Funciones como variable

Las funciones de recetas pueden asignarse a una variable que le permite ulitizar la misma función para múltiples recetas fácilmente.

Sin forma:

```zenscript
importar crafttweaker.api.item. Pila de elemento;

var exampleShapelessRecipeVarFunction as function(usualOut as ItemStack, entradas como IItemStack[]) como ItemStack = (usualExchange, inputs) => {
    if(entradas[0]. isplayName == "totally real diamond block" ){
        return usualOut;
    }

    return <item:minecraft:clay>. etDisplayName("Diamond");
};

// ingresa[0] en exampleShapelessRecipeVarFunction será <item:minecraft:dirt>
craftingTable. ddShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], exampleShapelessRecipeVarFunction);

// entradas[0] en exampleShapelessRecipeVarFunction será <item:minecraft:cobblestone>
CraftingTable. ddShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], exampleShapelessRecipeVarFunction);
```

Conformado/Construido:

```zenscript
importar crafttweaker.api.item. Pila de elemento;

var exampleShapedRecipeVarFunction as function(usualOut as ItemStack, entradas como IItemStack[][]) como ItemStack = (usualOut como IItemStack, entradas como IItemStack[][]) => {
    var counter = 0;
    // Comprueba si todo <item:minecraft:clay_ball> tiene un nombre mostrado de "Diamond"
    para la fila en las entradas {
        para recetaItem en la fila {
            if (<item:minecraft:clay_ball>. atches(recipeItem) && receta. isplayName == "Diamond") {
                // Si el objeto de la receta es <item:minecraft:clay_ball> y tiene un nombre de "Diamond" incrementa el contador
                contra++;
            }
        }
    }

    // Si tenemos 8 <item:minecraft:clay_ball> con el nombre de "Diamond"
    if (counter == 8) {
        if (entradas[1][1]. isplayName == "Diamante especial") {
            // Si <item:minecraft:diamond> tiene un nombre mostrado de "Diamante especial"
            // Devuelve 2 <item:minecraft:diamond_block>
            return usualOut * 2;
        } else {
            // Devuelve <item:minecraft:diamond_block>
            return usualOut;
        }
    }

    // De lo contrario, return <item:minecraft:clay> with a display name of "Diamond Block"
    return <item:minecraft:clay>. etDisplayName("Bloque de Diamantes");
};

CraftingTable. ddShaped("shapeed_func_example_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);

mesa de fabricación. ddShaped("shapeed_func_example_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);
```

## Eliminando una receta

### Eliminar una receta por nombre

`craftingTable.removeByName(recipeName);`

- `recipeName` &lt;cadena>

Elimina la receta que coincide con el nombre proporcionado.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Quitar recetas por Salida

`craftingTable.removeRecipe(salida);`

- `salida` <[ItemStack](/vanilla/api/items/IItemStack)>

Elimina todas las recetas donde el resultado de la salida es el [ItemStack](/vanilla/api/items/IItemStack) proporcionado.

```zenscript
CraftingTable.removeRecipe(<item:minecraft:stick>);
```

### Eliminar recetas por ID de Mod

`craftingTable.removeByModid(modId);`

- `modId` &lt;cadena>

Elimina todas las recetas añadidas por el mod proporcionado.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Excluir recetas de eliminación de ID de Mod

`craftingTable.removeByModid(modId, exclusionFilter);`

- `modId` &lt;cadena>
- `exclusionFiltro` <<un href="/vanilla/api/recipe/RecipeFilter">Receta Filtro</a>>
  - `name` &lt;string> El nombre de la receta actual está siendo revisado. _El id del mod no se incluirá_

Elimina todas las recetas añadidas por el mod proporcionado. Las recetas se excluyen si el resultado del filtro de exclusión vuelve verdadero para el nombre de la receta.

```zenscript
craftingTable.removeByModid("minecraft", (nombre) => {
    // Comprueba si el nombre de la receta coincide con "minecraft:red_bed_from_white_bed"
    return name == "red_bed_from_white_bed";
});
```

También se pueden excluir múltiples recetas. Una forma de hacerlo es la siguiente:

```zenscript
// Un array de nombres de recetas como strings
var minecraftExclusions como string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

crear tabla. emoveByModid("minecraft", (name) => {
    return name in minecraftExclusions;
});
```

### Eliminar recetas por Regex

`craftingTable.removeByRegex(regex);`

- `regex` &lt;cadena>

Elimina todas las recetas que ese nombre coincide con la cadena regex.

```zenscript
// Elimina recetas como "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", y "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Eliminar todas las recetas

`craftingTable.removeAll();`

Elimina todas las recetas de mesa de fabricación.

```zenscript
craftingTable.removeAll();
```
