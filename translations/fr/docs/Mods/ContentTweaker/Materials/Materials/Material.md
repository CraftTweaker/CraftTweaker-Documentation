# Matériel

Un matériau est ce dont un objet est composé, par exemple Platinum.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.Material;`

## Récupération d'un tel objet

Vous pouvez soit récupérer un Matériel existant en utilisant le [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) ou en créer un tout nouveau en utilisant le [Matériel Constructeur de Matériaux](/Mods/ContentTweaker/Materials/Materials/Material_Builder/)

## Champs

Vous pouvez récupérer les informations suivantes d'un Matériel :

| Méthode Zen          | Type de retour       | Libellé                                   |
| -------------------- | -------------------- | ----------------------------------------- |
| getName()            | chaîne de caractères | Renvoie le nom du Matériel                |
| getColor()           | Indice               | Renvoie la couleur du Matériel            |
| isHasEffect()        | boolean              | Renvoie si le matériau a l'effet lumineux |
| getUnlocalizedName() | chaîne de caractères | Renvoie le nom non localisé du Matériel   |

## Enregistrer [Pièces de Matériel](/Mods/ContentTweaker/Materials/Materials/MaterialPart/)

Vous pouvez soit enregistrer des parties en utilisant l'objet [partie](/Mods/ContentTweaker/Materials/Parts/Part/) ou sa chaîne de nom.  
Vous pouvez aussi enregistrer une seule partie ou plusieurs à la fois.  
Donc vous avez 4 options au total :

```zenscript
registerParts(String[] noms de partie);
registerParts(IPart[] parties);


registerPart(String partName);
registerPart(IPart part);
```

Les méthodes registerPart retournent un seul objet [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) .  
Les méthodes registerParts retournent une liste [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).