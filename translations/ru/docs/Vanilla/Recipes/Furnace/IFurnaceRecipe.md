# IFurnaceRecipe

Реализация ICraftingRecipe, представляющая рецепт печи в ZenScript.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.recipes.IFurnaceRecipe`

## Методы/геттеры

### Преобразование в строку

```zenscript
rec.commandString;
rec.toCommandString();
```

### Другие геттеры

```zenscript
rec.input;
rec.output;
rec.xp;
```