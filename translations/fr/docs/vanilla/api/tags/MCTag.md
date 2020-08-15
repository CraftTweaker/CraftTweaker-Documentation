# MCTag

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.tag.MCTag
```

## Implemented Interfaces
MCTag implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

## Méthodes
### addBlocks

```zenscript
myMCTag.addBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Paramètre | Type de texte                                                   | Libellé                 |
| --------- | --------------------------------------------------------------- | ----------------------- |
| blocs     | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### addEntityTypes

```zenscript
myMCTag.addEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Paramètre | Type de texte                                                                | Libellé                 |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| Entités   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### addItems

```zenscript
myMCTag.addItems(items as crafttweaker.api.item.IItemStack[]);
```

| Paramètre | Type de texte                                                       | Libellé                 |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| Eléments  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |


### createBlockTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Returns [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### getRemainingItem

When this ingredient stack is crafted, what will remain in the grid? Does not check if the stack matches though! Used e.g. in CrT's net.minecraft.item.crafting.ICraftingRecipe

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé                                   |
| --------- | ----------------------------------------------------------------- | ----------------------------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to provide for this ingredient. |


### matches

Does the given stack match the ingredient?

Returns boolean

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé            |
| --------- | ----------------------------------------------------------------- | ------------------ |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | The stack to check |


### removeBlocks

```zenscript
myMCTag.removeBlocks(blocks as crafttweaker.api.block.MCBlock[]);
```

| Paramètre | Type de texte                                                   | Libellé                 |
| --------- | --------------------------------------------------------------- | ----------------------- |
| blocs     | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | No description provided |


### removeEntityTypes

```zenscript
myMCTag.removeEntityTypes(entities as crafttweaker.api.entity.MCEntityType[]);
```

| Paramètre | Type de texte                                                                | Libellé                 |
| --------- | ---------------------------------------------------------------------------- | ----------------------- |
| Entités   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | No description provided |


### removeItems

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Paramètre | Type de texte                                                       | Libellé                 |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| Eléments  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## Propriétés

| Nom                | Type de texte                                                                | Has Getter | Has Setter |
| ------------------ | ---------------------------------------------------------------------------- | ---------- | ---------- |
| blocs              | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | vrai       | Faux       |
| Chaîne de commande | Chaîne de caractères                                                         | vrai       | Faux       |
| entityTypes        | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | vrai       | Faux       |
| Eléments           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | vrai       | Faux       |

## Casters

| Result type                                                | Is Implicit |
| ---------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | vrai        |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | vrai        |

