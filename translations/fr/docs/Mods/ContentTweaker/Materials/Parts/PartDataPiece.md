# PartDataPiece

Une pièce de données de pièce peut être ajoutée à un [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) pour pouvoir ajouter quelques [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) à [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) créés avec [Pièces](/Mods/ContentTweaker/Materials/Parts/Part/) qui sont de ce [Type de pièce](/Mods/ContentTweaker/Materials/Parts/PartType/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.PartDataPiece ;`

## Récupération d'un tel objet

Vous pouvez obtenir une liste d'une [pièce](/Mods/ContentTweaker/Materials/Parts/Part/) DataPieces en utilisant `getData()` sur une [partie](/Mods/ContentTweaker/Materials/Parts/Part/).

Vous pouvez également enregistrer un nouveau PartDataPiece en utilisant le [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
mods.contenttweaker.MaterialSystem.createPartDataPiece(String name, booléen requis)
```

Paramètres:

- Nom de la chaîne : Le nouveau nom du PartDataPiece
- booléen requis : Le PartDataPiece doit-il être présent sur un [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) afin de l'enregistrer ?

## Méthodes Zen

Vous pouvez récupérer les informations suivantes à partir d'un type de pièce :

| Méthode Zen       | Type de retour       |
| ----------------- | -------------------- |
| getName()         | chaîne de caractères |
| est obligatoire() | chaîne de caractères |