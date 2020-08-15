# アイテムからガスへの変換

Mekanism 9.7.5以降、様々な機械でガス変換するカスタム項目を持つことができるようになりました。

ビルドされた変換の値を変更したい場合は、最初に変換を削除してから上書きするのではなく、元に戻すことをお勧めします。 これにより、9.7 と同様にすべてのデータが正しく削除されます。 アイテムが2回リストされたときに何が起こるかの指定された出力/処理はありません。

## 加算

```zenscript
mods.mekanism.GasConversion.register(IIngredient原料, IGasStack gas);

mods.mekanism.GasConversion.register(<ore:sand>, <gas:liquidosmium> * 100);
```

## 削除

```zenscript
mods.mekanism.GasConversion.unregister(IIngredient原料, IGasStack gas);

mods.mekanism.GasConversion.unregister(<ore:ingotOsmium>, <gas:liquidosmium>);
```

## すべてのコンバージョンを削除する

```zenscript
mods.mekanism.GasConversion.unregisterAll();
```