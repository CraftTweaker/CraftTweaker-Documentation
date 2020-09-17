# JEI

CraftTweaker поставляется с поддержкой JustEnoughItems (JEI). Вы можете добавить или скрыть элементы или жидкости в JEI или добавить страницу Описания для них.

## Удалить

Вы можете просто удалить предмет из JEI или удалить его и все рецепты из стола крафта.

```zenscript
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);

//hide(ILiquidStack);
mods.jei.JEI.hide(<liquid:water>);
mods.jei.JEI. ide(<fluid:lava>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## Скрыть категории

Вы можете использовать это для скрытия всех категорий JEI (например, рецепты крафта, печи рецептов, рецепты машинного Х и ...).  
Он принимает категорию в качестве строки, вы можете получить все зарегистрированные категории, запустив `/ct jeiCategories` ingame.

```zenscript
//скрыть Категорию(категорию)
mods.jei.JEI.hideCategory("minecraft.smelting");
```

## Добавить элемент

Вы также можете добавить [IItemStack](/Vanilla/Items/IItemStack/) в JEI, чтобы добавить элементы, которые не были добавлены, или добавить предмет с NBT-Tag в JEI

```zenscript
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["What once was stone", "Is stone no more"]}));
```

## Добавить описание

Описание JEI - это дополнительная страница, показанная при поиске JEI рецепта/использования ингредиентов, содержащих информацию об этом компоненте.  
Вы можете добавить описание JEI к [IItemStack](/Vanilla/Items/IItemStack/), [IItemStack](/Vanilla/Items/IItemStack/)[], [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) или [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).

Если ваши строки слишком длинные, чтобы быть записаны на одну строку (или страницу), он автоматически создаст разрывы строки/страницы.  
Каждый параметр строки будет иметь по крайней мере одну строку и обернуть ее вокруг конца окна слишком долго.

```zenscript
//addDescription(IItemStack, строка... desc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack[] элемент, строка... desc);
mods.jei.JEI.addDescription([<minecraft:music_disc>, <minecraft:music_disc>],["Никогда","Гонна","Давайте","Вы","Вверх","Никогда","Гонна","Да","Вниз"]);

//addDescription(IOreDictEntry dict, string... desc);
mods.jei.JEI.addDescription(<ore:ingotIron>, "Вы можете использовать их для создания вещей", "", "Оружей","","","Да...","Этоже...");

//addDescription(ILiquidStack, строка... desc);
mods.jei.JEI.addDescription(<liquid:lava>, ["LAVA"]);
```

Параметр `` является varArg, это означает, что вы можете добавить одну строку[], содержащую все строки описания, или множество отдельных строк, что вы предпочитаете. Не смешивайте их!