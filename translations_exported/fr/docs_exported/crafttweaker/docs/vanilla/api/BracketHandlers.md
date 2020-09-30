# BracketHandlers

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.BracketHandlers
```

## Methods
### getBlockMaterial

Obtient le [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) fourni. Lance une exception si elle est introuvable.

 Renvoie : `Le [crafttweaker.api.block.material.MCMaterial]trouvé (/vanilla/api/block/material/MCMaterial)`

Type de retour : [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

crafttweaker.api.BracketHandlers.getBlockMaterial(tokens as String);
crafttweaker.api.BracketHandlers.getBlockMaterial("earth");
```

| Parameter | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| tokens    | String | Ce que vous écririez dans l'appel BEP. |


### getBlockState

Crée un Blockstate basé sur les entrées données. Retourne `null` s'il ne peut pas trouver le bloc, des variantes invalides ignorées

 Renvoie : `Le BlockState trouvé`

Type de retour : [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

crafttweaker.api.BracketHandlers.getBlockState(tokens as String);
crafttweaker.api.BracketHandlers.getBlockState("minecraft:acacia_planks");
```

| Parameter | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| tokens    | String | L'emplacement des ressources et les variantes du bloc |


### getDirectionAxis

Obtient la direction Axis basée sur le nom. Lance une erreur s'il ne peut pas trouver l'axe de direction.

 Renvoie : `L'axe de direction trouvé`

Type de retour : [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

crafttweaker.api.BracketHandlers.getDirectionAxis(tokens as String);
crafttweaker.api.BracketHandlers.getDirectionAxis("x");
```

| Parameter | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| tokens    | String | La direction de l'emplacement des ressources de l'axe |


### Obtenir Effet

Obtient l'effet basé sur le nom du registre. Lance une erreur si elle ne peut pas trouver l'effet.

 Renvoie : `L'effet trouvé`

Type de retour : [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

crafttweaker.api.BracketHandlers.getEffect(tokens as String);
crafttweaker.api.BracketHandlers.getEffect("minecraft:haste");
```

| Parameter | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| tokens    | String | L'emplacement de la ressource de l'effet |


### format@@0 getEntityClassification

Obtient la classification des entités en fonction du nom du registre. Enregistre une erreur et renvoie `null` s'il ne peut pas trouver l'entityClassification.

 Renvoie : `La Classification de l'entité trouvée`

Type de retour : [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

crafttweaker.api.BracketHandlers.getEntityClassification(tokens as String);
crafttweaker.api.BracketHandlers.getEntityClassification("monster");
```

| Parameter | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| tokens    | String | Emplacement des ressources de l'entité |


### getEntityType

Récupère l'entityType basé sur le nom du registre. Enregistre une erreur et retourne `null` s'il ne peut pas trouver l'entityType.

 Renvoie : `Le type d'entité trouvé`

Type de retour : [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

crafttweaker.api.BracketHandlers.getEntityType(tokens as String);
crafttweaker.api.BracketHandlers.getEntityType("minecraft:pig");
```

| Parameter | Type   | Description                               |
| --------- | ------ | ----------------------------------------- |
| tokens    | String | L'emplacement de la ressource de l'entité |


### getFluidStack

Obtient la pile de fluide basée sur le nom du registre. Lance une erreur s'il ne peut pas trouver le fluide.

 Renvoie : `Une pile du liquide avec une quantité == 1mb`

Type de retour : [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

crafttweaker.api.BracketHandlers.getFluidStack(tokens as String);
crafttweaker.api.BracketHandlers.getFluidStack("minecraft:water");
```

| Parameter | Type   | Description                           |
| --------- | ------ | ------------------------------------- |
| tokens    | String | L'emplacement des ressources du Fluid |


### getItem

Récupère l'élément en fonction du nom du registre. Lance une erreur s'il ne peut pas trouver l'objet.

 Renvoie : `L'élément trouvé`

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

crafttweaker.api.BracketHandlers.getItem(tokens as String);
crafttweaker.api.BracketHandlers.getItem("minecraft:dirt");
```

| Parameter | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| tokens    | String | Emplacement de la ressource de l'élément |


### format@@0 getPotion

Type de retour : [crafttweaker.api.potion.MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
crafttweaker.api.BracketHandlers.getPotion(tokens comme String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | String | No description provided |


### Obtenir un gestionnaire de recettes

Obtient le recipeManager basé sur le nom du registre. Lance une erreur s'il ne peut pas trouver le Gestionnaire de recettes. Lance une expulsion si le type de recette indiqué est introuvable. <p> Cela retournera toujours IRecipeManager.<br> Il y a aussi un BEP pour cela mais cela fonctionne différemment donc il ne peut pas être ajouté automatiquement à la documentation ici. Mais le BEP ressemble aux autres : `<recipetype:minecraft:crafting>`

 Renvoie : `Le gestionnaire de recettes trouvé`

Type de retour : [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttweaker.api.BracketHandlers.getRecipeManager(tokens as String);
crafttweaker.api.BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Parameter | Type   | Description                                              |
| --------- | ------ | -------------------------------------------------------- |
| tokens    | String | L'emplacement des ressources du Gestionnaire de recettes |


### Obtenir la localisation des ressources

Crée un emplacement de ressource basé sur les jetons. Lance une erreur si les jetons ne sont pas un emplacement valide.

 Renvoie : `L'emplacement`

Type de retour : [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

crafttweaker.api.BracketHandlers.getResourceLocation(tokens as String);
crafttweaker.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| tokens    | String | L'emplacement de la ressource |


### format@@0 getTag

Obtient la balise basée sur le nom du registre. Créera une balise vide si aucune balise n'est trouvée.<br> Cependant, dans un tel cas, vous devez enregistrer le tag comme type approprié

 Renvoie : `La balise trouvée, ou une balise nouvellement créée`

Type de retour : [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

crafttweaker.api.BracketHandlers.getTag(tokens as String);
crafttweaker.api.BracketHandlers.getTag("tag:minecraft:wool");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| tokens    | String | Emplacement des ressources du tag |


### Formatage de texte

Type de retour : [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
crafttweaker.api.BracketHandlers.getTextFormatting(tokens as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tokens    | String | No description provided |



