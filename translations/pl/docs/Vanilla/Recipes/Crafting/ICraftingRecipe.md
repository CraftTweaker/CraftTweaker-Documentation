# Przepis na ICraftinga

Przepis ICraftingReceptura to przepis na stół rzemieślniczy sposób, w jaki ZS go widzi.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.recipes.ICraftingReceppe`

## ZenMethods/Getters

### Pobierz składniki

Zwraca [Składnik](/Vanilla/Variable_Types/IIngredient/)[] lub [Składnik](/Vanilla/Variable_Types/IIngredient/)[][]

```zenscript
rec.ingredients1D
rec.ingredients2D
```

### Get standart output

Zwraca tut jako [IItemStack](/Vanilla/Items/IItemStack/). Ostrożnie, może być puste!

```zenscript
rekord wyjściowy
```

### Sprawdź warunki

Każdy z nich zwraca wartość logiczną

```zenscript
rec.hasTransformers,
rec.hasRecipeAation;
rec.hasRecipeFunation;
rec.hidden;
rec.shaped;
```

### Domena zasobu

Zasadniczo modid modelu, który dodał przepis.

```zenscript
rec.resourceDomain;
rec.fullResourceDomain;
```

### Składniki

Zwraca listę składników jako [Składnik](/Vanilla/Variable_Types/IIngredient/)\[] lub [Składnik](/Vanilla/Variable_Types/IIngredient/)\[]\[] odpowiednio.

```zenscript
rec.ingredients1D;
rec.ingredients2D;
```

### Wyjście

[IItemStack](/Vanilla/Items/IItemStack/) wyjście przepisu.

```zenscript
regener.wyjście;
```

### Do ciągu

```zenscript
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```