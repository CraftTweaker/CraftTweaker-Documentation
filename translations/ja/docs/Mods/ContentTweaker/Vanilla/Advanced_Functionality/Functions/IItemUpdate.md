# IItemUpdate

IItemUpdateFunctionを [アイテム](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) に追加することで、アイテムが更新されるたびにコードを実行することができます。

## パッケージのインポート

この関数のクラスをインポートする必要がある場合は、次のようにします。

```zenscript
import mods.contenttweaker.IItemUpdate;
```

## 構文

次のパラメータを取るvoid関数があります（順番に）

- アイテムスタック自体を表す [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/)。
- アクションが行われる世界を表す [IWorld オブジェクト](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)。
- [IEntity オブジェクト](/Vanilla/Entities/IEntity/) は可能な限りダウンキャストしているため、 [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) までインスタンス化できます。
- アイテムが現在あるスロットを表すint
- アイテムが現在選択されているかどうかを示すブール値。

```zenscript
item.onItemUpdate = function(itemStack, world, owner, slot, isSelected) {
    //CODE GOES HERE!!
    return;
}
```