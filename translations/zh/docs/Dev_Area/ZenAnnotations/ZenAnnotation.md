# ZenAnnotation

ZenAnnotation 可以被提供给一个类或其方法以将其公开给 ZenScript。

## 类注解

这些注解可以被提供给 ZenClass

| 注解                                                                       | 值                                                               | 目标 | 信息                                                                        |
| ------------------------------------------------------------------------ | --------------------------------------------------------------- | -- | ------------------------------------------------------------------------- |
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | ZenClass 类名（如 `crafttweaker.item.IItemStack`），可以与正式的方法名不同       | 类  | 名称必须唯一                                                                    |
| [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)     | 被扩展的 ZenType 名（如 `crafttweaker.item.IItemStack`）                | 类  | 名称必须已经存在（你不能扩展不存在的 ZenType）                                               |
| [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                 | 类  | 用于自动注册这个类或扩展                                                              |
| [`@IterableList`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)         | 可迭代的 ZenClass 类名（如 `crafttweaker.mods.IMod`）                    | 类  | 需要可赋值给 `Iterable<Type>` 的类                                          |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | 键和值的可迭代的 ZenClass 类名（如 `string`，`crafttweaker.item.IItemStack`） | 类  | 需要可赋值给 `List<Type>` 的类                                              |
| [`@IterableSimple`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | 可迭代的 ZenClass 类名（如 `crafttweaker.mods.IMod`）                    | 类  | 需要可赋值给 `Map<KeyType, ValueType>` 的类                                 |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | 括号处理器的优先级（如 `priority = 19`）                                    | 类  | 需要可赋值给 `IBracketHandler` 的类                                               |
| [`@ModOnly`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)               | 需要的 mod 的名称（`isModLoaded(annotation.getValue())` 需要为 true）      | 类  | 与 [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) 结合使用 |

## 参数注解

这些注解可以被提供给方法的参数

| 注解                                                           | 目标 | 信息                        |
| ------------------------------------------------------------ | -- | ------------------------- |
| `@NotNull`                                                   | 参数 | 什么也不做（NYI）                |
| [`@Optional`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | 参数 | 表示参数是可选的。 可选参数在方法被调用时可以省略 |

## 方法注解

这些注解可以被提供给方法（包括静态的和非静态的）

| 注解                                                                         | 值                                     | 目标 |
| -------------------------------------------------------------------------- | ------------------------------------- | -- |
| [`@ZenCaster`](/Dev_Area/ZenAnnotations/Annotation_ZenCaster/)             |                                       | 方法 |
| [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)         | [操作器类型](/Dev_Area/ZenOperators/)      | 方法 |
| [`@ZenGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | getter 的名称（如 “name”）当被省略时，将使用没有()的方法名 | 方法 |
| [`@ZenSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | setter 的名称（如 “name”）当被省略时，将使用没有()的方法名 | 方法 |
| [`@ZenMemberGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                       | 方法 |
| [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                       | 方法 |
| [`@ZenMethod`](/Dev_Area/ZenAnnotations/Annotation_ZenMethod/)             |                                       | 方法 |
| [`@ZenMethodStatic`](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) |                                       | 方法 |
| [`@ZenDoc`](/Dev_Area/ZenAnnotations/Annotation_ZenDoc/)                   | 用于 `dumpZS` 的附加方法信息                   | 方法 |

## 字段注解

这些注解可以被提供给公开字段（包括静态的和非静态的）

| 注解                                                     | 目标 | 信息                              |
| ------------------------------------------------------ | -- | ------------------------------- |
| [`@ZenProperty`](/Dev_Area/ZenAnnotations/ZenMembers/) | 字段 | `@ZenSetter` 和 `@ZenGetter` 的结合 |