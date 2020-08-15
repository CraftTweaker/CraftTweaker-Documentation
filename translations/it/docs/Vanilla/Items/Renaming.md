# Rinomina

Leggere sempre 'cassa' è fastidioso, vero?

Ecco perché c'è la possibilità di rinominare roba.

## Cambiare il nome del display

Questo è probabilmente il modo più semplice per ottenere un altro elemento o nome del blocco. Rinominare `item` to `newName`:

```zenscript
item.displayName = newName;

//Example
<minecraft:chest>.displayName = "Storage Box Deluxe";
```

`item` is an [IItemStack](/Vanilla/Items/IItemStack/).  
`newName` is a String.

## Cambiare la localizzazione

Se alcuni inventari modded mostrano ancora il vecchio nome dell'oggetto invece di quello nuovo, è necessario cambiare la localizzazione. Puoi leggere cosa significa nella voce `gioco`.

```zenscript
game.setLocalization(languageCode,unlocalizedName,newName);

game.setLocalization("tile.chest.name","StorageBox Deluxe")
```

`languageCode` è una stringa e opzionale. Se si omette, applicherà la localizzazione indipendentemente dalla lingua impostata dal cliente.  
`unlocaLizedName` è una stringa.  
`newName` è una stringa.