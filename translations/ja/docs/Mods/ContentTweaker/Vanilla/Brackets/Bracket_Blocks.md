# ブロックブラケットハンドラ（ブロックブラケットハンドラ）

Block Bracket Handler はゲーム内のブロックにアクセスできます。 ゲームに登録されているブロックのみを取得できます そのため、Modの追加や削除は、Block Bracket HandlerでModのブロックを参照すると問題が発生する可能性があります。

ブロックは次のようにブロックブラケットハンドラで参照されます。

```zenscript
<block:modID:blockName>

<block:minecraft:dirt>
```

If the block is found, this will return an [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Object.  
Please refer to the [respective Wiki entry](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) for further information on what you can do with these.