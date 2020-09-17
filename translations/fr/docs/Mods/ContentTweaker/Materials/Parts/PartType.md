# Type de pièce

Un PartType peut être vu comme un groupe dans lequel plusieurs parties s'intègrent, par exemple `éléments`

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.PartType ;`

## Récupération d'un tel objet

Vous pouvez utiliser le [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) pour soit récupérer un objet PartType existant, soit en créer un nouveau.  
Consultez l'entrée ci-dessous pour apprendre comment créer un nouveau type de partie.

<details>
    <summary>Les types suivants sont pré-enregistrés :</summary>
    <ul>
        <li>Élément</li>
        <li>Bloquer</li>
        <li>minerai</li>
        <li>fluide</li>
        <li>armure</li>
        <li>minecart</li>
    </ul>
</details>

## Méthodes Zen

Vous pouvez récupérer les informations suivantes à partir d'un type de pièce :

| Méthode Zen | Type de retour       |
| ----------- | -------------------- |
| getName()   | chaîne de caractères |

Vous pouvez définir les informations suivantes sur un type de pièce :

| Méthode Zen                        | Type de paramètre                                                               |
| ---------------------------------- | ------------------------------------------------------------------------------- |
| setData(IPartDataPiece[] données); | [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)[] données |

## Créer un nouveau type de pièce

Si vous, pour une raison quelconque, devez enregistrer un nouveau type de partie, vous aurez besoin de savoir deux choses:

- Quel nom le nouveau type de partie aura
- Comment [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) créés à partir de [Pièces](/Mods/ContentTweaker/Materials/Parts/Part/) de ce type seront enregistrés

Le premier est simple, c'est une chaîne.  
Le second est un peu plus compliqué, c'est une fonction qui prend une MaterialPart en entrée :

```zenscript
#loader contenttweaker


import mods.contenttweaker.MaterialSystem ;

val ourType = MaterialSystem. reatePartType("cool_type", function(materialPart){

});

//Utilisez le nouveau type pour créer une Partie
val ourPart = mods. ontenttweaker.MaterialSystem.getPartBuilder().setName("cool_part").setPartType(ourType).build();

//Créez un nouveau Material et enregistrez la partie nouvellement créée.
val ourMaterial = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build();
ourMaterial.registerPart(ourPart);

```