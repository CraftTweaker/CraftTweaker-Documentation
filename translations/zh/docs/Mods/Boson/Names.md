# 博森地区的名称

在Minecraft中，大多数对象都是用唯一的名称识别的。 例如，项目使用其注册表名称来识别唯一的 并且不能存在多个具有相同注册表名称的项目。

Minecraft中的大多数名称遵循一个僵化的结构，这个结构由一个带有命名空间的字符串和一个由 冒号分隔的路径来标识(例如) `minecraft:iron_ingot`, 其中 `minecraft` 是命名空间, `iron_ingot` 是路径)。 在 CraftTweaker 中， 这些名字大多是原始字符串，但是在博森内部这个名字被吓倒。 事实上， 原始 `字符串` 的使用可能会使人们对一个方法调用是否需要一个具有命名空间的字符串感到困惑。 为此原因， 博森将非命名空间字符串和命名空间字符串的使用分开。

非命名空间字符串作为 `字符串`的实例，列于所有博森API中。 欲了解更多信息，请参考 ZenScript 文档。

命名空间字符串被代表为 `namesSpacedString`的实例，在所有Boson API中都是如此。 For more information on how to obtain such strings, refer to the next section.

## `名称SpacedString` 文档
`NameSpacedString` 类位于 `net.thesilkmin.mc.boson.zen.naming` 软件包。

### 创建一个新实例
有两种方式创建 `名称SpacedString`：使用出厂方法或投射 `字符串`。

工厂方法是建议采用的方法。 由于它是一种静态方法，它可以在类 实例上直接调用。 以下是方法签名及其用法示例：

```zenscript
function from (nameSpace as string?, path as string) as NameSpacedString;
```

```zenscript
NameSpacedString.from("minecraft", "iron_ingot"); // 等效于minecraft:iron_ingot
NameSpacedString.from(null, "iron_ingot"); // 使用默认命名空间 'minecraft'
```

The casting way relies instead on an explicit cast from a `string` to a `NameSpacedString` using the `as` operator in ZenScript:

```zenscript
“minecraft:iron_ingot”作为名称SpacedString；
```

### 参数
一个 `NameSpacedString` 通过属性提供只读访问其命名空间和路径：

| 属性名称   | 返回值类型 | 描述                                           |
| ------ | ----- | -------------------------------------------- |
| `名称空间` | `字符串` | 获取 `名称SpacedString` 的命名空间部分(例如， `Minecraft`) |
| `路径`   | `字符串` | 获取 `名称SpacedString` (例如 `iron_ingot`)        |

### 方法

#### `asString #作为字符串`
一个 `名称SpacedString` 可以通过使用 `asString` 方法转换为常规的 `字符串`。 下面是 方法签名及其用法示例：

```zenscript
函数 asString() 为字符串；
```

```zenscript
val nss = NameSpacedString("minecraft", "iron_ingot");
println(nss.asString()); // 打印'minecraft:iron_ingot' 到日志
```
