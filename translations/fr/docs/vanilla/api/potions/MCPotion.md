# format@@0 MCCPotion

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.potion.MCPotion
```

## Interfaces implémentées
MCPotion implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### getNamePrefixed

Retourne une chaîne de caractères

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Nom       | Chaîne de caractères | Aucune description fournie |



## Propriétés

| Nom                | Type de texte                                                                                       | A un Getter | A un Setter |
| ------------------ | --------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères                                                                                | vrai        | Faux        |
| effets             | List<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | vrai        | Faux        |
| hasInstantEffect   | boolean                                                                                             | vrai        | Faux        |

