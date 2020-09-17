# Outil de construction d'élément

Un constructeur spécial qui vous permet de créer des objets qui peuvent être utilisés comme outils. Vous devriez avoir défini les dégâts maximaux de l'objet avant de passer à ce constructeur. <p> A des méthodes spéciales qui vous permettent de définir le niveau de minage pour plusieurs types d'outil ainsi que les dégâts d'attaque.

Cette classe a été ajoutée par un mod avec le mod-id `contenttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
mods.contenttweaker.item.tool.Outil de construction d'élément
```

## Interfaces implémentées
ItemBuilderTool implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Méthodes
### construire

Instructions de CoT pour construire ce que ce constructeur est censé construire.

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Paramètre                    | Type de texte        | Libellé                                       |
| ---------------------------- | -------------------- | --------------------------------------------- |
| Localisation de la ressource | Chaîne de caractères | Le chemin de la ressource pour donner ce bloc |


### format@@0 withAttackDamage

Vous permet de définir le bonus de dégâts d'attaque que vous obtenez lorsque vous tenez cet objet

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.item.tool.Outil ItemBuilder](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackDamage as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Paramètre        | Type de texte | Libellé                              |
| ---------------- | ------------- | ------------------------------------ |
| Dégâts d'attaque | flottant      | Les dégâts d'attaque supplémentaires |


### Avec vitesse d'attaque

Vous permet de définir le bonus de vitesse d'attaque que vous obtenez lorsque vous tenez cet objet.

 Renvoie : `Ce constructeur, utilisé pour le chaînage de méthodes.`

Type de retour: [mods.contenttweaker.item.tool.Outil ItemBuilder](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
Nouvel ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attackSpeed as double);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| Paramètre         | Type de texte | Libellé              |
| ----------------- | ------------- | -------------------- |
| Vitesse d'attaque | double        | La vitesse d'attaque |


### Avec DurabilityCostAttack

Vous permet de définir la quantité de dégâts que cet objet recevra lorsque vous frappez des ennemis. Par défaut, ceci est `0`

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.item.tool.Outil ItemBuilder](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
Nouvel ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| Paramètre            | Type de texte | Libellé                                  |
| -------------------- | ------------- | ---------------------------------------- |
| durabilityCostAttack | Indice        | Les points de dégâts reçus par cet objet |


### Avec DurabilityCostMining

Vous permet de définir la quantité de dégâts que cet objet recevra lorsque vous minerez des blocs. Par défaut, ceci est `0`

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.item.tool.Outil ItemBuilder](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Paramètre            | Type de texte | Libellé                                  |
| -------------------- | ------------- | ---------------------------------------- |
| durabilitéCostMining | Indice        | Les points de dégâts reçus par cet objet |


### format@@0 withToolType

Vous permet d'ajouter un type d'outil à cet outil. Vous pouvez spécifier le type, le niveau de minage et, éventuellement, la vitesse de minage lorsque ce type est touché également.

 Renvoie : `Ce constructeur, utilisé pour l'enchaînement de méthodes`

Type de retour: [mods.contenttweaker.item.tool.Outil ItemBuilder](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder(). ithMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Paramètre         | Type de texte                                                                   | Libellé                                                       | Optionnel | Valeur par défaut |
| ----------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------- | ----------------- |
| Type d'outil      | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Le type de l'outil                                            | Faux      | `null`            |
| niveau de minage  | Indice                                                                          | Le niveau de minage pour ce type d'outil                      | Faux      | `null`            |
| Vitesse de minage | flottant                                                                        | À quelle vitesse cet outil peut miner des blocs de type donné | vrai      | `1.0`             |



