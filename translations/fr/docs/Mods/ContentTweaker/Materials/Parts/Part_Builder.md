# Constructeur de pièces

Si vous voulez construire une [pièce](/Mods/ContentTweaker/Materials/Parts/Part/), vous aurez besoin d'un constructeur de pièces!  
Ne sonne pas si dur, n'est-ce pas?

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.PartBuilder ;`

## Récupération d'un tel objet

Vous pouvez récupérer un nouveau constructeur en utilisant le Pack [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
```

## Définir les propriétés de la pièce

Vous pouvez définir ces propriétés

| Méthode Zen                                   | Paramètre                                                            |
| --------------------------------------------- | -------------------------------------------------------------------- |
| setHasOverlay(hasOverlay)                     | boolean hasOverlay                                                   |
| nomdeset(nom)                                 | nom de la chaîne                                                     |
| setPartType(partType)                         | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) partiType |
| setOreDictName(prefix)                        | préfixe de chaîne de caractères                                      |
| format@@0 setAdditionalOreDictNames(prefixes) | chaîne... prefixes                                                   |

Toutes ces Méthodes font 2 choses: premièrement, elles changent la Propriété du constructeur, deuxièmement, elles retournent le constructeur modifié.  
Vous pouvez voir dans les exemples de scripts ci-dessous ce que cela signifie.

## Construire le Matériel

Avant de pouvoir construire votre matériel, vous devez le construire :

```zenscript
pBuilder.build();
```

Cela retourne un objet [Part](/Mods/ContentTweaker/Materials/Parts/Part/).

## Exemple de script

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
pBuilder.setName("dense_gear");
pBuilder.setPartType(MaterialSystem.getPartType("item"));
var denseGearPart = pBuilder.build();

var denseIngotPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("dense_ingot").setPartType(mods.contenttweaker.MaterialSystem.getPartType("item")).setOreDictName("superIngot").build();
```

## Informations utiles

### Localisation des pièces de matériaux

Les éléments que vous créez avec votre nouvelle pièce seront généralement nommés `contenttweaker.part. artname`  
Si vous voulez que votre élément inclue le nom du matériel, vous devrez le localiser, de préférence dans les fichiers de langue de CoT qui peuvent être trouvés à `Ressources/contenttweaker/lang`.  
Au lieu du nom du matériau que vous écrivez `%s`, donc nommer les engrenages denses et les lingots créés ci-dessus ressemblerait à ceci :

    contenttweaker.part.dense_gear=Dense %s Gear
    contenttweaker.part.dense_ingot=Dense %s Lingot
    

### Ajout d'une texture

Les objets que vous créez avec votre nouvelle pièce vous sembleront un peu plus tranchants.  
Si vous voulez que votre pièce ait une icône spécifique, vous devrez ajouter un `nom de partie. ng` fichier à `Ressources/contenttweaker/textures/items`.  
Donc, en donnant aux engrenages denses une texture nous obligerait à ajouter un fichier appelé `gear_dense. ng` à ce dossier.