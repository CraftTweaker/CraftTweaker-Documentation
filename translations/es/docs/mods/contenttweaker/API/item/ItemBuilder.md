# Constructor de objetos

El constructor de objetos es... construye objetos (¡sorpresa!) <p> Le permite establecer varias propiedades que cambiarán cómo se comporta el objeto y qué puede hacer. También puedes usar [mods.contenttweaker.item.ItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) para cambiar a un constructor más especializado, si existe ninguno. <p> Para decirle a CoT que quieres que el elemento aparezca en el juego, necesitas llamar a [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) y especificar una ruta de ubicación de recurso válida.

Esta clase fue añadida por un mod con mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.item.ItemBuilder
```

## Interfaces implementadas
ItemBuilder implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructores
Crea un nuevo ItemBuilder. Recuerda que esto _no_ creará un nuevo bloque en el juego, necesitas llamar a [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) para eso.
```zenscript
nuevo mods.contenttweaker.item.ItemBuilder();
```

## Métodos
### construir

Instruye CoT para construir lo que se supone que este constructor está construyendo.

```zenscript
new ItemBuilder().build(resourceLocation as String);
new ItemBuilder().build("my_awesome_block");
```

| Parámetro            | Tipo   | Descripción                              |
| -------------------- | ------ | ---------------------------------------- |
| ubicacin del recurso | Cadena | La ruta de recursos para dar este bloque |


### withItemGroup

Le permite establecer el grupo de elementos en el que aparecerá este elemento. Por defecto, los artículos aterrizarán en `misc`

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withItemGroup(itemGroup as mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| Parámetro          | Tipo                                                                              | Descripción                                                 |
| ------------------ | --------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| grupo de elementos | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | El grupo de artículos en el que este elemento debe aparecer |


### con el máximo daño

Te permite establecer el daño máximo para este objeto.<br/> Tenga en cuenta que esto no se puede usar en combinación con [mods. ontenttweaker.item.ItemBuilder#withMaxStackSize](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)!

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxDamage(maxDamage as int);
new ItemBuilder().withMaxDamage(250);
```

| Parámetro | Tipo | Descripción              |
| --------- | ---- | ------------------------ |
| maxDamage | int  | Tamaño máximo de la pila |


### con MaxStackSize

Le permite establecer el tamaño máximo de la pila para este elemento.<br/> Tenga en cuenta que esto no se puede usar en combinación con [mods. ontenttweaker.item.ItemBuilder#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)!

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withMaxStackSize(maxStackSize as int);
new ItemBuilder().withMaxStackSize(16);
```

| Parámetro    | Tipo | Descripción              |
| ------------ | ---- | ------------------------ |
| maxStackSize | int  | Tamaño máximo de la pila |


### sin reparación

Establece que este objeto no puede ser reparado en un yunque Devuelve: `Este constructor, utilizado para el método de encadenamiento`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withNoRepair();
```

### sin Rareza

Te permite establecer la rareza del objeto

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
new ItemBuilder().withRarity(rarity as String);
new ItemBuilder().withRarity("EPIC");
```

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| rareza    | Cadena | La rareza   |


### withType

Establece el tipo específico de este elemento. Después de que este método se llama el contexto del constructor cambiará al constructor de tipo más proporcionado. Esto significa que los métodos de este constructor ya no estarán disponibles por lo que cualquier propiedad que desee establecer debe establecerse antes de llamar a este método. Devuelve: `Un constructor con el elemento dado.`

Tipo de retorno: T

```zenscript
new ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.ItemBuilderTool>();
```

| Nombre de parámetro | Límites                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------- |
| T                   | [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |


