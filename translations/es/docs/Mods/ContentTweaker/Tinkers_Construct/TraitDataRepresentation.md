# Representación de datos de rasgo

Una representación de datos de rasgo de rasgo representa los datos de Construct Trait de un Tinker y es ItemBound.  
Puede obtener tal objeto de un objeto [Trait](/Mods/ContentTweaker/Tinkers_Construct/Trait/) existente suministrando un ItemStack al método `getData`.

## Importar la clase

Podría ser necesario que importes la clase si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar mods.contenttweaker.tconstruct.TraitDataRepresentation`

## ZenGetter y ZenSetter

| Nombre          | ZenGetter | Ajuste | Tipo   |
| --------------- | --------- | ------ | ------ |
| color           | ✔         | ✔      | int    |
| actual          | ✔         | ✔      | int    |
| extraInfo       | ✔         | ✔      | cadena |
| identifier      | ✔         | ✔      | cadena |
| nivel           | ✔         | ✔      | int    |
| máx             | ✔         | ✔      | int    |
| info            | ✔         |        | cadena |
| cadena de color | ✔         |        | cadena |

## Métodos

```zenscript
//Hace lo mismo que myTraitData.info;
myTraitData.calcInfo();

//Does lo mismo que myTraitData.colorString;
myTraitData.getColorString();
```