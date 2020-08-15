# IItemDestroyedBlock

IItemDestroyedBlock 関数は [アイテム](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) に追加でき、assicated アイテムでブロックを壊そうとするたびに実行されます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.IItemDestroyedBlock;`

## パラメータ

IItemDestroyedBlockは、以下のパラメータを持つ関数です。

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) stack → 項目。
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) 世界 → これが行われる世界
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → 採掘中のブロックの状態。
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → これはどこで行われますか？
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) エンティティ → ブロックを誰/何を鉱山しますか？

関数はブール値を返す必要があります。つまり、blockBreaking プロセスが成功した場合は `true` 、そうでない場合は `false` です。