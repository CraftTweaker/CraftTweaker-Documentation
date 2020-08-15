# Enfrentar

La interfaz Ifroning te permite obtener las instrucciones de [IBlockPos](/Vanilla/World/IBlockPos/) posibles.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.world.IFacing;`

## Enumeraciones

La interfaz frontal tiene 7 métodos estáticos, cada uno devolviendo la dirección mencionada.  
El último toma la dirección como entrada de cadena (por ejemplo, `"NORTH"`)

```zenscript
crafttweaker.world.Facing.north()
crafttweaker.world.Facing.east()
crafttweaker.world.Facing.south()
crafttweaker.world.Facing.west()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.up()


crafttweaker.world.Facing.fromString(String name);
```

## ZenGetters/ZenMethods sin parámetros

| ZenGetter | Método     | Tipo de devolución |
| --------- | ---------- | ------------------ |
| nombre    | getName()  | cadena             |
| rotateY   | rotateY()  | Enfrentar          |
| opuesto   | opuesto () | Enfrentar          |

## Otros métodos

### Comparando dos caras

¡Puedes comparar dos caras usando el estándar comparando a los Operadores `== ! < > <= >=`  
Alternativamente, puede usar la función, aunque la función devuelve un int que es 0 si son iguales.

```zenscript
//Devuelve verdadero o falso
facingOne == facingTwo;

//Devuelve 0 si son iguales
facingOne.compare(facingTwo);
```