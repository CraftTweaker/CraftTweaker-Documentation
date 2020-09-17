# MCTag

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.tag.MCTag
```

## Interfaces implémentées
MCTag implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient)

## Méthodes
### Ajouter des blocs

```zenscript
myMCTag.addBlocks(blocs comme crafttweaker.api.block.MCBlock[]);
```

| Paramètre | Type de texte                                                   | Libellé                    |
| --------- | --------------------------------------------------------------- | -------------------------- |
| blocs     | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Aucune description fournie |


### Ajouter des types d'entités

```zenscript
myMCTag.addEntityTypes(Entités comme crafttweaker.api.entity.MCEntityType[]);
```

| Paramètre | Type de texte                                                                | Libellé                    |
| --------- | ---------------------------------------------------------------------------- | -------------------------- |
| Entités   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Aucune description fournie |


### Ajouter des éléments

```zenscript
myMCTag.addItems(objets comme crafttweaker.api.item.IItemStack[]);
```

| Paramètre | Type de texte                                                       | Libellé                    |
| --------- | ------------------------------------------------------------------- | -------------------------- |
| Eléments  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Aucune description fournie |


### createBlockTag

Retourne [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createBlockTag();
```

### createEntityTypeTag

Retourne [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createEntityTypeTag();
```

### createItemTag

Retourne [crafttweaker.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
myMCTag.createItemTag();
```

### Obtenir les objets restants

Quand cette pile d'ingrédients est fabriquée, que restera-t-il dans la grille ? Ne vérifie cependant pas si la pile correspond ! Utilisé par exemple dans net.minecraft.item.crafting.ICraftingRecipe

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCTag.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
myMCTag.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé                                |
| --------- | ----------------------------------------------------------------- | -------------------------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pile à fournir pour cet ingrédient. |


### correspondances

Est-ce que la pile donnée correspond à l'ingrédient ?

Retourne un booléen

```zenscript
myMCTag.matches(stack as crafttweaker.api.item.IItemStack);
myMCTag.matches(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé            |
| --------- | ----------------------------------------------------------------- | ------------------ |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pile à vérifier |


### Supprimer les blocs

```zenscript
myMCTag.removeBlocks(blocs comme crafttweaker.api.block.MCBlock[]);
```

| Paramètre | Type de texte                                                   | Libellé                    |
| --------- | --------------------------------------------------------------- | -------------------------- |
| blocs     | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[] | Aucune description fournie |


### Supprimer les types d'entités

```zenscript
myMCTag.removeEntityTypes(Entités comme crafttweaker.api.entity.MCEntityType[]);
```

| Paramètre | Type de texte                                                                | Libellé                    |
| --------- | ---------------------------------------------------------------------------- | -------------------------- |
| Entités   | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | Aucune description fournie |


### Supprimer les éléments

```zenscript
myMCTag.removeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Paramètre | Type de texte                                                       | Libellé                    |
| --------- | ------------------------------------------------------------------- | -------------------------- |
| Eléments  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Aucune description fournie |



## Propriétés

| Nom                | Type de texte                                                                | A un Getter | A un Setter |
| ------------------ | ---------------------------------------------------------------------------- | ----------- | ----------- |
| blocs              | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)[]              | vrai        | Faux        |
| Chaîne de commande | Chaîne de caractères                                                         | vrai        | Faux        |
| Types d'entité     | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)[] | vrai        | Faux        |
| Eléments           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[]          | vrai        | Faux        |

## Pistolet

| Type de résultat                                           | Est implicite |
| ---------------------------------------------------------- | ------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | vrai          |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | vrai          |

