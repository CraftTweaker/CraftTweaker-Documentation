# Representación de pollos

La representación de pollo es una plantilla de lo que hará su pollo.  
Por defecto, sólo existirá y colocará el huevo que le dio como parámetro inicial.  
Puedes cambiar este comportamiento para permitir mejores pollos modificando las propiedades dadas.

## Importar la clase

¿Quieres importar la clase? Aquí te ves:

```zenscript
importar mods.contenttweaker.Chicken;
```

## Registrando el pollo

Después de haber configurado su representación de pollo como lo que quiere que sea, la parte más importante es registrarla.  
Tenga cuidado, ya que cualquier cambio realizado en esta plantilla después del registro seguirá teniendo efecto. así que deberías crear una nueva representación de pollo para cada pollo que quieras tener.

## Propiedades de Zeng

Puede cambiar o obtener el valor actual de las propiedades por `objeto. ame = newValue` o usando los métodos `object.setName(newValue);`

Ejemplo:

```zenscript
chickenRep.layItem = <minecraft:iron_ingot>;
print(chickenRep.layItem.displayName);
chickenRep.setLayItem(<minecraft:gold_ingot>);
print(chickenRep.getLayItem().displayName);
```

| nombre                | tipo                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------- |
| nombre                | cadena                                                                                    |
| layItem               | [IItemStack](/Vanilla/Items/IItemStack/)                                                  |
| soltar elemento       | [IItemStack](/Vanilla/Items/IItemStack/)                                                  |
| Color de fondo        | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                                |
| foregroundColor       | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                                |
| ubicación de texto    | [Ubicación CTResources](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| spawnTipo             | cadena                                                                                    |
| Coeficiente de estrés | flotante                                                                                  |
| uno padre             | [Ubicación CTResources](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| parentTwo             | [Ubicación CTResources](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |