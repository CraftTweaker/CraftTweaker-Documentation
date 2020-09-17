# MapData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.MapData
```

## Interfacce Implementate
MapData implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Costruttori
```zenscript
new crafttweaker.api.data.MapData();
```
```zenscript
new crafttweaker.api.data.MapData(map as crafttweaker.api.data.IData[String]);
```
| Parametro | Tipo                                                           | Descrizione                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| mappa     | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Nessuna descrizione fornita |



## Metodi
### asList

Ottiene una lista<IData> rappresentazione di questo IData, restituisce nulla su qualsiasi cosa tranne [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Restituisce: `null se questo IData non è una lista.`

Tipo di restituzione: Elenco&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
myMapData.asList();
```

### asMap

Ottiene una rappresentazione mappa<String, IData> di questo IData, restituisce nulla su qualsiasi cosa tranne [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Restituisce: `null se questo IData non è una mappa.`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myMapData.asMap();
```

### asString

Ottiene la rappresentazione stringa di questo IData

 Restituisce: `Stringa che rappresenta questo IData (valore e tipo).`

Tipo di ritorno: Stringa

```zenscript
myMapData.asString();
```

### contiene

Controlla se la mappa contiene la chiave data.

 Restituisce: `Vero se la mappa contiene la chiave`

Tipo restituito: booleano

```zenscript
myMapData.contains(key as String);
myMapData.contains("Hello");
```

| Parametro | Tipo    | Descrizione           |
| --------- | ------- | --------------------- |
| chiave    | Stringa | La chiave per cercare |



Controlla se questo IData contiene un altro IData, usato principalmente nelle sottoclassi di [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), è lo stesso di un controllo uguale su altri tipi di IData

 Restituisce: `true se gli IData forniti sono contenuti in questo IData`

Tipo restituito: booleano

```zenscript
myMapData.contains(dati come crafttweaker.api.data.IData);
myMapData.contains("Display");
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
myMapData.copy();
```

### ottieni

Recupera il valore associato alla chiave

 Restituisce: `Il valore se presente, null altrimenti`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.get(key as String);
myMapData.get("Hello");
```

| Parametro | Tipo    | Descrizione           |
| --------- | ------- | --------------------- |
| chiave    | Stringa | La chiave per cercare |


### getId

Ottiene l'ID del tag NBT interno.

 Usato per determinare quale tipo di NBT è memorizzato (in un elenco per esempio)

 Restituisce: `ID del tag NBT che questi dati rappresentano.`

Tipo restituito: byte

```zenscript
myMapData.getId();
```

### getString

Ottiene la rappresentazione della stringa del tag INBT interno

 Restituisce: `Stringa che rappresenta l'INBT interno di questo IData.`

Tipo di ritorno: Stringa

```zenscript
myMapData.getString();
```

### unisci

Unisce questa mappa e l'altra mappa. Se le voci di questa mappa e l'altra mappa condividono i valori si tenta di essere uniti. Se ciò non funziona, viene utilizzato il valore dall'altra mappa.

 Restituisce: `Questa mappa, dopo la fusione`

Tipo di restituzione: [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)

```zenscript
myMapData.merge(other as crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| Parametro | Tipo                                                       | Descrizione    |
| --------- | ---------------------------------------------------------- | -------------- |
| altri     | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | L'altra mappa. |


### metti

Aggiunge imposta il valore per la chiave data o crea una nuova voce se non esisteva prima.

 Restituisce: `Il valore precedente se presente, null altrimenti`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.put(key as String, value as crafttweaker.api.data.IData);
myMapData.put("Hello", "Goodbye");
```

| Parametro | Tipo                                                   | Descrizione                            |
| --------- | ------------------------------------------------------ | -------------------------------------- |
| chiave    | Stringa                                                | La chiave per cui impostare il valore. |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il valore da impostare.                |


### putAll

Aggiunge tutte le voci dalla mappa data a questa. Puoi sovrascrivere le chiavi esistenti.

```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Goodbye", Item: "Bedrock"});
```

| Parametro | Tipo                                                           | Descrizione                                |
| --------- | -------------------------------------------------------------- | ------------------------------------------ |
| mappa     | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Le altre voci da aggiungere a questa mappa |


### rimuovi

Rimuove la voce con la chiave data dalla mappa

```zenscript
myMapData.remove(key as String);
myMapData.remove("Somewhere");
```

| Parametro | Tipo    | Descrizione                       |
| --------- | ------- | --------------------------------- |
| chiave    | Stringa | La chiave della voce da rimuovere |



## Proprietà

| Nome       | Tipo                              | Ha Getter | Ha Setter |
| ---------- | --------------------------------- | --------- | --------- |
| isEmpty    | boolean                           | vero      | falso     |
| keySet     | Imposta&lt;String&gt; | vero      | falso     |
| dimensione | int                               | vero      | falso     |

## Operatori
### AGGIUNGI

Aggiunge tutte le voci dagli IDati dati a questa voce

```zenscript
myMapData + dati come crafttweaker.api.data.IData
```

| Parametro | Tipo                                                   | Descrizione                 |
| --------- | ------------------------------------------------------ | --------------------------- |
| dati      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Nessuna descrizione fornita |

## Caster

| Tipo Risultato                                                 | Implicito |
| -------------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | vero      |

