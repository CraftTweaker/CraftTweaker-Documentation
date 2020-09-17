# ShortData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.ShortData
```

## Interfacce Implementate
ShortData implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.INumberData](/vanilla/api/data/INumberData)

## Costruttori
```zenscript
new crafttweaker.api.data.ShortData(interno come breve);
```
| Parametro | Tipo  | Descrizione                 |
| --------- | ----- | --------------------------- |
| interno   | breve | Nessuna descrizione fornita |



## Metodi
### asList

Ottiene una lista<IData> rappresentazione di questo IData, restituisce nulla su qualsiasi cosa tranne [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Restituisce: `null se questo IData non è una lista.`

Restituisce Lista<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
1058.asList();
```

### asMap

Ottiene una rappresentazione mappa<String, IData> di questo IData, restituisce nulla su qualsiasi cosa tranne [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Restituisce: `null se questo IData non è una mappa.`

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
1058.asMap();
```

### asString

Ottiene la rappresentazione stringa di questo IData

 Restituisce: `Stringa che rappresenta questo IData (valore e tipo).`

Ritorna una stringa

```zenscript
1058.asString();
```

### contiene

Controlla se questo IData contiene un altro IData, usato principalmente nelle sottoclassi di [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), è lo stesso di un controllo uguale su altri tipi di IData

Restituisce un booleano

```zenscript
1058.contains(dati come crafttweaker.api.data.IData);
1058.contains("Display");
```

| Parametro | Tipo                                                   | Descrizione                           |
| --------- | ------------------------------------------------------ | ------------------------------------- |
| dati      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dati per verificare se sono contenuti |


### copia

Rende una copia di questo IData.

 IData è immutabile per impostazione predefinita, usala per creare una copia corretta dell'oggetto.

 Restituisce: `una copia di questo IData.`

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
1058.copy();
```

### getId

Ottiene l'ID del tag NBT interno.

 Usato per determinare quale tipo di NBT è memorizzato (in un elenco per esempio)

 Restituisce: `ID del tag NBT che questi dati rappresentano.`

Restituisce byte

```zenscript
1058.getId();
```

### getString

Ottiene la rappresentazione della stringa del tag INBT interno

 Restituisce: `Stringa che rappresenta l'INBT interno di questo IData.`

Ritorna una stringa

```zenscript
1058.getString();
```


