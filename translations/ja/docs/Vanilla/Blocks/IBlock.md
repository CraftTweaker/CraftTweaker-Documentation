# IBlock

IBlock オブジェクトは、 [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)、メタデータ、タイルデータで構成されています。  
ゲーム内のブロックを指します。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlock;`

## IBlockオブジェクトの呼び出し

IBlockオブジェクトを返す方法は複数あります:

* IBlock として [IItemStack](/Vanilla/Items/IItemStack/) をキャスト ( `AS` キーワード、または `asBlock()` メソッドを使用)
* [IWorld](/Vanilla/World/IWorld/) で getBlock(x,y,z) を使用します。
* ContentTweaker [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) での getBlock() の使用

警告: `data` ZenGetter が non-null IDataを返すことは、2つ目のメソッドのみを使用することができます。

## Zengetters

| Getter | 何をするか              | 戻り値                                                   |
| ------ | ------------------ | ----------------------------------------------------- |
| 定義     | ブロックの定義を返します       | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) |
| meta   | ブロックのメタデータを返します    | int                                                   |
| データ    | ブロックのtileDataを返します | [IData](/Vanilla/Data/IData/)                         |

# IBlockPattern

IBlocks は [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) オブジェクトを拡張します。 つまり、IBlockPattern オブジェクトに利用可能なすべての機能は、IBlock オブジェクトにも使用できます。

* `ブロック` を使用する
* OR'ing
* `キーワードの` で一致する
* `displayName` を使用する