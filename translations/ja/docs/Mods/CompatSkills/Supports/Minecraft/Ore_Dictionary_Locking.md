# OreDictionaryロック

## 機能:

このロックは、特定の鉱石辞書タグの下にあるすべてのアイテムをロックする機能を追加します。 つまり、"oreIron"の鉱石辞書エントリをロックすると、"oreIron"タグが付いた任意のアイテム/ブロックが設定された要件の後ろにロックされることになります。 このタイプのロックは [IData](/Vanilla/Data/IData/) パラメータもサポートしています。つまり、ロックに提供されたものに一致する IDATA タグがある場合、Ore-Dictタグの下のものにのみ影響を与えることを意味します。

## 構文

    mods.compatskills.OreDictLock.addOreDictLock(IOreDictEntry, String... locked);
    mods.compatskills.OreDictLock.addNBTOreDictLock(IOreDictEntry, IData tag, String... locked);
    
    mods.compatskills.OreDictLock.addOreDictLock(<ore:ingotIron>, "dim|1");
    mods.compatskills.OreDictLock.addNBTOreDictLock(<ore:oreIron>, IData tag, "dim|1");