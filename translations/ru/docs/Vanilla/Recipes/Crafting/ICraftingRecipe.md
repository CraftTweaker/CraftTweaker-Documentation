# Рецепт ICrafting

ICraftingRecipe-это рецепт крафта так, как его видит ZS.

## Импортирование класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.recipes.ICraftingRecipe`

## ZenMethods/Геттеры

### Получить ингредиенты

Вернет либо [IIngredient](/Vanilla/Variable_Types/IIngredient/)[], либо [IIngredient](/Vanilla/Variable_Types/IIngredient/)[]

```zenscript
rec.ingredients1D
rec.ingredients2D
```

### Получить стандартный вывод

Возвращает вывод в виде [IItemStack](/Vanilla/Items/IItemStack/). Осторожно, может быть пустым!

```zenscript
rec.output
```

### Проверить условия

Все нижеперечисленное возвращает boolean

```zenscript
rec.hasTransformers;
rec.hasRecipeAction;
rec.hasRecipeFunction;
rec.hidden;
rec.shaped;
```

### resourceDomain

Это просто modid мода, который добавил рецепт.

```zenscript
rec.resourceDomain;
rec.fullResourceDomain;
```

### Ингредиенты

Возвращает список ингредиентов как [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[] или [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[] соответственно.

```zenscript
rec.ingredients1D;
rec.ingredients2D;
```

### Вывод

Вывод рецепта от [IItemStack](/Vanilla/Items/IItemStack/).

```zenscript
rec.output;
```

### Преобразование в строку

```zenscript
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```