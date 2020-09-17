# Orechid

Orechid 包用于添加或从Botania Orechid Flowers中移除生成的矿石。

## 导入包

您可以使用 `mods.botania.Orechid 调用 Orechid 包`

## 查找所有注册的配方

您可以使用 [`/ct botorechid`](/Mods/Modtweaker/Botania/Commands/) 找到所有注册的 Orechid 配方。

## 添加配方

您可以使用返回的 [IOreDictEnter](/Vanilla/OreDict/IOreDictEntry/) 作为输出参数添加配方，也可以使用上述oreDictEnter 作为字符串的名称。

```zenscript
//mods.botania.Orechid.addOre(IoreDictEntry oredict, int digest);
mods.botania.Orechid.addOre(<ore:logWood>, 500);

/mods.botania.Orechid.addOre(String oredDict, int 权重);
mods.botania.Orechid.addOre("logod", 500);
```

## 删除配方

您可以使用返回的 [IOreDictEnter](/Vanilla/OreDict/IOreDictEntry/) 作为输出参数移除配方，也可以删除上述oredDictEnter 作为字符串的名称。

```zenscript
//mods.botania.Orechid.removeOre(IOreDictEntry oredict);
mods.botania.Orechid.removeOre(<ore:oreGold>);

//mods.botania.Orechid.removeOre(String oreDict);
mods.botania.Orechid.rechiveOre("oreGold");
```