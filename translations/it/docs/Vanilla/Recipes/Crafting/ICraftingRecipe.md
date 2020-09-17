# Ricetta

Una ricetta ICraftingRecipe è una ricetta da tavolo artigianale nel modo in cui ZS la vede.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.recipes.ICraftingRecipe`

## ZenMethods/Getters

### Ottieni Ingredienti

Ritorna un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] o un [IIngrediente](/Vanilla/Variable_Types/IIngredient/)[][]

```zenscript
rec.ingredients1D
rec.ingredients2D
```

### Get standart output

Restituisce l'ouptut come [IItemStack](/Vanilla/Items/IItemStack/). Attento, può essere nullo!

```zenscript
rec.output
```

### Controlla le condizioni

Ognuno di questi restituisce un booleano

```zenscript
rec.hasTransformers;
rec.hasRecipeAction;
rec.hasRecipeFunction;
rec.hidden;
rec.shaped;
```

### resourceDomain

Fondamentalmente, il modo della mod che ha aggiunto la ricetta.

```zenscript
rec.resourceDomain;
rec.fullResourceDomain;
```

### Ingredienti

Restituisce la lista degli ingredienti come [IIngrediente](/Vanilla/Variable_Types/IIngredient/)\[] o [IIngrediente](/Vanilla/Variable_Types/IIngredient/)\[]\[] rispettivamente.

```zenscript
rec.ingredienti1D;
rec.ingredients2D;
```

### Output

L'output [IItemStack](/Vanilla/Items/IItemStack/) della ricetta.

```zenscript
rec.output;
```

### A Stringa

```zenscript
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```