# IItemDestroySpeed

IItemDestroySpeed関数を [アイテム](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) に追加し、アイテムのブロック破壊速度を決定します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.IItemDestroySpeed;`

## パラメータ

IItemDestroySpeedは以下のパラメータを持つ関数です。

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → 項目。
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → 採掘中のブロックの状態。

関数はfloat値を返す必要があります。