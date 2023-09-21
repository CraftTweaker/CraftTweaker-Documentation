# HeatCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.create.HeatCondition;
```


## Enum Constants

HeatCondition is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
<constant:create:heat_condition:none>
<constant:create:heat_condition:heated>
<constant:create:heat_condition:superheated>
```
## Methods

:::group{name=getColor}

Gets the color of this heat condition.

Returns: The color of this heat condition.  
Return Type: int

```zenscript
// HeatCondition.getColor() as int

myHeatCondition.getColor();
```

:::

:::group{name=getCommandString}

Return Type: string

```zenscript
// HeatCondition.getCommandString() as string

myHeatCondition.getCommandString();
```

:::

:::group{name=getTranslationKey}

Gets the translation key of this heat condition.

Returns: The translation key of this heat condition.  
Return Type: string

```zenscript
// HeatCondition.getTranslationKey() as string

myHeatCondition.getTranslationKey();
```

:::


## Properties

|      Name      |  Type  | Has Getter | Has Setter |                   Description                    |
|----------------|--------|------------|------------|--------------------------------------------------|
| color          | int    | true       | false      | Gets the color of this heat condition.           |
| commandString  | string | true       | false      |                                                  |
| translationKey | string | true       | false      | Gets the translation key of this heat condition. |

