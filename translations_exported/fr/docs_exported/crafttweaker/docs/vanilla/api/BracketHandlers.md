# Gestionnaires de tranches

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.BracketHandlers
```

## Méthodes
### getBlockMaterial

Obtient le [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) fourni. Lance une exception si elle est introuvable.

 Renvoie : `Le [crafttweaker.api.block.material.MCMaterial]trouvé (/vanilla/api/block/material/MCMaterial)`

Type de retour : [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

crafttweaker.api.BracketHandlers.getBlockMaterial(tokens as String);
crafttweaker.api.BracketHandlers.getBlockMaterial("earth");
```

| Paramètre | Type de texte        | Libellé                                |
| --------- | -------------------- | -------------------------------------- |
| jetons    | Chaîne de caractères | Ce que vous écririez dans l'appel BEP. |


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

| Paramètre | Type de texte        | Libellé                                               |
| --------- | -------------------- | ----------------------------------------------------- |
| jetons    | Chaîne de caractères | L'emplacement des ressources et les variantes du bloc |


### getDirectionAxis

Obtient la direction Axis basée sur le nom. Lance une erreur s'il ne peut pas trouver l'axe de direction.

 Renvoie : `L'axe de direction trouvé`

Type de retour : [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

crafttweaker.api.BracketHandlers.getDirectionAxis(tokens as String);
crafttweaker.api.BracketHandlers.getDirectionAxis("x");
```

| Paramètre | Type de texte        | Libellé                                               |
| --------- | -------------------- | ----------------------------------------------------- |
| jetons    | Chaîne de caractères | La direction de l'emplacement des ressources de l'axe |


### Obtenir Effet

Obtient l'effet basé sur le nom du registre. Lance une erreur si elle ne peut pas trouver l'effet.

 Renvoie : `L'effet trouvé`

Type de retour : [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

crafttweaker.api.BracketHandlers.getEffect(tokens as String);
crafttweaker.api.BracketHandlers.getEffect("minecraft:haste");
```

| Paramètre | Type de texte        | Libellé                                  |
| --------- | -------------------- | ---------------------------------------- |
| jetons    | Chaîne de caractères | L'emplacement de la ressource de l'effet |


### format@@0 getEntityClassification

Obtient la classification des entités en fonction du nom du registre. Enregistre une erreur et renvoie `null` s'il ne peut pas trouver l'entityClassification.

 Renvoie : `La Classification de l'entité trouvée`

Type de retour : [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

crafttweaker.api.BracketHandlers.getEntityClassification(tokens as String);
crafttweaker.api.BracketHandlers.getEntityClassification("monster");
```

| Paramètre | Type de texte        | Libellé                                |
| --------- | -------------------- | -------------------------------------- |
| jetons    | Chaîne de caractères | Emplacement des ressources de l'entité |


### getEntityType

Récupère l'entityType basé sur le nom du registre. Enregistre une erreur et retourne `null` s'il ne peut pas trouver l'entityType.

 Renvoie : `Le type d'entité trouvé`

Type de retour : [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

crafttweaker.api.BracketHandlers.getEntityType(tokens as String);
crafttweaker.api.BracketHandlers.getEntityType("minecraft:pig");
```

| Paramètre | Type de texte        | Libellé                                   |
| --------- | -------------------- | ----------------------------------------- |
| jetons    | Chaîne de caractères | L'emplacement de la ressource de l'entité |


### getFluidStack

Obtient la pile de fluide basée sur le nom du registre. Lance une erreur s'il ne peut pas trouver le fluide.

 Renvoie : `Une pile du liquide avec une quantité == 1mb`

Type de retour : [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

crafttweaker.api.BracketHandlers.getFluidStack(tokens as String);
crafttweaker.api.BracketHandlers.getFluidStack("minecraft:water");
```

| Paramètre | Type de texte        | Libellé                               |
| --------- | -------------------- | ------------------------------------- |
| jetons    | Chaîne de caractères | L'emplacement des ressources du Fluid |


### getItem

Récupère l'élément en fonction du nom du registre. Lance une erreur s'il ne peut pas trouver l'objet.

 Renvoie : `L'élément trouvé`

Type de retour : [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

crafttweaker.api.BracketHandlers.getItem(tokens as String);
crafttweaker.api.BracketHandlers.getItem("minecraft:dirt");
```

| Paramètre | Type de texte        | Libellé                                  |
| --------- | -------------------- | ---------------------------------------- |
| jetons    | Chaîne de caractères | Emplacement de la ressource de l'élément |


### format@@0 getPotion

Type de retour : [crafttweaker.api.potion.MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
crafttweaker.api.BracketHandlers.getPotion(tokens comme String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| jetons    | Chaîne de caractères | Aucune description fournie |


### Obtenir un gestionnaire de recettes

Obtient le recipeManager basé sur le nom du registre. Lance une erreur s'il ne peut pas trouver le Gestionnaire de recettes. Lance une expulsion si le type de recette indiqué est introuvable. <p> Cela retournera toujours IRecipeManager.<br> Il y a aussi un BEP pour cela mais cela fonctionne différemment donc il ne peut pas être ajouté automatiquement à la documentation ici. Mais le BEP ressemble aux autres : `<recipetype:minecraft:crafting>`

 Renvoie : `Le gestionnaire de recettes trouvé`

Type de retour : [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttweaker.api.BracketHandlers.getRecipeManager(tokens as String);
crafttweaker.api.BracketHandlers.getRecipeManager("minecraft:crafting");
```

| Paramètre | Type de texte        | Libellé                                                  |
| --------- | -------------------- | -------------------------------------------------------- |
| jetons    | Chaîne de caractères | L'emplacement des ressources du Gestionnaire de recettes |


### Obtenir la localisation des ressources

Crée un emplacement de ressource basé sur les jetons. Lance une erreur si les jetons ne sont pas un emplacement valide.

 Renvoie : `L'emplacement`

Type de retour : [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

crafttweaker.api.BracketHandlers.getResourceLocation(tokens as String);
crafttweaker.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| Paramètre | Type de texte        | Libellé                       |
| --------- | -------------------- | ----------------------------- |
| jetons    | Chaîne de caractères | L'emplacement de la ressource |


### format@@0 getTag

Obtient la balise basée sur le nom du registre. Créera une balise vide si aucune balise n'est trouvée.<br> Cependant, dans un tel cas, vous devez enregistrer le tag comme type approprié

 Renvoie : `La balise trouvée, ou une balise nouvellement créée`

Type de retour : [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

crafttweaker.api.BracketHandlers.getTag(tokens as String);
crafttweaker.api.BracketHandlers.getTag("tag:minecraft:wool");
```

| Paramètre | Type de texte        | Libellé                           |
| --------- | -------------------- | --------------------------------- |
| jetons    | Chaîne de caractères | Emplacement des ressources du tag |


### Formatage de texte

Type de retour : [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
crafttweaker.api.BracketHandlers.getTextFormatting(tokens as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| jetons    | Chaîne de caractères | Aucune description fournie |



