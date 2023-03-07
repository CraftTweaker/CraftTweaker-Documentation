# ChiselMode

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.api.ChiselMode;
```


## Implemented Interfaces
ChiselMode implements the following interfaces. That means all methods defined in these interfaces are also available in ChiselMode

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

ChiselMode is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
<constant:tfc:chisel_mode:smooth>
<constant:tfc:chisel_mode:stair>
<constant:tfc:chisel_mode:slab>
```
## Methods

:::group{name=getCommandString}

Return Type: string

```zenscript
// ChiselMode.getCommandString() as string

myChiselMode.getCommandString();
```

:::


## Properties

|     Name      |  Type  | Has Getter | Has Setter |
|---------------|--------|------------|------------|
| commandString | string | true       | false      |

