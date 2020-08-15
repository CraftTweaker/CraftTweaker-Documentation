# `Tag`

Un tag `` è la rappresentazione dell'oggetto di ciò che viene memorizzato all'interno di un Tag di gioco reale. È possibile accedere a questi dati solo da all'interno del [`tag` loader](/Mods/Boson/Loaders/Tags/). Per ulteriori informazioni sui tag e su come ottenerli, consulta a [questa pagina](/Mods/Boson/Tags/Concept/).

## Dettagli Classe
La classe è situata nel pacchetto `net.thesilkminer.mc.boson.zen.tag` , rendendo `net.thesilkminer.mc.boson.zen.tag.Tag` il suo nome completamente qualificato per l'importazione.

## Creare una nuova istanza
Fare riferimento a [la documentazione del gestore di parentesi](/Mods/Boson/Tags/BracketHandler/).

## Proprietà
Un tag `` fornisce accesso in sola lettura a un certo insieme di proprietà, come illustrato nella tabella seguente:

| Nome Proprietà | Tipo                                     | Descrizione                                               |
| -------------- | ---------------------------------------- | --------------------------------------------------------- |
| `nome`         | [`NameSpacedString`](/Mods/Boson/Names/) | Nome che identifica univocamente questo tag               |
| `tipo`         | [`TagType`](/Mods/Boson/Tags/TagType/)   | Il tipo di questo tag                                     |
| `elementi`     | `[T]` (dove `T` è un tipo generico)      | Un elenco di elementi di sola lettura attualmente nel tag |

## Metodi

### Addizione
Aggiungere elementi a un tag può essere fatto tramite una tripletta di metodi, le cui firme sono nella snippet che segue:

```zenscript
function add(elementi... as NameSpacedString) as void;
function addAll(elements as any[]) as void;
function addFrom(other as Tag) as void;
```

`add` is a so-called "vararg method", meaning it can accept as many arguments as desired, provided they are all of the same type, i.e. `NameSpacedString`s. Questo consente di specificare il nome del registro dell'elemento che si desidera aggiungere al tag e l'implementazione del tag stesso tenterà di convertire il nome dato nell'oggetto effettivo.

`addAll`, d'altra parte, accetta una serie di elementi e tenta di aggiungerli tutti al tag specificato. L'array è contrassegnato come `qualsiasi[]` a causa della mancanza di supporto generico su questo input di metodo. Tuttavia tentare di aggiungere elementi non compatibili ad un tag (ad esempio, l'aggiunta di blocchi a un tag solo elemento) comporterà un'operazione no-op in corso.

`addFrom` aggiunge tutti i contenuti di un tag all'altro tramite un Tag Reference, significa che qualsiasi modifica effettuata a il secondo tag avviene anche al primo. Si noti che questa operazione ha successo solo se i tipi di tag corrispondono, altrimenti verrà eseguita un'operazione no-op .

Segue un elenco di esempi:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# aggiungi elementi tramite il nome del registro
tag. dd("minecraft:iron_ingot" come NameSpacedString, "thermalfoundation:iron_ingot" come NameSpacedString);

# aggiungi elementi tramite le loro istanze effettive
tag. ddAll([<buildcraft:iron_ingot>] come IItemStack[]);

# aggiungi un altro tag tramite un tag di riferimento
tag.addFrom(<tag-items:customtag:other_iron_ingots>);
```

### Sostituzione
Gli elementi di un tag possono essere completamente sostituiti, il che significa che tutti i contenuti vengono prima cancellati, quindi gli elementi indicati sono aggiunti al contenuto del tag. Questo si compie anche attraverso una tripletta di metodi, le cui firme sono nella snippet che segue:

```zenscript
function replace(elementi... as NameSpacedString) as void;
function replaceAll(elements as any[]) as void;
function replaceWith(other as Tag) as void;
```

`replace` is a so-called "vararg method", significa che può accettare tutti gli argomenti desiderati, a condizione che siano tutti di lo stesso tipo, i. . `NameSpacedString`s. Questo ti permette di specificare il nome del registro dell'elemento che vuoi usare per sostituire il contenuto del tag e l'implementazione stessa del tag cercherà di convertire il nome dato nell'oggetto effettivo.

`replaceAll`, d'altra parte, accetta un array di elementi e cerca di sostituire il contenuto del tag dato con l'array. L'array è contrassegnato come `qualsiasi[]` a causa della mancanza di supporto generico su questo input di metodo. Tuttavia tentando di di passare elementi non compatibili ad un tag (ad esempio, blocchi di un tag solo elemento) comporterà un'operazione no-op effettuata.

`sostituisciCon` sostituisce il contenuto del tag dato con un riferimento al tag all'altro, significa che qualsiasi modifica effettuata al secondo tag avviene anche al primo. Nota che questa operazione ha successo solo se i tipi di tag corrispondono, altrimenti verrà eseguita un'operazione no-op.

Segue un elenco di esempi:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# sostituire gli elementi con il nome del registro
tag. eplace("minecraft:iron_ingot" come NameSpacedString, "thermalfoundation:iron_ingot" come NameSpacedString);

# sostituire gli elementi tramite le loro istanze effettive
tag. eplaceAll([<buildcraft:iron_ingot>] come IItemStack[]);

# sostituire un altro tag con un tag di riferimento
tag.replaceWith(<tag-items:customtag:other_iron_ingots>);
```

### Rimozione
Rimuovere gli elementi da un tag può essere fatto tramite una tripletta di metodi, le cui firme sono nella snippet che segue:

```zenscript
function remove(elementi... as NameSpacedString) as void;
function removeAll(elements as any[]) as void;
function removeFrom(other as Tag) as void;
```

`remove` is a so-called "vararg method", significa che può accettare tutti gli argomenti desiderati, a condizione che siano tutti di lo stesso tipo, i. . `NameSpacedString`s. Questo consente di specificare il nome del registro dell'elemento che si desidera rimuovere dal tag e l'implementazione del tag stessa tenterà di convertire il nome dato nell'oggetto effettivo.

`removeAll`, d'altra parte, accetta una serie di elementi e tenta di rimuoverli tutti dal tag specificato. L'array è contrassegnato come `qualsiasi[]` a causa della mancanza di supporto generico su questo input di metodo. Tuttavia tentare di rimuovere elementi non compatibili da un tag (ad esempio, la rimozione di blocchi da un tag solo elemento) comporterà un'operazione no-op effettuata.

`removeFrom` rimuove il secondo tag dall'elenco dei Riferimenti Tag del primo tag. Questo rimuoverà di conseguenza gli elementi che il secondo tag porta dalla lista dei primi, anche se il secondo tag non avrà il suo contenuto cancellato. Si noti che questa operazione ha successo solo se i tipi di tag corrispondono, altrimenti verrà eseguita un'operazione no-op.

Segue un elenco di esempi:

```zenscript
val tag = <tag-items:forge:ingots/iron>;

# rimuovi elementi tramite il nome del registro
tag. emove("minecraft:iron_ingot" come NameSpacedString, "thermalfoundation:iron_ingot" come NameSpacedString);

# remove elements via their actual instances
tag. emoveAll([<buildcraft:iron_ingot>] come IItemStack[]);

# rimuovi un tag di riferimento
tag.removeFrom(<tag-items:customtag:other_iron_ingots>);
```

### Compensazione
Puoi anche cancellare il contenuto di un tag tramite un unico metodo. Questo rimuoverà tutti gli elementi e tutti i riferimenti ai tag memorizzati nel tag ed equivale a sostituire un tag con contenuti vuoti. This can be done via a method that has the following signature:

```zenscript
function clear() as void;
```

Un esempio è il seguente:

```zenscript
<tag-items:forge:ingots>.clear();
```

## Supporto Aggiuntivo
I tag offrono anche un supporto aggiuntivo per alcune funzionalità ZenScript.

### Interrogazione
Usando la sintassi `ha` , è possibile verificare se un tag contiene o meno un determinato oggetto. Un tag può infatti essere visto come una raccolta di elementi:

```zenscript
val isContained = TAG ha ELEMENTO;
```

`TAG` rappresenta l'istanza tag da interrogare. `ELEMENT` rappresenta l'istanza dell'elemento che potresti voler interrogare per verificare se è contenuta o meno nel tag.

Si noti che mentre i tag supportano la ricerca di qualsiasi cosa (sta effettivamente accettando `qualsiasi`), utilizzando un elemento che non è di il tipo che viene memorizzato nel tag non ha alcun effetto e semplicemente cortocircuito la valutazione a `false`.

### Iterazione
I tag supportano anche l'iterazione tramite un iterativo per il ciclo, usando un normale `per` ciclo. In questo modo viene eliminata la necessità di interrogare gli elementi tramite una chiamata a `elementi` , con conseguente codice più pulito.

Dal momento che i tag sono effettivamente un set, l'ordine di iterazione non è conservato e può differire tra diverse fasi dell'iteratore . Per questo motivo, sono supportati solo gli iteratori a singolo elemento (cioè non è possibile richiedere anche un indice di iterazione durante l'iterazione).

La sintassi da usare è la seguente:

```zenscript
for VARNAME in TAG {
}
```

`VARNAME` rappresenta il nome della variabile che verrà aggiornata ad ogni ciclo. `TAG` è l'istanza tag su cui accendere.

## Sovraccarico Operatore
I tag forniscono anche qualche sovraccarico dei normali operatori di ZenScript, in modo che alcune operazioni possano essere eseguite facilmente e con caratteri minori. Ogni sezione ospita una tabella di alcuni sovraccarichi di operatore che sono disponibili, con il corrispondente significato. In tutte le tabelle, `TAG` rappresenta l'istanza del tag di destinazione, mentre `ARGx` rappresenta il *x*-th argomento che dovrebbe essere fornito.

### Operatori unari
Gli operatori unari sono operatori che vengono applicati al tag stesso e non prendono argomenti.

| Operatore | Sintassi | Equivalente metodo | Note |
| --------- | -------- | ------------------ | ---- |
| `-`       | `-TAG`   | `cancella`         | \-  |

### Operatori binari
Gli operatori binari sono operatori di infix che vengono applicati tra il tag e un argomento. Gli operatori sono elencati qui in ordine di priorità (più alto significa che sarà applicato per primo).

**IMPORTANTE**: salvo diversa indicazione, tutti gli operatori **mutano** il tag che viene passato al sovraccarico, il che significa che cambiano il loro contenuto. Considera il seguente esempio:

```zenscript
val tag = <tag-items:forge:ingots>;
tag & [<minecraft:iron_ingot>] come IItemStack[];
```

Alla fine di questa snippet, il contenuto del tag `` sarà cambiato secondo le regole dell'operatore. Questo **non** crea un nuovo tag, né restituisce il valore del tag originale. La seguente snippet di codice non è infatti valida:

```zenscript
val tag = <tag-items:forge:ingots>;
# NOT VALID: WILL CAUSE COMPILATION ERROR
tag = tag & [<minecraft:iron_ingot>] come IItemStack[];
```

| Operatore | Tipo Argomento                           | Sintassi         | Metodo Equivalente | Note                                                                                       |
| --------- | ---------------------------------------- | ---------------- | ------------------ | ------------------------------------------------------------------------------------------ |
| `+`       | `Tag`                                    | `TAG + ARG1`     | `addFrom`          | \-                                                                                        |
| `+`       | `qualsiasi[]`                            | `TAG + ARG1`     | `addAll`           | Il tipo di array deve essere lo stesso del contenuto del tag                               |
| `+`       | [`NameSpacedString`](/Mods/Boson/Names/) | `TAG + ARG1`     | `aggiungi`         | Il sovraccarico accetta solo un argomento                                                  |
| `+`       | `qualsiasi`                              | `TAG + ARG1`     | `addAll`           | Shorthand per un singolo elemento: si applicano le stesse regole della versione dell'array |
| `~`       | `Tag`                                    | `TAG ~ ARG1`     | `addFrom`          | \-                                                                                        |
| `~`       | `qualsiasi[]`                            | `TAG ~ ARG1`     | `addAll`           | Il tipo di array deve essere lo stesso del contenuto del tag                               |
| `~`       | [`NameSpacedString`](/Mods/Boson/Names/) | `TAG ~ ARG1`     | `aggiungi`         | Il sovraccarico accetta solo un argomento                                                  |
| `~`       | `qualsiasi`                              | `TAG ~ ARG1`     | `addAll`           | Shorthand per un singolo elemento: si applicano le stesse regole della versione dell'array |
| `&`   | `Tag`                                    | `TAG & ARG1` | `addFrom`          | \-                                                                                        |
| `&`   | `qualsiasi[]`                            | `TAG & ARG1` | `addAll`           | Il tipo di array deve essere lo stesso del contenuto del tag                               |
| `&`   | [`NameSpacedString`](/Mods/Boson/Names/) | `TAG & ARG1` | `aggiungi`         | Il sovraccarico accetta solo un argomento                                                  |
| `&`   | `qualsiasi`                              | `TAG & ARG1` | `addAll`           | Shorthand per un singolo elemento: si applicano le stesse regole della versione dell'array |
| `-`       | `Tag`                                    | `TAG - ARG1`     | `removeFrom`       | \-                                                                                        |
| `-`       | `qualsiasi[]`                            | `TAG - ARG1`     | `removeAll`        | Il tipo di array deve essere lo stesso del contenuto del tag                               |
| `-`       | [`NameSpacedString`](/Mods/Boson/Names/) | `TAG - ARG1`     | `rimuovi`          | Il sovraccarico accetta solo un argomento                                                  |
| `-`       | `qualsiasi`                              | `TAG - ARG1`     | `removeAll`        | Shorthand per un singolo elemento: si applicano le stesse regole della versione dell'array |
| `==`      | `Tag`                                    | `TAG == ARG1`    | \-                | Agisce come controllo dell'uguaglianza, corrispondente ai contenuti; non mutare `TAG`      |
| `()`      | \-                                      | `TAG()`          | `elementi`         | \-                                                                                        |
