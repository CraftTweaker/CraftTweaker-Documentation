# Documentazione Della Classe

Un `Sequenza` è un elenco di elementi su cui può essere azionato e viene valutato pigramente. Fare riferimento alla pagina [Concept](/Mods/Boson/Sequences/Concept/) per maggiori informazioni.

## Dettagli Classe
Facendo parte del Progetto ZenScriptX, il nome pienamente qualificato per la classe è `zenscriptx.sequence.Sequence`.

## Creare una nuova istanza
Fare riferimento alla pagina [Ottenendo Sequenze](/Mods/Boson/Sequences/Obtaining/).

## Metodi
I vari metodi disponibili in una sequenza possono essere suddivisi in quattro categorie:

- Metodi terminali
- Metodi pigri che cambiano tipo
- Metodi pigri intermedi
- Metodi intermedi desiderosi

Ogni categoria ha il proprio comportamento e le proprie stranezze, che sono descritte nella rispettiva categoria.

Inoltre, in ogni firma di metodo, le lettere `T` e `R` fanno riferimento ai tipi generici che definiscono la sequenza. In particolare, `T` identifica il tipo di sequenza corrente, considerando che `R` identifica il tipo di nuova sequenza che viene restituita in caso di cambio di tipo pigro metodi.

Per salvare lo spazio, i metodi saranno presentati in una singola snippet nella categoria corrispondente con un commento che indica cosa dovrebbe fare il metodo, come mostrato nel seguente esempio snippet.

```zenscript
# questo metodo fa qualcosa
metodo funzione (argomento come int, argument2 come bool) come doppio;

# questo metodo fa qualcos'altro, e può restituire null
function method2() come bool?;
```

Ultimo ma non meno importante, fare riferimento alla lista [delle interfacce funzionali](/Mods/Boson/Functions/List/) se si incontra qualsiasi tipo non primitivo (e. . `Predicazione<T>` o `Funzione<T, R>`).

### Metodi terminali
I metodi terminali sono metodi che non restituiscono un'istanza `Sequenza` , ma piuttosto qualsiasi altro tipo di dati, such as `int`, `bool`, or even nothing (`void`). Inoltre, possono anche potenzialmente causare la valutazione dell'intero contenuto della `Sequenza` , anche se ciò non è necessario, poiché alcuni metodi possono anche terminare l'esecuzione non appena sono soddisfatte determinate condizioni . Tuttavia, questa garanzia non può essere fatta.

È anche impossibile continuare ad operare su una `Sequenza` dopo che un metodo terminale è stato chiamato, a meno che la sequenza non sia stata precedentemente salvata in una variabile prima dell'invocazione del metodo terminale.

```zenscript
# Returns whether the given 'element' is present in the target sequence
function contains(element as T) as bool;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise throws an exception
function elementAt(index as int) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise invokes 'defaultValue'
function elementAtOrElse(index as int, defaultValue as IntFunction<T>) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise returns null
function elementAtOrNull(index as int) as T?;

# Returns the first element that matches the given predicate, or null if none matches
function find(predicate as Predicate<T>) as T?;

# Returns the last element that matches the given predicate, or null if none matches
function findLast(predicate as Predicate<T>) as T?;

# Returns the first element of this sequence, if present, otherwise throws an exception
function first() as T;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise throws an exception
function first(predicate as Predicate<T>) as T;

# Returns the first element of this sequence, if present, otherwise returns null
function firstOrNull() as T?;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise returns null
function firstOrNull(predicate as Predicate<T>) as T?;

# Returns the position at which 'element' is found within the sequence, or -1 if no such element exists in the sequence
function indexOf(element as T) as int;

# Returns the position of the first element that matches the given predicate, or -1 if none match
function indexOfFirst(predicate as Predicate<T>) as int;

# Returns the position of the last element that matches the given predicate, or -1 if none match
function indexOfLast(predicate as Predicate<T>) as int;

# Returns the last element of this sequence, if present, otherwise throws an exception
function last() as T;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise throws an exception
function last(predicate as Predicate<T>) as T;

# Returns the last position at which 'element' occurs in the sequence, or -1 if no such element exists in the sequence
function lastIndexOf(element as T) as int;

# Returns the last element of this sequence, if present, otherwise returns null
function lastOrNull() as T?;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise returns null
function lastOrNull(predicate as Predicate<T>) as T?;

# Returns the only element in this sequence, or throws an exception if the sequence doesn't have exactly one element
function single() as T;

# Returns the only element in this sequence that matches the given predicate, or throws an exception if no elements or more than one match
function single(predicate as Predicate<T>) as T;

# Returns the only element in this sequence, or null if the sequence doesn't have exactly one element
function singleOrNull() as T?;

# Returns the only element in this sequence that matches the given predicate, or null if no elements or more than one match
function singleOrNull(predicate as Predicate<T>) as T?;

# Converts this sequence to a list (not an array)
function toList() as [T];

# Returns whether all the elements inside this sequence match the given predicate, or true for empty sequences
function all(predicate as Predicate) as bool;

# Returns whether this sequence is not empty
function any() as bool;

# Returns whether at least one of the elements of this sequence match the given predicate
function any(predicate as Predicate<T>) as bool;

# Returns the amount of items that are present in this sequence
function count() as int;

# Returns the amount of items in this sequence that match the given predicate
function count(predicate as Predicate<T>) as int;

# Accumulates values starting from 'initial' and recursively applying 'operation' over the current status of 'initial' and the next element, saving the result back into 'initial'
function fold(initial as R, operation as BiFunction<R, T, R>) as R;

# Executes the given 'action' on every element of the sequence in order
function forEach(action as Consumer<T>) as void;

# Executes the given 'action' on every element of the sequence in order, providing access to the current index
function forEachIndexed(action as ObjIntConsumer<T>) as void;

# Returns the element that has the maximum value according to the given 'comparator', or null if the sequence is empty
function maxWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns the element that has the minimum value according to the given 'comparator', or null if the sequence is empty
function minWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns whether this sequence is empty
function none() as bool;

# Returns whether none of the elements of this sequence match the given predicate
function none(predicate as Predicate<T>) as bool;

# Returns the integer sum of all the elements of this sequence according to the given 'selector'
function sumBy(selector as ToIntFunction<T>) as int;

# Returns the floating point sum of all the elements of this sequence according to the given 'selector'
function sumByDouble(selector as ToDoubleFunction<T>) as double;

# Returns a string that represents the contents of the given sequence, converted to string via 'transform', separated with the given 'separator', and with the given 'prefix' and 'suffix'
# Moreover, the amount of elements can be limited via 'limit' (if different from -1), in which case a longer list will be truncated via the text in 'truncated'
function joinToString(
    separator as string,               # optional, default value: ", "
    prefix as string,                  # optional, default value: ""
    postfix as string,                 # optional, default value: ""
    limit as int,                      # optional, default value: -1
    truncated as string,               # optional, default value: "..."
    trasformare come Funzione<T, String>?  # opzionale, valore predefinito: null (cioè un semplice `toString` sarà chiamato sull'oggetto di destinazione)
) come stringa;
```

### Metodi pigri che cambiano tipo
I metodi pigri che cambiano tipo sono metodi che restituiscono una `Sequenza` di un tipo diverso piuttosto che quello originale, a seguito del risultato di un'operazione di conversione (e. . da `IItemStack` a `IBlockState`). Poiché sono pigre, la valutazione del contenuto della sequenza sarà effettuata solo in un momento successivo, quando la trasformazione ha effettivamente bisogno di accadere a causa dell'invocazione di un metodo terminale o di un metodo intermedio.

Poiché questi metodi sono intermedi, è possibile continuare ad utilizzare una `Sequenza` dopo un'invocazione di questi metodi.

```zenscript
# Trasforma ogni elemento di questa sequenza in un altro usando la funzione 'trasforma'
funzione mappa funzione (trasformata come Funzione<T, R>) come Sequenza<R>;

# Trasforma ogni elemento di questa sequenza in un altro usando la funzione 'transform' specificata, fornire l'accesso alla funzione attuale dell'indice
mapIndexed(transformare come BiFunction<int?, T, R>) come Sequence<R>;

# Cattura ogni coppia di elementi adiacenti all'interno della sequenza ed esegue la funzione 'transform' specificata, restituendo i risultati in una sequenza
# Restituisce una sequenza vuota se la sequenza corrente ha meno di due elementi
funzione zipWithNext(transformare come BiFunction<T, T, R>) come sequenza<R>;
```

### Metodi pigri intermedi
I metodi pigri intermedi sono metodi che restituiscono una `Sequenza` dello stesso tipo di quella attuale, e la valutazione di il metodo sarà rinviato fino a quando non verrà definito un metodo terminale o un metodo intermedio, d'ora in poi il nome "pigro". For this exact reason, element removal or addition may (and will) not be reflected in the sequence itself up until the sequence is fully evaluated. Per questo motivo, qualsiasi modifica agli argomenti passati alla funzione può avere effetti collaterali indesiderati (specialmente per le chiamate `meno` e `più`).

Poiché questi metodi sono intermedi, è possibile continuare ad utilizzare una `Sequenza` dopo un'invocazione di questi metodi.

```zenscript
# Rimuove i primi elementi 'n' dalla testa della sequenza, eliminandoli di fatto
funzione drop(n as int) as Sequence<T>;

# Rimuove gli elementi dalla testa della sequenza finché il predicato dato restituisce 'true', eliminarli efficacemente
function dropWhile(predicate as Predicate<T>) as Sequence<T>;

# Mantiene nella sequenza solo gli elementi che corrispondono al filtro funzione predicato
(predicato come Predicato<T>) come Sequenza<T>;

# Mantiene nella sequenza solo gli elementi che corrispondono al predicato dato, fornendo l'accesso all'indice corrente
function filterIndexed(predicate as BiPredicate<int?, T>) as Sequence<T>;

# Rimuove dalla sequenza tutti gli elementi che corrispondono al predicato specificato
filtro funzioneNot(predicato come Predicato<T>) come Sequenza<T>;

# Mantiene nella sequenza solo i primi elementi 'n', tratto dalla testa della sequenza
la funzione assume (n as int) come sequenza<T>;

# Mantiene gli elementi della sequenza dalla sua testa finché il predicato dato restituisce 'true'
la funzione takeWhile(predicato come Predicato<T>) come Sequenza<T>;

# Rimuove gli elementi che sono duplicati nella sequenza corrente, mantenere una singola "copia" di ogni singolo elemento
funzione distintivo () come Sequenza<T>;

# Rimuove gli elementi che sono duplicati in base al selettore specificato all'interno della sequenza, mantenere in modo efficace una singola "copia" di ogni singolo articolo
# K in questa istanza rappresenta un altro tipo generico che identifica il tipo di "chiave" che verrà utilizzato per eseguire questa operazione
funzione distintaBy(selettore come funzione<T, K>) come sequenza<T>;

# Esegue l''azione' data su qualsiasi elemento della sequenza, senza terminare la funzione
onEach(action as Consumer<T>) as Sequence<T>;

# Rimuove gli elementi indicati dalla sequenza, se sono presenti
funzione minus(elementi come T[]) come Sequenza<T>;

# Rimuove l'elemento dato dalla sequenza ONCE, se presente, ridurre efficacemente la quantità di duplicati di quell'elemento di 1
funzione minusElement(elemento come T) come Sequenza<T>;

# Aggiunge gli elementi indicati alla fine della sequenza
funzione plus(elementi come T[]) come sequenza<T>;

# Aggiunge l'elemento dato alla fine della sequenza
funzione plusElement(elemento come T) come Sequenza<T>;

# Restituisce la sequenza corrente (effettivamente "do-nothing")
function asSequence() as Sequence<T>;
```

### Metodi intermedi desiderosi
I metodi desiderosi intermedi sono metodi che restituiscono una `Sequenza` dello stesso tipo di quella corrente, ma la valutazione del metodo non può essere differita fino a quando non viene richiamato un metodo terminale. Inoltre, metodi ansiosi possono causare la valutazione di l'intera sequenza richiede fino a quel punto in qualsiasi momento tra la loro invocazione e l'invocazione del metodo terminale. Per questo motivo, si consiglia di chiamare metodi ansiosi il più possibile con parsimonia e lasciare che operino sulla più piccola quantità di dati possibile.

Poiché questi metodi sono intermedi, è possibile continuare ad utilizzare una `Sequenza` dopo l'invocazione di questi metodi.

```zenscript
# Ordina la sequenza corrente con un algoritmo stabile, in base all'output della funzione di comparatore
selezionatoWith(comparatore: ToIntBiFunction<T, T>) come Sequenza<T>;
```

## Sovraccarico Operatore
`Sequenza`s può supportare il sovraccarico dell'operatore nelle future revisioni della lingua. Fare riferimento a questa documentazione per mantenere aggiornato. Nota che il supporto potrebbe richiedere l'attivazione di uno speciale flag del compilatore: fai riferimento al preprocessore [Sperimentali dei contrassegni](/Mods/Boson/Preprocessor/Exp/) per maggiori informazioni.

## Esempio
Il seguente è uno script di esempio che mostra alcuni esempi che possono essere fatti con sequenze. Questo è un elenco completo, ma è inteso più come un riferimento e una prova di concetto.

```zenscript
# Stampa il nome visualizzato dei tre elementi indicati
<sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
    . ilter(function (item) { return item.displayName has "Iron"; })
    .map(function (item) { return item.displayName; })
    . orEach(function (displayName) { print(displayName); });

# Mostra come le sequenze possono essere memorizzate e chiamate in seguito
val x = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
            . ilter(function (item) { return item. isplayName ha "Iron"; })
            .map(function (item) { return item. isplayName; });
x.map(function (displayName) { return displayName + displayName; })
    . orEach(function (message) { print(message); });


# Mostra come la conversione può essere ripetuta più di una volta
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . ap(function (item) { return item * 10; })
    . ap(function (item) { return item.commandString; })
    . ilter(function (commandString) { return commandString has " * "; })
    . orEach(function (b) { print(b); });

# Un altro esempio casuale
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . apIndexed(function (index, item) { return item * (index + 1); })
    . lus(<minecraft:gold_ingot> * 5)
    . ilterNot(function (item) { return item.displayName has "Bed"; })
    .map(function (item) { return item.commandString; })
    . orEachIndexed(function (s, index) { print("" + index + ": " + s); });

# Mostra come funzioni sovraccaricate come il lavoro di conteggio
print(<sequence:IItemStack>(<minecraft:redstone>). ount()); # Outputs 1
print(<sequence:IItemStack>(<minecraft:gold_ingot>, <minecraft:iron_ingot>).count(function (item) { return item. isplayName ha "Ferro"; })); # Uscite 1

# Interoperabilità tra ZenScriptX e Boson
<sequence:IItemStack>(<minecraft:redstone>)
    . ap(function (it) { return it. efinition; })
    .map(function (it) { return it.id; })
    . ap(function (it) { return it as NameSpacedString; })
    . nEach(function (it) { print(it.asString()); })
    .map(function (it) { return it.path; })
    . orEach(function (it) { print(it); });

# Elemento At to grab elements
val target = <sequence:IItemStack>(<minecraft:redstone>).elementAt(0);
print(target.definition.id);
```
