# ITICMaterial

Un IMaterial construit par les Bricoleurs (à ne pas confondre avec [ContentTweaker's IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)) est ce dont un outil de construction peut être fabriqué.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer modtweaker.tconstruct.ITICMaterial;`

## Récupération d'un tel objet

Vous pouvez récupérer un objet ITICMaterial en utilisant le gestionnaire de pont [ITICMaterial](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/):

```zenscript
val stone = <ticmat:stone>;
```

## Champs

Vous pouvez obtenir/définir les champs suivants :

| ZenGetter                 | ZenSetter                 | Type de retour/Setter                                                                  | Libellé                                                                                            |
| ------------------------- | ------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| getName                   |                           | chaîne de caractères                                                                   | Le nom du Matériel                                                                                 |
| Définition                |                           | [Définition des images](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | Définition du Matériel                                                                             |
| Tête de durabilité        | Tête de durabilité        | Indice                                                                                 | Une tête d'outils fabriquée à partir de ce matériau a cette durabilité                             |
| miningSpeedHead           | miningSpeedHead           | flottant                                                                               | Une tête d'outils fabriquée à partir de ce matériel a cette vitesse de minage                      |
| Tête d'attaque            | Tête d'attaque            | flottant                                                                               | Une tête d'outil fabriquée à partir de ce matériel inflige des dégâts d'attaque                    |
| harvestLevelHead          | harvestLevelHead          | Indice                                                                                 | Une tête d'outils fabriquée à partir de ce matériel a ce niveau de récolte                         |
| poignée de durabilité     | poignée de durabilité     | Indice                                                                                 | Une poignée d'outils fabriquée à partir de ce matériau a cette durabilité                          |
| Handle du modificateur    | Handle du modificateur    | flottant                                                                               | Une poignée d'outils fabriquée à partir de ce matériau a ce modificateur de durabilité             |
| durabilité supplémentaire | durabilité supplémentaire | Indice                                                                                 | Les pièces d'outil supplémentaires fabriquées à partir de ce matériau ont cette durabilité de base |
| modificateur de flèches   | modificateur de flèches   | flottant                                                                               | Les flèches faites à partir de ce matériau ont ce modificateur de durabilité                       |
| Armes de flèches bonus    | Armes de flèches bonus    | Indice                                                                                 | Les flèches faites à partir de ce matériau ont cette ammonition additionnelle                      |
| fletchingModifier         | fletchingModifier         | flottant                                                                               | Les Fletchungs fabriqués à partir de ce matériau ont ce modificateur de durabilité                 |
| Précision de fletage      | Précision de fletage      | flottant                                                                               | Fletchungs fabriqués à partir de ce matériau fournit cette précision                               |

## Méthodes

- correspondances booléennes (ITICMaterial autre) ; → retourne si le matériau donné est égal à `autre`