# Définition du matériel ITICA

Une définition ITICMaterialDefinition est une [définition](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) de ITICMaterial.  
Vous pouvez l'utiliser pour récupérer des informations sur l'objet [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer modtweaker.tconstruct.ITICMaterialDefinition;`

## Récupération d'un tel objet

Vous pouvez récupérer une définition ITICMaterialDefinition à partir d'une [définition de](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `ITICMaterial` ZenGetter :

```zenscript
val def = <ticmat:stone>.definition ;
```

## ZenGetters

| ZenGetter      | Type de retour       | Libellé                     |
| -------------- | -------------------- | --------------------------- |
| Nom            | chaîne de caractères | Le nom interne du matériau  |
| nomdeaffichage | chaîne de caractères | Le nom localisé du matériau |