# Ingrédient

This is IIngredient!!!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.IIngredient
```

## Implemented Interfaces
IIngredient implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<tag:ingotIron>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé                                   |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Returns boolean

```zenscript
<tag:ingotIron>.matches(stack as crafttweaker.api.item.IItemStack);
<tag:ingotIron>.matches(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé            |
| --------- | ----------------------------------------------------------------- | ------------------ |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |



## Propriétés

| Nom                | Type de texte                                                       | Has Getter | Has Setter |
| ------------------ | ------------------------------------------------------------------- | ---------- | ---------- |
| Chaîne de commande | Chaîne de caractères                                                | vrai       | Faux       |
| Eléments           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | vrai       | Faux       |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | vrai        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | vrai        |

