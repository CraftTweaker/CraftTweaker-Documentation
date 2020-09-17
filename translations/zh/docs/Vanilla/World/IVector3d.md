# IVector3d

Vector3d对象是一个向量使用三倍方向的矢量。  
他们有几种实用方法和获取器。

## 导入类

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.world.IVector3d`

## 创建一个新的 IVector3d 对象

如果您发现自己需要创建一个新的 IVector3d 对象，您可以使用此方法：

```zenscript
//craftmilever.world.IVector3d.create(双倍，双倍，双倍z)；
craftbiner.world.IVector3d.create(0.0D，0.0D)；
```

## ZenGetters

| ZenGetter | 类型        |
| --------- | --------- |
| x         | 双精度       |
| 年         | 双精度       |
| z         | 双精度       |
| 已正常化      | IVector3d |

## ZenMethods

- 双倍dotProduct(IVector3d等)；
- IVector3d crossProduct(IVector3d other)；
- IVector3d 减法(IVector3d other)；
- IVector3d add(IVector3d other)；
- 双倍距离To(IVector3d等)；
- IVector3d 尺寸(双倍因子)；