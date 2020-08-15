# IItemUpdate

La funzione IItemUpdateFunction può essere aggiunta ad un articolo [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) per consentire che il codice venga eseguito ogni volta che l'elemento aggiorna.

## Importazione del pacchetto

Se hai mai sentito la necessità di importare la classe di questa funzione, qui vai:

```zenscript
import mods.contenttweaker.IItemUpdate;
```

## Sintassi

Abbiamo una funzione di vuoto che prende i seguenti parametri (in ordine)

- Un [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) che rappresenta la pila di oggetti stessa.
- Un [oggetto IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) che rappresenta il mondo in cui si svolge l'azione.
- Un oggetto IEntity [](/Vanilla/Entities/IEntity/) per quanto possibile in downcast, così puoi instanceOf fino a [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).
- Un int che rappresenta lo slot in cui l'elemento è attualmente in
- Un booleano che indica se l' elemento è attualmente selezionato.

```zenscript
item.onItemUpdate = function(itemStack, world, owner, slot, isSelected) {
    //CODE GOES HERE!!
    restituisce;
}
```