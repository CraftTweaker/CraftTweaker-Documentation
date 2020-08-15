# Registre IMachine

Vous utilisez IMachineRegistry pour enregistrer une nouvelle [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) dans le jeu, ou pour récupérer une machine précédemment enregistrée.

## Importation du paquet

Si vous voulez raccourcir les appels de méthodes ou rencontrer des problèmes, vous pourriez devoir [importer](/AdvancedFunctions/Import) le paquet.  
Vous pouvez le faire en utilisant

```zenscript
importer extrautilities2.Tweaker.IMachineRegistry ;
```

## Créer la machine

Il y a deux types de machines :

- Machines
- Générateurs

Les machines consomment de l'énergie, les générateurs émettent de l'énergie, sinon ils se comportent presque identiquement.

```zenscript
extrautilities2.Tweaker.IMachineRegistry. reateNewMachine(
    name, 
    energyBufferSize, 
    energyTransferLimit, 
    slots d'entrée, 
    emplacements de sortie, 
    frontTexture, 
    frontTextureActive, 
    couleur
;


extractilités2. Plus faible est le registre d'IMachine. reateNewGenerator(
    name,
    energyBufferSize,
    energyTransferLimit,
    inputSlots,
    emplacements de sortie,
    frontTexture,
    frontTextureActive
    couleur
);
```

Comme vous pouvez le voir, les deux méthodes acceptent les mêmes paramètres, la seule différence est si elles ont besoin ou produisent de l'énergie.  
Les paramètres sont :

| Nom                        | Type de texte                                                       |
| -------------------------- | ------------------------------------------------------------------- |
| Nom                        | chaîne de caractères                                                |
| Taille du tampon d'énergie | Indice                                                              |
| energyTransferLimit        | Indice                                                              |
| inputSlots                 | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| outputSlots                | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| frontTexture               | chaîne de caractères                                                |
| Texture frontale active    | chaîne de caractères                                                |
| couleur (optionnel)        | int (par défaut `0xffffff` (noir))                                  |

Les slots acceptent une liste de [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot). Les listes peuvent être créées de la même manière que les tableaux, en utilisant [] autour des emplacements. Les deux méthodes retournent un objet [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) qui représente la machine créée.  
Gardez cela à l'esprit car vous avez besoin de cet objet pour créer des recettes plus tard !

## Récupérer les machines existantes

### Récupérer la machine par nom

Vous pouvez également obtenir des machines déjà générées en utilisant le Registre :

```zenscript
extrautilities2.Tweaker.IMachineRegistry.getMachine(String name);
```

Cette méthode retournera la machine avec le nom donné comme [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) ou `null`

### Obtenir toutes les machines enregistrées

Cela retournera toutes les machines enregistrées en tant que liste de [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine).

```zenscript
extrautilities2.Tweaker.IMachineRegistry.getRegisterdMachineNames();
```

### Obtenir des machines XU2

Vous pouvez également utiliser ces getters pour obtenir des machines du mod XU2 en tant qu'objet [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine):

    extrautilities2.Tweaker.IMachineRegistry.crusher;
    extrautilities2.Tweaker.IMachineRegistry.enchanter;
    extrautilities2.Tweaker.IMachineRegistry.generator_culinary;
    extrautilities2.Tweaker.IMachineRegistry.generator_death;
    extrautilities2.Tweaker.IMachineRegistry.generator_dragon;
    extrautilities2.Tweaker.IMachineRegistry.generator_enchant;
    extrautilities2.Tweaker.IMachineRegistry.generator_ender;
    extrautilities2.Tweaker.IMachineRegistry.generator_furnace;
    extrautilities2.Tweaker.IMachineRegistry.generator_ice;
    extrautilities2.Tweaker.IMachineRegistry.generator_lava;
    extrautilities2.Tweaker.IMachineRegistry.generator_netherstar;
    extrautilities2.Tweaker.IMachineRegistry.generator_overclock;
    extrautilities2.Tweaker.IMachineRegistry.generator_pink;
    extrautilities2.Tweaker.IMachineRegistry.generator_potion;
    extrautilities2.Tweaker.IMachineRegistry.generator_redstone;
    extrautilities2.Tweaker.IMachineRegistry.generator_slime;
    extrautilities2.Tweaker.IMachineRegistry.generator_survivalist;
    extrautilities2.Tweaker.IMachineRegistry.generator_tnt;