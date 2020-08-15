# Orechid Ignem

OrechidIgnem 包用于添加或从Botania Orechid Ignem Flowers中移除生成的矿石。

## 导入包

您可以使用 `mods.botania.OrechidIgnem 调用OrechidIgnem 包`

## 添加配方

您可以使用返回的 [IOreDictEnter](/Vanilla/OreDict/IOreDictEntry/) 作为输出参数添加配方，也可以使用上述oreDictEnter 作为字符串的名称。

```zenscript
//mods.botania.OrechidIgnem.addOre(IOreDictEntry oredict, int 权重)；
mods.botania.OrechidIgnem.addOre(<ore:logWood>, 500)；

/mods.botania.OrechidIgnem.addOre(String oreDict, int 权重)；
mods.botania.OrechidIgnem.addOre(“logs.wood”, 500)；
```

## 删除配方

您可以使用返回的 [IOreDictEnter](/Vanilla/OreDict/IOreDictEntry/) 作为输出参数移除配方，也可以删除上述oredDictEnter 作为字符串的名称。

```zenscript
//mods.botania.OrechidIgnem.removeOre(IOreDictEntry oredict);
mods.botania.OrechidIgnem.removeOre(<ore:oreGold>);

//mods.botania.OrechidIgnem.removeOre(String oreDict);
mods.botania.OrechidIgnem.removeOre("oreGold");
```