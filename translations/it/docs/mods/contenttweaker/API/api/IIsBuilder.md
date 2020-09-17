# IIsBuilder

Denota tutto ciò che è un costruttore. Che ti aspettavi?

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.api.IIsBuilder
```

## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
myIIsBuilder.build(resourceLocation as String);
myIIsBuilder.build("my_awesome_block");
```

| Parametro        | Tipo    | Descrizione                                      |
| ---------------- | ------- | ------------------------------------------------ |
| resourceLocation | Stringa | Il percorso della risorsa per dare questo blocco |



