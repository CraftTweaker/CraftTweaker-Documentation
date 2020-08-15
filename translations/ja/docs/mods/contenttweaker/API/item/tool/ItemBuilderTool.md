# ItemBuilderTool

ツールとして使用できるアイテムを作成できる特別なビルダー。 このビルダーに変更する前に、アイテムの最大ダメージを設定する必要があります。 <p> 特殊な方法で、いくつかの工具タイプの採掘レベルと攻撃ダメージを設定できます。

このクラスは mod-id `contenttweaker` を持つ mod によって追加されました。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.item.tool.ItemBuilderTool
```

## 実装されたインターフェース
ItemBuilderTool は以下のインターフェイスを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## メソッド
### ビルド

このビルダーが構築されると思われるものは何でも実際に構築するようCoTに指示します。

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| パラメータ   | タイプ  | 説明               |
| ------- | ---- | ---------------- |
| リソースの場所 | 文字列型 | このブロックを与えるリソースパス |


### withAttackDamage

このアイテムを持っているときに獲得できる攻撃ダメージボーナスを設定します

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(floatとしてattackDamage);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| パラメータ  | タイプ    | 説明       |
| ------ | ------ | -------- |
| 攻撃ダメージ | float型 | 追加攻撃ダメージ |


### withAttackSpeed

このアイテムを持っているときに獲得する攻撃速度ボーナスを設定できます。

 戻り値: `メソッドチェーンに使用されるこのビルダー。`

戻り値の型: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attackSpeed) double);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| パラメータ | タイプ    | 説明   |
| ----- | ------ | ---- |
| 攻撃速度  | double | 攻撃速度 |


### withDurabilityCostAttack

敵を撃った時に受けるダメージを設定できます。 デフォルトではこれは `0` です

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack) int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| パラメータ                | タイプ | 説明                  |
| -------------------- | --- | ------------------- |
| durabilityCostAttack | int | このアイテムが受け取るダメージポイント |


### withDurabilityCostMining

このアイテムが採掘時に受けるダメージを設定できます。 デフォルトではこれは `0` です

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(intとしてのdurabilityCostMining);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| パラメータ                | タイプ | 説明                  |
| -------------------- | --- | ------------------- |
| durabilityCostMining | int | このアイテムが受け取るダメージポイント |


### withToolType

このツールにツールタイプを追加できます。 このタイプにヒットしたときに、タイプ、マイニングレベル、および必要に応じてマイニング速度を指定することができます。

 戻り値: `このビルダーは、メソッドチェーンに使用されます`

戻り値の型: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| パラメータ    | タイプ                                                                             | 説明                               | IsOptional | デフォルト値 |
| -------- | ------------------------------------------------------------------------------- | -------------------------------- | ---------- | ------ |
| toolType | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | ツールの種類                           | false      | `null` |
| 採掘レベル    | int                                                                             | このツールタイプのマイニングレベル                | false      | `null` |
| 採掘速度     | float型                                                                          | このツールが与えられた種類のブロックをどれだけ速く掘り出せるか。 | true       | `1.0`  |



