# format@@0 MaterialPart

Un objet MaterialPart est, comme le nom suggère une combinaison d'une [Material](/Mods/ContentTweaker/Materials/Materials/Material/) et d'une [Part](/Mods/ContentTweaker/Materials/Parts/Part/), comme `équipement de platine`.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.MaterialPart;`

## Récupération d'un tel objet

Il y a plusieurs façons de récupérer un tel objet, soit en liste, soit en tant qu'objet unique.

Objet simple :

- Utilisation du gestionnaire de parenthèses [](/Mods/ContentTweaker/Materials/Brackets/Bracket_MaterialPart/)
- Utilisation de la méthode [Matérial](/Mods/ContentTweaker/Materials/Materials/Material/) registerPart
- Utilisation de la méthode [registerToMaterial d'une pièce](/Mods/ContentTweaker/Materials/Parts/Part/)

Liste :

- Utilisation de la méthode [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) registerPartsForMaterial
- Utilisation d'une méthode de [Matérial](/Mods/ContentTweaker/Materials/Materials/Material/) registerParts
- Utilisation de la méthode registerToMaterials d'une [pièce](/Mods/ContentTweaker/Materials/Parts/Part/)

## Champs

Vous pouvez récupérer les informations suivantes d'une pièce de matériau:

| Méthode Zen          | Type de retour                                                                  |
| -------------------- | ------------------------------------------------------------------------------- |
| getName()            | chaîne de caractères                                                            |
| getLocalizedName()   | chaîne de caractères                                                            |
| hasEffect()          | boolean                                                                         |
| hasOverlay()         | boolean                                                                         |
| getMaterial()        | [Important](/Mods/ContentTweaker/Materials/Materials/Material/)                 |
| getPart()            | [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)                             |
| getItemStack()       | [IItemStack](/Vanilla/Items/IItemStack/)                                        |
| getTextureLocation() | chaîne de caractères                                                            |
| getCTColor()         | [Couleur](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                      |
| getColor()           | Indice                                                                          |
| isColorized()        | boolean                                                                         |
| getData()            | [IMaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) |

Vous pouvez également définir les informations suivantes d'une pièce de matériel:

| Méthode Zen                         | Paramètre                     | Libellé                                                                                                         |
| ----------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------- |
| format@@0 setColorized(colorized)   | booléen coloré                | Définit si le code de couleur de l'élément est appliqué                                                         |
| setTextureLocation(textureLocation) | Chaîne de textureLocalisation | Définit le chemin de texure de l'élément. Par exemple, si vous voulez qu'un équipement soit différent du reste. |