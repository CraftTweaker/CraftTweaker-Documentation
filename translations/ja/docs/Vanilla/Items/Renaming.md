# 名前の変更

いつも「胸」を読むのは面倒ですね。

だから名前を変更する可能性があります。

## 表示名の変更

これはおそらく、別のアイテムやブロック名を達成するための最も簡単な方法です。 `アイテム` を `newName` に変更します :

```zenscript
item.displayName = newName;

//Example
<minecraft:chest>.displayName = "Storage Box Deluxe";
```

`項目` は [IItemStack](/Vanilla/Items/IItemStack/)です。  
`newName` は文字列です。

## ローカライズの変更

モデリングされた在庫の中には、新しい在庫ではなくアイテムの古い名前がまだ表示されているものがある場合は、ローカライズを変更する必要があります。 `ゲーム` の項目でそれが何を意味するかを読むことができます。

```zenscript
game.setLocalization(languageCode,unlocalizedName,newName);

game.setLocalization("tile.chest.name","StorageBox Deluxe")
```

`languageCode` は文字列とオプションです。 省略すると、クライアントの設定言語に関係なくローカライズが適用されます。  
`unlocaLizedName` は文字列です。  
`newName` は文字列です。