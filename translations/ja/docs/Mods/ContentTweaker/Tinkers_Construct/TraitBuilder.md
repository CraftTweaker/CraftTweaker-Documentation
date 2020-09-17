# カスタムトレイト

このパッケージを使用すると、ツールに追加できるトレイトを作成できます！

## クラスのインポート

It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.TraitBuilder;`

## トレイトの作成

まず第一に、トレイトビルダーを作成する必要があります。  
これは、静的関数を使用して行うことができます。

```zenscript
//create(String identifier, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test", 0xfaadd, 100, 20);
```

The `identifier` has to be unique!  
For the `color`, it is suggested that you use the hexadecimal notation as shown above.  
`maxLevel` is the maximum level the trait can become, and will default to 0.  
`countPerLevel` is how many sublevels the trait can have (like Redstone which has 50).

After you've finished all modifications below, you will need to register your trait.  
This can be done using the `register` method, which will return a [Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) of the new trait.

```zenscript
myTrait.register();
```

登録後もビルダーを変更でき、トレイト自体は変更できなくなります。  
そうすることで、複数の類似特性を簡単に作成できます。

## 追加項目

指定された成分とティンカーの工具鍛造工具を組み合わせると、修飾子として形質を適用できます。

```zenscript
//myTrait.addItem(IIngredient項目, @Optional(1) int amountMatched));
myTrait.addItem(<item:minecraft:iron_pickaxe>);
myTrait.addItem(<item:minecraft:iron_block>, 4, 2);

//myTrait.removeItem(IItemStack stack);
myTrait.removeItem(<item:minecraft:iron_pickaxe>);
```

- `アイテム` はマッチングされたアイテムです。 [アイテム条件](/Vanilla/Items/Item_Conditions/) は使用できますが、トランスフォーマーは使用できません。 
- `amountNeeded` は一致するアイテムの量です。 toolforgeが提供するすべてのスロットでそれらを分割することができ、64を超えることもできます。 上記の例では、鉄ブロックを4つ追加する必要があります。 デフォルトは 1 です。
- `amountMatched` は、 `amountNeeded` あたりのトレイトポイントの量です。 上の例では、4つの鉄のブロックは、2つの特徴点を与えます。 デフォルトは 1 です。
- `remove function`を使用すると、アイテムに一致するすべてのトレイト成分が削除されます。

## プロパティー

与えられた名前を使用して、これらのプロパティを設定して取得できます:

| 名称                   | タイプ  |
| -------------------- | ---- |
| 色                    | int  |
| countPerLevel        | int  |
| hidden               | bool |
| identifier           | 文字列  |
| localizedDescription | 文字列  |
| localizedName        | 文字列  |
| maxLevel             | int  |

## 計算されたプロパティ

いくつかのプロパティを計算する必要があります。  
指定されたプロパティ関数を設定できます。

### CanApplyAs

トレイトが既に別のトレイトを持つツールや [エンチャント](/Vanilla/Enchantments/IEnchantmentDefinition/) に追加できるかどうかを確認します。

```zenscript
myTrait.canApplyTogetherTrait = function(TraitRepresentation thisTrait, String otherTrait){....};
myTrait.canApplyTogetherEnchantment = function(TraitRepresentation thisTrait, IEnchantmentDefinition enchant){....};
```

### Extra info

返された String[] は、ツールステーションに追加情報として表示されます。

```zenscript
myTrait.extraInfo = function(TraitRepresentation thisTrait, IItemStack item, IData tag){....};
```

## 機能の追加

今、あなたは何かを変更する必要がありますトレイトを作成したのではありませんか?  
トレイトイベントハンドラは以下のようなものです:  
ユーザーがトレイトを含むツールで何かをするたびに呼び出されます。

以下に、可能なハンドラをすべて表示します。ハンドラの返り値と、関数の書き方についての情報が表示されます。 Remember that you will have to replace `myTrait` with your own variable name.  
Also, you only have to use the handlers that you need, you don't need empty handlers only so that you have filled everything.

<details>
    <summary>一言で言えば、すべてのハンドラーです</summary>
    <ul>
        <li><a href="#onupdate">onUpdate</a></li>
        <li><a href="#getminingspeed">getMiningSpeed</a></li>
        <li><a href="#beforeblockbreak">beforeBlockBreak</a></li>
        <li><a href="#afterblockbreak">afterBlockBreak</a></li>
        <li><a href="#onblockharvestdrops">onBlockHarvestDrops</a></li>
        <li><a href="#calccrit">calcrit</a></li>
        <li><a href="#calcdamage">calcDamage</a></li>
        <li><a href="#onhit">onHit</a></li>
        <li><a href="#calcknockback">calcKnockBack</a></li>
        <li><a href="#afterhit">afterHit</a></li>
        <li><a href="#onblock">onBlock</a></li>
        <li><a href="#onplayerhurt">onPlayerHurt</a></li>
        <li><a href="#ontooldamage">onToolDamage</a></li>
        <li><a href="#ontoolheal">onToolHeal</a></li>
        <li><a href="#ontoolrepair">onTool修理</a></li>
    </ul>
</details>

### onUpdate

ツールによって呼び出される各ティックがロードされます（つまりプレイヤーのインベントリ内にあることを意味します）。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [ワールド](/Vanilla/World/IWorld/) を表す `IWorld`
- [所有者](/Vanilla/Entities/IEntity/) を表す `IEntity`
- `itemSlot` を表すint
- ツールが現在 `選択されているかどうかを記述する真偽値`

**何も返しません。**

作成済み:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, world, owner, itemSlot, isSelected) {
    //CODE
};
```

### getMiningSpeed

ブロックが採掘されたときに呼び出されます。  
このイベントは vanilla blockBreak ハンドラにもキャッチされるので注意してください。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [PlayerBreakSpeedEvent](/Vanilla/Events/Events/PlayerBreakSpeed/)

**何も返しません。**

作成済み:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, event) {
    //CODE
};
```

### beforeBlockBreak

ブロックが壊れる直前に呼び出されます。  
このイベントは vanilla blockBreak ハンドラにもキャッチされるので注意してください。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [BlockBreakEvent](/Vanilla/Events/Events/BlockBreak/)

**何も返しません。**

作成済み:

```zenscript
myTrait.beforeBlockBreak = function(trait, tool, event) {
    //CODE
};
```

### afterBlockBreak

ブロックが破壊された後に呼び出されます。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [ワールド](/Vanilla/World/IWorld/) を表す `IWorld`
- 壊れた [ブロック](/Vanilla/Blocks/IBlockState/) を表す `IBlockState`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `鉱夫を表す`
- 採掘を表すbool `wasEffective`

**何も返しません。**

作成済み:

```zenscript
myTrait.afterBlockBreak = function(trait, tool, world, blockstate, miner, wasEffective) {
    //CODE
};
```

### onBlockHarvestDrops

Called whenever a block has been broken.  
Be careful as this event is also called by vanilla onBlockHarvestBreak handlers.  
Unlike the vanilla handler however, this handler will only be executed when a player broke the block.  
Parameters:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [BlockHarvestDropsEvent](/Vanilla/Events/Events/BlockHarvestDrops/)

**何も返さない**

作成済み:

```zenscript
myTrait.onBlockHarvestDrops = function(trait, tool, event) {
    //CODE
};
```

### calcrit

Called before the damage done to the entity is calculated to determine whether it will be a crit or not.  
Returning `false` will not stop a hit that is already a crit from being so.  
Parameters:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `攻撃者` を表す
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `ターゲット` を表す

**ヒットした場合、** が `true` である bool format@@4 を返します。それ以外の場合は false を返します。

作成済み:

```zenscript
myTrait.calcCrit = function(trait, tool, attacker, target) {
    //CODE
    return true; //or false
};
```

### calcDamage

エンティティがヒットしたときに呼び出されますが、ダメージが与えられる前とクリティカルダメージが追加される前に呼び出されます。  
クリットダメージは、この結果から計算されます。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `攻撃者` を表す
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `ターゲット` を表す
- ツールの `originalDamage` (未変更のツールダメージ) を表すfloat
- ツールの `newDamage` を表すfloat (ツールがこの時点までダメージを受ける) はオリジナルであることができます損傷、またはすでに他の形質によって変更されています)。
- ヒット `isCritical` を表すブール値。

**新しいダメージを表す float** を返します。 それ以外の場合は `newDamage` を返します

作成されたユーザー

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, originalDamage, newDamage, isCritical) {
    //CODE
    return newDamage; //Or your modified value
};
```

### onHit

ダメージが与えられる直前にエンティティがヒットしたときに呼び出されます。  
全ての損傷計算はこの時点で既に行われています。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `攻撃者` を表す
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `ターゲット` を表す
- ツールの `ダメージ` を表すフロート（クリティカルダメージを含む）
- ヒット `isCritical` を表すブール値。

**何も返さない**

作成されたユーザー

```zenscript
myTrait.onHit = function(trait, tool, attacker, target, damage isCritical) {
    //CODE
};
```

### calcKnockBack

適用されたノックバックを変更するためにエンティティがヒットした後に呼び出されます。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `攻撃者` を表す
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `ターゲット` を表す
- ツールの `ダメージを表すfloat` (critを含む)
- ツールの `originalKnockback` を表すfloat (ツールノックバック未変更)
- ツールの `newKnockback` を表すフロート（この時点まではツールのノックバックが行われます） オリジナルKnockback、またはすでに他の形質で変更することができます)。
- ヒット `isCritical` を表すブール値。

**新しいノックバックを表す float** を返します。 それ以外の場合は `newKnockback` を返します

作成されたユーザー

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, damage originalKnockBack, newKnockBack, isCritical) {
    //CODE
    return newDamage; //Or your modified value
};
```

### afterHit

エンティティがヒットし、ダメージが与えられた後に呼び出されます。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `攻撃者` を表す
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `ターゲット` を表す
- ツールの `dealtDamage` を表すfloat
- ヒット `wasCritical`を表すbool
- エンティティ `wasHit` かどうかを表す bool エンティティが無敵であったか、損傷を逃れるいくつかの他の方法を持っていた場合、偽であることができます。

**何も返さない**

作成されたユーザー

```zenscript
mytrait.afterHit = function(trait, tool, attacker, target, damageDealt, wasCritical, wasHit) {
    //CODE
};
```

### onBlock

プレイヤーがツールブロックを押した時に呼び出されます。  
そうでなければ `onHit` が呼び出されます。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [プレイヤー](/Vanilla/Players/IPlayer/) を表す `IPlayer`
- [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**何も返さない**

作成されたユーザー

```zenscript
myTrait.onBlock = function(trait, tool, player, event) {
    //CODE
};
```

### onPlayerHurt

プレイヤーがDID NOT BLOCKを持っているときに呼び出されます。  
それ以外の場合は `onBlock` が呼び出されます。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- [プレイヤー](/Vanilla/Players/IPlayer/) を表す `IPlayer`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) が `攻撃者` を表す
- [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**何も返さない**

作成されたユーザー

```zenscript
myTrait.onPlayerHurt = function(trait, tool, player, event) {
    //CODE
};
```

### onToolDamage

ツールの耐久性が低下する前に呼び出されます。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- 減少させる耐久 `変更されていない量` を表すint。
- 減少する耐久度の `newAmount` を表す int で、他の形質で既に修正することができます。
- 現在のツール [ホルダー](/Vanilla/Entities/IEntityLivingBase/) を表す `IEntityLivingBase`

**新しい金額を表す int** を返します。 それ以外の場合は `newAmount` を返します

作成されたユーザー

```zenscript
myTrait.onToolDamage = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //Or your modified value
};
```

### calcToolHeal

ツールの耐久性が向上する前に呼び出されます。  
パラメータ:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 使用されている [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- 耐久度の `変更されていない量` を表すint。
- Aint は `の耐久性の` を表します。これは他の形質で既に変更することができます。
- 現在のツール [ホルダー](/Vanilla/Entities/IEntityLivingBase/) を表す `IEntityLivingBase`

**新しい金額を表す int** を返します。 それ以外の場合は `newAmount` を返します

作成されたユーザー

```zenscript
myTrait.calcToolHeal = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //Or your modified value
};
```

### onTool修理

Called before the tool is getting repaired with tis repair material.  
Not to be confused with `onToolHeal` which is called afterwards.  
Will be called multiple times if multiple items are used at once.  
Parameters:

- 現在使用されている [トレイト](/Mods/ContentTweaker/Tinkers_Construct/Trait/) を表す `トレイト`。
- 修理する [ツール](/Vanilla/Items/IItemStack/) を表す `IItemStack`
- 耐久度の `` を表すint。

**何も返さない**

作成されたユーザー

```zenscript
myTrait.onToolRepair = function(trait, tool, amount) {
    //CODE
};
```

## 例

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test");
testTrait.color = 0xffaadd;
testTrait.maxLevel = 100;
testTrait.countPerLevel = 20;
testTrait.addItem(<item:minecraft:iron_pickaxe>);
testTrait.addItem(<item:minecraft:iron_block>, 4, 2);
testTrait.localizedName = "Whooooooooo";
testTrait.localizedDescription = "This is fun! 悲しいことに、それは何もしません... \u2639";
testTrait.afterHit = function(thisTrait, tool, attacker, target, damagDealt, wasCrit, washHit) {
    attacker.hill(damageDealt);
};
testTrait.register();
```