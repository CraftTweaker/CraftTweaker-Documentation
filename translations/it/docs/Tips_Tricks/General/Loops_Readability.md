# Usa i cicli per rendere il tuo script migliore

## Problema

Lo abbiamo visto tutti: Script con più di 500 righe dove si dice 500 volte `recipes.remove(item1);recipes.remove(item2),...`  
Non solo questo è un dolore da scrivere, ma è possibile che si trascorra ore a debuggare un po 'di battitura quando l'unica eccezione che si ottiene è `errore nelle ricette. s: null`

## Soluzione

La mia regola di miniatura: Quando si scrive esattamente lo stesso comando più di 10 volte, con solo 1 cambiamento di parametro, userò un ciclo.

Quindi, invece di scrivere sempre le funzioni, dichiaro un array contenente tutti gli elementi e iterare attraverso quello.

```zenscript
import crafttweaker.item.IIngredient;

val Array = [
    item1,
    item2,
    item3,
...
] come IIngredient[];


per l'elemento in Array{
    recipes.remove(item);
}
```

## Vantaggi

- Il tuo script diventa (a mio giudizio) più facile da leggere
- Sai esattamente dove si avviva il tuo script
- Le modifiche dell'ultimo minuto sono davvero facili come tutto quello che devi fare è aggiungere o rimuovere l'elemento dall'array.

## Svantaggi

- Funziona solo quando ci sono solo alcuni parametri che cambiano
- Si potrebbe avvitare il vostro copione senza saperlo, per esempio, gettare l'array sbagliato
- Un errore nell'array fa fallire l'intero array e nulla sarà fatto affatto.
- Potresti ricevere messaggi di errore criptico a causa della creazione dell'array in modo sbagliato.