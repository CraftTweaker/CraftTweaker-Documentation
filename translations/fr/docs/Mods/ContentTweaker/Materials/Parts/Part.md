# Pièce

Une pièce est la forme dans laquelle se trouve un objet, par exemple un équipement ou un minerai.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.Part;`

## Récupération d'un tel objet

Vous pouvez soit récupérer une pièce existante en utilisant le [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) ou en créer une nouvelle en utilisant le [constructeur de pièces](/Mods/ContentTweaker/Materials/Parts/Part_Builder/)

<details>
    <summary>Les types suivants sont pré-enregistrés (les titres sont les <a href="../PartType">types de pièce</a> ) :</summary>
    <h4>Éléments :</h4>
        <ul>
            <li>Rayon<img src="../Assets/beam.png" alt="icône"></li>
            <li>Bolt<img src="../Assets/bolt.png" alt="icône"></li>
            <li>Caisses<img src="../Assets/casing.png" alt="icône"></li>
            <li>Enclume<img src="../Assets/clump.png" alt="icône"></li>
            <li>Cristal de Cristal<img src="../Assets/crystal.png" alt="icône"></li>
            <li>Minerai concassé (broyé)<img src="../Assets/crushed_ore.png" alt="icône"></li>
            <li>Plaque dense (dense_plate)<img src="../Assets/dense_plate.png" alt="icône"></li>
            <li>Poudre sale (poussière_sale)<img src="../Assets/dirty_dust.png" alt="icône"></li>
            <li>Poussière<img src="../Assets/dust.png" alt="icône"></li>
            <li>Équipement<img src="../Assets/gear.png" alt="icône"></li>
            <li>Ingot<img src="../Assets/ingot.png" alt="icône"></li>
            <li>Pépite<img src="../Assets/nugget.png" alt="icône"></li>
            <li>Plaque<img src="../Assets/plate.png" alt="icône"></li>
            <li>Tige<img src="../Assets/rod.png" alt="icône"></li>
            <li>Éclat<img src="../Assets/shard.png" alt="icône"></li>
        </ul>
    <h4>Blocs :</h4>
        <ul>
            <li>Bloquer<img src="../Assets/block.png" alt="icône"></li>
        </ul>
    <h4>Ores:</h4>
        <ul>
            <li>Minerai</li>
            <li>Minerai dense (dense_ore)</li>
            <li>Minerai pauvre (pauvres_ore)</li>
        </ul>
    <h4>Fluides :</h4>
        <ul>
            <li>Molten</li>
        </ul><br />
    <h4>Armor:</h4>
        <ul>
            <li>Armure <img src="../Assets/armor_head.png" alt="icône de tête"><img src="../Assets/armor_chest.png" alt="icône de coffre"><img src="../Assets/armor_legs.png" alt="icône des jambes"><img src="../Assets/armor_feet.png" alt="icône des pieds"></li>
        </ul>
    <h4>Minecart</h4>
        <ul>
            <li>Minecart</li>
        </ul>
</details>

## Champs

Vous pouvez récupérer les informations suivantes d'une pièce :

| Méthode Zen               | Type de retour                                                                  |
| ------------------------- | ------------------------------------------------------------------------------- |
| hasOverlay()              | boolean                                                                         |
| getName()                 | chaîne de caractères                                                            |
| getUnlocalizedName()      | chaîne de caractères                                                            |
| getShortUnlocalizedName() | chaîne de caractères                                                            |
| getPartType()             | [Type de pièce](/Mods/ContentTweaker/Materials/Parts/PartType/)                 |
| getPartTypeName()         | chaîne de caractères                                                            |
| getOreDictPrefix()        | chaîne de caractères                                                            |
| getData()                 | Liste <[IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## S'inscrire au matériel

Vous pouvez l'utiliser pour enregistrer un ou plusieurs matériaux à cette pièce

```zenscript
pièce.registerToMaterial(Matériel matériel);
partie.registerToMaterials(Matériel[] matériaux);
```

La fonction retournera soit un seul objet [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) soit une liste d'entre eux, selon que vous avez enregistré un ou plusieurs matériaux à la fois.