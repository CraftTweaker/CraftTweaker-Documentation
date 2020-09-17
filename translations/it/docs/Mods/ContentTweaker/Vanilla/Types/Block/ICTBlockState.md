# ICTBlockState

Un oggetto ICTBlockState rappresenta lo stato corrente di un blocco.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.BlockState;`

## Chiamare una ICTBlockState

Puoi ottenere un ICTBlockState come parametro in una [funzione IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/) o dal [Block Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Blocks/)

`<block:minecraft:dirt>`

## ZenMethods e ZenGetters

| ZenMethod         | ZenGetter | Tipo Di Reso                                                           | Descrizione                                                  |
| ----------------- | --------- | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| getBlock()        | blocco    | [IBlock](/Vanilla/Blocks/IBlock/)                                      | Restituisce il blocco referito                               |
| getMeta()         | meta      | int                                                                    | Restituisce i metadati del blocco di riferimento             |
| canProvidePower() |           | boolean                                                                | Restituisce se il blocco referito può fornire Redstone Power |
| getMobilityFlag() |           | [PushReaction](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) | Restituisce il flag della reazione push                      |

## ZenMethods

### isSostituibile

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parametri:

- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo da controllare
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La posizione del blocco

Restituisce un booleano che sa se il blocco può essere sostituito o meno.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parametri:

- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo da controllare
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La posizione del blocco

Restituisce un int che rappresenta il valore di luce corrente nella posizione indicata.

### getWeakPower

`int getWeakPower(IWorld world, IBlockPos blockPos, Facing facing);`  
Parametri:

- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo da controllare
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La posizione del blocco
- [Faccia](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) rivolta verso → Il lato da controllare

Restituisce un int che rappresenta l'attuale potere di redstone su questo lato.

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Parametri:

- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo da controllare
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La posizione del blocco

Restituisce un int che rappresenta il tipo di override del comparatore redstone del blocco.

### Confronto di due oggetti ICTBlockState

Puoi usare `int compare(ICTBlockState other);` o ZenCompare Tokens `==` `!=`.  
I tipi di ritorno diversi:

- `state.compare(other)` restituisce un int che è 0 se sono uguali
- `state == other` returns a bool that is true of they are equal