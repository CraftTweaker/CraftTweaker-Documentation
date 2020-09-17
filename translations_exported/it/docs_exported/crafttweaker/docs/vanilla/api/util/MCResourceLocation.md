# MCResourceLocation

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## Interfacce Implementate
MCResourceLocation implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Costruttori
```zenscript
new crafttweaker.api.util.MCResourceLocation(namespace as String, path as String);
```
| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| namespace | Stringa | Nessuna descrizione fornita |
| percorso  | Stringa | Nessuna descrizione fornita |



## Metodi
### confrontaA

Tipo di restituzione: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ as crafttweaker.api.util.MCResourceLocation);
```

| Parametro        | Tipo                                                                             | Descrizione                 |
| ---------------- | -------------------------------------------------------------------------------- | --------------------------- |
| p_compareTo_1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Nessuna descrizione fornita |


### uguale

Tipo restituito: booleano

```zenscript
myMCResourceLocation.equals(altro come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| altri     | Oggetto | Nessuna descrizione fornita |


### getNamespace

Tipo di ritorno: Stringa

```zenscript
myMCResourceLocation.getNamespace();
```

### getPath

Tipo di ritorno: Stringa

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

Tipo di restituzione: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

Tipo di ritorno: Stringa

```zenscript
myMCResourceLocation.toString();
```


## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | Stringa | vero      | falso     |
| namespace     | Stringa | vero      | falso     |
| percorso      | Stringa | vero      | falso     |

