# Рецепты

## Типы рецептов

Существует несколько типов рецептов:

### Рецепты Формы

Формированные Рецепты - это рецепты, в которых имеет значение, в которые входит предмет. Например, Вы не можете просто разместить 7 железных слитков ни в коем случае создавать железные штаны. Таким образом, эта форма имеет форму рецепта.

### Зеркальный Рецепт

Зеркальные Рецепты – это рецепты в форме формы. Разница только в том, что рецепт может быть отображен вдоль горизонтальных или вертикальных топоров.

### Рецепты без форм

Рецепты без форм - это рецепты, где только те предметы, которые вы поместите в сетку ремесла, в то время как форма не имеет значения. Например, синяя и желтая краска создадут зеленый краситель. Этот рецепт не заботится о том, где вы поставили предмет.

## Удалить рецепты

Есть несколько способов удаления рецептов.

### удалить

```zenscript
recipes.remove(Выход, NBTMatch);
```

Это создаст рецепты таблиц для данного `результата`.  
Если `NBTmatch` истинно, он удалит только рецепты, которые приводят к элементам с теми же NTB-данными, что и предоставленные

`Вывод` является [Ingredient](/Vanilla/Variable_Types/IIngredient/).  
`NBTMatch` является бойлером и необязательным (будет то же самое, что и false, если не указано).

### удалить форму

```zenscript
recipes.removeShaped(выход, вход);
```

Это более строгий, на котором будут удаляться рецепты и будут удалять только форменные рецепты, которые создадут `вывод` при `вводе`.

`выводит` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`входами` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (например, .[[желен,железо,железо],[железо,null,железо],[железо,железо],[железо,null,iron]])

Более того, `входов` является необязательным. Если она пропущена, функция будет выполнять то же самое, что и `рецепт.удаления`, но она удалит только формальные рецепты.  
`входов` может содержать подстановочные символы: `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*>,<*>]]` ссылается на рецепт, предметы которого до тех пор, пока каждый слот заполнен, не имейте значения.

### удалить без формы

```zenscript
recipes.removeShapeless(Выход, Вход, Подстановочная карточка);
```

This one is more strict on which recipes to remove and will only remove shapeless recipes that craft `output` with `input`.  
If `wildcard` is true, it will remove shapeless recipes that craft `output` with `input` and other, non-specified items (for example you could disable all shapeless recipe that contain, among others, Lapis as ingredient).

`вывод` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`входами` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)[]  
`wildcard` является буланом и необязательным (будет то же самое, что ложно, если не указано)

Более того, `входов` является необязательным. Если эта функция пропущена, то она будет выполнять то же самое, что и `рецепт`, но она удалит только бесформенные рецепты.

### удалить все

Удаляет все рецепты крафта в игре.  
Некоторое завышенное убийство, не думаете?

```zenscript
recipes.removeAll();
```

### Удалить по имени

Как 1.12 вводит именные рецепты, вы также можете удалить рецепты после того, как вы узнаете их имя. Вы также можете использовать регулярные выражения для удаления нескольких рецептов одновременно. Нет, если вы не знаете, какие регулярные выражения, я не объясню это здесь!

```zenscript
recipes.removeByRegex("name[1-9]");
рецептов.removeByRecipeName("modid:recipename");
```

### Удалить модом

Вы также можете удалить все рецепты, добавленные модом.  
Вам нужно предоставить мод как строку.

```zenscript
recipes.removeByMod("modularmachinery");
```

## Добавить рецепты

### Примечания 1.12

В 1.12 каждому добавленному рецепту требуется UNIQUE идентификатор, потому что dev команда хотела, чтобы это было так.  
Это означает, что все добавляемые функции теперь требуют дополнительного параметра `имени` в начале (который не может быть опущен).  
Это значит `recipe.addShaped(output,input);` теперь `рецепт. ddShaped(name,output,input);`  
Все другие функции остаются неизменными. Помните, что `имя` должно быть уникальным!  
`имя` является строкой.

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

`имя` является строкой и должно быть уникальным, но также является дополнительным `выходным` является [IItemStack](/Vanilla/Items/IItemStack/)  
`входами` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (см. ниже)  
`функция` является IRecipeFunction. Пожалуйста, обратитесь к [уважая wiki запись](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) для получения дополнительной информации о функциях.  
`действие` - это IRecipeAction. Пожалуйста, обратитесь к [уважения к вики](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) для получения дополнительной информации о действиях.

`входов` является 2 измерений [IIngredient](/Vanilla/Variable_Types/IIngredient/) массив.  
Таким образом, рецепт железных поножей будет написан как `[[железо,железо,железо],[железо,нуль,железо],[железо, ull,iron]]`  
Если это запутает, попробуйте разбить массивы на один массив на одну строку

```zenscript
val iron = <minecraft:iron_ingot>;
штаны уборочных = <minecraft:iron_leggings>;

рецепты.addShaped("CTLeggings", штаны,
 [[железо,железо,железо],
  [железо,null,железо],
  [железо,null,iron]]);
```

### addShapedMirrored

```zenscript
//Обычный синтаксис pre 1.12
recipes.addShapedMirrored(output,inputs,function,action);

//Рекомендуемый синтаксис 1.12
recipes.addShapedMirrored(name,output,inputs,function,action);
```

То же, что и `с добавленной Формой`, только что созданный таким образом рецепт является зеркальным рецептом.

### addShapeless

```zenscript
//Обычный синтаксис pre 1.12
recipes.addShapeless(output,inputs,function,action)

//Рекомендуемый синтаксис 1.12
recipes.addShapeless(имя, вывод, вход, функция, действие)
```

This creates a shapeless recipe for `output` using `inputs` as Ingredients.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`имя` является строкой и должен быть уникальным `output` является [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (например [<minecraft:dye:1>,<minecraft:dye:2>])  
`function` является IRecipeFunction. Пожалуйста, обратитесь к [уважая Wiki запись](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) для получения дополнительной информации о функциях. Это опционально.  
`действие` является IRecipeAction. Пожалуйста, обратитесь к [уважения к вики](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) для получения дополнительной информации о действиях. Это опционально.

### addHidden

```zenscript
addHiddenShapeless(String name, IItemStack output, IIngredient[] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
addHiddenShaped(String name, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action, @Optional boolean mirrored);
```

This creates a shapeless recipe for `output` using `inputs` as Ingredients that is named `name`.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.  
For the shapeless variant you can also set if the recipe is `mirrored`, if omitted, it will not.

## Прочая функциональность

### Получите все зарегистрированные рецепты крафта.

Вы можете использовать это для получения [`Списка<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) , содержащего ВСЕ зарегистрированные рецепты крафта.

    рецепты.все;
    

### Получить все рецепты для данного IIngredient

Вы можете использовать это для получения [списка`<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) , содержащий ВСЕ зарегистрированные рецепты создания для данного [IIngredient](/Vanilla/Variable_Types/IIngredient/).

    //recipes.getRecipesFor(IIngredient ingredient);
    recipes.getRecipesFor(<minecraft:iron_ingot>);
    

### Заменить все ингредиенты предмета на другое

Вы можете использовать это для замены всех [ингредиентов](/Vanilla/Variable_Types/IIngredient/) в рецепте на другой, например, всех палок с камнями. Он также принимает опциональный третий параметр, который совпадает с результатами рецепта. Если рецепт

    //recipes.replaceAllOccurences(IIngredient toReplace IIngredient replaceWith, @Optional IIngredient forOutput);
    
    //заменяет каждую палку на каменные
    рецепты. eplaceAllOccurences(<minecraft:stick>, <minecraft:stone>);
    
    //Ясно использует любой продукт, заменяет золотые слитки рецептами
    блоков. eplaceAllOccurences(<ore:ingotGold>, <ore:blockGold>, <*>);
    
    
    //Заменяет только алмаз_меч в выводе
    рецептов. eplaceAllOccurences(<ore:gemDiamond>, <ore:blockDiamond>, <minecraft:diamond_sword>);
    
    
    //условия работы также -> заменяет рецепты на любой вывод рецепта, кроме tnt
    рецептов. eplaceAllOccurences(<ore:gunpowder>, <minecraft:tnt>, <*>. nly(function(item) {
        return !isNull(item) & !<minecraft:tnt>.matches(item);
    }));
    

### Ремесло

Вы даже можете изготовить из `рецептов`! Функция возвращает [IItemStack](/Vanilla/Items/IItemStack/) или `null` в зависимости от того, найден ли рецепт или нет.

    //recipes.craft(IItemStack[][]content);
    recipes.craft([[<minecraft:iron_ingot>]]);