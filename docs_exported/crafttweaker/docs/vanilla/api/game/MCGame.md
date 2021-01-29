# MCGame

Holds general game information.
 Can be accessed using the `game` global keyword

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.game.MCGame;
```


## Methods

### localize



Return Type: string

```zenscript
MCGame.localize(translationKey as string) as string
```
| Parameter | Type | Description |
|-----------|------|-------------|
| translationKey | string | No Description Provided |


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| directionAxises | Collection&lt;[DirectionAxis](/vanilla/api/util/DirectionAxis)&gt; | true | false |
| effects | Collection&lt;[MCPotionEffect](/vanilla/api/potions/MCPotionEffect)&gt; | true | false |
| entityClassifications | Collection&lt;[MCEntityClassification](/vanilla/api/entity/MCEntityClassification)&gt; | true | false |
| entityTypes | Collection&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true | false |
| fluids | Collection&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt; | true | false |
| formattings | Collection&lt;[TextFormatting](/vanilla/api/util/text/TextFormatting)&gt; | true | false |
| items | Collection&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true | false |
| potions | Collection&lt;[MCPotion](/vanilla/api/potions/MCPotion)&gt; | true | false |
| recipeTypes | Collection&lt;[IRecipeManager](/vanilla/api/managers/IRecipeManager)&gt; | true | false |

