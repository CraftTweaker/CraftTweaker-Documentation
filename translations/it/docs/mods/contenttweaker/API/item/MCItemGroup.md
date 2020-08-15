# MCItemGroup

An item Group (alias La scheda creativa) è un raggruppamento di elementi basato sulla categoria.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## Interfacce Implementate
MCItemGroup implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### getPath

Ottiene il percorso del gruppo di elementi. Il percorso è quello che usi nell'Espressione parentesi dopo la parte `<itemgroup:`.

Tipo di ritorno: Stringa

```zenscript
<itemgroup:misc>.getPath();
```

### setBackgroundImageName

Imposta il nome dell'immagine dello sfondo che viene utilizzato per questa scheda nel menu creativo Restituisce: `Questo oggetto per incatenare`

Tipo restituito: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(texture as String);
```

| Parametro | Tipo    | Descrizione       |
| --------- | ------- | ----------------- |
| texture   | Stringa | La trama da usare |


### setNoScrollbar

Rimuove la barra di scorrimento del gruppo di oggetti nell'inventario creativo

 Restituisce: `Questo oggetto per chaining`

Tipo restituito: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

Rimuove il titolo del gruppo di oggetti nell'inventario creativo

 Restituisce: `Questo oggetto per chaining`

Tipo restituito: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | Stringa | vero      | falso     |
| percorso      | Stringa | vero      | falso     |

