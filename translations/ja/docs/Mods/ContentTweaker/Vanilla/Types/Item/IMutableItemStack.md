# MutableItemStack

A Mutable Item Stack is a special [IItemStack](/Vanilla/Items/IItemStack/) object that can only be retrieved from [ICTPlayers](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).  
That means all of [IItemStack](/Vanilla/Items/IItemStack/)'s methods, and those of [IIngredients](/Vanilla/Variable_Types/IIngredient/)!

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.MutableItemStack;`

## ZenMethods

### 数量

スタックの数は、スタック内のアイテム数です！

| ZenMethod       | パラメータタイプ | 説明                         |
| --------------- | -------- | -------------------------- |
| setCount(count) | int      | スタックのカウントを `カウント` に設定する    |
| grow(count)     | int      | スタックの数を `カウント` で増やします      |
| shrink(count)   | int      | 指定された `カウント` でスタックの数を減らします |

### ダメージ

`damage(int amount, ICTPlayer player)`

パラメータ:

- int amount → アイテムに与えるダメージポイント
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) プレイヤー → アイテムにダメージを与えるプレイヤー/エンティティ