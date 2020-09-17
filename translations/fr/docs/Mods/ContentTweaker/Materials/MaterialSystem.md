# Système de matériaux

Le système de matériel est utilisé pour créer ou extraire des matériaux existants à partir de CT.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.MaterialSystem ;`

## [IPartType](/Mods/ContentTweaker/Materials/Parts/PartType/)

### Créer

```zenscript
createPartType(String name, IRegisterMaterialPart registerMaterialPart)
```

Paramètres requis :

- Nom de la chaîne : Le nom du type de pièce → par exemple "dense_gear"
- [IRegisterMaterialPart](/Mods/ContentTweaker/Materials/Materials/Functions/IRegisterMaterialPart/) enregistrez MaterialPart → Une fonction qui gère comment les pièces de matériaux seront créées.

### Récupérer

```zenscript
getPartType(String name);
```

Paramètres requis :

- String name: The part type's name → e.g. "gear" For a list of all available part types check [the part type page](/Mods/ContentTweaker/Materials/Parts/PartType/).

## [Important](/Mods/ContentTweaker/Materials/Materials/Material/)

### Créer

Contrairement au type de pièce, vous ne pouvez pas directement créer de matériel, à la place vous devez utiliser un constructeur de matériel. Consultez l'entrée [MatérialBuilder](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) pour plus d'informations sur ce que vous devez faire exactement avec celles-ci.

```zenscript
val MB MaterialSystem.getMaterialBuilder();
MB.setName("Urubuntium");
MB.setColor(0);
MB.setHasEffect(false);
var builtMaterial = MB.build();
```

### Récupérer

```zenscript
getMaterial(String name);
```

Paramètres requis :

- Nom de la chaîne de caractères : le nom du matériau → par exemple "Platinum"

## [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)

### Créer

Contrairement à PartType, vous ne pouvez pas créer directement une pièce, au lieu de cela, vous devez utiliser un PartBuilder. Vérifiez l'entrée [de la partie](/Mods/ContentTweaker/Materials/Parts/Part/) pour plus d'informations sur ce qu'il faut faire exactement.

```zenscript
val PB = MaterialSystem.getPartBuilder();
```

### Récupérer

```zenscript
getPart(String name);
```

Paramètres requis :

- Nom de la chaîne: Nom de la pièce

## [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)

### Créer

    createPartDataPiece(String name, booléen requis)
    

Paramètres requis :

- Nom de la chaîne : Le nom de la pièce de données
- booléen requis : la pièce de données est-elle requise ?

## Enregistrer plusieurs pièces de matériel

Même si vous pouvez également le faire en utilisant la propre fonctionnalité du [Matériel](/Mods/ContentTweaker/Materials/Materials/Material/) , cette méthode vous permet d'enregistrer [des pièces](/Mods/ContentTweaker/Materials/Parts/Part/) pour un matériau donné

```zenscript
registerPartsForMaterial(Matériau Matériel, Chaîne[] Noms partiels) ;
```

Paramètres requis :

- [Matériau](/Mods/ContentTweaker/Materials/Materials/Material/) Matériau : Le matériau que les pièces enregistrées doivent être faites de
- String[] Noms des parties : Les noms des parties qui doivent être enregistrées → par exemple ["gear", "ingot"]

## Récupérer les objets déjà enregistrés:

Vous pouvez utiliser ces méthodes pour récupérer une carte en utilisant des chaînes comme clés et l'objet comme valeurs :

| Nom de la méthode  | Type de retour                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| getMaterialParts() | [`Carte<String, IMaterialPart>`](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) |
| getMaterials()     | [`Carte<String, IMaterial>`](/Mods/ContentTweaker/Materials/Materials/Material/)         |
| getParts()         | [`Carte<String, IPart>`](/Mods/ContentTweaker/Materials/Parts/Part/)                     |
| getPartType()      | [`Carte<String, IPartType>`](/Mods/ContentTweaker/Materials/Parts/PartType/)             |

    import mods.contenttweaker.MaterialPart;
    
    val part = MaterialSystem.getMaterialPart("name"); //as MaterialPart
    
    val partMap = MaterialSystem.getMaterialPartsByRegex(".*"); //as MaterialPart[string]