# MCAxisAlignedBB

MineCraft Axis Aligned Boxオブジェクトを使用すると、 [Blockの](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) 境界線を指定した立方体形状に変更できます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.AxisAlignedBB;`

## MCAxisAlignedBBBオブジェクトの呼び出し

You can get such an object using a [Block's](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) `axisAlignedBB` Property.  
Alternatively, you can use this package to create a new MCAxisAlignedBB object:

```zenscript
AxisAlignedBB.create(double minX, double minY, double minZ, double maxX, double maxZ);
```

この関数のすべてのパラメータは0から1の間で倍になります!

## ZenProperties

`getProperty()` または `object.property` を使用して、それぞれのプロパティを取得して設定できます。

| ZenProperty | タイプ    |
| ----------- | ------ |
| minX        | double |
| minY        | double |
| minZ        | double |
| maxX        | double |
| 最大Y         | double |
| maxZ        | double |