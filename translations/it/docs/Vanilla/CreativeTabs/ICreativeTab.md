# ICreativeTab

Un ICreativeTabObject rappresenta una scheda inventario creativo.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.creativetabs.ICreativeTab;`

## Ottenere un tale Oggetto

È possibile recuperare una scheda ICreativeTab dal [Gestore delle parentesi creative](/Vanilla/Brackets/Bracket_CreativeTab/).

## ZenGetters e ZenMethods senza parametri

| ZenGetter/ZenMethod | Tipo Di Reso  |
| ------------------- | ------------- |
| searchBarWidth      | int           |
| tabLabel            | stringa       |
| setNoScrollBar()    | vuoto (nulla) |
| setNoTitle()        | vuoto (nulla) |

## ZenMethod

#### Imposta nome immagine di sfondo

Usa una stringa (es. `"item_search.png"`).  
Restituisce vuoto (niente).

```zenscript
tab.setBackgroundImageName(String backgroundImage);
```