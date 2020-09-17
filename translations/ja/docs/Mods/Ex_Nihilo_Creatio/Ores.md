# Ores

**`#loader preinit` または `#loader contentTweaker` に必要です**


## パッケージ
```zenscript
`mods.exnihilocreatio.Ore`
```

## メソッド

- **String name** ore chunks/piece/dust/ingot に名前を付けます。
- **文字列の色** 六面体のマテリアルの色。
- **[IItemStack](/Vanilla/Items/IItemStack/) の出力** には、oredict.firstItem またはエラー出力が必要です。
- **文字列[string]** 言語コードを割り当てて翻訳する。
- **String oreDict** 必要な oreDict の名前。

## 加算

```zenscript
mods.exnihilocreatio.Ore.addRecipe(String,
    String,
    @Optional IItemStack,
    @Optional Map<string, String>,
    @Optional String);

mods.exnihilocreatio.Ore.addRecipe("Stone",
    "63452D",
    <ore:stone>.firstItem,
    {
    "en_au": "StoneDownUnder"
    },
    "Stone");
```

## 削除

```zenscript
mods.exnihilocreatio.Ore.removeAll();
```