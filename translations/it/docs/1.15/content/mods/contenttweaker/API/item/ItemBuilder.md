# ItemBuilder

The item builder is to... build items (surprise!) <p> It allows you to set various properties that will change how the item behaves and what it can do. È anche possibile utilizzare [mods.contenttweaker.item.ItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) per passare a un costruttore più specializzato, se ce ne sono. <p> Per dire a CoT che vuoi che l'elemento appaia in ingame devi chiamare [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) e specificare un percorso di localizzazione delle risorse valido.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.item.ItemBuilder
```

## Interfacce Implementate
ItemBuilder implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors
Creates a new ItemBuilder. Ricorda che questo _non_ creerà un nuovo blocco nel gioco, è necessario chiamare [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) per questo.
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

| Parametro        | Tipo   | Descrizione                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | String | Il percorso della risorsa per dare questo blocco |


### withItemGroup

Allows you to set the item group that this item will appear in. By default, items will land in `misc`

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withItemGroup(itemGroup as mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| Parametro | Tipo                                                                              | Descrizione                               |
| --------- | --------------------------------------------------------------------------------- | ----------------------------------------- |
| itemGroup | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | The item group this item should appear in |


### withMaxDamage

Ti permette di impostare il danno massimo per questo oggetto.<br/> Sii avvertito che questo non può essere usato in combinazione con [mod. ontenttweaker.item.ItemBuilder#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)!

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxDamage(maxDamage as int);
new ItemBuilder().withMaxDamage(250);
```

| Parametro | Tipo | Descrizione            |
| --------- | ---- | ---------------------- |
| maxDamage | int  | The maximum stack size |


### withMaxStackSize

Permette di impostare la dimensione massima dello stack per questo oggetto.<br/> Sii avvertito che questo non può essere usato in combinazione con [mod. ontenttweaker.item.ItemBuilder#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)!

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxStackSize(maxStackSize as int);
new ItemBuilder().withMaxStackSize(16);
```

| Parametro    | Tipo | Descrizione            |
| ------------ | ---- | ---------------------- |
| maxStackSize | int  | The maximum stack size |


### withNoRepair

Sets that this item may not be repaired in an anvil Returns: `This builder, used for method chaining`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withNoRepair();
```

### withRarity

Allows you to set the item's rarity

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo restituito: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| Parametro | Tipo   | Descrizione |
| --------- | ------ | ----------- |
| rarity    | String | La rarità   |


### withType

Sets the specific type of this item. Dopo aver chiamato questo metodo il contesto del builder passerà al builder del tipo più fornito. Questo significa che i metodi di questo builder non saranno più disponibili, quindi ogni proprietà che desideri impostare dovrà essere impostata prima di chiamare questo metodo. Returns: `A builder with the given item.`

Tipo di restituzione: T

```zenscript
new ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.ItemBuilderTool>();
```

| ParameterName | Limiti                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------- |
| T             | [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |


