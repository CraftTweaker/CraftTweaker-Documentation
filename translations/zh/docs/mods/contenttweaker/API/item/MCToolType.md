# MCToolType

工具类型用于识别工具可以输入哪种类型的块， 或者反之，需要哪种工具来挖掘给定的方块。

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.item.MCToolType
```

## 已实现的接口
MCToolType 实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructor #构造函数
构造工具类型对象。 如果一个具有给定名称的工具已经存在，它们内部会指向相同的工具类型。 否则，将创建一个新的名字(同样适用于板块！)
```zenscript
新mods.contenttweeper.item.MCToolType(name as String);
新mods.contenttweeper.item.MCToolType("pickaxe");
```
| 参数 | 类型          | 描述     |
| -- | ----------- | ------ |
| 名称 | 字符串[string] | 要使用的名称 |



## 方法
### getName

获取此工具类型的名称。 名称是 `<工具类型之后在括号中的表达式中使用的名称：`

返回类型：字符串

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

返回对象的散列代码

返回类型：int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

获取此类型的字符串表达式。 不同于命令字符串！

返回类型：字符串

```zenscript
<tooltype:pickaxe>.toString();
```


## 参数

| 名称                   | 类型          | 可获得  | 可设置   |
| -------------------- | ----------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string] | true | false |
| 名称                   | 字符串[string] | true | false |

## 运算符
### EQUALS

如果给定的 MCToolType 对象是等效的

```zenscript
<tooltype:pickaxe> == o 为对象
<tooltype:pickaxe> == 新的 MCToolType("选择轴")
```

| 参数 | 类型 | 描述    |
| -- | -- | ----- |
| o  | 对象 | 另一个对象 |

## 卡斯特尔

| 结果类型        | 是否隐藏  |
| ----------- | ----- |
| 字符串[string] | false |

