# BracketHandlers

Raccomando di non usare direttamente i metodi statici di questa classe, in quanto possono essere fusi in CrT BEP in qualsiasi momento. Se è necessario accedere dinamicamente ai metodi Partener Espressione parentesi, è possibile utilizzare
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.BracketHandlers
```

## Metodi
### getItemGroup

Ottiene il itemGroup. Lancerà un errore se il gruppo non è stato trovato

 Restituisce: `Il MCItemGroup trovato`

Tipo restituito: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(tokens as String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| Parametro | Tipo    | Descrizione                                |
| --------- | ------- | ------------------------------------------ |
| token     | Stringa | Cosa createDataCompound nella chiamata BEP |


### getToolType

Ottiene un [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType). Creerà uno nuovo se quello dato non esiste.

 Restituisce: `Il [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) se trovato, o un nuovo MCToolType`

Tipo restituito: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweaker.BracketHandlers.getToolType(tokens as String);
mods.contenttweaker.BracketHandlers.getToolType("shovel");
```

| Parametro | Tipo    | Descrizione                                   |
| --------- | ------- | --------------------------------------------- |
| token     | Stringa | Cosa creeresteDataCompound nella chiamata BEP |



