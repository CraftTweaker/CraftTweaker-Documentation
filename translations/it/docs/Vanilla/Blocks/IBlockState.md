# IBlockState

Un oggetto IBlockState rappresenta lo stato corrente di un blocco.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.block.IBlockState;`

## Chiamare un IBlockState

Ci sono diversi metodi che restituiscono un IBlockState

- Utilizzando il [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) `<blockstate:minecraft:log:variant=spruce>`
- Usando il metodo statico `IBlockState.getBlockState()`. (Vedi di seguito per maggiori informazioni)
- Usando il metodo `getMatchingBlockStates()` su un oggetto [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) per recuperare un array di IBlockStats.
- Usando il metodo `withProperty()` su un altro oggetto IBlockState.

## Risolvere una Fortezza IBlockat Runtime

Ci possono essere momenti in cui il tuo script può fare affidamento sull'interazione con un blocco di una mod che non è ancora stata caricata, come gli eventi all'interno del blocco in ContentTweaker o un altro caricatore di script pre-init. Se si tenta di utilizzare un [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) per un blocco che non è ancora stato registrato, il gestore non riuscirà a risolvere e lo script non funzionerà.

Per evitare questo, è possibile utilizzare il metodo statico `IBlockState.getBlockState()` per risolvere un IBlockState al runtime.

### statico getBlockState

`statico IBlockState getBlockState(String blockname, String... proprietà)` Parametri:

- Blocco della stringa → Una stringa nel formato "modid:blockname" come apparirebbe nel [BlockState Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/)
- Stringa... proprietà → Zero o più stringhe di `"name=value"` coppie di proprietà da applicare a questo blockstate. Qualsiasi proprietà non specificata userà lo stesso valore del blockstate predefinito per il nome del blocco specificato.

Restituisce un IBlockState del `blockname` specificato con le `proprietà specificate`o il blockstate predefinito se non sono specificate proprietà.

## Estensione Delle Proprietà IblockProperties

IBlockState estende [IBlockProperties](/Vanilla/Blocks/IBlockProperties/). Ciò significa che tutti i metodi disponibili per gli oggetti [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) sono disponibili anche per gli oggetti IBlockForth.

## Estendere IBlockStateMatcher

IBlockState estende [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/). Ciò significa che tutti i metodi disponibili per gli oggetti [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) sono disponibili anche per gli oggetti IBlockFort.

## ZenMethods e ZenGetters

| ZenGetter     | Tipo Di Reso                      | Descrizione                                                                                          |
| ------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| blocco        | [IBlock](/Vanilla/Blocks/IBlock/) | Restituisce il blocco referito                                                                       |
| meta          | int                               | Restituisce i metadati del blocco di riferimento                                                     |
| commandString | stringa                           | Restituisce un possibile [Gestore parentesi](/Vanilla/Brackets/Bracket_BlockState/) per questo stato |

## ZenMethods

### isSostituibile

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parametri:

- [mondo IWorld](/Vanilla/World/IWorld/) → Il mondo da controllare
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La posizione del blocco

Restituisce un booleano che sa se il blocco può essere sostituito o meno.

### Recupero o modifica delle proprietà

È possibile ottenere un elenco di tutte le proprietà registrate, come elenco con tutti i nomi delle proprietà o come mappa che mappano le proprietà al loro valore.  
Puoi anche controllare quali valori sono possibili per un dato nome di proprietà.  
Puoi anche utilizzare `conProprietà` per creare un nuovo oggetto IBlockState con quella proprietà modificata.

```zenscript
Elenco<String> getPropertyNames();
String getPropertyValue(String name);
List<String> getAllowedValuesForProperty(String name);

IBlockState withProperty(String name, String value);
```

### Confrontare due oggetti IBlockState

Puoi usare `int compare(IBlockState other);` o ZenCompare Tokens `==` `!=`.  
I tipi di ritorno diversi:

- `state.compare(other)` restituisce un int che è 0 se sono uguali
- `state == other` returns a bool that is true of they are equal

### Ottenere un Matcher Blockstate esplicito

Restituisce un [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) che corrisponde al blocco specificato.

```zenscript
IBlockStateMatcher matchBlock();
```