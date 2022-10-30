# ObjectType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.pmmo.ObjectType;
```


## Implemented Interfaces
ObjectType implements the following interfaces. That means all methods defined in these interfaces are also available in ObjectType

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

ObjectType is an enum. It has 7 enum constants. They are accessible using the code below.

```zenscript
<constant:pmmo:objecttype:item>
<constant:pmmo:objecttype:block>
<constant:pmmo:objecttype:entity>
<constant:pmmo:objecttype:dimension>
<constant:pmmo:objecttype:biome>
<constant:pmmo:objecttype:enchantment>
<constant:pmmo:objecttype:player>
```
## Methods

:::group{name=getCommandString}

Return Type: string

```zenscript
// ObjectType.getCommandString() as string

myObjectType.getCommandString();
```

:::


## Properties

|     Name      |  Type  | Has Getter | Has Setter |
|---------------|--------|------------|------------|
| commandString | string | true       | false      |

