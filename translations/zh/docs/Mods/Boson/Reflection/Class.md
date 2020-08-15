# `类`

`类` 识别了一个单一类型的 ZenScript 的实例。 ZenScript 里几乎所有东西都是类的实例， 事实上， 是一个 `IItemStack` (这是该类的实例)，还是数组字符串( 是 `字符串的实例`)。

## 类详细信息
The class is situated in the `zenscriptx.reflect` package, making `zenscriptx.reflect.Class` the fully qualified name for importing.

## 创建一个新实例
创建新的 `类` 实例的唯一可能方法是通过两个静态方法之一。 需要检查类的 名称或对象的名称。 下面的狙击枪显示了可以使用 的两种方法的特征：

```zenscript
函数byname(名称为字符串)作为类?;
函数从(实例)作为类？
```

这两种方法都允许返回 `null` (如 `所示？` 在类型末尾, 因为有些类有 的 `类` 有可能不使用 ZenScript 等效或实际上无法代表 ` 类 ` 。

以下是使用两种工厂方法的一些例子：

```zenscript
Class.byname ("craftminstrer.item.IItemStack"); # 返回表示IItemStack
分类的类。 rom(<blockstate:minecraft:pumpkin>); # 返回表示IBlockState
类别的类。 yName("123"); # 返回 null 因为没有具有该名称的类 (或该名称可能存在)
```

## 参数
`类` 提供只读访问特定组属性的权限，如下表所示：

| 属性名称         | 返回值类型 | 描述                                                                                           |
| ------------ | ----- | -------------------------------------------------------------------------------------------- |
| `simpleName` | `字符串` | 可用于参考类的"最短"名称(例如： `制作器的 <code>IItemStack` )。 temIItemStack</code>, `string` for `string`) |
| `限定名称`       | `字符串` | 在ZenScript 环境中唯一识别此类类的全名(例如 `craftbiner.item.IItemStack` 或 `字符串`)                            |

## 方法
`类` 也提供访问允许转换为“原生”等效的单一方法的权限(参见 [`原生类`](/Mods/Boson/Reflection/NativeClass/) 获取更多信息)。 方法签名如下：

```zenscript
函数 toNativeClass() 为 NativeClass?;
```

方法可能返回 `null` 因为并非所有的 ZenScript 类型可能具有对应的本地，例如 某些联系人 数组在本土环境中的代表性可能不完全，需要一些精炼。
