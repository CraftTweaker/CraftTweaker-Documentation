# MCGame

Holds general game information. Can be accessed using the `game` global keyword

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.game.MCGame;
```


## Metodi

:::group{name=localize}



Returns: a localized String  
Return Type: string

```zenscript
// MCGame.localize(translationKey as string) as string

game.localize("gui.up");
```

| Parametro      | Tipo   | Descrizione             |
| -------------- | ------ | ----------------------- |
| translationKey | string | No Description Provided |


:::


## Proprietà

| Nome                  | Tipo                                                                                               | Ha Getter | Ha Setter | Descrizione             |
| --------------------- | -------------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| blockStates           | Collection&lt;[MCBlockState](/vanilla/api/block/MCBlockState)&gt;                      | sì        | no        | No Description Provided |
| blocks                | Collection&lt;[MCBlock](/vanilla/api/block/MCBlock)&gt;                                | sì        | no        | No Description Provided |
| directionAxises       | Collection&lt;[DirectionAxis](/vanilla/api/util/DirectionAxis)&gt;                     | sì        | no        | No Description Provided |
| effects               | Collection&lt;[MCPotionEffect](/vanilla/api/potions/MCPotionEffect)&gt;                | sì        | no        | No Description Provided |
| enchantments          | Collection&lt;[MCEnchantment](/vanilla/api/enchantment/MCEnchantment)&gt;              | sì        | no        | No Description Provided |
| entityClassifications | Collection&lt;[MCEntityClassification](/vanilla/api/entity/MCEntityClassification)&gt; | sì        | no        | No Description Provided |
| entityTypes           | Collection&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt;                   | sì        | no        | No Description Provided |
| fluids                | Collection&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt;                                | sì        | no        | No Description Provided |
| formattings           | Collection&lt;[TextFormatting](/vanilla/api/util/text/TextFormatting)&gt;              | sì        | no        | No Description Provided |
| items                 | Collection&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;                          | sì        | no        | No Description Provided |
| potions               | Collection&lt;[MCPotion](/vanilla/api/potions/MCPotion)&gt;                            | sì        | no        | No Description Provided |
| recipeTypes           | Collection&lt;[IRecipeManager](/vanilla/api/managers/IRecipeManager)&gt;               | sì        | no        | No Description Provided |
| villagerProfessions   | Collection&lt;[MCVillagerProfession](/vanilla/api/villager/MCVillagerProfession)&gt;   | sì        | no        | No Description Provided |

