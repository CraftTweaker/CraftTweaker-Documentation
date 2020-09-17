# <unk>
## パッケージ
`import mods.gardenstuff.CompostBin;CompostBin;`

## メソッド
- **[IItemStack](/Vanilla/Liquids/IItemStack/) アイテム** 堆肥化するアイテム。
- **int processTime** ベースラインマシンでティックあたりに生成されるエネルギー量。
- **[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) oredictKey** oreDictionary entry.

## コンポスタブルアイテムを追加
```zenscript
モッズ・ガーデナーCompostBin.add(IItemStack項目, int processTime);

mods.gardenstak.mods.gardenstuff.CompostBin.add(IItemStack item, int processTime);

mods.gardenstuff.CompostBin.add(<minecraft:carrot>, 150);
```

## コンポスト可能な oreDictionary エントリを追加
```zenscript
モッズ・ガーデナーmods.gardenstuff.CompostBin.add(oredictKey, int processTime);

mods.gardenstuff.CompostBin.add(<ore:cropCarrot>, 150);CompostBin.add(<ore:cropCarrot>, 150);
```
