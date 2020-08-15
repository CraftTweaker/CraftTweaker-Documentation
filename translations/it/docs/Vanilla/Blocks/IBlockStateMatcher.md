# IBlockStateMatcher

Un oggetto IBlockStateMatcher può essere usato per abbinare un oggetto [IBlockState](/Vanilla/Blocks/IBlockState/) a un insieme di requisiti o a un insieme di blockstates corrispondenti.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si riscontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/) o utilizzare lo statico `. reate()` metodo), in modo da essere più sicuro che spiacente e aggiungere l'importazione.  
`import crafttweaker.block.IBlockStateMatcher;`

## Corrispondenza di una Fortezza IBlock Specifica

Ogni [IBlockState](/Vanilla/Blocks/IBlockState/) è anche un IBlockStateMatcher che corrisponde solo a se stesso.

## Corrispondenza di qualsiasi Stato Blocco per un Blocco Specifico

È possibile utilizzare il metodo [IBlockState](/Vanilla/Blocks/IBlockState/) `matchBlock()` per creare un IBlockStateMatcher che corrisponda a qualsiasi stato di blocco possibile per quel blocco.

## Calling an IBlockStateMatcher

Ci sono diversi metodi che restituiscono un IBlockStateMatcher

- Usando `IBlockStateMatcher.create()`.
- Usando il metodo `withMatchedValuesForProperty()` su un altro IBlockStateMatcher.
- O due IBlockStateMatchers insieme per ottenere un matcher composto.
- Creazione di un [IBlockState](/Vanilla/Blocks/IBlockState/), come tutti gli oggetti IBlockState sono IBlockStateMatchers.

## Matchers Composti

Quando si utilizza OR (`<unk>`) per combinare IBlockStateMatchers, il risultato IBlockStateMatcher non è più legato a uno specifico blocco sottostante, come sarebbe con un [IBlockState](/Vanilla/Blocks/IBlockState/) o un IBlockStateMatcher creato utilizzando `IBlockStateMatcher. metodo reate()`. Invece, il matcher corrisponde a qualsiasi stato di blocco che sarebbe stato abbinato da uno qualsiasi dei matcher combinati.

Poiché questo blockstate non è legato a un blocco specifico, non è possibile utilizzare il metodo `withMatchedValuesForProperty()` per recuperare un altro IBlockStateMatcher.

### creazione statica

`static IBlockStateMatcher create(IBlockState... blockStates);` Parametri:

- [IBlockState](/Vanilla/Blocks/IBlockState/)... blockStates → Zero o più blockstate da abbinare a questo matcher. 

Restituisce un IBlockStateMatcher per corrispondere allo stato o agli stati di blocco specificati.

- Se vengono forniti zero `blockStates` , questo matcher non corrisponderà mai a nessun blockstati. 
- Se viene fornito un solo stato di blocco in `blockStates`, il risultato IBlockStateMatcher corrisponderà a *qualsiasi* stato di blocco del blocco sottostante di IBlockState fornito con qualsiasi valore di proprietà accettato come corrispondenza. Il metodo `withMatchedValuesForProperty` può essere utilizzato per aggiungere requisiti più specifici per le proprietà. 
- Se sono forniti più `blockStates` , il risultato IBlockStateMatcher è lo stesso dell'operatore OR (`<unk>`) con ciascuno degli IBlockStates forniti.

## ZenMethods

### corrispondenze

`partite booleane(IBlockState blockState);`  
Parametri:

- [IBlockState](/Vanilla/Blocks/IBlockState/) blockState → L'oggetto blockstate da abbinare contro

Restituisce un booleano che indica se il blockstate corrisponde ai requisiti di questo matcher.  
Puoi anche usare `A ha B` che rappresenta `A.matches(B)`.

### Ottieni o aggiungi proprietà consentite

*(Questi metodi sono ammessi solo nelle istanze IBlockStateMatcher non composte)*

    IBlockStateMatcher withMatchedValuesForProperty(nome string, Stringa... values);
    List<String> getMatchedValuesForProperty(String name);
    Map<String, List<String>> getMatchedProperties();
    

Parametri:

- Nome stringa → Il nome della proprietà
- Stringa... valori → Uno o più valori che la proprietà di una IBlockState corrispondente potrebbe avere.

Restituisce un nuovo IBlockStateMatcher con gli stessi requisiti di proprietà di questo IBlockStateMatcher ad eccezione della proprietà specificata `name`, che ora permetterà uno qualsiasi dei valori `specificati` come input corrispondente.

### getMatchingBlockStates

`Collection<IBlockState> getMatchingBlockStates();` Restituisce una raccolta di ogni [IBlockState](/Vanilla/Blocks/IBlockState/) con qualsiasi combinazione di proprietà che corrisponde a questo IBlockStateMatcher. Questo elenco può contenere gli stati bloccati che non sono possibili per ottenere attraverso i mezzi di gioco normali. (Es: `IBlockStateMatcher. reate(<blockstate:minecraft:log>)` restituirà un IBlockStateMatcher che corrisponde ai log con proprietà `axis=none`, con trame di corteccia su tutti e 6 i lati.)

### Controlla se uno Stato BlockState è uno Stato composto

`booleano isCompound()`

Fa quello che ti aspetteresti.

### Ottieni una rappresentazione della Stringa di comando

`Stringa di comando ZenGetter`

Restituisce una stringa di espressione Bracket Handler, se necessario accoppiata con `withMatchedValueForProperty()` chiamate.  
Tenete a mente però che le chiamate di metodo restituite non hanno `""` intorno ai parametri.  
Quindi, se si desidera copiare quel risultato, è necessario aggiungerli manualmente agli argomenti!