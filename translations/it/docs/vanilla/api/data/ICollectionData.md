# ICollectionData

I dati ICollection sono utilizzati per rappresentare una raccolta di [crafttweaker.api.data.IData](/vanilla/api/data/IData) come una Lista<IData>

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.ICollectionData
```

## Interfacce Implementate
ICollectionData implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Metodi
### aggiungi

```zenscript
new ListData(["Hello", "World"]).add(value as crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).add("today");
```

| Parametro | Tipo                                                   | Descrizione                        |
| --------- | ------------------------------------------------------ | ---------------------------------- |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il valore da aggiungere alla lista |



```zenscript
new ListData(["Hello", "World"]).add(index as int, value as crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).add(1, "beautiful");
```

| Parametro | Tipo                                                   | Descrizione                                                                                 |
| --------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| indice    | int                                                    | L'indice a cui aggiungere. Gli elementi successivi verranno spostati di un indice superiore |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il valore da aggiungere alla lista                                                          |


### asList

Ottiene una lista<IData> rappresentazione di questo IData, restituisce nulla su qualsiasi cosa tranne [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Restituisce: `null se questo IData non è una lista.`

Restituisce Lista<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
new ListData(["Hello", "World"]).asList();
```

### asMap

Ottiene una rappresentazione mappa<String, IData> di questo IData, restituisce nulla su qualsiasi cosa tranne [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Restituisce: `null se questo IData non è una mappa.`

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
new ListData(["Hello", "World"]).asMap();
```

### asString

Ottiene la rappresentazione stringa di questo IData

 Restituisce: `Stringa che rappresenta questo IData (valore e tipo).`

Ritorna una stringa

```zenscript
new ListData(["Hello", "World"]).asString();
```

### cancella

Rimuove ogni elemento nella lista

```zenscript
new ListData(["Hello", "World"]).clear();
```

### contiene

Controlla se questo IData contiene un altro IData, usato principalmente nelle sottoclassi di [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), è lo stesso di un controllo uguale su altri tipi di IData

Restituisce un booleano

```zenscript
new ListData(["Hello", "World"]).contains(data as crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).contains("Display");
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
new ListData(["Hello", "World"]).copy();
```

### ottieni

Recupera il [crafttweaker.api.data.IData](/vanilla/api/data/IData) memorizzato all'indice dato.

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hello", "World"]).get(index as int);
new ListData(["Hello", "World"]).get(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | L'indice (0-basato) |


### getId

Ottiene l'ID del tag NBT interno.

 Usato per determinare quale tipo di NBT è memorizzato (in un elenco per esempio)

 Restituisce: `ID del tag NBT che questi dati rappresentano.`

Restituisce byte

```zenscript
new ListData(["Hello", "World"]).getId();
```

### getString

Ottiene la rappresentazione della stringa del tag INBT interno

 Restituisce: `Stringa che rappresenta l'INBT interno di questo IData.`

Ritorna una stringa

```zenscript
new ListData(["Hello", "World"]).getString();
```

### rimuovi

Rimuove il [crafttweaker.api.data.IData](/vanilla/api/data/IData) memorizzato all'indice dato.

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hello", "World"]).remove(index as int);
new ListData(["Hello", "World"]).remove(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | L'indice (0-basato) |


### imposta

Imposta l'elemento all'indice fornito al valore dato

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hello", "World"]).set(index as int, value as crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).set(0, "Bye");
```

| Parametro | Tipo                                                   | Descrizione                      |
| --------- | ------------------------------------------------------ | -------------------------------- |
| indice    | int                                                    | L'indice da impostare (0-basato) |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il nuovo valore                  |



## Proprietà

| Nome       | Tipo | Ha Getter | Ha Setter |
| ---------- | ---- | --------- | --------- |
| dimensione | int  | vero      | falso     |

