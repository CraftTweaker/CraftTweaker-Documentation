# Manejador de SoundType

El SoundType Bracket Handler te da acceso a los SoundTypes en el juego. Actualmente los únicos tipos de sonido soportados son:

<details>
    <summary>Haga clic para expandir la lista de tipos</summary>
    <ul>
        <li>Madera</li>
        <li>Terreno</li>
        <li>Planta</li>
        <li>Piedra</li>
        <li>Metal</li>
        <li>Cristal</li>
        <li>Ropa</li>
        <li>Arena</li>
        <li>Nieve</li>
        <li>Escalera</li>
        <li>Yunque</li>
        <li>Slime</li>
    </ul>
</details>

Los tipos de sonido son referenciados en el manejador de Bracket SoundType de esta manera:

```zenscript
<soundtype:name>

<soundtype:wood>
```

Si se encuentra el soundType devolverá un objeto [ISoundTypeDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/).