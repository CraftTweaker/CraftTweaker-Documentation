# MCToolType

A Tooltype is used to identify what kind of blocks a tool can mine, or inversely, what kind of tool is required to mine a given block.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.item.MCToolType
```

## Implemented Interfaces
MCToolType implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
Constructs a ToolType object. If one with the given name already exists, they will internally point to the same toolType. Otherwise, a new one with the name is created (The same holds true for Brackets as well!)
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("pickaxe");
```
| Parameter | Type   | Description         |
| --------- | ------ | ------------------- |
| name      | String | The name to be used |



## Methods
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


## Properties

| Name          | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |
| name          | String | true       | false      |

## Operators
### EQUALS

Compares if two given MCToolType objects are equal

```zenscript
<tooltype:pickaxe> == o as Object
<tooltype:pickaxe> == new MCToolType("pickaxe")
```

| Parameter | Type   | Description      |
| --------- | ------ | ---------------- |
| o         | Object | The other object |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | false       |

