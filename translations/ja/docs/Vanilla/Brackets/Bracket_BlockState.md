# BlockState Bracket Handler

BlockStateブラケットハンドラを使用すると、ゲーム内のBlockStatesにアクセスできます。 BlockStatesをゲームに登録することは可能です。 そのため、Modを追加または削除すると、BlockStateブラケットハンドラでModのブロック状態を参照すると問題が発生する可能性があります。

BlockStatesは、BlockStateブラケットハンドラで次のように参照されます。

```zenscript
<blockstate:modid:blockname>
```

With the `modid` being the modid of the mod that the block is defined in, and `blockname` being the name of the block. 指定したブロックのデフォルトのBlockStateが返されます。

BlockState Bracket Handlerを使って特定のblockstateを取得するには、必要に応じて次のようにプロパティを指定できます。

```zenscript
<blockstate:modid:blockname:properties>
```

`プロパティ` は `name=value` のコンマで区切られたセットで、blockstate で指定したいすべてのプロパティを指定します。 指定されていないプロパティは、デフォルトの blockstate と同じ値が与えられます。

IBlockState オブジェクトを返します。 詳細については、それぞれの [wiki 項目](/Vanilla/Blocks/IBlockState/) を参照してください。

この括弧ハンドラは、特定の blockstate への参照を生成することに注意してください。 複数のブロックとマッチさせたい場合は、 [IBlockStateMatcher wiki エントリ](/Vanilla/Blocks/IBlockStateMatcher) を参照してください。

## 使用例

BlockStateブラケットハンドラの例は次のとおりです。

```zenscript
//block of dirt
<blockstate:minecraft:dirt>

//oak log, vertical
<blockstate:minecraft:log>
<blockstate:minecraft:log:variant=oak,axis=y>

//spruce log, horizontal along the x-axis
<blockstate:minecraft:log:variant=spruce,axis=x>
```