# IMachine

Un IMachine est l'objet machine réel, vous pouvez l'obtenir dans le [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry).

## Importation du paquet

Il peut être nécessaire pour vous de [importer](/AdvancedFunctions/Import) la classe.  
Généralement, vous n'avez besoin d'importer une classe que si vous utilisez directement le nom, comme dans le casting ou [Déclaration de tableaux](/AdvancedFunctions/Arrays_and_Loops) mais mieux vaut être sûr que désolé et ajouter l'importation.

```zenscript
importer extrautilities2.Tweaker.IMachine ;
```

## Ajouter des recettes

Il y a deux méthodes pour ajouter des recettes, l'une utilise une carte de probabilité pour les sorties, on autorise l'utilisation des objets [WeightedItemStack](/Vanilla/Items/WeightedItemStack) et [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) .  
Les deux méthodes utilisent [des cartes](/AdvancedFunctions/Associative_Arrays) avec des chaînes comme indices.  
Ces chaînes seront les noms des slots d'entrée/sortie donnés, c'est pourquoi vous ne devriez pas avoir deux emplacements avec le même nom dans une machine.

### Utiliser une carte de probabilité

```zenscript
myMachine.addRecipe(entrées, sorties, énergie, temps, probabilités) ;
```

Cette méthode utilise les paramètres suivants :

| Nom          | Type de texte                                               |
| ------------ | ----------------------------------------------------------- |
| inputs       | [Ingrédient](/Vanilla/Variable_Types/IIngredient)[chaîne\] |
| outputs      | [Ingrédient](/Vanilla/Variable_Types/IIngredient)[chaîne\] |
| Énergie      | Indice                                                      |
| Heure        | Indice                                                      |
| probabilités | float[chaîne\]                                             |

### Utiliser uniquement la carte des sorties

Vous ne pouvez également utiliser que la carte de sortie, alors ExtUtils2 vérifiera tous les objets [WeightedItemStack](/Vanilla/Items/WeightedItemStack) et [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) et utilisera leurs chances.  
Rappelez-vous qu'ajouter autre chose que ces deux ou [IIngrédient](/Vanilla/Variable_Types/IIngredient) en tant que valeur mappée, n'aura aucun effet.

```zenscript
myMachine.addRecipe(entrées, sorties, énergie, temps) ;
```

Cette méthode utilise les paramètres suivants :

| Nom     | Type de texte                                               |
| ------- | ----------------------------------------------------------- |
| inputs  | [Ingrédient](/Vanilla/Variable_Types/IIngredient)[chaîne\] |
| outputs | Objet[Chaîne\]                                             |
| Énergie | Indice                                                      |
| Heure   | Indice                                                      |

## Retirer des recettes

Vous pouvez également supprimer des recettes. Encore une fois, vous utilisez [maps](/AdvancedFunctions/Associative_Arrays) avec des chaînes comme indices.

Il y a deux méthodes, on utilise [Ingrédient](/Vanilla/Variable_Types/IIngredient) comme valeurs, et une qui accepte une carte avec [IItemStack](/Vanilla/Items/IItemStack) et une carte avec les valeurs [ILiquidStack](/Vanilla/Liquids/ILiquidStack).

### Utiliser IIngrédient

```zenscript
monMachine.removeRecipe(entrées) ;
```

| Nom    | Type de texte                                               |
| ------ | ----------------------------------------------------------- |
| inputs | [Ingrédient](/Vanilla/Variable_Types/IIngredient)[chaîne\] |

### Utiliser des cartes séparées pour les objets et les liquides

```zenscript
myMachine.removeRecipe(articles, liquides);
```

| Nom      | Type de texte                                           |
| -------- | ------------------------------------------------------- |
| Eléments | [IItemStack](/Vanilla/Items/IItemStack)[string\]       |
| liquides | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)[chaîne\] |

## Récupération des informations de la machine

Vous pouvez également récupérer quelques informations sur la machine en utilisant les méthodes suivantes :

- `getInputSlots()`: Retourne tous les slots d'entrée en tant que liste de [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getOutputSlots()`: Retourne tous les slots de sortie en tant que liste de [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getSlot()`: Retourne le [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) correspondant au nom.

## Nommer la machine

Jusqu'à présent, toutes nos machines seront nommées `machine.crafttweaker:your_machine_name` où `votre_machine_name` est le nom que vous avez utilisé pour créer la machine.

Si vous voulez que le nom de la machine soit localisé, utilisez soit les capacités [IGame](/Vanilla/Game/IGame) de CrT, soit un fichier de lang personnalisé.

Donc, si le nom de votre machine était `time_machine`, vous devrez l'appeler dans un script :

```zenscript
game.setLocalization("machine.crafttweaker:time_machine", "Space Time distorter (machine à temps)");
```

Ou ajouter ceci à un fichier de langue :

    machine.crafttweaker:time_machine=Space Time distorter (machine temporelle)