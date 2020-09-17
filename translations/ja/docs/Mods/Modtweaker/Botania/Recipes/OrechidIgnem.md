# Orechid Ignem

OrechidIgnemパッケージは、BotaniaOrechid Ignemフラワーへ/から生成された鉱石を追加または削除するために使用されます。

## 発信中

`mods.botania.OrechidIgnem を使用して OrechidIgnem パッケージを呼び出すことができます`

## レシピの追加

出力パラメータとして [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) を使用してレシピを追加するか、または oreDictEntry の名前を文字列として追加できます。

```zenscript
//mods.botania.OrechidIgnem.addOre(IOreDictEntry oreDict, int weight);
mods.botania.OrechidIgnem.addOre(<ore:logWood>, 500);

//mods.botania.OrechidIgnem.addOre(String oreDict, oreDict, weight);
mods.botania.OrechidIgnem.addOre("logWood", 500);
```

## レシピの削除

出力パラメータとして [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) を使用してレシピを削除するか、文字列として oreDictEntry の名前を使用します。

```zenscript
//mods.botania.OrechidIgnem.removeOre(IOreDictEntry oreDict);
mods.botania.OrechidIgnem.removeOre(<ore:oreGold>);

//mods.botania.OrechidIgnem.removeOre(String oreDict);
mods.botania.OrechidIgnem.removeOre("Gold");
```