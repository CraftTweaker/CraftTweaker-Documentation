# Informations sur le module

Contient des informations sur un mod chargé

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.mods.ModInfo
```

## Propriétés

| Nom             | Type de texte                                                                                       | A un Getter | A un Setter |
| --------------- | --------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| blocs           | Liste&lt;[crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | vrai        | Faux        |
| nomdeaffichage  | Chaîne de caractères                                                                                | vrai        | Faux        |
| types d'entités | Liste&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | vrai        | Faux        |
| fluides         | Liste&lt;[crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;               | vrai        | Faux        |
| Eléments        | Liste&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;          | vrai        | Faux        |
| modifier        | Chaîne de caractères                                                                                | vrai        | Faux        |
| espace de noms  | Chaîne de caractères                                                                                | vrai        | Faux        |
| version         | Chaîne de caractères                                                                                | vrai        | Faux        |

