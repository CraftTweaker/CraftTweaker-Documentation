# `TagType`

`标签类型` 指明了可以存储在给定的 [中的物品类型`标签`](/Mods/Boson/Tags/Tag/)。 It also hosts some additional read-only data that identifies a certain set of mnemonics that help identify a type in a more human-friendly way.

## 班级详细信息
该类位于 `net.thesilkmin.mc.boson.zen.tags` 包，生成 `net.thesilkminer.mc.boson.zen.tag.TagType` 其完全合格的名称用于导入。

## 创建一个新实例
无法从 CraftTweaker 创建一个原始标签类型的新实例。 不过仍然可以通过其属性获得 个给定的 `标签` 类型。 更多 信息，请参阅 [文档 `标签`](/Mods/Boson/Tags/Tag/)。

### 已知的 `标签类型` 实例
默认情况下博桑已经创建了一组特定的标签类型， 可用于 [括号处理程序](/Mods/Boson/Tags/BracketHandler/) 获取 `标签`s 或 `标签成分`s的实例。 这些mnemonics 写在下表：

| 分钟数      | 存储的对象                                         |
| -------- | --------------------------------------------- |
| `blocks` | [`IBlockState`](/Vanilla/Blocks/IBlockState/) |
| `流体`     | 目前无法通过 CraftTweaker 访问                        |
| `项目`     | [`IItemStack`](/Vanilla/Items/IItemStack/)    |

## 参数
`TagType` 提供了只读访问特定组属性的权限，如下表所示：

| 属性名称            | 返回值类型                                                            | 描述                           |
| --------------- | ---------------------------------------------------------------- | ---------------------------- |
| `directoryName` | `字符串`                                                            | JSON标签在数据包中的目录名称             |
| `名称`            | `字符串`                                                            | 识别给定标签类型的Mnemon语法；用于标签括号处理程序 |
| `classType`     | [`类`](/Mods/Boson/Reflection/Class/)                             | 存储在标签中的对象类型                  |
| `转换函数`          | [`函数<NameSpacedString, any>`](/Mods/Boson/Functions/List/) | 将名称转换为标签元素                   |
