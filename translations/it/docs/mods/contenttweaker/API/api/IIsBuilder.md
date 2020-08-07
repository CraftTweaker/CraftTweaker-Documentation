# IIsBuilder

Denota tutto ciò che è un costruttore. Che ti aspettavi?

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Quindi devi avere questa mod installata se vuoi usare questa funzionalità.

## Importare la classe
Potrebbe essere necessario che tu importi il pacchetto se incontri dei problemi (come lanciare un Insieme), quindi meglio essere sicuri piuttosto che in colpa ed aggiungere l'importazione.
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



