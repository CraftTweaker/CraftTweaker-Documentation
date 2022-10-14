::since{version=1.1.0}
# JeiIngredient

Represents any ingredient used in JEI.

 JEI identifies as an ingredient everything that can be used in any type of recipe, both as input and as output. Even elements in information boxes are considered ingredients. The JEI user interface renders by default a list of all available ingredients on the right side of any menu.

 Most things you interact with in scripts normally can already freely convert to a JEI ingredient without any additional help. Refer to **invalid**#asJeiIngredient(IFluidStack) and **invalid**#asJeiIngredient(IItemStack) for more information.

 Moreover, other types can automatically convert to an array of JEI ingredients, for even less boilerplate and ease of usage. Refer to **invalid**#asJeiIngredientArray(com.blamejared.crafttweaker.api.ingredient.IIngredient) and **invalid**#asJeiIngredientArray(KnownTag) for more information.<strong>For mod developers:</strong> do not use this class internally, use the generic version.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.component.JeiIngredient;
```


## Implemented Interfaces
JeiIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in JeiIngredient

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Methoden

:::group{name=getCommandString since="1.1.0"}

Return Type: string

```zenscript
// JeiIngredient.getCommandString() as string

myJeiIngredient.getCommandString();
```

:::


## Properties

| Name          | Type   | Has Getter | Has Setter | Beschreibung            |
| ------------- | ------ | ---------- | ---------- | ----------------------- |
| commandString | string | true       | false      | No Description Provided |

