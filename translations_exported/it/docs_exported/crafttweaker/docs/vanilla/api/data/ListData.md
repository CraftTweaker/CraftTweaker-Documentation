# ListData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.ListData
```

## Interfacce Implementate
ListData implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Costruttori
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| Parametro | Tipo                                                                             | Descrizione                 | IsOptional | Valore Predefinito |
| --------- | -------------------------------------------------------------------------------- | --------------------------- | ---------- | ------------------ |
| elenco    | Elenco&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt; | Nessuna descrizione fornita | vero       | `null`             |



## Metodi
### aggiungi

```zenscript
["Ciao", "Mondo", "!"].add(valore come crafttweaker.api.data.IData);
["Ciao", "Mondo", "!"].add("oggi");
```

| Parametro | Tipo                                                   | Descrizione                        |
| --------- | ------------------------------------------------------ | ---------------------------------- |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il valore da aggiungere alla lista |



```zenscript
["Hello", "World", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add(1, "beautiful");
```

| Parametro | Tipo                                                   | Descrizione                                                                                 |
| --------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| indice    | int                                                    | L'indice a cui aggiungere. Gli elementi successivi verranno spostati di un indice superiore |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il valore da aggiungere alla lista                                                          |


### asList

Ottiene una lista<IData> rappresentazione di questo IData, restituisce nulla su qualsiasi cosa tranne [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Restituisce: `null se questo IData non è una lista.`

Tipo di restituzione: Elenco&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
["Ciao", "Mondo", "!"].asList();
```

### asMap

Ottiene una rappresentazione mappa<String, IData> di questo IData, restituisce nulla su qualsiasi cosa tranne [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Restituisce: `null se questo IData non è una mappa.`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
["Ciao", "Mondo", "!"].asMap();
```

### asString

Ottiene la rappresentazione stringa di questo IData

 Restituisce: `Stringa che rappresenta questo IData (valore e tipo).`

Tipo di ritorno: Stringa

```zenscript
["Ciao", "Mondo", "!"].asString();
```

### cancella

Rimuove ogni elemento nella lista

```zenscript
["Ciao", "Mondo", "!"].clear();
```

### contiene

Controlla se questo IData contiene un altro IData, usato principalmente nelle sottoclassi di [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), è lo stesso di un controllo uguale su altri tipi di IData

 Restituisce: `true se gli IData forniti sono contenuti in questo IData`

Tipo restituito: booleano

```zenscript
["Hello", "World", "!"].contains(dati come crafttweaker.api.data.IData);
["Hello", "World", "!"].contains("Display");
```

| Parametro | Tipo                                                   | Descrizione                           |
| --------- | ------------------------------------------------------ | ------------------------------------- |
| dati      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dati per verificare se sono contenuti |


### copia

Rende una copia di questo IData.

 IData è immutabile per impostazione predefinita, usala per creare una copia corretta dell'oggetto.

 Restituisce: `una copia di questo IData.`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Ciao", "Mondo", "!"].copy();
```

### ottieni

Recupera il [crafttweaker.api.data.IData](/vanilla/api/data/IData) memorizzato all'indice dato. Restituisce: `Il [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Ciao", "Mondo", "!"].get(index as int);
["Ciao", "Mondo", "!"].get(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | L'indice (0-basato) |


### getId

Ottiene l'ID del tag NBT interno.

 Usato per determinare quale tipo di NBT è memorizzato (in un elenco per esempio)

 Restituisce: `ID del tag NBT che questi dati rappresentano.`

Tipo restituito: byte

```zenscript
["Ciao", "Mondo", "!"].getId();
```

### getString

Ottiene la rappresentazione della stringa del tag INBT interno

 Restituisce: `Stringa che rappresenta l'INBT interno di questo IData.`

Tipo di ritorno: Stringa

```zenscript
["Ciao", "Mondo", "!"].getString();
```

### rimuovi

Rimuove il [crafttweaker.api.data.IData](/vanilla/api/data/IData) memorizzato all'indice dato. Restituisce: `Il [crafttweaker.api.data.IData](/vanilla/api/data/IData) che è stato rimosso`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | L'indice (0-basato) |


### imposta

Imposta l'elemento all'indice fornito al valore dato Restituisce: `Il valore sostituito`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].set(0, "Bye");
```

| Parametro | Tipo                                                   | Descrizione                      |
| --------- | ------------------------------------------------------ | -------------------------------- |
| indice    | int                                                    | L'indice da impostare (0-basato) |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il nuovo valore                  |



## Proprietà

| Nome       | Tipo | Ha Getter | Ha Setter |
| ---------- | ---- | --------- | --------- |
| dimensione | int  | vero      | falso     |

## Caster

| Tipo Risultato                                                                   | Implicito |
| -------------------------------------------------------------------------------- | --------- |
| Elenco&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt; | vero      |

