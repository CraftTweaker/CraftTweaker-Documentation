# ポジション 3f

Minecraft内のPositionはx、y、zの3つの値で構成されています:  
Position3fオブジェクトは、それら3つの値を使用して位置を格納します。

## パッケージのインポート

It might be required for you to [import](/AdvancedFunctions/Import/) the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.util.Position3f;`

## Position3f オブジェクトの取得

このようなオブジェクトは以下のように取得できます。

- `の位置` ZenGetter の [IPlayer](/Vanilla/Players/IPlayer/) オブジェクト。
- 以下のPosition3fコンストラクタです
- [IBlockPos](/Vanilla/World/IBlockPos/) Position3fキャスター.

## Position3f コンストラクター

以下のメソッドを使用して Position3f オブジェクトを自分で作成できます。

```zenscript
crafttweaker.util.Position3f.create(float x, float y, float z);
```

最初の方法では、指定された座標に位置を作成できます。

## ZenGettersとZenSetters

| ZenGetter | ZenSetter | 説明                |
| --------- | --------- | ----------------- |
| x         | x         | ポジションの x の値を返します。 |
| y         | y         | 位置の y 値を返します。     |
| z         | z         | ポジションのz値を返します。    |

## IBlockPos としてキャスト

You can use the two ways below to cast a Position3f Object to an [IBlockPos](/Vanilla/World/IBlockPos/) Object: Remember, for casting you need to [import](/AdvancedFunctions/Import/) the type you want to cast to unless you use the full name.

```zenscript
poseThree.asBlockPos();
IBlockPos;
```