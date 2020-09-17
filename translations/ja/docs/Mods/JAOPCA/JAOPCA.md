# JAOPCA

[JAOPCA](https://minecraft.curseforge.com/projects/jaopca) (Just A Processing Compatibility attempt) は、多くのModに鉱石処理の互換性を追加することを目的とするModです。

## パッケージのインポート

メソッド呼び出しを短縮したい場合は、パッケージをインポートできます。  
使用することで可能です。

```zenscript
import mods.jaopca.JAOPCA;
```

## メソッド

このパッケージはJAOPCAのエントリーポイントです。 これは [OreEntry](/Mods/JAOPCA/OreEntry/) オブジェクトをチェックして取得する手段を提供します。 詳細については、それぞれのページを確認しますが、要するにそれらは材料名です(e. をクリックします。「Gold」) をクリックすると、チャンク、ほこりなどのエントリが表示されます。

- エントリ: 例: "nugget", "dust", "molten", ... (すべてのリストは [ここ](/Mods/JAOPCA/RegisteredEntries/) を確認してください)
- [鉱石エントリ](/Mods/JAOPCA/OreEntry/): 例: "ダイヤモンド", "石炭", "レッドストーン", ...
- OreType: 例: "INGOT", "GEM", "DUST"

### エントリが存在するかどうかを確認します

指定された名前を持つエントリが存在する場合、 `true` を返します。

```zenscript
//mods.jaopca.JAOPCA.containsEntry(entryName);
mods.jaopca.JAOPCA.containsEntry("nugget");
```

### OreEntry を取得

指定された名前に対して与えられた [OreEntry](/Mods/JAOPCA/OreEntry/) を返し、存在しない場合は `null` を返します。 *注意深い:ほとんどの材料は資本化されており、そうです、ケーシングは重要です!*

```zenscript
//mods.jaopca.JAOPCA.getOre(oreName);
mods.jaopca.JAOPCA.getOre("Coal");
```

### エントリのすべての鉱石エントリを取得

指定したエントリが登録されているすべての [OreEntry](/Mods/JAOPCA/OreEntry/) オブジェクトのリストを返します。

```zenscript
//mods.jaopca.JAOPCA.getOresForEntry(entryName);
mods.jaopca.JAOPCA.getOresForEntry("nugget");
```

### エントリのすべての鉱石エントリを取得

指定された oreType のすべての [OreEntry](/Mods/JAOPCA/OreEntry/) オブジェクトのリストを返します。

```zenscript
//mods.jaopca.JAOPCA.getOresForType(oreType);
mods.jaopca.JAOPCA.getOresForType("GEM");
```

### 登録済みのOreEntry を全て取得

登録されたすべての [OreEntry](/Mods/JAOPCA/OreEntry/) オブジェクトのリストを返します。

```zenscript
mods.jaopca.JAOPCA.getAllOres();
```