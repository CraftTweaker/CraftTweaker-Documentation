# MCPotionEffect

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Interfacce Implementate
MCPotionEffect implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### isReady

Restituisce un booleano

```zenscript
myMCPotionEffect.isReady(durata come int, amplificatore come int);
```

| Parametro     | Tipo | Descrizione                 |
| ------------- | ---- | --------------------------- |
| durata        | int  | Nessuna descrizione fornita |
| amplificatore | int  | Nessuna descrizione fornita |


### newInstance

Restituisce [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(durata come int, amplificatore come int);
```

| Parametro     | Tipo | Descrizione                 | IsOptional | Valore Predefinito |
| ------------- | ---- | --------------------------- | ---------- | ------------------ |
| durata        | int  | Nessuna descrizione fornita | falso      | null               |
| amplificatore | int  | Nessuna descrizione fornita | vero       | 0                  |



## Proprietà

| Nome          | Tipo                                                                     | Ha Getter | Ha Setter |
| ------------- | ------------------------------------------------------------------------ | --------- | --------- |
| commandString | Stringa                                                                  | vero      | falso     |
| curativeItems | Lista<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | vero      | falso     |
| displayName   | Stringa                                                                  | vero      | falso     |
| isBeneficial  | boolean                                                                  | vero      | falso     |
| isInstant     | boolean                                                                  | vero      | falso     |
| liquidColor   | int                                                                      | vero      | falso     |
| nome          | Stringa                                                                  | vero      | falso     |

