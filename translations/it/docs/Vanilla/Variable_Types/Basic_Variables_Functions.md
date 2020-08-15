# Funzionalità variabili di base

I tipi di variabili più basilari di ZenScript sono Stringhe, Integers e booleani.

## La maggior parte dei tipi

`true == true` Puoi controllare se due valori sono gli stessi.  
`"Ciao" != "Mondo"` Puoi anche controllare se due valori non sono uguali.

## Stringhe

Le stringhe forniscono alcune funzionalità

`"Hello".length` Restituisce la lunghezza della corda come int.  
`"Hello"[1]` Restituisce il carattere all'indice fornito dalla stringa come un'altra stringa.  
`"Inferno" in "Inferno"` controlla se la stringa prima di `in` contiene la stringa dopo che è booleana. È possibile sostituire il `in` con `ha` se ti piace meglio.  
`"Hel" ~ "lo " + "World"` È anche possibile aggiungere / concatenare stringhe. `string += "assignAdd"` puoi anche usare gli operatori assegnaAdd/assignConcatenate.

A parte questi, tutti i metodi disponibili per [Java Strings](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) e non usare il tipo `char` sono disponibili anche per le stringhe ZenScript!  
Questo comprende:

- toMinuscolo
- toUpperCase
- getBytes
- hashCode
- stagista
- isEmpty
- toCharArray
- finitura
- suddividere

## Interi

Gli interi forniscono alcune funzionalità

`+-*/%` Operatori matematici di base (controlla la pagina [Tipi variabili](/Vanilla/Variable_Types/Variable_Types)). Puoi anche usare l'operatoreAssegna token  
`0 a 10` Restituisce un Intero Range che va da 0 a 10.  
`1~10` Concatenates the Integers (restituisce "110").

## Booleani

I booleani forniscono alcune funzionalità

`true ~ false` Concatenates the booleans (return "truefalse").  
`& <unk> ^` Boolean operators (and/or/xor).

## Array/ArrayLists

Array e ArrayLists forniscono funzioni comuni

`array[1]` restituisce l'elemento all'indice specificato.  
`array[1] = "Hello"` Imposta l'elemento all'indice specificato.  
`array.length` restituisce la lunghezza degli array