# 材料组装供应商公司

您可以创建一个 MaterialPartColorSupplier 形成一个 [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 对象，然后将随时根据请求使用。

## 导入类

如果您需要导入他的类，您可以在这里：

```zenscript
导入mods.contenttweeper.MaterialPartColorSupplier;
```

## 静态方法

静态方法可以调用到包件，而不是在类实例上。

```zenscript
//mods.contenttweeper.MaterialPartColorSupplier.create(IMaterialPart materialPart)；
mods.contenttweer.MaterialPartColorSupplier.create(myMaterialPart)；
```