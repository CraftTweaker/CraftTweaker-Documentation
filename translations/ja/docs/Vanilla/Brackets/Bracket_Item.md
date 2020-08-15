# アイテムブラケットハンドラー

アイテムブラケットハンドラーでは、ゲーム内のアイテムにアクセスできます。 ゲームに登録されたアイテムのみを取得することができます ですから、Modを追加または削除すると、ITem Bracket HandlerでModのアイテムを参照すると問題が発生する可能性があります。

項目は、項目ブラケットハンドラで次のように参照されます。

```zenscript
<modid:itemname>
```

With the `modid` being the modid of the mod that the Item belongs to, and `itemname` being the name of the item, It is recommended to use `/ct hand` to get the correct name of the item.

一般的にはこのようなものである。

```zenscript
<item:modid:itemname:meta>
```

With `item` as first entry, it specifically says "This has to be an item!" to CT.  
As you've seen above: Optional.  
Usually you will never need this, unless dealing with several custom bracket handlers.  
`modid` is the modid of the mod that the Item belongs to.  
`itemname` is the name of the item, use /ct hand to get the correct name.  
`meta` is the meta value of the item (e.g. Damage value, types, etc.). This is an Integer.  
You can also use a wildcard `*` to address all meta values.  
Also optional: If left out it will be 0.

通常、これは IItemStack オブジェクトを返します。  
詳細については [それぞれの wiki エントリ](/Vanilla/Items/IItemStack/) を参照してください。

## 使用例

項目ブラケットハンドラの例は次のとおりです。

```zenscript
//apple
<minecraft:apple>

//coal
<minecraft:coal>
<minecraft:coal:0>

//charcoal
<minecraft:coal:1>

//both, coal and charcoal
<minecraft:coal:*>
<item:minecraft:coal:*>
```

これにより、 `Apple` の項目にアクセスできます。