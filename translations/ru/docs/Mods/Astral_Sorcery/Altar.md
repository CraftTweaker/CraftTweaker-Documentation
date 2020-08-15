# Создание Алтара

Вы можете добавлять и удалять рецепты ремесла из Алтара AS .

## Звонок

Вы можете вызвать пакет AltarRecipe, используя `mods.astralsorcery.Altar`.

## Удалить рецепты Алтаря

Эта функция удаляет рецепт с заданным расположением ресурса.  
Вы можете получить эти места, наведя курсор по рецепту в JEI или томе Astral при активном экране F3.  
Выводит предупреждение, если рецепт не существует.

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/lightwell");
```

<details><summary>Pre v1.10 handler</summary>

Эта функция удаляет первый рецепт, он обнаруживает, что возвращает предоставленный [IItemStack](../../../Vanilla/Items/IItemStack/) `output` и использует предоставленный уровень алтара.  
Если есть несколько рецептов, возвращающих предоставленный выход, вам нужно вызвать этот метод несколько раз!

<table>
    <tr><th>Уровень Алтаря</th><th>Название уровня</th></tr>
    <tr><td>0</td><td>Световой Стол для Крафта</td></tr>
    <tr><td>1</td><td>Алтарь Звёздного Света</td></tr>
    <tr><td>2</td><td>Небесный Алтарь</td></tr>
</table>

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(IItemStack, int altarLevel);
mods.astralsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```

</details>

## Добавить рецепты Алтаря

Поскольку v1.10 все рецепты требуют расположения ресурса в качестве первого параметра.  
В отличие от названий ваний, они не являются обязательными, и вы столкнетесь с ошибками, если не указате. Если вы хотите заменить существующий рецепт, вы можете просто добавить новый рецепт с той же точкой.  
Вы можете получить эти места, наведя курсор по рецепту в JEI или томе Astral при активном экране F3.

Все методы добавления рецепта требуют этих параметров:  
строка `рецепта`,  
[IItemStack](/Vanilla/Items/IItemStack/) `вывод`,  
int `starlightНеобходимый`,  
int `craftingTickTickTime`,  
[Ингредиент](/Vanilla/Variable_Types/IIngredient/)[] `входов`

`Входящий параметр` является, в отличие от рецептов верстака только 1 массив измерений.  
Вы можете использовать [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) или `null` в качестве членов массива

Эти рецепты не могут быть бесформенными!

### Обнаружение

`входов` длина *должна быть* 9

`inputs` Order:  
![Порядок ввода](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```zenscript
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, 200, [
            <minecraft:grass>, null, <ore:treeLeaves>,
            null, <minecraft:grass>, null,
            <liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```

### Сооружение

Добавляет рецепт к верстаку Звёздного Света (T2)

`входов` длина *должна быть* 13

`inputs` Order:  
![Порядок ввода](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```zenscript
mods.astralsorcery.Altar. ddAttunementAltarRecipe("Mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
            null, null, null,
            <ore:treeLeaves> <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
            null, <liquid:astralsorcery.liquidstarlight>, null,
            <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```

### Созвездие

Добавляет рецепт в Алтарь Небесный (T3)

`входов` длина *должна быть* 21

`inputs` Order:  
![Порядок ввода](/Mods/Astral_Sorcery/Assets/guialtar3.png)

```zenscript
mods.astralsorcery.Altar. ddConstellationAltarRecipe("mypackname:shaped/internal/altar/thisisveryexpensive", <astralsorcery:itemcraftingcomponent:2>, 2000, 10, [
            <ore:blockMarble>, <astralsorcery:blocklens>, <ore:blockMarble>,
            <ore:blockMarble>, <astralsorcery:itemcraftingcomponent:2>, <ore:blockMarble>,
            <ore:blockMarble>, <minecraft:nether_star>, <ore:blockMarble>,
            null, null, <liquid:astralsorcery.liquidstarlight>, <liquid:astralsorcery.liquidstarlight>,
            <ore:blockMarble>, <ore:blockMarble>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <ore:blockMarble>, <ore:blockMarble>]);
```

### Симптом

Добавляет рецепт в Алтарь Симптомов (T4)

`Созвездие` Созвездие как нелокализованная строка. Это необязательный параметр.

`входов` длина *должна быть* 25 или выше. Элементы с индексом 25 или выше будут считаться "внешними элементами", которые должны быть помещены на реле вокруг алтаря.

`inputs` Order:  
![Порядок ввода](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```zenscript
//mods.astralsorcery.Altar.addTraitAltarRecipe(string recipeLocation, IItemStack output, int starlight, int craftTickTime, Igredient[] inputs, @optional String iRequiredConstellationFocusName);

mods.astralsorcery.Altar. ddTraitAltarRecipe("Mypackname:shaped/internal/altar/seemsalotforjusttnt", <minecraft:tnt>, 4500, 100, [
    <liquid:lava>, <liquid:lava>, <liquid:lava>,<liquid:lava>, <minecraft:gunpowder>, 
    <liquid:lava>, <liquid:lava>, <liquid:lava>, <liquid:lava>,null, 
    null, null,<ore:blockMarble>, <ore:blockMarble>,
    <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>,<ore:blockMarble>, 
    <ore:blockMarble>,<minecraft:redstone>, <minecraft:redstone>,<minecraft:redstone>, <minecraft:redstone>,
    //Внешние элементы, индексы 25+
    <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>
],
"астральорцей". onstellation.evorsio");
```