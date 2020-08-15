# Printer

format@@0では、アイテムのコピーを作成できます。

デフォルトでは、書き込まれた本やエンチャントされた本をコピーできます。

## 削除中

## 一致するコピー可能な項目を削除します。

```zenscript
mods.cfm.Printer.remove(@Optional final IIngredient item);

mods.cfm.Printer.remove(<minecraft:enchanted_book>);
// すべての印刷可能なアイテムを削除します。
mods.cfm.Printer.remove();
```

## 追加中

## コピー可能なアイテムを追加

```zenscript
mods.cfm.Printer.add(@Nonnull final IItemStack item);

mods.cfm.Printer.add(<minecraft:name_tag>);
```