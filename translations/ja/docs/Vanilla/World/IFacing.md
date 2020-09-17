# IFing

IFacing インターフェイスでは、 [IBlockPosの](/Vanilla/World/IBlockPos/) 可能な方向を取得できます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.world.IFacing;`

## 列挙型

インタフェースには7つの静的メソッドがあり、それぞれがその方向を返します。  
最後の方向を文字列入力とします(例: `"NORTH"`)

```zenscript
crafttweaker.world.Facing.north()
crafttweaker.world.Facing.east()
crafttweaker.world.Facing.south()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.up()


crafttweaker.world.Facing.String(String名);
```

## パラメータのない ZenGetters/ZenMethods

| ZenGetter | ZenMethod | Return Type |
| --------- | --------- | ----------- |
| name      | getName() | 文字列         |
| rotateY   | rotateY() | IFing       |
| 正反対の      | 正反対()     | IFing       |

## その他の方法

### 2つの面の比較

You can compare two facings using the standart comparing Operators `== != < > <= >=`  
Alternatively, you can use the function, though the function returns an int that is 0 if they are equal.

```zenscript
//true または false
facingOne == facingTwo;

//0 が等しい場合は 0 を返す
facingOne.compare(facingTwo);
```