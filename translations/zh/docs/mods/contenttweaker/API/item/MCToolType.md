# MCToolType

A Tooltype is used to identify what kind of blocks a tool can mine, or inversely, what kind of tool is required to mine a given block.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.item.MCToolType
```

## 已实现的接口
MCToolType implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructor #构造函数
Constructs a ToolType object. If one with the given name already exists, they will internally point to the same toolType. Otherwise, a new one with the name is created (The same holds true for Brackets as well!)
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("pickaxe");
```
| 参数       | 返回值类型       | 描述                  |
| -------- | ----------- | ------------------- |
| name（名称） | 字符串[string] | The name to be used |



## 方法
### getName

Gets the name of this toolType. The name is what is used in the Bracket expression after the `<tooltype:`

Return type: String

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

Returns the object's hash code

Return type: int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

Get the string representation of this type. Is different from commandString!

Return type: String

```zenscript
<tooltype:pickaxe>.toString();
```


## 参数

| 名称            | 返回值类型  | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |
| name          | String | true       | false      |

## 运算符
### EQUALS

Compares if two given MCToolType objects are equal

```zenscript
<tooltype:pickaxe> == o as Object
<tooltype:pickaxe> == new MCToolType("pickaxe")
```

| 参数 | 返回值类型  | 描述               |
| -- | ------ | ---------------- |
| o  | Object | The other object |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | false       |

