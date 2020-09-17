# Апотекарь Петра

Пакет апотекари используется для добавления или удаления рецептов апофекарии Ботании Петаль Ботании.

## Звонок

Вы можете вызвать пакет Apothecary с помощью `mods.botania.Apothecary`

## Добавление рецепта

Вы можете добавить рецепты, используя возвращенный [IItemStack](/Vanilla/Items/IItemStack/) в качестве параметра вывода, или название цветка ботании как строки. название строки работает только для ботанических цветов.  
Помните, что одна вещь:  
Апофекария **в жестком коде принимает только домашних животных**, так что пока вы можете добавлять рецепты с любыми ингредиентами, вы должны использовать только предметы, которые можно бросать в апотекарий.

```zenscript
//mods.botania.Apothecary.addRecipe(IItemStack, IIngredient[] input);
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>]);

//моды. otania.Apothecary.addRecipe(String output, IIngredient[] input);
mods.botania.Apothecary.addRecipe("daybloom", [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>, <ore:petalRed>]);
```

## Удаление рецепта

Вы можете удалить рецепты, используя возвращенный [IItemStack](/Vanilla/Items/IItemStack/) в качестве выходного параметра, или имя цветка ботании в качестве строки. название строки работает только для ботанических цветов.

```zenscript
//mods.botania.Apothecary.removeRecipe(IItemStack);
mods.botania.Apothecary.removeRecipe(<minecraft:melon>);

//mods.botania.Apothecary.removeRecipe(String output);
mods.botania.Apothecary.removeRecipe("daybloom");
```