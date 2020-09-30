# MCPotion

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.potion.MCPotion
```

## Interfacce Implementate
MCPotion implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### getNamePrefixed

Ritorna una stringa

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |



## Properties

| Name             | Type                                                                                                | Ha Getter | Ha Setter |
| ---------------- | --------------------------------------------------------------------------------------------------- | --------- | --------- |
| commandString    | String                                                                                              | true      | false     |
| effects          | List<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | true      | false     |
| hasInstantEffect | boolean                                                                                             | true      | false     |

