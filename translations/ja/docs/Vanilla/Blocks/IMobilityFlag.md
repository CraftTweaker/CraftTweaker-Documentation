# IMobilityFlag

IMobilityFlag インターフェースを使用すると、 [IBlockStateの](/Vanilla/Blocks/IBlockState/) 可能なモビリティフラグを取得できます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.block.IMobilityFlag;`

## ZenMethods

#### 一致

2つの IMobilityFlag オブジェクトが等しいかどうかを確認できます:  
bool を返します。

```zenscript
flagOne.matches(other);
```

## 列挙型

MobilityFlagインターフェースには5つの静的メソッドがあり、それぞれが与えられたIMobilityFlagオブジェクトを返します。

```zenscript
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushOnly()
```