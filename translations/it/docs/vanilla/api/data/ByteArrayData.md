# ByteArrayData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Interfacce Implementate
ByteArrayData implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Costruttori
```zenscript
new crafttweaker.api.data.ByteArrayData(internal as byte[]);
```
| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| interno   | byte[] | Nessuna descrizione fornita |



## Metodi
### aggiungi

```zenscript
[4, 1, 2].add(valore come crafttweaker.api.data.IData);
[4, 1, 2].add("oggi");
```

| Parametro | Tipo                                                   | Descrizione                        |
| --------- | ------------------------------------------------------ | ---------------------------------- |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il valore da aggiungere alla lista |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "beautiful");
```

| Parametro | Tipo                                                   | Descrizione                                                                                 |
| --------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| indice    | int                                                    | L'indice a cui aggiungere. Gli elementi successivi verranno spostati di un indice superiore |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il valore da aggiungere alla lista                                                          |


### cancella

Rimuove ogni elemento nella lista

```zenscript
[4, 1, 2].clear();
```

### ottieni

Recupera il [crafttweaker.api.data.IData](/vanilla/api/data/IData) memorizzato all'indice dato.

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(index as int);
[4, 1, 2].get(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | L'indice (0-basato) |


### rimuovi

Rimuove il [crafttweaker.api.data.IData](/vanilla/api/data/IData) memorizzato all'indice dato.

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(index as int);
[4, 1, 2].remove(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | L'indice (0-basato) |


### imposta

Imposta l'elemento all'indice fornito al valore dato

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| Parametro | Tipo                                                   | Descrizione                      |
| --------- | ------------------------------------------------------ | -------------------------------- |
| indice    | int                                                    | L'indice da impostare (0-basato) |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Il nuovo valore                  |



## Proprietà

| Nome       | Tipo | Ha Getter | Ha Setter |
| ---------- | ---- | --------- | --------- |
| dimensione | int  | vero      | falso     |

