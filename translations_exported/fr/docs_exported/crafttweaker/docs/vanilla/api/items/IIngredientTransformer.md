# Transformateur d\'ingrédients

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.item.IIngredientTransformer
```

## Méthodes
### getCommandString

Type de retour: chaîne de caractères

```zenscript
myIIngredientTransformer.getCommandString(ingredient as T);
```

| Paramètre  | Type de texte | Libellé                    |
| ---------- | ------------- | -------------------------- |
| ingrédient | TT            | Aucune description fournie |


### correspondances

Type de retour: booléen

```zenscript
myIIngredientTransformer.matches(stack as crafttweaker.api.item.IItemStack);
```

| Paramètre | Type de texte                                                     | Libellé                    |
| --------- | ----------------------------------------------------------------- | -------------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |



