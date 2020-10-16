# IFing

IFacing インターフェイスでは、 [IBlockPosの](/Vanilla/World/IBlockPos/) 可能な方向を取得できます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.world.IFacing;`

## Enumerations

Facingインタフェースには、その方向を返す6つの静的メソッドがあります。  
また、文字列入力として方向を取るもう1つを持っています(例: `"NORTH"`)

```zenscript
crafttweaker.world.IFacing.north()
crafttweaker.world.IFacing.east()
crafttweaker.world.IFacing.south()
crafttweaker.world.IFacing.west()
crafttweaker.world.IFacing.down()
crafttweaker.world.IFacing.up()


crafttweaker.world.IFacing.fromString(String name);
```

## ZenGetters/ZenMethods without parameters

| ZenGetter | ZenMethod | Return Type |
| --------- | --------- | ----------- |
| name      | getName() | string      |
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