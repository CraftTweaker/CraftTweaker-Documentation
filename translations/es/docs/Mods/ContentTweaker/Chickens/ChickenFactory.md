# ChickenFactory

La ChickenFactory te permite crear [pollos personalizados](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) para el juego.  
Observa que este módulo es una característica añadida al mod [de pollos por setycz](https://minecraft.curseforge.com/projects/chickens), por lo que este módulo sólo está disponible si se carga ese mod.

## Importando el paquete

```zenscript
import mods.contenttweaker.ChickenFactory;
```

## Creando pollos

En primer lugar, necesitarás crear una [Representación de Pollo](/Mods/ContentTweaker/Chickens/ChickenRepresentation/).  
Esta es esencialmente una plantilla vacía de lo que se convertirá en su pollo.  
Este método devuelve un objeto de [representación de pollo](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) , tomando los siguientes parámetros:

- Nombre de la cadena: el nombre de la entidad del pollo, utilizado para los modelos y el registro de la entidad.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color: El color, el pollo tendrá.
- [ItemStack](/Vanilla/Items/IItemStack/) layedItem: El elemento que el pollo se pondrá más adelante.

```zenscript
ChickenFactory.createChicken(String name, CTColor color, ItemStack item);
```

## Ejemplo de script

```zenscript
#loader contenttweaker
#modloaded chickens

import mods.contenttweaker.ChickenFactory;
import mods.contenttweaker.Color;


val chickenRepresentation = ChickenFactory.createChicken("bedrocked_chicken", Color.fromInt(0xffffff), <item:minecraft:bedrock>);

chickenRepresentation.setForegroundColor(Color.fromInt(0xabcdef));

chickenRepresentation.register();
```