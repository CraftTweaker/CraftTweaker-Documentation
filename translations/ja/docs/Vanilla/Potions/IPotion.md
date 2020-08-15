# アイポーション

IPotionオブジェクトは、ゲーム内のポーションを指します。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.potions.IPotion;`

## IPotion オブジェクトを取得しています

このようなオブジェクトは、 [ポーション ブラケットハンドラ](/Vanilla/Brackets/Bracket_Potion/) を使用することで取得できます。

```zenscript
<potion:minecraft:strength>;
```

## Zengetters

現在、ポーションでできることはいくつかの情報を取得することだけです。  
例 `<potion:minecraft:strength>.name`

| Zengetter     | 何をするか                           | 戻り値                                            |
| ------------- | ------------------------------- | ---------------------------------------------- |
| 名前            | ポーションの内部名を返します。                 | 文字列                                            |
| badEffect     | ポーション効果が悪い場合に返します。              | bool                                           |
| liquidColor   | ポーションの色を返します                    | int                                            |
| liquidColor   | ポーションの色を返します。                   | int                                            |
| curativeItems | ポーションのすべてのキュレーションアイテムのリストを返します。 | List<[IItemStack](/Vanilla/Items/IItemStack/)> |
| hasStatusIcon | ポーションにステータスアイコンがあるかどうかを返します。    | bool                                           |
| 有益な           | ポーションが有益かどうかを返します。              | bool                                           |
| isInstant     | ポーションがインスタントかどうかを返します。          | bool                                           |

## ZenMethods

### PotionEffect を作る

[IPotionEffect](/Vanilla/Potions/IPotionEffect/) は、持続時間とアンプを持つポーションです。 これら2つのメソッドを使用して、IPotionから1つを取得できます:  
推測の通り、両方とも [IPotionEffect](/Vanilla/Potions/IPotionEffect/) オブジェクトを返します。

```zenscript
pot.makePotionEffect(int duration, int アンプ);
pot.makePotionEffect(int duration, int アンプ, boolean ambientEffect, boolean particlesShown);
```