# IVector3d

Vector3dオブジェクトは方向に3つのダブルスを使用するベクトルです。  
いくつかのユーティリティメソッドとゲッターがあります。

## クラスのインポート

エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.world.IVector3d`

## 新しいIVector3Dオブジェクトの作成

新しいIVector3dオブジェクトを作成する必要がある場合は、このメソッドを使用できます。

```zenscript
//crafttweaker.world.IVector3d.create(double x, double y, double z);
crafttweaker.world.IVector3d.create(0.0D, 0.0D, 0.0D);
```

## ZenGetters

| ZenGetter | タイプ       |
| --------- | --------- |
| x         | double    |
| y         | double    |
| z         | double    |
| 正規化       | IVector3d |

## ZenMethods

- dotProduct(IVector3dother);
- IVector3d crossProduct(IVector3d other);
- IVector3d subtract(IVector3d other);
- IVector3d add(IVector3d other);
- double distanceTo(IVector3d other);
- IVector3d scale(double factor);