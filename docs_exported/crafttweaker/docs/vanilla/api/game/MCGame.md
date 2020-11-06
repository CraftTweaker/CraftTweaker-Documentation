# MCGame

Holds general game information.
 Can be accessed using the `game` global keyword

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
crafttweaker.api.game.MCGame
```

## Methods
### localize

Returns: `a localized String`

Return type: String

```zenscript
game.localize(translationKey as String);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| translationKey | String | No description provided |



## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| blockTags | Collection&lt;[crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)&gt; | true | false |
| directionAxises | Collection&lt;[crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)&gt; | true | false |
| effects | Collection&lt;[crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)&gt; | true | false |
| entityClassifications | Collection&lt;[crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)&gt; | true | false |
| entityTags | Collection&lt;[crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)&gt; | true | false |
| entityTypes | Collection&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true | false |
| fluids | Collection&lt;[crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt; | true | false |
| formattings | Collection&lt;[crafttweaker.api.text.TextFormatting](/vanilla/api/util/text/TextFormatting)&gt; | true | false |
| itemTags | Collection&lt;[crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)&gt; | true | false |
| items | Collection&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | true | false |
| potions | Collection&lt;[crafttweaker.api.potion.MCPotion](/vanilla/api/potions/MCPotion)&gt; | true | false |
| recipeTypes | Collection&lt;[crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)&gt; | true | false |

