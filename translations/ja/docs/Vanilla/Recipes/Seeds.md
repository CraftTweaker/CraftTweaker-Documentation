# 種

種子は背の高い草を殴ることで得られるものです。

## すべてのシードをログに出力する

このコマンドは登録されている全てのシードをログに出力します。

プレイヤーまたはコンソールによって実行される必要がありますが、zsファイルには書き込めません。

    1.12
    /ct seeds
    
    1.12 より前
    /mt seeds
    

## シードドロップを追加

`アイテム` をシードドロップに追加する。  
**重量はシードから相対的になり、重量は10（<unk> 10%）！**

```zenscript
vanilla.seeds.addSeed(item);
```

`アイテム` は [weightedItemStack](/Vanilla/Items/WeightedItemStack/) です。 それはどういう意味ですか？ これは単純に、次のようなパーセンテージを与える必要があることを意味します。

```zenscript
//adds carrots with a weight of 1
vanilla.seeds.addSeed(<minecraft:carrot> % 1);
```

## シードドロップを削除

`個のアイテム` がシードドロップになるのを防ぎます。

```zenscript
vanilla.seeds.removeSeed(item);
```

`アイテム` は [IIngredient](/Vanilla/Variable_Types/IIngredient/) です。

## 登録されているすべてのシードを取得します

すべてのアイテムを [weightedItemStack](/Vanilla/Items/WeightedItemStack/) リストとして返します。

```zenscript
val seedList = vanilla.seeds.seeds;

for item in seedList {
    print("Item: " ~ item.stack.displayName ~ " || Chance: " ~ item.percent ~ "%");
}
```