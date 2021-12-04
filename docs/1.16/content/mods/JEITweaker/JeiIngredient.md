::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# Jei Ingredient

Represents any ingredient used in JEI.

## Package

`mods.jei.component.JeiIngredient`

## Description

JEI identifies as an ingredient everything that can be used in any type of recipe, both as input and as output.
Even elements in information boxes are considered ingredients. The JEI user interface renders by default a list of all available ingredients on the right side of any menu.

Most things you interact with in scripts normally can already freely convert to a JEI ingredient without any additional help.


For mod developers: Do not use this class internally, use the generic version.

For users: Most objects you have at your disposal can be implictly casted to this type, so using an IItemStack, IIngredient, Tag or Fluids should work as a JeiIngredient parameter.

## Casts

All casts related to `JeiIngredient`s are implicit.

A `JeiIngredient` object can be casted **FROM**:

- `IItemStack`
- `IFluidStack`
- `IIngredient`
- `MCTag<MCItemDefinition>` also known as ItemTags


A `JeiIngredient` object can be casted **TO**:

- `JeiDrawable`

