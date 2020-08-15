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

## Costruttori
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| Parametro | Tipo                                                          | Descrizione                 | IsOptional | Valore Predefinito |
| --------- | ------------------------------------------------------------- | --------------------------- | ---------- | ------------------ |
| elenco    | Lista<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | Nessuna descrizione fornita | vero       | null               |



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


### cancella

Rimuove ogni elemento nella lista

```zenscript
["Ciao", "Mondo", "!"].clear();
```

### ottieni

Recupera il [crafttweaker.api.data.IData](/vanilla/api/data/IData) memorizzato all'indice dato.

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Ciao", "Mondo", "!"].get(index as int);
["Ciao", "Mondo", "!"].get(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | L'indice (0-basato) |


### rimuovi

Rimuove il [crafttweaker.api.data.IData](/vanilla/api/data/IData) memorizzato all'indice dato.

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | L'indice (0-basato) |


### imposta

Imposta l'elemento all'indice fornito al valore dato

Restituisce [crafttweaker.api.data.IData](/vanilla/api/data/IData)

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

| Tipo Risultato                                                | Implicito |
| ------------------------------------------------------------- | --------- |
| Lista<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | vero      |

