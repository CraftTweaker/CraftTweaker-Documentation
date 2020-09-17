# Classe Di Gioco

La Classe IGame viene utilizzata per ottenere informazioni generali sul gioco. È possibile accedere usando `gioco`

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.game.IGame;`

## Zengetters

| Zengetter | Che cosa fa?                                         | Tipo Di Reso                                                     | Utilizzo        |
| --------- | ---------------------------------------------------- | ---------------------------------------------------------------- | --------------- |
| biomi     | Restituisce tutti i biomi registrati come elenco     | Lista<[IBiomes](/Vanilla/Biomes/IBiome/)>                        | `game.biomes`   |
| blocchi   | Restituisce tutti i blocchi registrati come lista    | Lista<[IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)>     | `game.blocks`   |
| entità    | Restituisce tutte le entità registrate come elenco   | Lista<[IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)> | `game.entities` |
| elementi  | Restituisce tutti gli elementi registrati come lista | Lista<[IItemDefinition](/Vanilla/Items/IItemDefinition/)>        | `game.items`    |
| liquidi   | Restituisce tutti i liquidi registrati come lista    | Lista<[ILiquidDefinizione](/Vanilla/Liquids/ILiquidDefinition/)> | `game.liquids`  |
| pozioni   | Restituisce tutte le pozioni registrate come lista   | Lista<[IPozione](/Vanilla/Potions/IPotion/)>                     | `game.pozioni`  |

## Metodi

### GetEntity

```zenscript
//getEntity(EntityName)

//essentially the same
val sheep = game.getEntity("sheep");
val sheep1 = <entity:minecraft:sheep>;
```

### SetLocalization

Imposta la localizzazione.  
Tutti i parametri sono stringhe. `game.setLocalization(key, value);`  
`game.setLocalization(lang, key, value);`

### Localizza

Restituisce una Stringa localizzata  
`game.localize(key)`  
`game.localize(key, lang)`