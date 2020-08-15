# Receta ICraftingRep

Una receta de ICraftingRecipe es una receta de la mesa de elaboración como la ve ZS.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.recipes.ICraftingRecipe`

## ZenMethods/Getters

### Obtener ingredientes

Devuelve un [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] o un [IIngredient](/Vanilla/Variable_Types/IIngredient/)[][]

```zenscript
rec.ingredients1D
rec.ingredients2D
```

### Get standart output

Devuelve el ouptut como [ItemStack](/Vanilla/Items/IItemStack/). ¡Cuidado, puede ser nulo!

```zenscript
rec.output
```

### Comprobar condiciones

Cada uno de estos devuelve un booleano

```zenscript
rec.hasTransformers;
rec.hasRecipeAction;
rec.hasRecipeFunction;
rec.hidden;
rec.shaped;
```

### dominio de recursos

Básicamente, el modificador del mod que añadió la receta.

```zenscript
rec.resourceDomain;
rec.fullResourceDomain;
```

### Ingredientes

Devuelve la lista de ingredientes como [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[] o [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[] respectivamente.

```zenscript
rec.ingredients1D;
rec.ingredients2D;
```

### Salida

La salida del [ItemStack](/Vanilla/Items/IItemStack/) de la receta.

```zenscript
rec.output;
```

### A la cadena

```zenscript
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```