# Classe de jeu

La classe IGame est utilisée pour obtenir des informations générales sur le jeu. Peut être accédé en utilisant `partie`

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.game.IGame ;`

## Zengetters

| Zengetter | Que fait-il?                                              | Type de retour                                                    | Usage                    |
| --------- | --------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------ |
| biomes    | Renvoie tous les biomes enregistrés en tant que liste     | Liste<[IBiomes](/Vanilla/Biomes/IBiome/)>                         | `jeu.biomes`             |
| blocs     | Renvoie tous les blocs enregistrés en tant que liste      | Liste <[IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)>     | `blocs.game.blocks`      |
| Entités   | Renvoie toutes les entités enregistrées en tant que liste | Liste <[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)> | `Entités de jeu`         |
| Eléments  | Renvoie tous les éléments enregistrés en tant que liste   | Liste <[IItemDefinition](/Vanilla/Items/IItemDefinition/)>        | `Éléments du jeu`        |
| liquides  | Renvoie tous les liquides enregistrés en tant que liste   | Liste <[ILiquid Definition](/Vanilla/Liquids/ILiquidDefinition/)> | `game.liquids`           |
| potions   | Renvoie toutes les potions enregistrées en tant que liste | Liste<[IPotion](/Vanilla/Potions/IPotion/)>                       | `format@@0 game.potions` |

## Méthodes

### GetEntity

```zenscript
//getEntity(EntityName)

//Essentiellement le mouton
val mouton = game.getEntity("mouton");
mouton mouton 1 = <entity:minecraft:sheep>;
```

### Définir la localisation

Définit la localisation.  
Tous les paramètres sont des chaînes. `game.setLocalization(key, value);`  
`game.setLocalization(lang, key, value);`

### Localiser

Retourne une chaîne localisée  
`game.localize(key)`  
`game.localize(key, lang)`