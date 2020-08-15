# ItemBuilder

Il costruttore di oggetti è a... costruire oggetti (sorpresa!) <p> Ti permette di impostare varie proprietà che cambieranno come si comporta l'elemento e cosa può fare. È anche possibile utilizzare [mods.contenttweaker.item.ItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) per passare a un costruttore più specializzato, se ce ne sono. <p> Per dire a CoT che vuoi che l'elemento appaia ingame devi chiamare [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) e specificare un percorso di localizzazione delle risorse valido.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.item.ItemBuilder
```

## Interfacce Implementate
ItemBuilder implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Costruttori
Crea un nuovo ItemBuilder. Ricorda che questo _non_ creerà un nuovo blocco nel gioco, è necessario chiamare [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) per questo.
```zenscript
new mods.contenttweaker.item.ItemBuilder();
```

## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
new ItemBuilder().build(resourceLocation as String);
new ItemBuilder().build("my_awesome_block");
```

| Parametro        | Tipo    | Descrizione                                      |
| ---------------- | ------- | ------------------------------------------------ |
| resourceLocation | Stringa | Il percorso della risorsa per dare questo blocco |


### withItemGroup

Ti permette di impostare il gruppo di elementi in cui apparirà questo elemento. Per impostazione predefinita, gli elementi atterreranno in `misc`

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withItemGroup(itemGroup as mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| Parametro | Tipo                                                                              | Descrizione                                                    |
| --------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| itemGroup | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Il gruppo di elementi in cui questo elemento dovrebbe apparire |


### withMaxDamage

Permette di impostare il danno massimo per questo oggetto.<br/> Attenzione che questo non può essere usato in combinazione con [mods.contenttweaker.item.ItemBuilder#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)!

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxDamage(maxDamage as int);
new ItemBuilder().withMaxDamage(250);
```

| Parametro | Tipo | Descrizione                       |
| --------- | ---- | --------------------------------- |
| maxDamage | int  | La dimensione massima dello stack |


### withMaxStackSize

Permette di impostare la dimensione massima dello stack per questo oggetto.<br/> Attenzione che questo non può essere usato in combinazione con [mods.contenttweaker.item.ItemBuilder#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)!

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxStackSize(maxStackSize come int);
new ItemBuilder().withMaxStackSize(16);
```

| Parametro    | Tipo | Descrizione                       |
| ------------ | ---- | --------------------------------- |
| maxStackSize | int  | La dimensione massima dello stack |


### withNoRepair

Imposta che questo oggetto non può essere riparato in un'incudine Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withNoRepair();
```

### withRarità

Ti permette di impostare la rarità dell'oggetto

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| Parametro | Tipo    | Descrizione |
| --------- | ------- | ----------- |
| rarità    | Stringa | La rarità   |


### withType

Imposta il tipo specifico di questo elemento. Dopo che questo metodo è chiamato il contesto del costruttore passerà al costruttore di tipo più fornito. Ciò significa che i metodi di questo costruttore non saranno più disponibili, quindi tutte le proprietà che si desidera impostare dovrebbero essere impostate prima di chiamare questo metodo. Restituisce: `Un costruttore con l'elemento specificato.`

Tipo di restituzione: T

```zenscript
new ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.ItemBuilderTool>();
```

| Nome | Limiti                                                                                    |
| ---- | ----------------------------------------------------------------------------------------- |
| T    | [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |


