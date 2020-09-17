# Mano

Una mano è un'enumerazione delle due mani possibili del giocatore: principale e spento

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.Hand;`

## Enumerazioni

La mano può essere di questi due valori:

- principale
- spento

```zenscript
import mods.contenttweaker.Hand;

Hand.off();
Hand.main();
Hand.fromString("off");
Hand.fromString("main");
```

## Usi

L'uso principale di una mano è in una funzione [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/).

## Confrontare due oggetti a mano

È possibile confrontare due oggetti della mano utilizzando il `==` getter.

```zenscript
Hand.main() == Hand.main()
```