# IBlockAction

IBlockAction 関数は [ブロック](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) に追加できます。 追加した場所に応じて、ブロックが置かれたり壊れたりした時にトリガーされます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.IBlockAction;`

## パラメータ

IBlockAction は以下のパラメータを持つ関数です。

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) 世界 → ブロックのある世界
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) の位置 → ブロックの位置
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) の状態 → ブロック自体とそのメタデータなどのブロックに関する情報を含む

関数は戻り値を持っていません！

## 例

```zenscript
zsBlock.onBlockBreak = function(world, blockPos, blockState){
    print("I WAS PLACED!!!");
}
```