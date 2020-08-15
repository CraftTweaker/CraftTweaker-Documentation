# IEntityDefinition

これは恐ろしい聞こえるので、それは何を意味するのでしょうか? 基本的に, それはゲームに登録されているエンティティへの参照です, それはへの参照です, ゲーム内のモブと言います.

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityDefinition;`

## IEntityDefinition オブジェクトの呼び出し

```zenscript
//These return an IEntityDefinition Object
val test = <entity:minecraft:sheep>;
val test2 = game.getEntity("sheep");

```

## 関数

So, this is where it gets interesting: What can we do with it, now that we created that thing?

### id

IDを文字列として返します

```zenscript
//returns "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### 名前

名前を文字列として返します

```zenscript
//returns "Sheep"
<entity:minecraft:sheep>.name;
```

### エンティティを作成

最初のメソッドは指定された場所にのみエンティティを作成します。  
2番目のメソッドはまた、エンティティを生成します。

```zenscript
<entity:minecraft:sheep>.createEntity(world);
<entity:minecraft:sheep>.spawnEntity(world, blockPos);
```

`world` は [IWorld](/Vanilla/World/IWorld/) オブジェクトです。  
`blockPos` は [IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトです。

## ドロップ

私たちはモブドロップを追加または削除することができます, それは素晴らしいことではありません?

### 通常のドロップを追加

これは、どのような手段によっても、暴徒が殺されるたびに起こることができる、通常の落下を加えます。

```zenscript
val entity = <entity:minecraft:sheep>;

//addDrop(item,min,max,chance);
entity.addDrop(<minecraft:apple>);

//addDrop(weightedItem, min, max);
entity.addDrop(<minecraft:stone> % 20);
```

`item` is the item to be added as drop and an [IItemStack](/Vanilla/Items/IItemStack/) or a [WeightedItemStack](/Vanilla/Items/WeightedItemStack/).  
`min` is the minimum amount that is dropped and an Integer. これは任意です。  
`max` はドロップされた最大値と整数です。 これは任意です。  
`確率` はドロップ率です。 これは任意です。 [weightedItemStack](/Vanilla/Items/WeightedItemStack/) を `アイテム`として使用する場合は不要です

### プレイヤーのみのドロップを追加

通常のドロップと同じですが、エンティティがプレイヤーによって殺された場合に限ります。

```zenscript
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weitedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### ドロップ関数を追加

関連エンティティが強制終了されるたびにdrop関数が呼び出されます。 You can use this if you need to check requirements for before you drop something, like only dropping in a certain biome and stuff.  
You will need an [IEntityDropFunction](/Vanilla/Entities/IEntityDropFunction/):

```zenscript
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
    return <minecraft:iron_ingot> * 10;
});
```

### 削除

ドロップを削除します。

```zenscript
val entity = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```

`アイテム` はドロップから削除されるアイテムで、 [IItemStack](/Vanilla/Items/IItemStack/) です。

### ドロップをクリア

これはすべてのドロップを削除します。

```zenscript
val entity = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops();
```

### 取得

これは、 [IEntityDrop](/Vanilla/Entities/IEntityDrop/) オブジェクトのリストとしてCTを介して追加されたすべてのドロップを返します。

```zenscript
val entity = <entity:minecraft:sheep>;

//drops;
val dropList = entity.drops;
```