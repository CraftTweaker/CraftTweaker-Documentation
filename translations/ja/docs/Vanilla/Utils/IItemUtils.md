# IItemUtils

ItemUtils インターフェイスは様々なアイテムユーティリティを提供します。  
これは、 `items` キーワードを使用してアクセスできます。

## ポーションを作成中

The createPotions function allows you to create custom potions.  
Returns the potion as [IItemStack](/Vanilla/Items/IItemStack/).  
As the Parameter for this function is a vararg, you can either provide one Object[][] or many Object[].  
In both cases each Object[] needs to contain

1. [アイポーション](/Vanilla/Potions/IPotion/)
2. エフェクトアンプ/強度を記述するint
3. 効果の継続時間を記述する整数。 

Object[] がこの長さでない場合、またはこの順序では無視されます。

```zenscript
//createPotion(Object[]...);
//createPotion([effect,strength,duration],[effect2, strength2,duration2],...);
//createPotion([[effect,strength,duration],[effect2, strength2,duration2],...]);
val potion = itemUtils.createPotion([[<potion:minecraft:strength>, 1, 1]]);
```

## アイテムを名前で取得

These two functions both return an [IItemStack](/Vanilla/Items/IItemStack/)[] containing all matching items.  
The first checks against the items' registry names, the 2nd uses the unlocalized names.

```zenscript
//getItemsByRegexRegistryName(String Regex)
itemUtils.getItemsByRegexRegistryName(".*sword.*"); // all things that have sword in the name
itemUtils.getItemsByRegexRegistryName(".*thermal.*"); // all thermal expansion/foundation/dynamics items

//getItemsByRegexUnlocalizedName(String Regex)
itemUtils.getItemsByRegexUnlocalizedName(".*pink.*"); // pink things!! <3
```

## 項目ブラケットハンドラを模倣する

This method does the same as the [Item Bracket Handler](/Vanilla/Brackets/Bracket_Item/).  
Unlike the BH though, you need to provide the meta as optional parameter.  
If you want to use the wildcard meta, use `32767`.

    //getItem(location, @Optional meta);
    itemUtils.getItem("minecraft:iron_ingot"); //<minecraft:iron_ingot>
    itemUtils.getItem("minecraft:dye", 1); //<minecraft:dye:1>
    itemUtils.getItem("minecraft:wool", 32767); //<minecraft:wool:*>
    

## スポーン エッグを作成

The createSpawnEgg function allows you to create custom mod spawn eggs.  
The customNBT is OPTIONAL and can override the entity tag.  
Returns the spawn eff as [IItemStack](/Vanilla/Items/IItemStack/).

```zenscript
//createSpawnEgg(entity, @optional customNBT)
//NBT がエンティティを上書きします(これはクリーパーの卵を作成します!)
val egg = itemUtils.createSpawnEgg(<entity:minecraft:sheep>, {EntityTag:{id:"minecraft:creeper",NoAI:1 as byte,PersistenceRequired:1 as byte}});
```