# Herramienta de construcción

Un constructor especial que te permite crear objetos que pueden ser usados como herramientas. Debes haber establecido el daño máximo del objeto antes de cambiar a este constructor. <p> Tiene métodos especiales que te permiten establecer el nivel de minería para varios tipos de herramientas, así como el daño de ataque.

Esta clase fue añadida por un mod con mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.item.tool.Herramienta de construcción
```

## Interfaces implementadas
ItemBuilderTool implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Métodos
### construir

Instruye CoT para construir lo que se supone que este constructor está construyendo.

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Parámetro            | Tipo   | Descripción                              |
| -------------------- | ------ | ---------------------------------------- |
| ubicacin del recurso | Cadena | La ruta de recursos para dar este bloque |


### sin daño de ataque

Te permite establecer el bonus de daño de ataque que obtienes al sostener este objeto

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.item.tool.Herramienta de construcción](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackDamage as float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Parámetro      | Tipo     | Descripción                 |
| -------------- | -------- | --------------------------- |
| daño de ataque | flotante | El daño adicional de ataque |


### sin velocidad de ataque

Te permite establecer el bonus de velocidad de ataque que obtienes cuando sostienes este objeto.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos.`

Tipo de retorno: [mods.contenttweaker.item.tool.Herramienta de construcción](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attackSpeed as double);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| Parámetro           | Tipo  | Descripción         |
| ------------------- | ----- | ------------------- |
| velocidad de ataque | doble | Velocidad de ataque |


### con el coste de durabilidad

Te permite establecer la cantidad de daño que recibirá este objeto al golpear enemigos. Por defecto es `0`

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.item.tool.Herramienta de construcción](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| Parámetro            | Tipo | Descripción                                 |
| -------------------- | ---- | ------------------------------------------- |
| coste de durabilidad | int  | Los puntos de daño que recibirá este objeto |


### withDurabilityCostMining

Te permite establecer la cantidad de daño que este objeto recibirá al minar bloques. Por defecto es `0`

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.item.tool.Herramienta de construcción](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Parámetro                 | Tipo | Descripción                                 |
| ------------------------- | ---- | ------------------------------------------- |
| durabilidad de la minería | int  | Los puntos de daño que recibirá este objeto |


### withToolType

Le permite añadir un tipo de herramienta a esta herramienta. Puede especificar el tipo, el nivel de minería y, opcionalmente, la velocidad de minería cuando este tipo también se golpee.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.item.tool.Herramienta de construcción](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
nuevo ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder(). ithMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Parámetro            | Tipo                                                                            | Descripción                                                       | Opcional | Valor por defecto |
| -------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------- | -------- | ----------------- |
| tipo de herramienta  | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | El tipo de herramienta                                            | falso    | `nulo`            |
| nivel de minería     | int                                                                             | El nivel de minería para este tipo de herramienta                 | falso    | `nulo`            |
| velocidad de minería | flotante                                                                        | Qué tan rápido esta herramienta puede minar bloques del tipo dado | verdad   | `1.0`             |



