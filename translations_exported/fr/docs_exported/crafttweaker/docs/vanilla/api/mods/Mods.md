# Mods

Contient des informations sur tous les mods qui sont enregistrés. Accessible en utilisant le mot-clé global `loadedMods`

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.mods.Mods
```

## Méthodes
### getMod

Obtient un mod spécifique

 Renvoie : `un MCModInfo spécifique`

Type de retour : [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid comme String);
loadedMods.getMod("minecraft");
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| modifier  | Chaîne de caractères | Aucune description fournie |


### isModLoaded

Vérifie si un mod est laodé

 Renvoie : `vrai si le mod est chargé`

Type de retour: booléen

```zenscript
loadedMods.isModLoaded(modid as String);
loadedMods.isModLoaded("minecraft");
```

| Paramètre | Type de texte        | Libellé                |
| --------- | -------------------- | ---------------------- |
| modifier  | Chaîne de caractères | modifier pour vérifier |



## Propriétés

| Nom    | Type de texte                                                                       | A un Getter | A un Setter |
| ------ | ----------------------------------------------------------------------------------- | ----------- | ----------- |
| mods   | Liste&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | vrai        | Faux        |
| taille | Indice                                                                              | vrai        | Faux        |

