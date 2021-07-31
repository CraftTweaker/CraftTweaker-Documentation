# MCToolType

A Tooltype is used to identify what kind of blocks a tool can mine, or inversely, what kind of tool is required to mine a given block.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.item.MCToolType
```

## Interfacce Implementate
MCToolType implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
Constructs a ToolType object. If one with the given name already exists, they will internally point to the same toolType. Otherwise, a new one with the name is created (The same holds true for Brackets as well!)
```zenscript
new mods.contenttweaker.item.MCToolType(name as String);
new mods.contenttweaker.item.MCToolType("pickaxe");
```
| Parameter | Type   | Description         |
| --------- | ------ | ------------------- |
| name      | String | The name to be used |



## Methods
### getName

Gets the name of this toolType. Il nome che viene utilizzato nell'espressione angolare dopo `<tooltype:`

Return type: String

```zenscript
<tooltype:pickaxe>.getName();
```

### hashCode

Returns the object's hash code

Return type: int

```zenscript
<tooltype:pickaxe>.hashCode();
```

### toString

Get the string representation of this type. Is different from commandString!

Return type: String

```zenscript
<tooltype:pickaxe>.toString();
```


## Properties

| Name          | Type   | Ha Getter | Ha Setter |
| ------------- | ------ | --------- | --------- |
| commandString | String | true      | false     |
| name          | String | true      | false     |

## Operators
### EQUALS

Compares if two given MCToolType objects are equal

```zenscript
<tooltype:pickaxe> == o as Object
<tooltype:pickaxe> == new MCToolType("pickaxe")
```

| Parameter | Type   | Description      |
| --------- | ------ | ---------------- |
| o         | Object | The other object |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | false     |

