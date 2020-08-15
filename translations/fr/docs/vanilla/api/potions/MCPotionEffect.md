# format@@0 MCPotionEffect

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Interfaces implémentées
MCPotionEffect implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### est prêt

Retourne un booléen

```zenscript
myMCPotionEffect.isReady(durée comme int, amplificateur comme int) ;
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| durée         | Indice        | Aucune description fournie |
| amplificateur | Indice        | Aucune description fournie |


### newInstance

Retourne [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(durée comme int, amplificateur comme int);
```

| Paramètre     | Type de texte | Libellé                    | Optionnel | Valeur par défaut |
| ------------- | ------------- | -------------------------- | --------- | ----------------- |
| durée         | Indice        | Aucune description fournie | Faux      | null              |
| amplificateur | Indice        | Aucune description fournie | vrai      | 0                 |



## Propriétés

| Nom                | Type de texte                                                             | A un Getter | A un Setter |
| ------------------ | ------------------------------------------------------------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères                                                      | vrai        | Faux        |
| Éléments curatifs  | Liste <[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | vrai        | Faux        |
| nomdeaffichage     | Chaîne de caractères                                                      | vrai        | Faux        |
| bénéficiaire       | boolean                                                                   | vrai        | Faux        |
| est instantané     | boolean                                                                   | vrai        | Faux        |
| Couleur du liquide | Indice                                                                    | vrai        | Faux        |
| Nom                | Chaîne de caractères                                                      | vrai        | Faux        |

