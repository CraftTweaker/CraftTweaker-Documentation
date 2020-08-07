# BlockBuilderBasic

Questo costruttore costruisce il tipo di blocco che è usato per impostazione predefinita in [mods.contenttweaker.block.basicBlocBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) Questo costruttore non offre alcuna proprietà speciale da impostare, puoi solo costruirlo.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Quindi devi avere questa mod installata se vuoi usare questa funzionalità.

## Importare la classe
Potrebbe essere necessario che tu importi il pacchetto se incontri dei problemi (come lanciare un Insieme), quindi meglio essere sicuri piuttosto che in colpa ed aggiungere l'importazione.
```zenscript
mods.contenttweaker.block.basic.BlockBuilderBasic
```

## Interfacce Implementate
BlockBuilderBasic implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parametro        | Tipo    | Descrizione                                      |
| ---------------- | ------- | ------------------------------------------------ |
| resourceLocation | Stringa | Il percorso della risorsa per dare questo blocco |



