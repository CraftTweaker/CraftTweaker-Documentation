# IItemStack

This represents an item. It can be retrieved using an Item BEP. Is an [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.IItemStack
```

## Implemented Interfaces
IItemStack implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Méthodes
### clearCustomName

Clears any custom name set for this ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé                                   |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Returns boolean

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé            |
| --------- | ----------------------------------------------------------------- | ------------------ |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### setDisplayName

Sets the display name of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totally not dirt");
```

| Paramètre | Type de texte        | Libellé                |
| --------- | -------------------- | ---------------------- |
| Nom       | Chaîne de caractères | New name of the stack. |


### withDamage

Sets the damage of the ItemStack

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(damage as int);
<item:minecraft:dirt>.withDamage(10);
```

| Paramètre     | Type de texte | Libellé              |
| ------------- | ------------- | -------------------- |
| endommagement | Indice        | the new damage value |


### withTag

Sets the tag for the ItemStack.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Paramètre | Type de texte                                          | Libellé         |
| --------- | ------------------------------------------------------ | --------------- |
| Étiquette | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The tag to set. |



## Propriétés

| Nom                | Type de texte                                                       | Has Getter | Has Setter |
| ------------------ | ------------------------------------------------------------------- | ---------- | ---------- |
| montant            | Indice                                                              | vrai       | Faux       |
| temps de brûlure   | Indice                                                              | vrai       | vrai       |
| Chaîne de commande | Chaîne de caractères                                                | vrai       | Faux       |
| endommagable       | boolean                                                             | vrai       | Faux       |
| damaged            | boolean                                                             | vrai       | Faux       |
| nomdeaffichage     | Chaîne de caractères                                                | vrai       | Faux       |
| vide               | boolean                                                             | vrai       | Faux       |
| food               | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | vrai       | vrai       |
| getOrCreate        | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | vrai       | Faux       |
| getRepairCost      | Indice                                                              | vrai       | Faux       |
| hasDisplayName     | boolean                                                             | vrai       | Faux       |
| hasEffect          | boolean                                                             | vrai       | Faux       |
| format@@0 hasTag   | boolean                                                             | vrai       | Faux       |
| isCrossbow         | boolean                                                             | vrai       | Faux       |
| est enchantable    | boolean                                                             | vrai       | Faux       |
| est enchanté       | boolean                                                             | vrai       | Faux       |
| Eléments           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | vrai       | Faux       |
| maxDamage          | Indice                                                              | vrai       | Faux       |
| maxStackSize       | Indice                                                              | vrai       | Faux       |
| registryName       | Chaîne de caractères                                                | vrai       | Faux       |
| stackable          | boolean                                                             | vrai       | Faux       |
| Étiquette          | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | vrai       | Faux       |
| translationKey     | Chaîne de caractères                                                | vrai       | Faux       |
| useDuration        | Indice                                                              | vrai       | Faux       |

## Opérateurs
### MUL

Sets the amount of the ItemStack

```zenscript
<item:minecraft:dirt> * amount as int
<item:minecraft:dirt> * 3
```

| Paramètre | Type de texte | Libellé    |
| --------- | ------------- | ---------- |
| montant   | Indice        | new amount |

## Casters

| Result type                                                       | Is Implicit |
| ----------------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | vrai        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | vrai        |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Faux        |

