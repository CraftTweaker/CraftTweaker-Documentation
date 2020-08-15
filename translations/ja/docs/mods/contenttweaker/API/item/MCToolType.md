# MCToolType

A Tooltype is used to identify what kind of blocks a tool can mine, or inversely, what kind of tool is required to mine a given block.

This class was added by a mod with mod-id `contenttweaker`. 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
mods.contenttweaker.item.MCToolType
```

## Implemented Interfaces
MCToolType implements the following interfaces. つまり、これらのクラスで使用できるすべてのメソッドをこのクラスで使用することができます。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
Constructs a ToolType object. If one with the given name already exists, they will internally point to the same toolType. Otherwise, a new one with the name is created (The same holds true for Brackets as well!)
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("pickaxe");
```
| パラメータ | タイプ  | 説明                  |
| ----- | ---- | ------------------- |
| name  | 文字列型 | The name to be used |



## メソッド
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


## プロパティー

| 名称            | タイプ  | Has Getter | Has Setter |
| ------------- | ---- | ---------- | ---------- |
| commandString | 文字列型 | true       | false      |
| 名前            | 文字列型 | true       | false      |

## 演算子
### EQUALS

Compares if two given MCToolType objects are equal

```zenscript
<tooltype:pickaxe> == o as Object
<tooltype:pickaxe> == new MCToolType("pickaxe")
```

| パラメータ | タイプ    | 説明               |
| ----- | ------ | ---------------- |
| o     | Object | The other object |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| 文字列型        | false       |

