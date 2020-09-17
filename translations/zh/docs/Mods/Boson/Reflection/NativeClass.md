# `原生类`

一个 `原生类` 识别了ZenScript 后端环境类的实例。 在 CraftTweaker, `NativeClass` 因此代表了一个 Java 类。

## 类详细信息
The class is situated in the `zenscriptx.reflect` package, making `zenscriptx.reflect.NativeClass` the fully qualified name for importing.

## 创建一个新实例
创建新的 `原生类` 实例的唯一可能的方法是通过两个静态方法之一。 要检查的对象是 要检查的对象。 下面的狙击枪显示了可以使用 的两种方法的特征：

```zenscript
函数字节名称(名称为字符串)为NativeClass?;
函数来自Zen(实例)为NativeClass？
```

这两种方法都允许返回 `null` (如 `所示？` 在类型末尾，因为 某些类可能不存在或不存在后端对应类。 事实上，某些特定的伴侣关系数组可能在 后端无法代表，因此需要正确使用某些管道。

以下是使用两种工厂方法的一些例子：

```zenscript
NativeClass.byname ("craftminstrer.api.item.IItemStack"); # 返回给定名称
NativeClass。 romZen(<blockstate:minecraft:pumpkin>); # 返回匹配ZenScript IBlockState类
Native类的原生类。 yName("123"); # 返回 null ，因为没有具有该名称的本地类
```

## 参数
`原生类` 提供只读访问特定的特定属性，如下表所示：

| 属性名称         | 返回值类型 | 描述                                                                                                          |
| ------------ | ----- | ----------------------------------------------------------------------------------------------------------- |
| `simpleName` | `字符串` | 可用于参考类的"最短"名称(例如： `制作器的 <code>IItemStack` )。 pi.item.IItemStack</code>, `String` for `java.lang.String`) |
| `限定名称`       | `字符串` | 在后端环境中唯一识别此类的全名(即 `craftbiner.api.item.IItemStack` or `java.lang.String`)                                   |

## 方法
`原生类` 也可以访问允许转换为 ZenScript 等效的单个方法 (参考 [`类`](/Mods/Boson/Reflection/Class/) 获取更多信息)。 方法签名如下：

```zenscript
函数 toClass() 为类？
```

这个方法可能返回 `null` ，因为并非所有的本地类都可能在 ZenScript 中都有代表。 事实上，有 个后端的部分没有接触到ZenScript 用户，例如 `org.apache.commons。 ang3.BitField`因此 不能通过ZenScript `类` 对象来表示它。
