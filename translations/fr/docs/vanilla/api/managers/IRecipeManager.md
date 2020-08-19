# Je suis gestionnaire de recettes

Interface par défaut pour les gestionnaires basés sur le Registre car ils peuvent tous supprimer des recettes par ResourceLocation.

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.registries.IRecipeManager
```

## Interfaces implémentées
IRecipeManager implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### addJSONRecipe

Ajoute une recette basée sur un IData fourni. L'IData fourni doit représenter un JSON DataPack, ce qui vous permet d'enregistrer des recettes pour tous les systèmes de DataPack prenant en charge IRecipeType.

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("Nom_de_la_recette", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Paramètre | Type de texte                                          | Libellé                              |
| --------- | ------------------------------------------------------ | ------------------------------------ |
| Nom       | Chaîne de caractères                                   | nom de la recette                    |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | données représentant le fichier json |


### Retirer tout

Supprimer toutes les recettes de ce registre.

```zenscript
craftingTable.removeAll();
```

### Retirer par Modid

Supprimer la recette basée sur la modification du nom du Registre.

```zenscript
craftingTable.removeByModid(modifier en tant que chaîne);
craftingTable.removeByModid("minecraft");
```

| Paramètre | Type de texte        | Libellé                           |
| --------- | -------------------- | --------------------------------- |
| modifier  | Chaîne de caractères | modifier les recettes à supprimer |


### removeByName

Supprimer la recette basée sur le nom du Registre.

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Paramètre | Type de texte        | Libellé                       |
| --------- | -------------------- | ----------------------------- |
| Nom       | Chaîne de caractères | nom de la recette à supprimer |


### removeByRegex

Supprimer la recette basée sur la regex.

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| Paramètre | Type de texte        | Libellé                              |
| --------- | -------------------- | ------------------------------------ |
| regex     | Chaîne de caractères | regex pour faire correspondre contre |


### Supprimer la recette

Supprime une recette en fonction de sa sortie.

```zenscript
craftingTable.removeRecipe(affiche en tant que crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Paramètre | Type de texte                                                     | Libellé              |
| --------- | ----------------------------------------------------------------- | -------------------- |
| Sortie    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | sortie de la recette |



## Propriétés

| Nom                | Type de texte        | A un Getter | A un Setter |
| ------------------ | -------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères | vrai        | Faux        |

