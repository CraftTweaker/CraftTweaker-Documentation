# ForgeRule

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.api.ForgeRule;
```


## Enum Constants

ForgeRule is an enum. It has 30 enum constants. They are accessible using the code below.

```zenscript
<constant:tfc:forge_rule:hit_any>
<constant:tfc:forge_rule:hit_not_last>
<constant:tfc:forge_rule:hit_last>
<constant:tfc:forge_rule:hit_second_last>
<constant:tfc:forge_rule:hit_third_last>
<constant:tfc:forge_rule:draw_any>
<constant:tfc:forge_rule:draw_last>
<constant:tfc:forge_rule:draw_not_last>
<constant:tfc:forge_rule:draw_second_last>
<constant:tfc:forge_rule:draw_third_last>
<constant:tfc:forge_rule:punch_any>
<constant:tfc:forge_rule:punch_last>
<constant:tfc:forge_rule:punch_not_last>
<constant:tfc:forge_rule:punch_second_last>
<constant:tfc:forge_rule:punch_third_last>
<constant:tfc:forge_rule:bend_any>
<constant:tfc:forge_rule:bend_last>
<constant:tfc:forge_rule:bend_not_last>
<constant:tfc:forge_rule:bend_second_last>
<constant:tfc:forge_rule:bend_third_last>
<constant:tfc:forge_rule:upset_any>
<constant:tfc:forge_rule:upset_last>
<constant:tfc:forge_rule:upset_not_last>
<constant:tfc:forge_rule:upset_second_last>
<constant:tfc:forge_rule:upset_third_last>
<constant:tfc:forge_rule:shrink_any>
<constant:tfc:forge_rule:shrink_last>
<constant:tfc:forge_rule:shrink_not_last>
<constant:tfc:forge_rule:shrink_second_last>
<constant:tfc:forge_rule:shrink_third_last>
```
## Methods

:::group{name=getCommandString}

Return Type: string

```zenscript
// ForgeRule.getCommandString() as string

myForgeRule.getCommandString();
```

:::


## Properties

|     Name      |  Type  | Has Getter | Has Setter |
|---------------|--------|------------|------------|
| commandString | string | true       | false      |

