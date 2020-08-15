# Orechid

Пакет Orechid используется для добавления или удаления генерирудной руды в/из цветов Botania Orechid.

## Звонок

Вы можете вызвать пакет Orechid с помощью `mods.botania.Orechid`

## Найти все зарегистрированные Рецепты

Вы можете найти все зарегистрированные рецепты Orechid, используя [`/ct botorechid`](/Mods/Modtweaker/Botania/Commands/).

## Добавление рецепта

Вы можете добавить рецепты, используя возвращенный [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) в качестве параметра вывода, или название указанного oreDictEntry в качестве строки.

```zenscript
//mods.botania.Orechid.addOre(IOreDictEntry oreDict, int weight);
mods.botania.Orechid.addOre(<ore:logWood>, 500);

//mods.botania.Orechid.addOre(String oreDict, int weight);
mods.botania.Orechid.addOre("logWood", 500);
```

## Удаление рецепта

Вы можете удалить рецепты, используя возвращенный [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) в качестве параметра вывода, или название указанного oreDictEntry в качестве строки.

```zenscript
//mods.botania.Orechid.removeOre(IOreDictEntry oreDict);
mods.botania.Orechid.removeOre(<ore:oreGold>);

//mods.botania.Orechid.removeOre(String oreDict);
mods.botania.Orechid.removeOre("oreGold");
```