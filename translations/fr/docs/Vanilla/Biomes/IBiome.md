# IBiome

L'interface IBiome vous permet de récupérer des informations sur un Biome enregistré.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.world.IBiome;`

## Appeler un IBiome

You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame/) That is currently the only way

## ZenGetters

Atm, tout ce que vous pouvez faire avec un objet IBiome est de récupérer des informations :

| ZenGetter                      | Type de retour       |
| ------------------------------ | -------------------- |
| Nom                            | chaîne de caractères |
| canRain                        | boolean              |
| isSnowyBiome                   | boolean              |
| haute humidité                 | boolean              |
| Chance d'apparition            | flottant             |
| Hauteur de base                | flottant             |
| format@@0 heightVariation      | flottant             |
| précipitations                 | flottant             |
| format@@0 waterColorMultiplier | Indice               |
| ignorePlayerSpawnSuitability   | boolean              |
| température                    | flottant             |