# Un Primer sulle interfacce funzionali

Secondo le specifiche linguistiche di Java per Java 8, un’interfaccia funzionale in Java è:

> Un'interfaccia funzionale è un'interfaccia che ha un solo metodo astratto (a parte i metodi di `Oggetto`), e rappresenta quindi un unico contratto di funzione. Questo metodo "singolo" può assumere la forma di molteplici metodi astratti con firme sovrascritte equivalenti ereditate da superinterfacce; in questo caso, i metodi ereditati rappresentano logicamente un unico metodo.
> 
> Per un'interfaccia I, let `M` be the set of `abstract` methods that are members of I that do not have the same signature as any `public` instance method of the class `Object`. Poi, sono un'interfaccia funzionale ** se esiste un metodo `m` in `M` per cui entrambi i seguenti sono veri:
> 
> - La firma di `m` è una sotto-firma ([§8.4.2](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.2)) di ogni metodo firma in `M`.
> - `m` is return-type substitutable ([§8.4.5](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.5)) for every method in `M`.
> 
> [Fonte](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.8)

ZenScript, essendo un linguaggio di programmazione Java-like che interagisce con un backend Java, ha una definizione simile.

## Una Semplificazione
La definizione di cui sopra è eccessivamente precisa e complicata, che deve essere prevista da una specifica linguistica formale. Un modo più semplificato per lo sviluppatore potrebbe essere il seguente:

> Un'interfaccia `I` è chiamata *interfaccia funzionale* se definisce solo un singolo metodo astratto.

Questa definizione è accettata anche da ZenScript stesso.

## L'Uso Pratico
Fino ad ora, la documentazione di cui sopra si è basata più su "cosa" piuttosto che "perché". Le interfacce funzionali possono sembrare un gimmick, ma sono particolarmente utili, dal momento che in ZenScript consentono *Funzioni Pure* (i. . le cose che crei con `funzione`) da passare al codice Java senza richiedere strani shenanigans. Questo è qualcosa che definiamo "lambda".

Esempi di applicazioni di queste interfacce sono le [Funzioni Ricetta](/Vanilla/Recipes/Crafting/Recipe_Functions/) che possono essere passate a ricette per modificare l'output o l'ingresso dinamicamente: `IRecipeFunction` e `IRecipeAction` sono in infatti due interfacce funzionali.

## Il problema e la sua soluzione
Le interfacce funzionali disponibili nella lingua ZenScript sono tutte troppo specifiche. Da un lato, questo permette funzioni finemente realizzate per alcuni parametri; d'altra parte, questo limita gravemente le possibilità di ciò che può essere fatto dallo sviluppatore.

Per questo motivo, il Progetto ZenScriptX ha deciso di fornire un insieme di interfacce funzionali di scopo generale che possono ricevere una quantità di parametri di input e output qualcos'altro, consentendo una più facile interoperabilità con le API basate su Java. Un elenco completo delle interfacce funzionali disponibili può essere trovato su questa pagina [](/Mods/Boson/Functions/List/), insieme a tutti i loro argomenti e tipi di reso.

## Una Disclaimer Rapida
Si noti che in questa documentazione abbiamo fatto riferimento principalmente all'interoperabilità tra ZenScript e Java. Questo perché ZenScript fornisce già il supporto per le funzioni di ordine superiore (es. memorizzare le funzioni in una variabile, chiamarle, passarle come parametri ecc.) senza richiedere alcuna interfaccia funzionale tra di loro. Per questo motivo il seguente codice non sarebbe valido in ZenScript:

```zenscript
val fun come Function = function (input as IIngredient) as IItemStack {
    if (input instanceof IItemStack) return input as IItemStack;
    return null;
} as Function;

print(fun. pply(<minecraft:stick>).commandString); # non compila
```

Questo accade perché i metodi funzionali non sono esposti a ZenScript, ma solo al backend Java. Per trovare un esempio di utilizzo reale di tali interfacce funzionali, fare riferimento alla pagina [Documentazione Sequenze](/Mods/Boson/Sequences/Docs/).


