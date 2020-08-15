# Ottenendo `Sequenza`s

## Panoramica
Ottenere una `Sequenza` è un processo in due fasi: prima è necessario ottenere un riferimento a un costruttore di sequenza di il tipo corretto, poi invocare il costruttore passando o una lista di elementi del tipo dato o una matrice pronta del tipo dato completerà il processo di costruzione.

Alcune integrazioni CraftTweaker possono anche fornire un modo per ottenere una `Sequenza` direttamente o tramite un metodo. In questo caso, non c'è bisogno di fare alcuna invocazione costruttore. D'altra parte, il tipo generico non sarà specificato esplicitamente, richiedendo all'utente di fare una nota mentale del tipo restituito.

## Passo 1: Il Costruttore
Riferendosi a un costruttore `Sequenza` viene fatto tramite uno speciale gestore di parentesi, che ha la seguente sintassi:

```zenscript
<sequence:CLASSNAME>
```

Nel frammento di cui sopra, `CLASSNAME` rappresenta il nome corto o completamente qualificato della classe per la quale questa sequenza sarà generica. In parole più semplici, che definirà quale tipo di elementi la sequenza sarà in grado di memorizzare quando il costruttore viene invocato.

Considerare i due esempi seguenti:

```zenscript
<sequence:IItemStack> # 1
<sequence:crafttweaker.item.IIngredient> # 2
```

L'espressione di sequenza contrassegnata con `# 1` restituirà un riferimento a un costruttore per una sequenza che sarà in grado di contenere istanze di `IItemStack`. Si noti che questo richiede che la classe sia importata nello script corrente per funzionare.

L'espressione di sequenza contrassegnata con `# 2` restituirà un riferimento a un costruttore per una sequenza che sarà in grado di tenere qualsiasi tipo di `IIngrediente`, significa che accetterà `IItemStack`s, ma anche `IOreDictEntr`ies o qualsiasi altro custom `IIngrediente` implementazione.

**IMPORTANTE:** Questo tipo iniziale influenzerà solo il tipo di sequenza corrente. È sempre possibile cambiare il tipo memorizzato in questa sequenza in seguito tramite qualsiasi chiamata `Sequenza`-typeconverting calls, such as `map`. Ulteriori informazioni sono disponibili nella documentazione [della classe](/Mods/Boson/Sequences/Docs/).

## Passo 2: Invocare il Costruttore
Since the bracket handlers doesn't invoke the constructor, but simply references it, it is now necessary to invoke the constructor directly. Questo può essere fatto tramite una sintassi di invocazione di un metodo normale, tranne che viene fatto sopra un gestore di parentesi e non un nome di metodo.

Il costruttore di una sequenza è un vararg, che significa che può accettare qualsiasi quantità di argomenti, fintanto che sono tutti del tipo generico dato nel riferimento del costruttore. Ad esempio, il gestore di parentesi `<sequence:IItemStack>` non sarà in grado di accettare un `<ore:ingotCopper>` nel suo costruttore, poiché un `IOreDictEntry` non è un `IItemStack`.

È possibile non fornire argomenti al costruttore, nel qual caso la sequenza sarà vuota.

È anche possibile fornire un array stesso o un riferimento a un array, sia sotto forma di un metodo o di una variabile. In questo caso, l'array sarà accettato solo se il tipo corrisponde a `CLASSNAME[]`, dove `CLASSNAME` è il nome del tipo di oggetti nella sequenza. Nota che questo comportamento **potrebbe richiedere che** sia abilitato un flag sperimentale. Fare riferimento a il [Preprocessore di Bandiere Sperimentali](/Mods/Boson/Preprocessor/Exp/) per ulteriori informazioni.

Di seguito è riportato uno snippet di codice che mostra come viene applicato in codice quanto sopra.

```zenscript
val emptySequence = <sequence:string>();
val sequenceWithStacks = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_nugget>, <minecraft:apple>);
val sequenceOfRicette = <sequence:ICraftingRecipe>(ricette. ll); # richiede che -Esao sia specificato
```

## Cosa c'è dopo?
Ora che la `Sequenza` è stata costruita, fare riferimento a [la documentazione della classe](/Mods/Boson/Sequences/Docs/) per una lista di metodi supportati.
