# MCToolType

A ToolType is used to identify what kind of blocks a tool can mine, or inversely, what kind of tool is required to mine a given block.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.MCToolType;
```


## 已实现的接口
MCToolType implements the following interfaces. That means all methods defined in these interfaces are also available in MCToolType

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)
## Constructor #构造函数

Constructs a ToolType object. If one with the given name already exists, they will internally point to the same toolType. Otherwise, a new one with the name is created (The same holds true for Brackets as well!)
```zenscript
new MCToolType(name as string) as MCToolType
new MCToolType("pickaxe");
```
| 参数   | 类型     | 描述                  |
| ---- | ------ | ------------------- |
| name | string | The name to be used |


## Casters

| 结果类型   | 是否隐藏  |
| ------ | ----- |
| string | false |

## 方法

### getName

Gets the name of this toolType. The name is what is used in the Bracket expression after the `<toolType:`

Return Type: string

```zenscript
MCToolType.getName() as string
<toolType:pickaxe>.getName();
```
### hashCode

Returns the object's hash code

Return Type: int

```zenscript
MCToolType.hashCode() as int
<toolType:pickaxe>.hashCode();
```
### toString

Get the string representation of this type. Is different from commandString!

Return Type: string

```zenscript
MCToolType.toString() as string
<toolType:pickaxe>.toString();
```

## 运算符

### EQUALS

Compares if two given MCToolType objects are equal

```zenscript
myMCToolType == o as Object
<toolType:pickaxe> == new MCToolType("pickaxe")
```



## 参数

| 名称   | 类型     | 可获得  | 可设置   |
| ---- | ------ | ---- | ----- |
| name | string | true | false |

