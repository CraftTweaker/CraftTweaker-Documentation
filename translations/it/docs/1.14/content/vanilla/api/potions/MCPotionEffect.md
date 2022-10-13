# MCPotionEffect

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Interfacce Implementate
MCPotionEffect implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### isReady

Restituisce un booleano

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| duration  | int  | Nessuna descrizione fornita |
| amplifier | int  | Nessuna descrizione fornita |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| Parametro | Tipo | Descrizione                 | IsOptional | Default Value |
| --------- | ---- | --------------------------- | ---------- | ------------- |
| duration  | int  | Nessuna descrizione fornita | no         | null          |
| amplifier | int  | Nessuna descrizione fornita | sì         | 0             |



## Proprietà

| Nome          | Tipo                                                                    | Ha Getter | Ha Setter |
| ------------- | ----------------------------------------------------------------------- | --------- | --------- |
| commandString | String                                                                  | sì        | no        |
| curativeItems | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | sì        | no        |
| displayName   | String                                                                  | sì        | no        |
| isBeneficial  | boolean                                                                 | sì        | no        |
| isInstant     | boolean                                                                 | sì        | no        |
| liquidColor   | int                                                                     | sì        | no        |
| nome          | String                                                                  | sì        | no        |

