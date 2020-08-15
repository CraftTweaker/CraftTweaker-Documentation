# Orechid Ignem

Пакет OrechidIgnem используется для добавления или удаления генерируемых руд в/из Botania Orechid Ignem Flowers.

## Звонок

Вы можете вызвать пакет OrechidIgnem с помощью `mods.botania.OrechidIgnem`

## Добавление рецепта

Вы можете добавить рецепты, используя возвращенный [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) в качестве параметра вывода, или название указанного oreDictEntry в качестве строки.

```zenscript
//mods.botania.OrechidIgnem.addOre(IOreDictEntry oreDict, int weight);
mods.botania.OrechidIgnem.addOre(<ore:logWood>, 500);

//mods.botania.OrechidIgnem.addOaddre(String oreDict, int weight);
mods.botania.OrechidIgnem.addOre("logWood", 500);
```

## Удаление рецепта

Вы можете удалить рецепты, используя возвращенный [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) в качестве параметра вывода, или название указанного oreDictEntry в качестве строки.

```zenscript
//mods.botania.OrechidIgnem.removeOre(IOreDictEntry oreDict);
mods.botania.OrechidIgnem.removeOre(<ore:oreGold>);

//mods.botania.OrechidIgnem.removeOre(String oreDict);
mods.botania.OrechidIgnem.removeOre("oreGold");
```