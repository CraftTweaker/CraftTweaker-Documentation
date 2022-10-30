# ReqType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.pmmo.ReqType;
```


## Implemented Interfaces
ReqType implements the following interfaces. That means all methods defined in these interfaces are also available in ReqType

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

ReqType is an enum. It has 14 enum constants. They are accessible using the code below.

```zenscript
<constant:pmmo:reqtype:wear>
<constant:pmmo:reqtype:use_enchantment>
<constant:pmmo:reqtype:tool>
<constant:pmmo:reqtype:weapon>
<constant:pmmo:reqtype:use>
<constant:pmmo:reqtype:place>
<constant:pmmo:reqtype:break>
<constant:pmmo:reqtype:kill>
<constant:pmmo:reqtype:travel>
<constant:pmmo:reqtype:ride>
<constant:pmmo:reqtype:tame>
<constant:pmmo:reqtype:breed>
<constant:pmmo:reqtype:interact>
<constant:pmmo:reqtype:entity_interact>
```
## Methods

:::group{name=getCommandString}

Return Type: string

```zenscript
// ReqType.getCommandString() as string

myReqType.getCommandString();
```

:::


## Properties

|     Name      |  Type  | Has Getter | Has Setter |
|---------------|--------|------------|------------|
| commandString | string | true       | false      |

