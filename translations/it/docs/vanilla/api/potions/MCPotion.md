# MCPozione

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.potion.MCPozione
```

## Interfacce Implementate
MCPozione implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### getNamePrefixed

Ritorna una stringa

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |



## Proprietà

| Nome             | Tipo                                                                                                | Ha Getter | Ha Setter |
| ---------------- | --------------------------------------------------------------------------------------------------- | --------- | --------- |
| commandString    | Stringa                                                                                             | vero      | falso     |
| effetti          | List<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | vero      | falso     |
| hasInstantEffect | boolean                                                                                             | vero      | falso     |

