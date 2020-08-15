# ゲームクラス

IGameクラスは一般的なゲーム情報を取得するために使用されます。 `ゲーム` を使用してアクセスできます

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.game.IGame;`

## Zengetters

| Zengetter | それは何をするか。                 | Return Type                                                     | 使用法             |
| --------- | ------------------------- | --------------------------------------------------------------- | --------------- |
| バイオーム     | すべての登録済みバイオームをリストとして返します。 | List<[IBiomes](/Vanilla/Biomes/IBiome/)>                        | `game.biomes`   |
| ブロック      | すべての登録済みブロックをリストとして返します。  | List<[IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)>     | `game.blocks`   |
| エンティティ    | すべての登録エンティティをリストとして返します。  | List<[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)> | `game.entities` |
| 項目        | すべての登録済みアイテムをリストとして返します。  | List<[IItemDefinition](/Vanilla/Items/IItemDefinition/)>        | `game.items`    |
| リキード      | すべての登録済み液体をリストとして返します。    | List<[ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/)>  | `game.liquids`  |
| ポーション     | すべてのポーションをリストとして返します      | List<[IPotion](/Vanilla/Potions/IPotion/)>                      | `game.potions`  |

## メソッド

### GetEntity

```zenscript
//getEntity(EntityName)

//本質的には同じ
val ship = game.getEntity("sheep");
val sheep1 = <entity:minecraft:sheep>
```

### ローカライズの設定

ローカライズを設定します。  
パラメータはすべて文字列です。 `game.setLocalization(key, value);`  
`game.setLocalization(lang, key, value);`

### ローカライズする

戻り値 ローカライズ文字列  
`game.localize(key)`  
`game.localize(key, lang)`