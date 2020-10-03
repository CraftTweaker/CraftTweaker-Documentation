# MCResourceLocation

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## Interfacce Implementate
MCResourceLocation implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
```zenscript
new crafttweaker.api.util.MCResourceLocation(namespace as String, path as String);
```
| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| namespace | String | Nessuna descrizione fornita |
| path      | String | Nessuna descrizione fornita |



## Methods
### confrontaA

Return type: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ as crafttweaker.api.util.MCResourceLocation);
```

| Parameter        | Type                                                                             | Description                 |
| ---------------- | -------------------------------------------------------------------------------- | --------------------------- |
| p_compareTo_1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Nessuna descrizione fornita |


### equals

Return type: boolean

```zenscript
myMCResourceLocation.equals(altro come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| other     | Object | Nessuna descrizione fornita |


### getNamespace

Return type: String

```zenscript
myMCResourceLocation.getNamespace();
```

### getPath

Return type: String

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

Return type: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

Return type: String

```zenscript
myMCResourceLocation.toString();
```


## Properties

| Name          | Type   | Ha Getter | Ha Setter |
| ------------- | ------ | --------- | --------- |
| commandString | String | true      | false     |
| namespace     | String | true      | false     |
| path          | String | true      | false     |

