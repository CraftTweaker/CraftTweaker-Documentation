# Orechid

Orechid パッケージは、Botania Orechid Flowers に生成された鉱石を追加または削除するために使用されます。

## 発信中

`mods.botania.Orechid` を使って Orechid パッケージを呼び出すことができます。

## すべての登録済みのレシピを検索

[`/ct botorechid`](/Mods/Modtweaker/Botania/Commands/) を使用して登録されているすべてのOrechid レシピを見つけることができます。

## レシピの追加

出力パラメータとして [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) を使用してレシピを追加するか、または oreDictEntry の名前を文字列として追加できます。

```zenscript
//mods.botania.Orechid.addOre(IOreDictEntry oreDict, int weight);
mods.botania.Orechid.addOre(<ore:logWood>, 500);

//mods.botania.Orechid.addOre(String oreDict, int weiDict);
mods.botania.Orechid.addOre("logWood", 500);
```

## レシピの削除

出力パラメータとして [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) を使用してレシピを削除するか、文字列として oreDictEntry の名前を使用します。

```zenscript
//mods.botania.Orechid.removeOre(IOreDictEntry oreDict);
mods.botania.Orechid.removeOre(<ore:oreGold>);

//mods.botania.OremoveOre(String oreDict);
mods.botania.OremoveOre("oreGold");
```