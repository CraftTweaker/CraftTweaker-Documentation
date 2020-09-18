# Constructeur de blocs

Le constructeur de blocs est utilisé pour... construire des blocs (tu n'as pas vu celui qui vient, droit... droit?).<br> Une fois que vous l'avez créé, vous pouvez définir diverses propriétés qui seront décrites par les méthodes séparées. <p> Tu peux également modifier le type du bloc pour créer une forme de bloc plus spécialisée (e. . escaliers ou blocs qui peuvent être tournés de la même manière que les rondins peuvent). Pour dire à CoT que vous voulez que le bloc apparaisse en jeu, vous devez appeler [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) et spécifier un chemin d'emplacement de ressource valide.

Cette classe a été ajoutée par un mod avec le mod-id `contenttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
mods.contenttweaker.block.BlockBuilder
```

## Interfaces implémentées
BlockBuilder implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructeurs
Crée un nouveau BlockBuilder. Rappelez-vous que _cela ne va pas_ créer un nouveau bloc dans le jeu, tu dois appeler [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) pour cela.
```zenscript
new mods.contenttweaker.block.BlockBuilder(material as crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| Paramètre | Type de texte                                                                        | Libellé                      | Optionnel | Valeur par défaut            |
| --------- | ------------------------------------------------------------------------------------ | ---------------------------- | --------- | ---------------------------- |
| Matériel  | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | Le matériel que ce bloc aura | vrai      | `<blockmaterial:iron>` |



## Méthodes
### construire

Instructions de CoT pour construire ce que ce constructeur est censé construire.

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| Paramètre                    | Type de texte        | Libellé                                       |
| ---------------------------- | -------------------- | --------------------------------------------- |
| Localisation de la ressource | Chaîne de caractères | Le chemin de la ressource pour donner ce bloc |


### notSolid

Indique à CoT que ce bloc n'est pas solide.

 Ceci est requis si votre modèle n'est pas un bloc complet (16x16x16). Il est également nécessaire si votre modèle est vu à travers (comme le verre). Définissez ceci si votre bloc crée des effets de rayons X quand il est placé.

 Renvoie : `Ce constructeur, utilisé pour enchaîner`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.notSolid();
```

### format@@0 withHardnessandResistance

Définit les niveaux de dureté et de résistance du bloc. Contrairement à l'autre méthode, celle-ci n'accepte qu'un seul paramètre et utilisera cette valeur pour les deux propriétés.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessAndResistance as float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Paramètre             | Type de texte | Libellé                                                   |
| --------------------- | ------------- | --------------------------------------------------------- |
| hardnessAndResistance | flottant      | La valeur à définir pour la dureté et pour la résistance. |



Définit les niveaux de dureté et de résistance du bloc. Contrairement à l'autre méthode, celle-ci vous permet de définir chaque propriété à une valeur séparée.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(dureté en tant que float, résistanceIn en tant que float);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Paramètre    | Type de texte | Libellé                                 |
| ------------ | ------------- | --------------------------------------- |
| hardnessIn   | flottant      | La valeur à définir pour la dureté      |
| résistanceIn | flottant      | La valeur à définir pour la résistance. |


### avec le niveau de récolte

Définit le niveau de minage requis pour miner ce bloc

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel as int);
myBlockBuilder.withHarvestLevel(3);
```

| Paramètre         | Type de texte | Libellé                  |
| ----------------- | ------------- | ------------------------ |
| Niveau de récolte | Indice        | Niveau de récolte requis |


### avec HarvestTool

Définit l'outil requis pour récolter ce bloc

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool as mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Paramètre        | Type de texte                                                                   | Libellé         |
| ---------------- | ------------------------------------------------------------------------------- | --------------- |
| Outil de récolte | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Le type d'outil |


### avec un groupe d'articles

Définit le groupe d'items dans lequel ce bloc apparaîtra

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(groupez comme mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Paramètre | Type de texte                                                                     | Libellé             |
| --------- | --------------------------------------------------------------------------------- | ------------------- |
| Groupe    | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Le groupe à définir |


### withLightValue

Définit la valeur de lumière du bloc.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn comme int);
myBlockBuilder.withLightValue(15);
```

| Paramètre              | Type de texte | Libellé                        |
| ---------------------- | ------------- | ------------------------------ |
| format@@0 lightValueIn | Indice        | Le niveau de lumière à définir |


### avec le butin de

Donne l’ordre à CoT de remplacer la table de butin de ce bloc avec l’un des blocs fournis. Actuellement, cela va toujours créer une entrée de la table de butin, mais elle sera ignorée par le jeu.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockIn as crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Paramètre | Type de texte                                                 | Libellé                                            |
| --------- | ------------------------------------------------------------- | -------------------------------------------------- |
| blockIn   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | Le bloc dont la table de butin doit être appliquée |


### Avec MaxStackSize

Définit la taille maximale de pile que ce bloc peut avoir dans votre inventaire. Sera 64 si inchangé.

 Renvoie : `Ce constructeur, utilisé pour enchaîner`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(taille comme int);
myBlockBuilder.withMaxStackSize(16);
```

| Paramètre | Type de texte | Libellé              |
| --------- | ------------- | -------------------- |
| taille    | Indice        | La taille à définir. |


### avec rareté

Permet de définir la rareté de ce bloc.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| Paramètre | Type de texte        | Libellé   |
| --------- | -------------------- | --------- |
| rareté    | Chaîne de caractères | La rareté |


### avec glissance

Définit la glissance.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn comme float);
myBlockBuilder.withSlipperiness(0.5f);
```

| Paramètre | Type de texte | Libellé             |
| --------- | ------------- | ------------------- |
| glissante | flottant      | La valeur à définir |


### avec type

Définit le type spécifique de ce bloc. Après que cette méthode soit appelée le contexte du constructeur passera au constructeur de type le plus fourni. Cela signifie que les méthodes de ce constructeur ne seront plus disponibles, donc toutes les propriétés que vous souhaitez définir doivent être définies avant d'appeler cette méthode.

 Renvoie : `Un constructeur avec le bloc donné.`

Type de retour: T

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable>();
```

| Nom du paramètre | Limites                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------- |
| TT               | [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### sansDrops

Donnera à CoT que ce bloc n'aura pas d'entrées de butin. Actuellement, cela va toujours créer une entrée de la table de butin, mais elle sera ignorée par le jeu.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutDrops();
```

### sansDéplacement du bloc

Indique à CoT que ce bloc ne bloque pas le mouvement. Définira également le bloc comme [mods.contenttweaker.block.BlockBuilder#notSolid()](/mods/contenttweaker/API/block/BlockBuilder/#notsolid)

 Renvoie : `Ce constructeur, utilisé pour enchaîner`

Type de retour : [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```


