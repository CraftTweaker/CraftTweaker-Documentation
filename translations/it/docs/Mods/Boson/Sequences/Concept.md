# Il Concetto

Looping è un vecchio concetto e una delle basi della programmazione: ripetere lo stesso insieme di azioni su un gruppo di elementi , durante il filtraggio di alcuni di loro fuori o convertendo sets. O anche trovare il primo elemento in una lista che soddisfa una certa condizione o un conteggio degli elementi in un set ricorsivamente.

Nella programmazione procedurale e imperativa, la maggior parte di ciò è stata fatta con i vecchi `semplici per` loop e una serie di istruzioni condizionali con i loro relativi `continua` e `rompe` dichiarazioni. Mentre questo può sembrare più semplice da seguire, it richiede un sacco di codice per operazioni semplici come il filtraggio e può produrre catene di nidificazione che possono andare avanti più a lungo. Inoltre, non esprime l'intento a meno che il codice non lo specifichi con commenti.

Considera il seguente codice ZenScript:

```zenscript
var nbtForMc = falso;

per la ricetta in ricette. ll {
    if (recipe.shaped) {
        val output = recipes. utput;
        se (! sNull(output)) {
            if (output. efinition.owner == "minecraft") {
                val hasData = output. asTag;
                if (hasData) {
                    nbtForMc = true;
                    pausa;
                }
            }
        }
    }
}
```

Ciò che questo codice non è ovvio da un primo sguardo e richiede all'utente di leggere la logica per capire. Considerare questo equivalente costruito tramite sequenze:

```zenscript
val nbtForMc = <sequence:ICraftingRecipe>(recipes.all)
    .filter(function (recipe) { return recipe. haped; })
    .map(function (recipe) { return recipe.output; })
    . ilterNot(function (output) { return isNull(output); })
    .filter(function (output) { return output. efinition.owner == "minecraft"; })
    .any(function (output) { return output.hasTag; });
```

Questo codice fa lo stesso e non solo è più conciso, ma trasmette anche più significato che una catena di annidati `se` dichiarazioni. Concesso non sembra un miglioramento generale, a causa della semplicità del codice in questione, ma può rivelarsi utile per pezzi più complicati di logica.

Un altro pro del codice di cui sopra è che la valutazione non viene eseguita fino a quando `qualsiasi` chiamata, significa che la sequenza può essere estesa tramite chiamate di metodo aggiuntive nel tempo e non sarà risolta fino a quando non verrà chiamato un metodo "terminale" (i. . un metodo che non restituisce una `Sequenza` stessa). Questo si rivela estremamente utile in quanto non è necessario valutare tutte le `ricette.all` array.

Per iniziare e sfruttare Sequence, puoi consultare sia la documentazione della classe [](/Mods/Boson/Sequences/Docs/) che [come ottenere una](/Mods/Boson/Sequences/Obtaining/) pagina di documentazione.
