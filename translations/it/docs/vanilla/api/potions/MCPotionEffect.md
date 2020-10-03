# MCPotionEffect

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Interfacce Implementate
MCPotionEffect implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### isReady

Restituisce un booleano

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| duration  | int  | Nessuna descrizione fornita |
| amplifier | int  | Nessuna descrizione fornita |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| Parameter | Type | Description                 | IsOptional | Default Value |
| --------- | ---- | --------------------------- | ---------- | ------------- |
| duration  | int  | Nessuna descrizione fornita | false      | null          |
| amplifier | int  | Nessuna descrizione fornita | true       | 0             |



## Properties

| Name          | Type                                                                    | Ha Getter | Ha Setter |
| ------------- | ----------------------------------------------------------------------- | --------- | --------- |
| commandString | String                                                                  | true      | false     |
| curativeItems | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | true      | false     |
| displayName   | String                                                                  | true      | false     |
| isBeneficial  | boolean                                                                 | true      | false     |
| isInstant     | boolean                                                                 | true      | false     |
| liquidColor   | int                                                                     | true      | false     |
| name          | String                                                                  | true      | false     |

